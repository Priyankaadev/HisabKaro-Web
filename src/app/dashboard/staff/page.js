'use client'
import Input1 from "@/components/input/input1";
import Profile1 from "@/components/profile/profile1";
import { Calendar1, PlusIcon, Share2Icon } from "lucide-react";
import React from "react";
import { FaSearch } from "react-icons/fa";

function Staff() {
  return (
    <div className="w-full ">
      {/* highlights */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <Input1
            title={"Total"}
            value={0}
            bg={"bg-white"}
            text={"text-green-400"}
          />
          <Input1
            bg={"bg-green-200"}
            value={0}
            title={"Present"}
            text={"text-green-600"}
          />
          <Input1
            bg={"bg-red-200"}
            value={99999}
            title={"Absent"}
            text={"text-red-600"}
          />
          <Input1
            bg={"bg-yellow-200"}
            value={0}
            title={"Half-Day"}
            text={"text-yellow-600"}
          />
          <Input1
            bg={"bg-orange-200"}
            value={0}
            title={"Leave"}
            text={"text-orange-600"}
          />
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-white">
            <Calendar1 size={18} />
          </div>
          <div className="p-2 bg-white">
            <Share2Icon size={18} />
          </div>
        </div>
      </div>
      {/* employee container */}
      <div className="rounded-lg shadow-lg border p-[3%] mt-2 w-full ">
        <div className="flex justify-between">
          {/* search bar */}
        <div className="search-inp flex gap-2 basis-2/3 bg-[#f5f8fa] items-center rounded-xl  px-6">
          <FaSearch size={20} />
          <input
            type="text"
            name="search"
            placeholder="Search here..."
            className="w-full p-2 bg-[#f5f8fa] rounded-xl outline-none focus:ring-0 focus:border-transparent "
          
          />
        </div>
        {/* add button */}
        <div className="addEmployee flex rounded-xl border justify-between items-center bg-green-500 font-bold py-1 px-8  ">
          <PlusIcon size={20} color="white" /> <p className="text-[14px] text-white">Add Employee</p>
        </div>
        </div>
        {/* employees */}
        <div className=" profile flex flex-col mt-5 gap-5 ">
            <Profile1 />
            <Profile1 />
            <Profile1 />
            <Profile1 />
            <Profile1 />
            <Profile1 />
            <Profile1 />
          </div>
      </div>
    </div>
  );
}

export default Staff;
