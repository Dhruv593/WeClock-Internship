import React from "react";
import illustration from "../../../../public/assets/images/logo/illustration.png";

function SidebarBanner() {
  return (
    <div className="bg-[#00B074] rounded-xl shadow-xl p-2 flex items-center justify-center text-white space-y-2 h-[149px] top-[1065px] left-[45px] opacity-100 mt-10">
      <div className="w-[65%]">
        <p>Please, organize your menus through button bellow!</p>
        <div>
          <button className="bg-white text-black w-29 h-9 mt-1 rounded-lg top-[1153px] opacity-100">
            +Add menus
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <img
          src={illustration}
          alt="Illustration"
          className="w-[76.59px] h-[90px] top-[1092px] left-[209px] opacity-100"
        />
      </div>
    </div>
  );
}

export default SidebarBanner;
