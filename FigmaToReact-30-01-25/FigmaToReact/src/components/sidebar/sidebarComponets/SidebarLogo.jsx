import React from "react";
import MainLogo from "../../../../public/assets/images/logo/MainLogo.png";

function SidebarLogo() {
  return (
    <div className="flex items-center mb-15">
      <img
        src={MainLogo}
        alt="Logo"
        className="w-[214px] h-[96px] opacity-100 "
      />
    </div>
  );
}

export default SidebarLogo;
