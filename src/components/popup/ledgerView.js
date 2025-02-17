'use client'
import React from "react";
import { BiPlus } from "react-icons/bi";
import { SelectDropdown } from "../buttons/selectDropdown";
import { RxCross1 } from "react-icons/rx";

function LedgerView({onCancel}) {
 
  return (
    <div className=" bg-gray-100 rounded-2xl p-4 flex flex-col gap-4 absolute z-50 w-[50%] h-full top-0 right-0  ">
      <button
      onClick={()=>onCancel(false)}
      className=" rounded-full bg-green-200 w-fit p-2 self-end"
   >
     <RxCross1 color="gray" />
    </button>

      <p className="text-blue-400 font-semibold text-[22px]">Tushar</p>
    <div className="rounded-xl w-full shadow-xl p-2 bg-white border flex justify-between">
        <p>Balance</p>
        <p>0</p>
    </div>

    

    </div>
  );
}

export default LedgerView;
