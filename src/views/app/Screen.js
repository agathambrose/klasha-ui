import React from "react";
import { SideNav } from "../../components/SideNav/SideNav";

export const Screen = ({ children, isOpen }) => {
  return (
    <div className="flex font-space-grotesk">
      <SideNav isSideBarOpen={isOpen} />
      <div className=" w-5/6 flex flex-1 md:p-5 pb-0">{children}</div>
    </div>
  );
};
