import React from "react";
import { MessageSquareMore, Bell, Settings, Gift } from "lucide-react";


function MenuIcons() {

  const icons = [
    { icon: <Bell size={25} className="text-[#2d9cdb]" />, count: 21, bgColor: "bg-[#d6e5f3]" ,textbgcolor: "bg-[#2d9cdb]" },
    { icon: <MessageSquareMore size={25} className="text-[#2d9cdb]" />, count: 53, bgColor: "bg-[#d6e5f3]" ,textbgcolor: "bg-[#2d9cdb]" },
    { icon: <Gift size={25} className="text-[#5e6c93]" />, count: 15, bgColor: "bg-[#dddee8]"  ,textbgcolor: "bg-[#5e6c93]"},
    { icon: <Settings size={25} className="text-[#ff5b5b]" />, count: 19, bgColor: "bg-[#f5dce0]" ,textbgcolor: "bg-[#ff5b5b]" },
  ];
  return (
    <div
      className="flex gap-6 justify-center items-center"
      style={{ width: "291px", height: "54px", left: "1309px", opacity: 1 }}
    >
      {icons.map((item, index) => (
        <div key={index} className={`relative flex items-center justify-center w-12 h-12 rounded-2xl  ${item.bgColor}`}>
          {item.icon}
          <span className={`absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 text-white text-xs font-normal rounded-full border-2 border-white ${item.textbgcolor}`}>
            {item.count}
          </span>
        </div>
      ))}
    </div>

  );
}

export default MenuIcons;
