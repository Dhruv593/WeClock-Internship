import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const orderData = {
  labels: ["Total Order", "Remaining"],
  datasets: [
    {
      data: [81, 19], // 100 - 81 = 19 for remaining
      backgroundColor: ["#fe5b5b", "#fee6e6"], // Original and lighter color
      hoverBackgroundColor: ["#f94a4a", "#fcdbdb"],
    },
  ],
};

const growthData = {
  labels: ["Customer Growth", "Remaining"],
  datasets: [
    {
      data: [22, 78],
      backgroundColor: ["#00b074", "#d9f3ea"],
      hoverBackgroundColor: ["#00a86d", "#d2f4e8"],
    },
  ],
};

const revenueData = {
  labels: ["Total Revenue", "Remaining"],
  datasets: [
    {
      data: [62, 38],
      backgroundColor: ["#2d9cdb", "#e0f0fa"],
      hoverBackgroundColor: ["#2696d3", "#d4eaf7"],
    },
  ],
};

function PieChart() {
  return (
    <div
      className="flex justify-between mt-3"
    >
      <div className="w-[200px] text-center">
        <Doughnut data={orderData} />
        <h4>Total Order</h4>
      </div>
      <div className="w-[200px] text-center">
        <Doughnut data={growthData} />
        <h4>Customer Growth</h4>
      </div>
      <div className="w-[200px] text-center">
        <Doughnut data={revenueData} />
        <h4>Total Revenue</h4>
      </div>
    </div>
  );
}

export default PieChart;
