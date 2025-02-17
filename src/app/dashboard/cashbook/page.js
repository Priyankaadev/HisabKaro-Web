"use client";
import CalendarPopup from "@/components/calendar/calendar";
import { CashInvTable, TableCash } from "@/components/tables/cashInvTable";
import FilterPayment from "@/components/popup/filterPayment";
import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";

function Cashbook() {
  const [popupState, setPopupState] = useState({
    filterPayment: false,
    calendar: false,
  });

  const togglePopup = (popup) => {
    setPopupState((prevState) => ({
      filterPayment: popup === "filterPayment" ? !prevState.filterPayment : false,
      calendar: popup === "calendar" ? !prevState.calendar : false,
    }));
  };
  return (
    <div className="w-full flex flex-col gap-3 relative z-1">
      <div className="heading flex gap-4">
        <div className="rounded-lg shadow-lg border flex justify-between basis-[42%] items-center p-3">
          <p className="text-gray-500">Running Balance</p>
          <p className="text-green-500">1694.98</p>
        </div>
        <div className="rounded-lg shadow-lg border flex justify-between basis-[42%] items-center p-3">
          <p className="text-gray-500">Opening Cash Balance</p>
          <p className="text-blue-500">200</p>
        </div>
        <div className=" flex gap-4 basis-[15%] items-center p-2">
        <SlCalender size={20} onClick={() => togglePopup("calendar")} />
        <div
            className="p-1 shadow-md border bg-blue-400 rounded-lg cursor-pointer"
            onClick={() => togglePopup("filterPayment")}
          >
            <HiOutlineAdjustmentsHorizontal size={18} color="white" />
          </div>
          <FaShareAlt size={20} />
        </div>
      </div>
      {/* popup filter payment */}
      {popupState.filterPayment && <FilterPayment isOpen={setPopupState} />}
      {popupState.calendar && <CalendarPopup isOpen={setPopupState} />}
      
      <div className="rounded-lg shadow-xl border p-4 w-[98%]  ">
        <div className="px-5 ">
          <CashInvTable h1={"Amount"} h2={"Mode"} h3={"Date"} h4={"From"} />
        </div>
      </div>
    </div>
  );
}

export default Cashbook;
