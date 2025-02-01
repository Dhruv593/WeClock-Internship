import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";

Chart.register(LineElement, PointElement, Tooltip, Legend, CategoryScale, LinearScale);

const data = {
  labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  datasets: [
    {
      label: "Orders",
      data: [120, 200, 450, 300, 250, 500, 400],
      fill: false,  
      borderColor: "#36a2eb",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.4,
    },
  ],
};


function OrderChart() {
  return <Line data={data} width={650} height={200}/>;
}

export default OrderChart
