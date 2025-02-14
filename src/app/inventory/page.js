"use client";
import CalendarPopup from "@/components/calendar/calendar";
import { CashInvTable } from "@/components/tables/cashInvTable";
import FilterPayment from "@/components/popup/filterPayment";
import React, { useState } from "react";
import { FaSearch, FaShareAlt } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import InventoryStock from "@/components/buttons/inventoryStock";
import { Share2Icon } from "lucide-react";
import { BiPlus } from "react-icons/bi";
import AddManually from "@/components/popup/addManually";

function Inventory() {
  const [openFilterPayment, setOpenFilterPayment] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [popupAddManually, setPopupAddManually] = useState(false)
  return (
    <div className="w-full flex flex-col gap-3 relative z-1">
      {/* highlights */}
      <div className="heading flex justify-between items-center">
        {/* leftside highlights */}
        <div className="rounded-lg shadow-md border py-2 px-4 flex items-center gap-3 ">
          <div className="flex items-center gap-2 ">
            <p>Stock Value</p>
            <div className="rounded-xl bg-green-100 py-1 px-2">
              &#8377;5,00,000
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p>Tax</p>
            <div className="rounded-xl bg-green-100 py-1 px-2">
              &#8377;50,000
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl py-1 px-2  bg-blue-100">
            Total <span className="text-blue-400">&#8377;5,50,000 </span>
          </div>
        </div>
        {/* rightside icons */}
        <div className=" flex gap-4 basis-[15%] items-center p-2">
          <SlCalender
            size={20}
            onClick={() => {
              if (openCalendar) {
                !openCalendar;
              }
              setOpenCalendar(!openCalendar);
            }}
          />
          <div
            onClick={() => {
              if (openFilterPayment) {
                !openFilterPayment;
              }
              setOpenFilterPayment(!openFilterPayment);
            }}
          >
            <HiOutlineAdjustmentsHorizontal size={20} />
          </div>
          <FaShareAlt size={20} />
        </div>
      </div>

      {/* popup filter payment */}
      {openFilterPayment ? (
        <FilterPayment isOpen={setOpenFilterPayment} />
      ) : null}
      {openCalendar ? <CalendarPopup isOpen={setOpenCalendar} /> : null}
      <div className="rounded-lg shadow-xl border p-4 w-[98%]  ">
        {/* heading and options */}
        <div className="flex justify-between items-center mb-2 px-2">
            <p className="font-bold text-[22px]">Stock</p>
            <div className="flex items-center gap-2">
                <div className="search-inp flex gap-2 bg-[#f5f8fa] items-center rounded-xl  px-6">
                        <FaSearch size={20} />
                        <input
                          type="text"
                          name="search"
                          placeholder="Search Products..."
                          className="w-full p-2 bg-[#f5f8fa] rounded-xl outline-none focus:ring-0 focus:border-transparent "
                        />
                      </div>
                   <button className="rounded-2xl border bg-blue-400 text-white px-4 py-2">Stock Transfer</button>
            </div>

        </div>
    {/* highlights */}
     <div className="flex justify-between items-center px-2 mt-5">
        <div className="flex gap-3 items-center">
            <InventoryStock  stock={"Out Of Stock"}/>
            <InventoryStock  stock={"Not Sold 1 month"}/>
            <InventoryStock  stock={"Not Sold 2 month"}/>
        </div>
        <div className="flex items-center gap-2">
            <button className=" bg-white px-4 py-1 flex rounded-lg shadow-md gap-1 items-center" >
                <Share2Icon size={18} /> Upload
            </button>
            <button 
            onClick={()=>{
              if(popupAddManually){
                !popupAddManually
              }
              setPopupAddManually(!popupAddManually)
            console.log("clicked add manually");
            
            }} 
            className=" bg-white px-4 gap-1 py-1 flex rounded-lg shadow-md items-center " >
                <BiPlus size={20} /> Add Manually
            </button>
          
        </div>
    </div>
    {
      popupAddManually? <AddManually isOpen={setPopupAddManually}/> : null
    }
    {/* table */}
        <div className="px-5 py-2 ">
          <CashInvTable
            h1={"Items"}
            h2={"Product ID"}
            h3={"Quantity"}
            h4={"MRP"}
          />
        </div>

      </div>
    </div>
  );
}

export default Inventory;
