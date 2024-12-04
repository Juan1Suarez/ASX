"use client";

import { useTranslation } from "next-i18next";
import "@/app/idiomas/i18n";
import "@/app/partials/pieChart/pieChart.css";
import { useEffect, useState } from "react";
import { graficoPieDia, graficoPieMes } from "@/app/services/datosEmpresas"; 
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const { t } = useTranslation("pieChart");
  const [empresasParticipacion, setEmpresasParticipacion] = useState<
    { empresa: string; cotizacion: number }[]
  >([]);
  const [showPercentage, setShowPercentage] = useState(true);
  const [isDailyChart, setIsDailyChart] = useState(true);

  useEffect(() => {
    async function fetchCotizaciones() {
      const data = isDailyChart
        ? await graficoPieDia()
        : await graficoPieMes();
      setEmpresasParticipacion(data);
    }
    fetchCotizaciones();
  }, [isDailyChart]);

  const totalCotizacion = empresasParticipacion.reduce(
    (acc, item) => acc + item.cotizacion,
    0
  );

  const chartData = {
    labels: empresasParticipacion.map((item) => item.empresa),
    datasets: [
      {
        label: "Porcentaje de participación",
        data: empresasParticipacion.map((item) =>
          showPercentage
            ? parseFloat(((item.cotizacion / totalCotizacion) * 100).toFixed(2))
            : item.cotizacion
        ),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF5733", "#DAF7A6"],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.raw;
            return showPercentage
              ? `${label}: ${value}%`
              : `${label}: ${value}`;
          },
        },
      },
    },
  };

  const handleToggleChart = () => {
    setIsDailyChart((prev) => !prev);
  };

  const handleTogglePercentage = () => {
    setShowPercentage((prev) => !prev);
  };

  return (
    <>
      <br></br>
      <div className="pie-chart-container">
        <h2>
          {isDailyChart
            ? t("dia")
            : t("mes")}
        </h2>
        <button className="toggle-chart-button" onClick={handleToggleChart}>
          {isDailyChart
            ? t("mes1")
            : t("dia1")}
        </button>
        <div className="pie-chart" onClick={handleTogglePercentage}>
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>
      <br></br>
    </>
  );
}