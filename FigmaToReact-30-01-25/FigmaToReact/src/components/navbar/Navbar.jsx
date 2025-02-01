import React from "react";
import MenuIcons from "./navbaromponents/MenuIcons";
import User from "./navbaromponents/User";
import SearchBar from "./navbaromponents/SearchBar";
import Separator from "./navbaromponents/Separator";

function Navbar() {
  return (
    <div className="bg-[#f3f2f7] flex items-center justify-between pt-[41px] px-[42px] space-x-4">
      <SearchBar />
      <MenuIcons />
      <Separator />
      <User />
    </div>
  );
}

export default Navbar;
