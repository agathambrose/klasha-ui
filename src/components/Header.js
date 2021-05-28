import React from "react";
import { VscBell } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";

// date
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const day = new Date().getDay();
const month = new Date().getMonth();
const year = new Date().getFullYear();

export const Header = ({ headerTitle, isToggleSideBar }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={isToggleSideBar}
          className="lg:hidden block text-4xl focus:outline-none transition duration-1000"
        >
          <GiHamburgerMenu />
        </button>
        <div>
          <h3 className="text-black text-xl font-extrabold">{headerTitle}</h3>
          <p className="text-gray-400 text-sm">
            Today, {day} {monthNames[month]} {year}{" "}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="bg-gray-100 text-gray-400 p-2 rounded-full relative">
          <VscBell className="text-2xl" />
          <div className="bg-red-600 rounded-full absolute h-2 w-2 top-0 right-1">
            <span></span>
          </div>
        </div>
        <img
          src="/assets/image-1.png"
          alt="profile"
          className="px-2 py-1 bg-red-50 rounded-full border border-red-600"
        />
      </div>
    </div>
  );
};
