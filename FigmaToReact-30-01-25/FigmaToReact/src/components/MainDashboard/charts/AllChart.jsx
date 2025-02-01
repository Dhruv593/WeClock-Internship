import React from "react";
import PieChart from "./PieChart/PieChart";
import OrderChart from "./OrderChart/OrderChart";
import RevenueGraph from "./RevenueGraph/RevenueGraph";
import CustomerMap from "./CustomerMap/CustomerMap";
import { Download } from "lucide-react";

function AllChart() {
  return (
    <div className="flex flex-wrap gap-6 py-3 bg-gray-100">
      <div className="flex gap-9 w-[1460px] h-[327px]">
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md sm:w-1/2">
          <h2 className="text-lg font-semibold">Pie Chart</h2>
          <PieChart />
        </div>
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md sm:w-1/2">
          <div className="flex justify-between mb-6">
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-semibold text-left">Chart Order</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div>
              <button className="flex gap-2 bg-white border-2 p-2 border-[#2d9cdb] text-[#2d9cdb] rounded-xl hover:bg-[#2d9bdb17]">
                <Download /> Save Report
              </button>
            </div>
          </div>
          <OrderChart />
        </div>
      </div>
      <div className="flex gap-9 w-[1460px] mt-4 h-[430px]">
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md w-[972px]">
          <h2 className="text-lg font-semibold mb-3">Total Revenue</h2>
          <RevenueGraph />
        </div>
        <div className="flex flex-col bg-white p-6 rounded-xl shadow-md w-[456px]">
          <h2 className="text-lg font-semibold mb-3">Customer Map</h2>
          <CustomerMap />
        </div>
      </div>
    </div>
  );
}

export default AllChart;
