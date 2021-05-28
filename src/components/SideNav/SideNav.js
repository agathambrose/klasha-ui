import React from "react";
import { Link } from "react-router-dom";
import { SideNavListData1, SideNavListData2 } from "./SideNavListData";

export const SideNav = ({ isSideBarOpen }) => {
  return (
    <div
      className={`bg-gray-100 ${
        !isSideBarOpen ? "hidden md:block" : ""
      } w-60 md:h-screen h-screen pt-4 md:pt-8 px-8`}
    >
      <div className="space-y-6 flex flex-col justify-start">
        {/* logo */}
        <img src="/assets/logo.png" alt="klasha logo" className="w-24 h-8" />

        {/* nav list */}
        <ul className="list-none !px-4">
          <h3 className="text-black mb-4">Main Pages</h3>
          {SideNavListData1.map((val, key) => {
            return (
              <Link to={val.path}>
                <li
                  key={key}
                  className="flex items-center p-3 space-x-3 text-gray-400 hover:text-black hover:bg-white focus:outline-none focus:bg-white cursor-pointer transition duration-200"
                >
                  <div>{val.icon}</div>
                  <div>{val.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>

        <ul className="list-none !px-4">
          <h3 className="text-black mb-4">General</h3>
          {SideNavListData2.map((val, key) => {
            return (
              <Link to={val.path}>
                <li
                  key={key}
                  className="flex items-center p-3 space-x-3 text-gray-400 hover:text-black hover:bg-white focus:outline-none focus:bg-white cursor-pointer transition duration-200"
                >
                  <div>{val.icon}</div>
                  <div>{val.title}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
