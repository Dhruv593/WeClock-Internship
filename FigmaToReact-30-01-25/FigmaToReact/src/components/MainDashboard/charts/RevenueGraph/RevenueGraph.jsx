import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "2020",
      data: [
        10000, 15000, 12000, 18000, 25000, 38000, 32000, 31000, 27000, 23000,
        25000, 40000,
      ],
      borderColor: "#36a2eb",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.4,
    },
    {
      label: "2021",
      data: [
        12000, 17000, 14000, 20000, 28000, 40000, 35000, 32000, 29000, 26000,
        28000, 45000,
      ],
      borderColor: "#ff6384",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.4,
    },
  ],
};

function RevenueGraph() {
  return <Line data={data} width={700} height={250}/>;
}

export default RevenueGraph;
