import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Registrar los componentes de Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const BarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Aquí podrías hacer fetch de una API real
    const mockData = [
      {
        nombre: "Inspección Insectos",
        porcentaje: "25.0000000000000000",
        valor: 1,
      },
      {
        nombre: "Inspección Roedores",
        porcentaje: "50.0000000000000000",
        valor: 1,
      },
    ];

    
    // USE EFFECT CON ENDPOINT
    //     useEffect(() => {
    //     fetch("https://tuservidor.com/api/inspecciones")
    //         .then((res) => res.json())
    //         .then((data) => {
    //         const labels = data.map((item) => item.nombre);
    //         const values = data.map((item) => Number(item.porcentaje));

    //         setChartData({
    //             labels,
    //             datasets: [
    //             {
    //                 label: "Porcentaje",
    //                 data: values,
    //                 backgroundColor: "rgba(75, 192, 192, 0.6)",
    //             },
    //             ],
    //         });
    //         });
    //     }, []);

    const labels = mockData.map((item) => item.nombre);
    const values = mockData.map((item) => Number(item.porcentaje));

    setChartData({
      labels,
      datasets: [
        {
          label: "Porcentaje",
          data: values,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, []);

  if (!chartData) return <p>Cargando gráfico...</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value) => value + "%",
              },
            },
          },
        }}
      />
    </div>
  );
};




