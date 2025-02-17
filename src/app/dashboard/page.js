"use client";
import React from "react";
import CommonSideBar from "../components/common/CommonSideBar";
import {
  DebitNotesSvg,
  GraphSvg,
  HoldingPoSvg,
  ModeLightSvg,
  NotificationSvg,
  UnDelvPoSvg,
  UnpaidInvsSvg,
} from "../components/common/CommonDashboardSvg";

function dashboardpage() {
  return (
    <>
      <div className="flex justify-between p-2 font-inter bg-[#F7FBFE]">
        <div className="">
          <CommonSideBar />
        </div>
        <div className="max-w-full w-full p-6 ">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold px-6">Hello, Michael!</h1>
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
            <div className="flex justify-between gap-2 text-secondary">
              <div className="bg-white flex justify-between p-4 rounded-xl border-1 border-[#EDEDED] border-opacity-20 w-full">
                <div className="flex flex-col justify-between">
                  <h2 className="text-base font-normal">Holding POs</h2>
                  <p className="font-bold text-2xl">2</p>
                </div>
                <HoldingPoSvg />
              </div>
              <div className="bg-white flex justify-between p-4 rounded-xl border-1 border-[#EDEDED] border-opacity-20 w-full">
                <div className="flex flex-col justify-between">
                  <h2 className="text-base font-normal">UnDelv POs</h2>
                  <p className="font-bold text-2xl">3</p>
                </div>
                <UnDelvPoSvg />
              </div>
              <div className="bg-white flex justify-between p-4 rounded-xl border-1 border-[#EDEDED] border-opacity-20 w-full">
                <div className="flex flex-col justify-between">
                  <h2 className="text-base font-normal">Debit Notes</h2>
                  <p className="font-bold text-2xl">4</p>
                </div>
                <DebitNotesSvg />
              </div>
              <div className="bg-white flex justify-between p-4 rounded-xl border-1 border-[#EDEDED] border-opacity-20 w-full">
                <div className="flex flex-col justify-between">
                  <h2 className="text-base font-normal">Unpaid Invs</h2>
                  <p className="font-bold text-2xl">2</p>
                </div>
                <UnpaidInvsSvg />
              </div>
            </div>

            {/* Sales Chart Placeholder */}
            <div className="mt-6 bg-white p-6 rounded-xl border-1 border-[#EDEDED] border-opacity-20 ">
              <GraphSvg />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default dashboardpage;
