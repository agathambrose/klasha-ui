import React, { useState } from "react";
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

export const Header = ({ headerTitle }) => {
  //responsiveness
  const [state, setState] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-black text-xl">{headerTitle}</h3>
        <p className="text-gray-400 text-sm">
          Today, {day} {monthNames[month]} {year}{" "}
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <div className="bg-gray-100 text-gray-400 p-2 rounded-full relative">
          <VscBell className="text-2xl" />
          <div className="bg-red-600 rounded-full absolute h-2 w-2 top-0 right-1">
            <span></span>
          </div>
        </div>
        <div className="rounded-full p-1 border border-red-600">
          <img src="/assets/image-1.png" alt="profile" />
        </div>
        <div className="md:hidden block" onClick="">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};