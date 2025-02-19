"use client";
import React, { useState } from "react";
import CommonSideBar from "../components/common/CommonSideBar";
import {
  GraphSvg,
  ModeLightSvg,
  NotificationSvg,
} from "../components/common/CommonDashboardSvg";

const page = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex justify-between p-2 font-inter bg-[#F7FBFE]">
        <div className="">
          <CommonSideBar />
        </div>
        <div className="max-w-full w-full p-6 ">
          <div className="flex justify-between items-center">
            <div className="relative px-6 w-80">
              <input
                type="text"
                placeholder="Search here"
                className="w-full px-4 py-2 border rounded-lg pl-10 focus:outline-none focus:ring focus:border-blue-300"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <FaSearch className="absolute left-3 top-3 text-gray-400" /> */}
            </div>
            <div className="flex gap-2 items-center">
              <ModeLightSvg />
              <NotificationSvg />

              <div className="flex gap-2 items-center">
                <img src="/profilevenx.png" alt="profileimg" />
                <h6>Michael Jones</h6>
              </div>
            </div>
          </div>
          <main className="p-6">
            {/* Sales Chart Placeholder */}
            <div className="mt-6 bg-white p-6 rounded-xl border-1 border-[#EDEDED] border-opacity-20 ">
              <GraphSvg />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default page;
