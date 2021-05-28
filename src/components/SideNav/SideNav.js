import React from "react";
import { NavLink } from "react-router-dom";
import { SideNavListData1, SideNavListData2 } from "./SideNavListData";

export const SideNav = ({ isSideBarOpen }) => {
  return (
    <div
      className={`bg-gray-100 ${
        !isSideBarOpen ? "hidden md:block" : ""
      } w-60 md:h-screen h-screen pt-4 md:pt-8`}
    >
      <div className="space-y-6 flex flex-col justify-start">
        {/* logo */}
        <img
          src="/assets/logo.png"
          alt="klasha logo"
          className="w-24 h-8 ml-8"
        />

        {/* nav list */}
        <div>
          <h3 className="text-black mb-4 ml-8">Main Pages</h3>
          {SideNavListData1.map((val, key) => {
            return (
              <NavLink to={val.path} className="active:bg-white">
                <button
                  key={key}
                  className="space-x-3 space-y-3 w-full text-gray-400 hover:text-black hover:bg-white focus:outline-none focus:bg-white cursor-pointer transition duration-200"
                >
                  <div className="flex items-center space-x-3 py-3 px-8">
                    <div>{val.icon}</div>
                    <div>{val.title}</div>
                  </div>
                </button>
              </NavLink>
            );
          })}
        </div>

        <div>
          <h3 className="text-black mb-4 ml-8">General</h3>
          {SideNavListData2.map((val, key) => {
            return (
              <NavLink to={val.path} className="active:bg-white">
                <button
                  key={key}
                  className="space-x-3 space-y-3 w-full text-gray-400 hover:text-black hover:bg-white focus:outline-none focus:bg-white cursor-pointer transition duration-200"
                >
                  <div className="flex items-center space-x-3 py-3 px-8">
                    <div>{val.icon}</div>
                    <div>{val.title}</div>
                  </div>
                </button>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
