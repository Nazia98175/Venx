"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  SideBarHomeSvg,
  SideBarInventorySvg,
  SideBarInvoicesSvg,
  SideBarLogisticsSvg,
  SideBarMBQSvg,
  SideBarNotificationsSvg,
  SideBarPurchaseOrderSvg,
  SideBarSettingsSvg,
} from "./SideBarSvgs";

const CommonSideBar = () => {
  const router = useRouter();
  const [active, setActive] = useState(router.pathname);
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <SideBarHomeSvg />,
    },
    {
      name: "Purchase Orders",
      path: "/purchaseorders",
      icon: <SideBarPurchaseOrderSvg />,
    },

    {
      name: "Logistics",
      path: "/logistics",
      icon: <SideBarLogisticsSvg />,
    },
    {
      name: "Invoices",
      path: "/invoices",
      icon: <SideBarInvoicesSvg />,
    },
    {
      name: "Inventory",
      path: "/inventory",
      icon: <SideBarInventorySvg />,
    },
    {
      name: "MBQ",
      path: "/mbq",
      icon: <SideBarMBQSvg />,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <SideBarNotificationsSvg />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <SideBarSettingsSvg />,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`h-screen w-[272px] bg-primary text-white rounded-lg flex flex-col relative left-0 top-0 shadow-lg transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <div className="h-[450.84px] p-5">
        <div className="flex items-center bg-white/20 relative justify-between h-[82.84px] p-1 rounded-xl">
          <img src="/mainpagelogo.png" alt="" />

          <button
            onClick={toggleSidebar}
            className={`  top-5  p-2 rounded-full  transition-all ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2801 9.94876L8.81007 12.4188L11.2801 14.8888C11.3788 14.9804 11.451 15.097 11.489 15.2263C11.527 15.3555 11.5294 15.4926 11.4961 15.6232C11.4627 15.7537 11.3947 15.8728 11.2994 15.9679C11.204 16.0631 11.0847 16.1307 10.9541 16.1638C10.8237 16.1971 10.6867 16.1947 10.5576 16.1569C10.4285 16.119 10.3119 16.0471 10.2201 15.9488L7.22007 12.9488C7.07962 12.8081 7.00073 12.6175 7.00073 12.4188C7.00073 12.22 7.07962 12.0294 7.22007 11.8888L10.2201 8.88876C10.3117 8.79003 10.4283 8.71786 10.5576 8.67985C10.6868 8.64183 10.824 8.63939 10.9545 8.67276C11.085 8.70613 11.2041 8.77409 11.2992 8.86948C11.3944 8.96487 11.462 9.08415 11.4951 9.21476C11.5284 9.34514 11.526 9.48208 11.4882 9.61122C11.4503 9.74037 11.3785 9.85695 11.2801 9.94876Z"
                fill="white"
                fillOpacity="0.8"
              />
              <path
                d="M3.75 2.41895H20.25C21.216 2.41895 22 3.20295 22 4.16895V20.6689C22 21.1331 21.8156 21.5782 21.4874 21.9064C21.1592 22.2346 20.7141 22.4189 20.25 22.4189H3.75C3.28587 22.4189 2.84075 22.2346 2.51256 21.9064C2.18437 21.5782 2 21.1331 2 20.6689V4.16895C2 3.20295 2.784 2.41895 3.75 2.41895ZM3.5 4.16895V20.6689C3.5 20.8069 3.612 20.9189 3.75 20.9189H15V3.91895H3.75C3.6837 3.91895 3.62011 3.94528 3.57322 3.99217C3.52634 4.03905 3.5 4.10264 3.5 4.16895ZM16.5 20.9189H20.25C20.3163 20.9189 20.3799 20.8926 20.4268 20.8457C20.4737 20.7988 20.5 20.7352 20.5 20.6689V4.16895C20.5 4.10264 20.4737 4.03905 20.4268 3.99217C20.3799 3.94528 20.3163 3.91895 20.25 3.91895H16.5V20.9189Z"
                fill="white"
                fillOpacity="0.8"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-auto mt-5">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                className={`flex items-center gap-2 p-4 cursor-pointer hover:bg-white/20 rounded-xl 
                ${active === item.path ? "bg-white/20" : ""}`}
                onClick={() => setActive(item.path)}
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default CommonSideBar;
