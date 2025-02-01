import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      label: "New Customers",
      data: [50, 75, 100, 65, 85, 120, 90],
      backgroundColor: [
        "#ffcc00",
        "#ffcc00",
        "#ffcc00",
        "#ffcc00",
        "#ffcc00",
        "#ffcc00",
        "#ffcc00",
      ],
    },
  ],
};

function CustomerMap() {
  return <Bar data={data} height={250}/>;
}

export default CustomerMap;
