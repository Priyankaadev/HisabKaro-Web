"use client";
import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { IoBagCheckOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { GoStar } from "react-icons/go";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Sidebar() {
  return (
    <div className="w-[19%] mt-3 h-full flex flex-col px-[4%] ">
      <div className="admin-name flex self-center ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex gap-3   bg-[#edf9f2] border-none"
            >
              {" "}
              Store-name{" "}
              <span className="p-1 bg-[#d4f4e1] rounded-full ">
                <FaAngleDown />
              </span>
            </Button>
          </DropdownMenuTrigger>
          {/* <DropdownMenuContent className="w-56" disabled> */}

          {/* <DropdownMenuRadioGroup > */}
          {/* <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem> */}

          {/* </DropdownMenuRadioGroup> */}
          {/* </DropdownMenuContent> */}
        </DropdownMenu>
      </div>

      <div className="head-options-detailed text-[#7B7B7B]  mt-5">
        <p className=" ">Home</p>
      </div>
      <div className="head-items flex flex-col mt-3 gap-4 h-full">
        {/* <div className="head-item text-[15px] flex items-center justify-between ">
       <span className="flex items-center gap-1"><AiFillPieChart size={16}/>  Dashboard </span> 
        <span className=""><GoStar /></span>
        </div> */}
        <DropdownMenu >
          <DropdownMenuTrigger asChild>
            <Button
              variant="none"
              className="flex font-normal text-[15px] justify-between shadow-none border-none p-0"
            >
              <span className="flex gap-1 items-center">
                {" "}
                <AiFillPieChart />
                Dashboard
              </span>

              <GoStar />
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="none"
              className="flex font-normal text-[15px] justify-between shadow-none border-none p-0"
            >
              <span className="flex gap-1 items-center">
             
                <VscGraph />
                Finance
              </span>

              <FaAngleDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 border-none shadow-none  ">
            <div className="px-5">
              <div>Top</div>
              <div>Top</div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="none"
              className="flex font-normal text-[15px] justify-between shadow-none border-none p-0"
            >
              <span className="flex gap-1 items-center">
            
                <IoBagCheckOutline />
                HRMS
              </span>

              <FaAngleDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 border-none shadow-none  ">
            <div className="px-5">
              <div>Top</div>
              <div>Top</div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="none"
              className="flex font-normal text-[15px] justify-between shadow-none border-none p-0"
            >
              <span className="flex gap-1 items-center">
                {" "}
                <GiShoppingCart />
                Inventory
              </span>

              <FaAngleDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 border-none shadow-none  ">
            <div className="px-5">
              <div>Top</div>
              <div>Top</div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
         <div className="flex gap-1 items-center text-[15px]">  <IoBagCheckOutline />Sales</div>
         <div className="flex gap-1 items-center text-[15px]">  <IoBagCheckOutline />Marketing</div>
      </div>
      <div className="head-options mt-5">
        <p className=" font-semibold">
          Business
        </p>
      </div>
    <ul className="flex flex-col text-[#7B7B7B] gap-4 mt-2 mb-10 ">
      <li>
        Assign Roles
      </li>
      <li>
        Business Profile
      </li>
      <li>
        Business Partner
      </li>
    </ul>
    </div>
  );
}

export default Sidebar;
