import React from "react";
import { UserRound } from 'lucide-react';


function User() {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <p className="font-bold"><span className="font-normal">Hello,</span> Samantha</p>
        <div className="bg-[#dddee8] text-[#5e6c93] p-2 border-4 rounded-full w-[56px] h-[56px] flex items-center justify-center">
        <UserRound />
        </div>
      </div>
    </div>
  );
}

export default User;
