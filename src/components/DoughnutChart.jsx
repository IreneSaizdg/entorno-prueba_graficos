import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title
} from "chart.js";



// Registrar los componentes necesarios para gráficos tipo doughnut
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Simulamos datos como los que tenías antes
    const data = [
      {
        nombre: "Inspección Insectos",
        porcentaje: "20.0000000000000000",
        valor: 1,
      },
      {
        nombre: "Inspección Roedores",
        porcentaje: "50.0000000000000000",
        valor: 2,
      },
      {
        nombre: "Vacio",
        porcentaje: "30.0000000000000000",
        valor: 3,
      }
    ];

    const labels = data.map((item) => item.nombre);
    const values = data.map((item) => Number(item.porcentaje));

    setChartData({
      labels,
      datasets: [
        {
          label: "Porcentaje",
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(103, 103, 103, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(159, 159, 159, 0.6)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, []);

  if (!chartData) return <p>Cargando gráfico de dona...</p>;

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Inspecciones por tipo",
            },
          },
        }}
      />
    </div>
  );
};

export default DoughnutChart;