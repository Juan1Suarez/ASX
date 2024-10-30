"use client"
import { useTranslation } from 'next-i18next';
import '@/app/idiomas/i18n';
import { useState } from "react";
import { Doughnut, Line } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);


export default function Stock() {
  const { t, i18n } = useTranslation();

  const data = {
    labels: [
      'AMD',
      'INTEL',
      'NVIDIA'
    ],
    datasets: [{
      label: 'Industria tecnologica',
      data: [300, 50, 500],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(0,128,0)'
      ],
      hoverOffset: 4
    }]
  };

  const Utils = {
    Hora: function ({count}: any) {
      const horario = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "18:00", "19:00"];
      return horario.slice(0, count);
    }
  };

  const labels = Utils.Hora({count: 7});
const dataLine = {
  labels: labels,
  datasets: [{
    label: 'NVIDIA',
    data: [220, 300, 150, 400, 320, 450, 600],
    fill: false,
    borderColor: 'rgb(0,128,0)',
    tension: 0.1
  },
  {
    label: 'AMD',
    data: [92, 130, 88, 110, 75, 140, 200],
    fill: false,
    borderColor: 'rgb(255, 99, 132)',
    tension: 0.1
  },
  {
    label: 'INTEL',
    data: [53, 45, 60, 35, 70, 25, 80],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  },
]
};
  

  return (
    <>
    <div className='marcasContainer'>
    <h3 className='marcaBoton'>Microsoft</h3>
    <h3 className='marcaBoton'>Meta</h3> 
    <h3 className='marcaBoton'>Visa</h3> 
    <h3 className='marcaBoton'>Walmart</h3> 
    <h3 className='marcaBoton'>Novartis</h3> 
    <h3 className='marcaBoton'>Nvidia</h3> 
    <h3 className='marcaBoton'>TSMC</h3> 
</div>

<div className='chartBoton'>
  <button>Line chart</button>
  <button>Pie chart</button>
  <button>Chart</button>
</div>


      <h1>{t('bienvenida')}</h1>
      <div>You can see the current stock trading market in here.</div>
      <div style={{ width: '400px'}}>
      <Doughnut data={data} />
      <Line data={dataLine}/>
      </div>

    </>
  );
}
