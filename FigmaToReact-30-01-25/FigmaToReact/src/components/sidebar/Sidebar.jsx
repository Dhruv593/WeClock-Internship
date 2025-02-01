import React from "react";
import SidebarLogo from "./sidebarComponets/SidebarLogo";
import SidebarItemList from "./sidebarComponets/SidebarItemList";
import SidebarBanner from "./sidebarComponets/SidebarBanner";
import SidebarFooter from "./sidebarComponets/SidebarFooter";

function sidebar() {
  return (
    <div className="w-[349px] h-[1650px] bg-white text-black flex flex-col p-6">
      <SidebarLogo />

      <SidebarItemList />

      <SidebarBanner />

      <SidebarFooter />
    </div>
  );
}

export default sidebar;
