'use client'
import React from "react";
import { BiPlus } from "react-icons/bi";
import { SelectDropdown } from "../buttons/selectDropdown";
import { RxCross1 } from "react-icons/rx";

function InventoryDetails({onCancel}) {
 
  return (
    <div className=" bg-gray-100 rounded-2xl p-4 flex flex-col gap-4 absolute z-50 w-[50%] h-full top-0 right-0  ">
      <button
      onClick={()=>onCancel(false)}
      className=" rounded-full bg-green-200 w-fit p-2 self-end"
   >
     <RxCross1 color="gray" />
    </button>
      <p className="text-blue-400 font-semibold text-[22px]">Details</p>
      <div className="grid grid-cols-2 grid-flow-row gap-3">
        <div className=" flex gap-2 flex-col ">
          <label htmlFor="party" className="text-sm font-medium text-gray-700">
            Party Name
          </label>
          <div className=" w-full rounded-lg border">
            <input
              id="party"
              type="text"
              placeholder="Party Name.."
              className="w-full border border-gray-300 rounded-md px-6 py-1 "
            />
          </div>
        </div>
        <div className=" flex gap-2 flex-col ">
          <label
            htmlFor="invoice"
            className="text-sm font-medium text-gray-700"
          >
            Invoice Number
          </label>
          <div className=" w-full rounded-lg border">
            <input
              id="invoice"
              type="number"
              placeholder="Invoice Number.."
              className="w-full border border-gray-300 rounded-md px-6 py-1 "
            />
          </div>
        </div>
        <div className=" flex gap-2 flex-col ">
          <label htmlFor="gst" className="text-sm font-medium text-gray-700">
            GST Number
          </label>
          <div className=" w-full rounded-lg border">
            <input
              id="gst"
              type="number"
              placeholder="GST Number.."
              className="w-full border border-gray-300 rounded-md px-6 py-1 "
            />
          </div>
        </div>
        <div className=" flex gap-2 flex-col ">
          <label htmlFor="date" className="text-sm font-medium text-gray-700">
            Invoice Date
          </label>
          <div className=" w-full rounded-lg border">
            <input
              id="date"
              type="date"
              placeholder="Invoice Date.."
              className="w-full border border-gray-300 rounded-md px-6 py-1 "
            />
          </div>
        </div>
        <div className=" flex gap-2 flex-col ">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <div className=" flex gap-2 items-center">
            <SelectDropdown />
            <button className="bg-blue-400 rounded-xl p-2"><BiPlus color="white"/></button>
          </div>
        </div>
      </div>
      <div className="flex mt-auto w-full gap-4  ">
        <button 
        onClick={()=>onCancel(false)}
        className="border-blue-400 w-full rounded-xl border text-blue-400 bg-blue-100 p-2">Cancel</button>
        <button className=" text-white rounded-xl w-full bg-blue-500 p-2">Save</button>
      </div>

    </div>
  );
}

export default InventoryDetails;
