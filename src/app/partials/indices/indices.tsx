'use client';
import { useTranslation } from 'next-i18next';
import '@/app/idiomas/i18n';
import { useEffect, useRef, useState } from 'react';
import '@/app/partials/indices/indices.css';
import { verIndicesCotizaciones } from '@/app/services/datosEmpresas';
import { createChart } from 'lightweight-charts';

export default function Indices() {
  const { t } = useTranslation("indices");
  const [allCodes, setAllCodes] = useState<string[]>([]);
  const [visibleCodes, setVisibleCodes] = useState<string[]>(['ASX', 'SSE', 'LSE', 'FWB']);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any | null>(null);
  const lineSeriesRef = useRef<{ [key: string]: any }>({}); 

  useEffect(() => {
    const fetchIndicesCotizaciones = async () => {
      try {
        const data = await verIndicesCotizaciones();

        const groupedData: { [key: string]: any[] } = {};
        data.forEach((item: { code: string; fechaDate: string; valor: number }) => {
          const { code, fechaDate, valor } = item;
          const timestamp = new Date(fechaDate).getTime() / 1000;
          if (!groupedData[code]) groupedData[code] = [];
          groupedData[code].push({ time: timestamp, value: valor });
        });

        Object.entries(groupedData).forEach(([code, lineData]) => {
          groupedData[code] = lineData
            .sort((a, b) => a.time - b.time)
            .filter((item, index, self) => index === 0 || item.time !== self[index - 1].time);
        });

        setAllCodes(Object.keys(groupedData));

        createChartWithData(groupedData);
      } catch (error) {
        console.error('Error al cargar las cotizaciones:', error);
      }
    };

    fetchIndicesCotizaciones();
  }, []);

  const createChartWithData = (groupedData: { [key: string]: any[] }) => {
    if (!chartContainerRef.current) return;

    if (!chartRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.offsetWidth,
        height: 400,
        layout: { background: { color: '#000' }, textColor: '#FFF' },
        grid: {
          vertLines: { color: '#444' },
          horzLines: { color: '#444' },
        },
      });
    }

    const colors = [
      'rgba(255, 165, 0, 0.7)',
      'rgba(255, 255, 255, 0.7)',
      'rgba(255, 105, 180, 0.7)',
      'rgba(238, 130, 238, 0.7)',
      'rgba(0, 255, 0, 0.7)',
      'rgba(135, 206, 250, 0.7)',
      'rgba(255, 255, 0, 0.7)',
      'rgba(0, 100, 0, 0.7)',
      'rgba(169, 169, 169, 0.7)',
      'rgba(0, 0, 255, 0.7)',
      'rgba(255, 0, 0, 0.7)',
    ];

    Object.entries(groupedData).forEach(([code, lineData], index) => {
      if (!lineSeriesRef.current[code]) {
        const color = colors[index % colors.length];
        const lineSeries = chartRef.current.addLineSeries({ color, title: code });

        lineSeries.setData(lineData);
        lineSeriesRef.current[code] = lineSeries;

        lineSeries.applyOptions({ visible: visibleCodes.includes(code) });
      }
    });

    chartRef.current.timeScale().fitContent();

    const resizeObserver = new ResizeObserver(() => {
      chartRef.current?.resize(chartContainerRef.current?.offsetWidth || 0, 400);
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chartRef.current?.remove();
      lineSeriesRef.current = {};
    };
  };

  const toggleLineVisibility = (code: string) => {
    setVisibleCodes((prevCodes) => {
      const newVisibleCodes = prevCodes.includes(code)
        ? prevCodes.filter((item) => item !== code)
        : [...prevCodes, code];

      const series = lineSeriesRef.current[code];
      if (series) {
        series.applyOptions({ visible: newVisibleCodes.includes(code) });
      }

      return newVisibleCodes;
    });
  };

  return (
    <>
    <div id="indices" className="indiceContainer">
      <div className="indiceSection">
        <h2>{t('index')}</h2>
        <p>
          {t("index1")}
        </p>
      </div>
      <div className="contentContainer">
        <div className="botonesContainer">
          {allCodes.map((code) => (
            <h3
              key={code}
              className={`indiceBoton ${visibleCodes.includes(code) ? 'selected' : 'tachado'}`}
              onClick={() => toggleLineVisibility(code)}
            >
              {code}
            </h3>
          ))}
        </div>
        <div ref={chartContainerRef} className="chartContainer"></div>
      </div>
    </div>
    <br></br>
    <br></br>
    </>
  );
}