import { useTranslation } from 'next-i18next';
import '@/app/idiomas/i18n';
import { useEffect, useRef, useState } from 'react';
import '@/app/partials/stock/stock.css';
import { createChart, IChartApi, UTCTimestamp } from 'lightweight-charts';
import { verCotizaciones } from '@/app/services/datosEmpresas';

export default function Stock() {
  const { t } = useTranslation("stock");
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState<string | null>(null);
  const [cotizaciones, setCotizaciones] = useState<
    Array<{ fecha: string; hora: string; cotizacion: number; empresa: string }>
  >([]);
  const [porHora, setPorHora] = useState(true);
  const [tasaCambio, setTasaCambio] = useState<number>(1.55);

  useEffect(() => {
    const fetchCotizaciones = async () => {
      try {
        const data = await verCotizaciones();
        setCotizaciones(data);
        if (data.length > 0) {
          setEmpresaSeleccionada(data[0].empresa);
        }
      } catch (error) {
        console.error('Error al cargar las cotizaciones:', error);
        setCotizaciones([]);
      }
    };

    fetchCotizaciones();
  }, []);

  const cotizacionesFiltradas = empresaSeleccionada
    ? cotizaciones.filter((item) => item.empresa === empresaSeleccionada)
    : cotizaciones;

  const getChartData = () => {
    const cotizacionesAgrupadas: {
      [key: string]: { total: number; count: number; date: UTCTimestamp };
    } = {};

    cotizacionesFiltradas.forEach((item) => {
      const key = porHora ? `${item.fecha}T${item.hora}` : item.fecha;
      const timestamp = porHora
        ? (new Date(`${item.fecha}T${item.hora}`).getTime() / 1000) as UTCTimestamp
        : (new Date(`${item.fecha}T00:00:00`).getTime() / 1000) as UTCTimestamp;

      if (!cotizacionesAgrupadas[key]) {
        cotizacionesAgrupadas[key] = { total: 0, count: 0, date: timestamp };
      }

      cotizacionesAgrupadas[key].total += item.cotizacion * tasaCambio; 
      cotizacionesAgrupadas[key].count += 1;
    });

    return Object.values(cotizacionesAgrupadas)
      .map((entry) => ({ time: entry.date, value: entry.total / entry.count }))
      .sort((a, b) => a.time - b.time);
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: 400,
      layout: { background: { color: '#000' }, textColor: '#FFF' },
      grid: {
        vertLines: { color: '#444' },
        horzLines: { color: '#444' },
      },
      timeScale: {
        timeVisible: porHora,
        tickMarkFormatter: (time: UTCTimestamp) => {
          const date = new Date(time * 1000);
          return porHora
            ? date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })
            : date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
        },
      },
    });

    const lineSeries = chartRef.current.addLineSeries({
      color: 'rgba(255, 255, 255, 0.7)',
    });

    const data = getChartData();
    lineSeries.setData(data);

    const resizeObserver = new ResizeObserver(() => {
      if (chartRef.current) {
        chartRef.current.resize(chartContainerRef.current?.offsetWidth || 0, 655);
      }
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chartRef.current?.remove();
    };
  }, [cotizacionesFiltradas, empresaSeleccionada, porHora]);

  const getUniqueEmpresas = () => {
    const empresas = cotizaciones.map((item) => item.empresa);
    return Array.from(new Set(empresas));
  };

  const handleEmpresaClick = (empresa: string) => {
    setEmpresaSeleccionada(empresa);
  };

  const toggleGrafico = () => {
    setPorHora((prev) => !prev);
  };

  return (
    <>
      <br />
      <div className="stockSection">
        <h2 id="stock">{t('titulo')}</h2>
        <p>{t('explore')}</p>
        <button onClick={toggleGrafico} className="botonGrafico">
          {porHora ? t('dia') : t('hora')}
        </button> 
      </div>

      <div className="stockContainer">
        <div className="marcasContainer">
          {getUniqueEmpresas().map((empresa) => (
            <h3
              key={empresa}
              title={empresa}
              className={`marcaBoton ${empresaSeleccionada === empresa ? 'active' : ''}`}
              onClick={() => handleEmpresaClick(empresa)}
            >
              {empresa.length > 10 ? `${empresa.slice(0, 10)}...` : empresa}</h3>
          ))}
        </div>
        <div ref={chartContainerRef} className="chartContainer"></div>
      </div>
    </>
  );
}
