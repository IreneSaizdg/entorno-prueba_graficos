import React from "react";
import { BarChart } from "./components/graphic";
import DoughnutChart from "./components/DoughnutChart";



function App() {
  return (
    <div>
      <h1>Gráfico de Inspecciones</h1>
      <BarChart />
      <DoughnutChart />
    </div>
  );
}

export default App;