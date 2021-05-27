import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

const Logout = () => {
  return (
    <div className="p-2 flex-1 rounded">
      <Header headerTitle="Analytics" />
      <div className="flex flex-col justify-center items-center mt-6">
        <img src="/assets/empty.png" alt="empty" className="w-96" />
        <Link to="/balances">
          <button className="p-2 shadow-md rounded-sm bg-white hover:bg-gray-50">
            Please go to <span className="text-green-700">Balances</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logout;
