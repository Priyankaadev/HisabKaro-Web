"use client";

import CalendarPopup from "@/components/calendar/calendar";
import { TableSale } from "@/components/sale/table";
import { Share2 } from "lucide-react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function PurchaseRegister() {
const [openCalendar , setOpenCalendar] = useState(false)
    
  return (
    <div className="w-full">
      <div className="flex justify-between items-center  ">
        <div className="rounded-lg shadow-md border py-2 px-4 flex items-center gap-3 ">
          <div className="flex items-center gap-2 ">
            <p>Stock Value</p>
            <div className="rounded-xl bg-green-100 py-1 px-2">&#8377;5,00,000</div>
          </div>
          <div className="flex items-center gap-2">
            <p>Tax</p>
            <div className="rounded-xl bg-green-100 py-1 px-2">&#8377;50,000</div>
          </div>
          <div className="flex items-center gap-2 rounded-xl py-1 px-2  bg-blue-100">
            Total <span className="text-blue-400">&#8377;5,50,000 </span>
          </div>
        </div>
        <div className="flex items-center gap-4 mr-5">
          <SlCalender
            size={20}
            onClick={() => {
              setOpenCalendar(!openCalendar);
            }}
          />
          <Share2 size={18} />
        </div>
      </div>
     {openCalendar && <CalendarPopup isOpen={setOpenCalendar(!openCalendar)} />}
      <div className="rounded-lg mt-5 shadow-xl border p-4 w-[98%]">
        {/* header */}
        <div className="flex justify-between items-center px-5 mb-2 ">
          <p className="font-semibold text-[20px] ">Invoices</p>
          <div className="search-inp flex gap-2 bg-[#f5f8fa] items-center rounded-xl  px-6">
            <FaSearch size={20} />
            <input
              type="text"
              name="search"
              placeholder="Search here..."
              className="w-full p-2 bg-[#f5f8fa] rounded-xl outline-none focus:ring-0 focus:border-transparent"
            />
          </div>
        </div>
        {/* table */}
        <div className="px-5 ">
          <TableSale />
        </div>
      </div>
    </div>
  );
}

export default PurchaseRegister;
