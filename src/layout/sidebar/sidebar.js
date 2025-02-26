"use client";

import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai"; 
import { IoStatsChartOutline   } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { GoStar } from "react-icons/go";
import { Button } from "@/components/ui/button";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { BsReceipt } from "react-icons/bs";
import { BsReceiptCutoff } from "react-icons/bs";
import { PiMoneyWavyBold } from "react-icons/pi";
import { TbBasketMinus } from "react-icons/tb";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";


function Sidebar() {
  const router = useRouter()
  return (

   <div className="w-[20%] mt-3 h-full flex flex-col px-[3%]">
      {/* Store Name */}
      <div className="admin-name flex self-center">
        <Button
          variant="outline"
          className="flex gap-3 bg-[#edf9f2] border-none"
        >
          Store-name
          <span className="p-1 bg-[#d4f4e1] rounded-full">
            <FaAngleDown />
          </span>
        </Button>
      </div>

    
      <div className="head-options-detailed text-[#7B7B7B] mt-5">
        <p>Home</p>
      </div>

      {/* Accordion Menu */}
      <Accordion type="single" collapsible className="mt-3 ">

        <AccordionItem value="dashboard" className='flex justify-between items-center border-none mb-4'>
          {/* <AccordionTrigger className="flex justify-between text-[15px] font-normal"> */}
            <span className="flex gap-2 text-[15px] items-center">
              <AiFillPieChart /> Dashboard
            </span>
            <GoStar />
          {/* </AccordionTrigger> */}
        </AccordionItem>

        {/* Finance */}
        <AccordionItem value="finance  " className='border-none'>
          <AccordionTrigger className="flex justify-between text-[15px]  font-normal">
            <span className="flex gap-2 items-center">
              <IoStatsChartOutline /> Finance
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 space-y-4 cursor-pointer">
            <p className="flex gap-2 items-center"
            onClick={()=>router.push('/finance/ledger')}
            ><IoWalletOutline />Ledger</p>
            <p className="flex gap-2 items-center"
             onClick={()=>router.push('/finance/invoice')}
             ><BsReceiptCutoff />Invoice</p>
            <p className="flex gap-2 items-center"
             onClick={()=>router.push('/finance/saleRegister')}
             ><BsReceipt />Sale Register</p>
            <p className="flex gap-2 items-center" 
            onClick={()=>router.push('/finance/profitLoss')}
              ><PiMoneyWavyBold />Profit-Loss</p>
            <p className="flex gap-2 items-center"
             onClick={()=>router.push('/finance/udhari')}
             ><TbBasketMinus />Udhari</p>
            <p className="flex gap-2 items-center"
             onClick={()=>router.push('/finance/bank')}
             ><BsGraphUpArrow />Bank Analysis</p>
          </AccordionContent>
        </AccordionItem>

        {/* HRMS */}
        <AccordionItem value="hrms " className='border-none'>
          <AccordionTrigger className="flex justify-between text-[15px] font-normal">
            <span className="flex gap-2 items-center">
              <IoBagCheckOutline /> HRMS
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 space-y-4 cursor-pointer">
            <p className="flex gap-2 items-center"
             onClick={()=>router.push('/dashboard/hrms/salary')}
            ><IoWalletOutline />Salary</p>
            <p className="flex gap-2 items-center"
              onClick={()=>router.push('/dashboard/hrms/salaryAdvance')}
            ><BsReceiptCutoff />Salary Advance</p>
            <p className="flex gap-2 items-center"
              onClick={()=>router.push('/dashboard/hrms/overtime')}
                         ><BsReceipt />Overtime</p>
            <p className="flex gap-2 items-center"><PiMoneyWavyBold 
               onClick={()=>router.push('/dashboard/hrms/allowance')}
                         />Allowance/Bonus</p>
            <p className="flex gap-2 items-center"><TbBasketMinus 
                onClick={()=>router.push('/dashboard/hrms/deduction')}
            />Deduction</p>
            <p className="flex gap-2 items-center"><BsGraphUpArrow 
                onClick={()=>router.push('/dashboard/hrms/employeeLedger')}
                         />Employee Ledger</p>
            <p className="flex gap-2 items-center"><BsGraphUpArrow
                onClick={()=>router.push('/dashboard/hrms/schedule')}
            />Schedule</p>
            <p className="flex gap-2 items-center"><BsGraphUpArrow
                         onClick={()=>router.push('/dashboard/hrms/Request')}
             />Request</p>
            <p className="flex gap-2 items-center"><BsGraphUpArrow 
             onClick={()=>router.push('/dashboard/hrms/hiring')}
             />Hiring</p>
          </AccordionContent>
        </AccordionItem>

        {/* Inventory */}
        <AccordionItem value="inventory" className='border-none'>
          <AccordionTrigger className="flex justify-between text-[15px] font-normal "> 
            <span className="flex gap-2 items-center">
              <GiShoppingCart  /> Inventory
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 cursor-pointer space-y-4">
            <p className="flex gap-2 items-center"
             onClick={()=>router.push('/inventory')}
            ><AiOutlineFileDone />Inventory</p>
            <p className="flex gap-2 items-center"
             onClick={()=>router.push('/inventory/purchaseRegister')}
            ><MdOutlineInventory2 
            />Purchase Register</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Other Static Menu Items */}
      <div className="flex flex-col mt-4 gap-6 text-[15px]">
        <div className="flex gap-2 items-center">
          <RiShoppingBag4Line /> Sales
        </div>
        <div className="flex gap-2 items-center">
          <RiShoppingBag4Line /> Marketing
        </div>
      </div>

      {/* Business Section */}
      <div className="head-options mt-5 ">
        <p className="font-semibold">Business</p>
      </div>
      <ol  className="flex flex-col list-disc text-[#7B7B7B] gap-5 mt-4 mb-10 ">
        <li>Assign Roles</li>
        <li>Business Profile</li>
        <li>Business Partner</li>
      </ol>
    </div>
  );
}

export default Sidebar;
