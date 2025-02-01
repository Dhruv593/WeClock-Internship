import React, { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";

function TitleDashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState(
    "17 April 2020 - 21 May 2020"
  );

  const periods = [
    "17 April 2024 - 21 May 2024",
    "01 June 2024 - 30 June 2024",
    "01 July 2024 - 31 July 2024",
  ];
  return (
    <div className="flex justify-between items-center py-4">
      {/* Left: Dashboard Title and Welcome Message */}
      <div className="space-y-2">
        <h1 className="text-[32px] font-bold text-[#464255]">Dashboard</h1>
        <p className="text-[#A3A3A3]">
          Hi, Samantha. Welcome back to Sedap Admin!
        </p>
      </div>

      {/* Right: Filter Period Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center bg-white shadow-lg rounded-xl px-4 py-3 focus:outline-none"
        >
          <Calendar size={24} className="text-[#2d9cdb]" />
          <div className="ml-2 text-left">
            <p className="text-sm font-medium text-gray-800">Filter Periode</p>
            <p className="text-xs text-gray-500">{selectedPeriod}</p>
          </div>
          <ChevronDown size={20} className="text-gray-600 ml-2" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg py-2 z-10">
            {periods.map((period, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={() => {
                  setSelectedPeriod(period);
                  setIsDropdownOpen(false);
                }}
              >
                {period}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TitleDashboard;
