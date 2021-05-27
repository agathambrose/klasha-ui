import React from "react";
import { Header } from "../components/Header";
import { RiSearchLine } from "react-icons/ri";

const Balances = () => {
  return (
    <div className="p-2 flex-1 rounded">
      <Header headerTitle="Balances" />

      <div className="w-3/5 mt-9 border border-gray-50 rounded shadow-sm p-4 relative">
        <div className="flex space-x-20 items-center">
          <h3 className="text-green-700">Total account balance</h3>
          <select
            name="currencies"
            id="currencies"
            className="bg-gray-100 py-1 px-2 rounded"
          >
            <option value="usd">USD</option>
            <option value="ngn">NGN</option>
            <option value="usd">KES</option>
            <option value="usd">GHC</option>
          </select>
        </div>
        <br />
        <hr />
        <div>
          <p className="text-3xl text-black">$5,332.18</p>
          <p className="text-xs text-gray-300">1 USD = 381.97 NGN</p>
        </div>
        <div className="absolute top-14 left-60 bg-white">
          <ul className="list-none">
            <li className="pl-2 pr-16 py-0 border rounded">KES</li>
            <li className="pl-2 pr-10 py-0 border rounded">NGN</li>
            <li className="pl-2 pr-10 py-0 border rounded">GHC</li>
          </ul>
        </div>
      </div>
      <div className="w-1/5 mt-8 border border-gray-50 rounded shadow-sm py-4 absolute top-20 right-96 bg-gray-100">
        <h3 className="pb-1.5 pl-8">Funds on hold</h3>
        <br />
        <hr />
        <div>
          <p className="text-3xl text-black p-2 text-center">$5,332.18</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center">
          {/* search form */}
          <h3>Payout table</h3>
          <div className="relative">
            <form className="space-x-3 flex ">
              <input
                type="text"
                placeholder="Search something..."
                className="p-3 border border-gray-100 rounded"
              />
              <p className="absolute top-4 left-48 text-gray-300">
                <RiSearchLine />
              </p>

              <input
                type="month"
                min="2019-03"
                value="2020-03"
                className="py-3 border border-gray-100 rounded"
              />
              <button className="bg-green-800 opacity-95 p-3 rounded shadow">
                Payout
              </button>
            </form>
          </div>
        </div>
        {/* table*/}
        <div className="mt-3">
          {/* table head */}
          <div className="flex justify-center items-center w-full bg-gray-200 pl-12 py-1 rounded ">
            <h3 className="w-4/12 font-bold">Payout ID</h3>
            <h3 className="w-4/12 text-center font-bold">Source</h3>
            <h3 className="w-4/12 text-center font-bold">Date</h3>
            <h3 className="w-4/12 text-center font-bold">Amount</h3>
          </div>
          {/* table body */}
          <div className="flex justify-center items-center w-full  pl-12 py-2 rounded text-sm border hover:shadow-md hover:border-green-700">
            <h3 className="w-4/12">KLA12578DHQ</h3>
            <h3 className="w-4/12 text-center">Vel pellentesque ornare</h3>
            <h3 className="w-4/12 text-center">25th November, 2020</h3>
            <h3 className="w-4/12 text-center">$1,200</h3>
          </div>
          <div className="flex justify-center items-center w-full  pl-12 py-2 rounded text-sm border hover:shadow-md hover:border-green-700">
            <h3 className="w-4/12">KLA12578DHQ</h3>
            <h3 className="w-4/12 text-center">Vel pellentesque ornare</h3>
            <h3 className="w-4/12 text-center">25th November, 2020</h3>
            <h3 className="w-4/12 text-center">$1,200</h3>
          </div>
          <div className="flex justify-center items-center w-full  pl-12 py-2 rounded text-sm border hover:shadow-md hover:border-green-700">
            <h3 className="w-4/12">KLA12578DHQ</h3>
            <h3 className="w-4/12 text-center">Vel pellentesque ornare</h3>
            <h3 className="w-4/12 text-center">25th November, 2020</h3>
            <h3 className="w-4/12 text-center">$1,200</h3>
          </div>
          <div className="flex justify-center items-center w-full  pl-12 py-2 rounded text-sm border hover:shadow-md hover:border-green-700">
            <h3 className="w-4/12">KLA12578DHQ</h3>
            <h3 className="w-4/12 text-center">Vel pellentesque ornare</h3>
            <h3 className="w-4/12 text-center">25th November, 2020</h3>
            <h3 className="w-4/12 text-center">$1,200</h3>
          </div>
          <div className="text-green-700 block w-full border border-gray-200 rounded px-8 py-2 text-center cursor-pointer">
            <button>See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balances;
