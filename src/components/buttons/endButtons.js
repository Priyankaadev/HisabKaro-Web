"use client";
import React, { useState } from "react";
import { Dropdown } from "../cart/dropdown";
import { FaChevronDown } from "react-icons/fa"

function EndButtons() {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="w-auto h-[50%] flex gap-2 items-center ">
      {openDialog? 
      <div className="flex items-center h-auto shadow-lg bg-white z-50 absolute gap-2 ">
      
     <Dropdown/>
      <button className="bg-green-500 text-white w-52 h-10 shadow-lg border basis-2/3  py-1 rounded-lg">
        Next
      </button>
      </div>
      :(
      <div>
      <button 
      onClick={()=>{
        setOpenDialog(!openDialog)
      }}
      className="p-2 border bg-white flex gap-1  items-center border-blue-500  ">
        Open <FaChevronDown />
        </button>
      <button className="bg-green-500 text-white w-52 h-10 shadow-lg border  py-1 rounded-lg">
        Next
      </button>
      </div>
    )}
    </div>
  );
}

export default EndButtons;
