import React from "react";

function SidebarFooter() {
  return (
    <div className="bg-white rounded-lg text-[#969BA0] flex flex-col space-y-2 p-1 h-[85px] top-[1065px] left-[45px] opacity-100 mt-15">
      <p className="font-bold text-[15px]">
        Sedap Restaurant Admin Dashboard
        <br />
        <p className="font-normal text-[12px]">© 2020 All Rights Reserved</p>
      </p>
      <p className="">
        Made with <span className="text-red-500 text-lg">♥</span> by Peterdraw
      </p>
    </div>
  );
}

export default SidebarFooter;
