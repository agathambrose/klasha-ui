import React from "react";
import { Header } from "../components/Header";
import { RiSearchLine } from "react-icons/ri";

const Balances = (props) => {
  return (
    <div className="p-2 flex-1 rounded">
      <Header headerTitle="Balances" {...props} />

      <div className="md:block flex flex-col justify-center items-center">
        <div className="md:w-3/5 mt-9 border border-gray-50 rounded shadow-md md:shadow-sm md:p-4 px-5 py-8 relative">
          <div className="flex md:space-y-0 space-x-8 md:space-x-20 items-center">
            <h3 className="text-green-700 font-medium text-base">
              Total account balance
            </h3>
            <select
              name="currencies"
              id="currencies"
              className="bg-gray-100 py-1 px-2 rounded"
            >
              <option value="usd">USD</option>
              <option value="ngn">NGN</option>
              <option value="kes">KES</option>
              <option value="ghc">GHC</option>
            </select>
          </div>
          <br />
          <hr />
          <div>
            <p className="text-3xl font-extrabold text-black">$5,332.18</p>
            <p className="text-xs text-gray-300">1 USD = 381.97 NGN</p>
          </div>
          <div className="absolute md:top-14 top-16 border border-gray-200 rounded right-5 md:right-60 bg-white font-bold">
            <ul className="list-none">
              <li className="pl-2 md:pr-16 pr-12 py-0">KES</li>
              <hr />
              <li className="pl-2 md:pr-16 pr-12 py-0">NGN</li>
              <hr />
              <li className="pl-2 md:pr-16 pr-12 py-0">GHC</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/5 w-8/12 mt-8 border border-gray-50 rounded shadow-md md:shadow-none md:py-4 py-6 md:pr-14  md:absolute top-20 right-96 bg-gray-100">
          <h3 className="md:pb-1.5 pl-8 font-medium">Funds on hold</h3>
          <br />
          <hr />
          <div>
            <p className="text-3xl text-black p-2 font-extrabold text-center">
              $5,332.18
            </p>
          </div>
        </div>
      </div>

      <div className="md:mt-6 my-10 md:my-0">
        <h3 className="md:hidden block text-center text-2xl mb-4 text-green-700">
          Payout table
        </h3>
        <div className="flex md:justify-between justify-center items-center">
          {/* search form */}
          <h3 className="md:block hidden">Payout table</h3>
          <div className="relative">
            <form className="space-x-3 flex">
              <input
                type="text"
                placeholder="Search something..."
                className="p-3 border text-xs border-gray-100 rounded"
              />
              <p className="absolute top-3 md:top-4 left-32 md:left-36 text-gray-300">
                <RiSearchLine />
              </p>

              <input
                type="month"
                min="2019-03"
                value="2020-03"
                className="md:py-3 text-xs border border-gray-100 rounded"
              />
              <button className="bg-green-800 text-xs opacity-95 p-3 rounded shadow">
                Payout
              </button>
            </form>
          </div>
        </div>
        {/* table*/}
        <div className="mt-3 text-sm">
          {/* table head */}
          <div className="flex justify-center items-center w-full bg-gray-100 md:pl-12 pl-2 py-2 rounded-sm rounded-b-none ">
            <h3 className="w-4/12 font-bold">Payout ID</h3>
            <h3 className="w-4/12 text-center font-bold">Source</h3>
            <h3 className="w-4/12 text-center font-bold">Date</h3>
            <h3 className="w-4/12 text-center font-bold">Amount</h3>
          </div>
          {/* table body */}
          <div className="flex justify-center items-center w-full md:pl-12 pl-2 py-2 rounded text-sm border border-white hover:border hover:shadow-md hover:border-green-700 transition duration-200 cursor-pointer">
            <h3 className="md:w-4/12 w-5/12">KLA12578DHQ</h3>
            <h3 className="md:w-4/12 w-4/12 text-center truncate">
              Vel pellentesque ornare
            </h3>
            <h3 className="md:w-4/12 w-5/12 text-center">
              25th November, 2020
            </h3>
            <h3 className="w-4/12 text-center">$1,200</h3>
          </div>
          <hr />
          <div className="flex justify-center items-center w-full md:pl-12 pl-3 py-2 rounded text-sm border border-white hover:border hover:shadow-md hover:border-green-700 transition duration-200 cursor-pointer">
            <h3 className="md:w-4/12 w-5/12">KLA12578DHQ</h3>
            <h3 className="md:w-4/12 w-4/12 text-center truncate">
              Vel pellentesque ornare
            </h3>
            <h3 className="md:w-4/12 w-5/12 text-center">
              25th November, 2020
            </h3>
            <h3 className="w-4/12 text-center">$1,200</h3>
          </div>
          <hr />
          <div className="flex justify-center items-center w-full md:pl-12 pl-3 py-2 rounded text-sm border border-white hover:border hover:shadow-md hover:border-green-700 transition duration-200 cursor-pointer">
            <h3 className="md:w-4/12 w-5/12">KLA12578DHQ</h3>
            <h3 className="md:w-4/12 w-4/12 text-center truncate">
              Vel pellentesque ornare
            </h3>
            <h3 className="md:w-4/12 w-5/12 text-center">
              25th November, 2020
            </h3>
            <h3 className="w-4/12 text-center">$1,200</h3>
          </div>
          <hr />
          <div className="flex justify-center items-center w-full md:pl-12 pl-2 py-2 rounded text-sm border border-white hover:border hover:border-green-700 hover:shadow-md transition duration-200 cursor-pointer">
            <h3 className="md:w-4/12 w-5/12">KLA12578DHQ</h3>
            <h3 className="md:w-4/12 w-4/12 text-center truncate">
              Vel pellentesque ornare
            </h3>
            <h3 className="md:w-4/12 w-5/12 text-center">
              25th November, 2020
            </h3>
            <h3 className="w-4/12 text-center">$1,200</h3>
          </div>
          <div className="text-green-700 block w-full border border-gray-200 rounded-b-sm px-8 py-2 text-center cursor-pointer">
            <button>See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balances;
