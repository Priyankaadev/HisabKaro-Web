"use client";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

function CalendarPopup({ isOpen }) {
  const [selectedRange, setSelectedRange] = useState({
    from: undefined,
    to: undefined,
  });
  return (
    <div className="rounded-xl h-auto z-30 bg-white top-[11%] absolute w-[30%]  right-[12%] shadow-lg border  flex flex-col px-3 py-1">
      <Calendar  className="border-none shadow-none " mode="range" selected={selectedRange} onSelect={setSelectedRange}/>
      <div className="flex flex-col gap-1">
        <button className="bg-green-500 text-white rounded-lg border p-1">
          Confirm
        </button>
        <button
          onClick={() => isOpen(false)}
          className="  rounded-lg border text-black p-1"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CalendarPopup;
