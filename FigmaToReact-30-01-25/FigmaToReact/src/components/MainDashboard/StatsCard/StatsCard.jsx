import React from 'react'
import { ArrowUpRight } from "lucide-react";


function StatsCard() {
    const stat = [
        { title: "Total Orders", value: 75, percentage: "4%", image:"assets/images/icons/Orders.png" },
        { title: "Total Delivered", value: 320, percentage: "2%", image:"assets/images/icons/Delivered.png" },
        { title: "Total Canceled", value: 65, percentage: "8%", image:"assets/images/icons/Canceled.png" },
        { title: "Total Revenue", value: "$125K", percentage: "6%", image:"assets/images/icons/Revenue.png" },
      ];
  return (
    <div className="flex flex-row justify-start gap-9 py-6">
      {stat.map((stat, index) => (
        <div
          key={index}
          className="w-[337.24px] h-[172px] bg-white shadow-md rounded-xl flex items-center justify-center p-4"
        >
          {/* Image Section */}
          <div className="flex items-center justify-center bg-green-100 rounded-full">
            <img src={stat.image} alt={stat.title} className="w-[85px] object-contain" />
          </div>

          {/* Text Section */}
          <div className="ml-4">
            <h2 className="text-[46px] font-bold text-[#464255]">{stat.value}</h2>
            <p className="text-[#464255] text-[16px] font-normal">{stat.title}</p>
            <div className="flex items-center text-green-500 mt-1">
              <ArrowUpRight size={14} />
              <span className="text-sm ml-1">{stat.percentage} (30 days)</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCard
