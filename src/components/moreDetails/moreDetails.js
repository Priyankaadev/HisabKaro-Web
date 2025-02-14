"use client";
import React from "react";
import { SelectDropdown } from "../buttons/selectDropdown";
import { Mic, PlusIcon } from "lucide-react";

function MoreDetails() {
  return (
    <>
      <div className="flex items-center w-full gap-2 ">
       <SelectDropdown  /> 
        <button className="bg-blue-500 rounded-xl px-4 py-2">
          <PlusIcon color="white" />
        </button>
      </div>
      <div className="relative w-full rounded-lg border">
        <input
          id="number"
          type="number"
          placeholder="+91 | Mobile Number.."
          className="w-full border
          focus:outline-none focus:ring-0
           [&::-webkit-inner-spin-button]:appearance-none 
             [&::-webkit-outer-spin-button]:appearance-none
           border-gray-300 rounded-md px-6 py-1 "
        />
        <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
      </div>
      <div className="flex gap-2 items-center w-full">
      <button className="border border-orange-400 rounded-xl font-semibold p-2 w-[10%]">GST Input</button>
      <input 
      type="text"
      className="border rounded-xl p-2 w-full"
      placeholder="GST No. of Party"
      />
      </div>
    </>
  );
}

export default MoreDetails;
