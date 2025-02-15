"use client";
import CalendarPopup from "@/components/calendar/calendar";
import { HiringTable } from "@/components/tables/hiring";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function HiringPage() {
  const [openCalendar, setOpenCalendar] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button className="rounded-lg bg-blue-500 text-white py-2 px-5">
            Active
          </button>
          <button className="rounded-lg text-gray-500 border border-gray-500 py-2 px-2">
            Closed
          </button>
        </div>
        <SlCalender
          size={20}
          className="mr-5"
          onClick={() => {
            if (openCalendar) {
              !openCalendar;
            }
            setOpenCalendar(!openCalendar);
          }}
        />
        {openCalendar ? <CalendarPopup isOpen={setOpenCalendar} /> : null}
      </div>
      <div className="rounded-lg mt-5 shadow-xl border p-4 w-[98%]">
        {/* header */}
        <div className="flex justify-between items-center px-5 mb-2 ">
          <p className="font-semibold text-[20px] ">Leave</p>
          <div className="flex gap-2 items-center">
          <div className="search-inp flex gap-2 bg-[#f5f8fa] items-center focus:outline-none focus:ring-0 rounded-xl  px-6">
            <FaSearch size={20} />
            <input
              type="text"
              name="search"
              placeholder="Search here..."
              className="w-full p-2 bg-[#f5f8fa] rounded-xl outline-none focus:ring-0 focus:border-transparent"
            />
            </div>
            <div className="py-1 px-2 font-semibold bg-blue-400 text-white flex gap-1 items-center rounded-xl"><BsPlus size={20} />Create Job</div>
          </div>

        </div>
        {/* table */}
        <div className="px-5 ">
            <HiringTable h1={"Company Name"} h2={"Position"} h3={"Salary"} h4={"Posted Date"} h5={"Applications"}/>
        </div>
      </div>
    </div>
  );
}

export default HiringPage;
