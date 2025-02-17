'use client'
import { TableSale } from "@/components/sale/table";
import { ProfitLossTable } from "@/components/tables/profitLossTable";
import { Share2 } from "lucide-react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function ProfitLoss() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-2  ">
        <div className="rounded-lg shadow-xl border p-2 flex items-center gap-3  ">
        <p>Stock Value</p> <div className="rounded-xl bg-green-100 ">&#8377;5,00,000</div>        
        </div>
        <div className="rounded-lg shadow-xl border p-2 flex items-center gap-3  ">
        <p>Tax</p> <div className="rounded-xl bg-green-100 ">&#8377;50,000</div>
         
        </div>
        <div className="rounded-lg shadow-xl border p-2 flex items-center gap-3  ">
        <div className="flex items-center gap-2">Total &#8377;5,50,000 </div>
         
        </div>
        </div>
       <div className="flex items-center gap-2 mr-5">
        <SlCalender />
        <Share2 size={18}/>
        </div>
      </div>
      <div className="rounded-lg mt-5 shadow-xl border p-4 w-[98%]">
        {/* header */}
        <div className="flex justify-between items-center px-5 mb-2 ">
            <p className="font-semibold text-[20px] ">Sold Items</p>
                   <div className="search-inp flex gap-2 bg-[#f5f8fa] items-center rounded-xl  px-6">
                          <FaSearch size={20} />
                          <input
                            type="text"
                            name="search"
                            placeholder="Search here..."
                            className="w-full p-2 bg-[#f5f8fa] rounded-xl outline-none focus:ring-0 focus:border-transparent"
                          
                          />
                    </div>
               
        </div>
        {/* table */}
        <div className="px-5 ">
           <ProfitLossTable />
        </div>
      </div>
    </div>
  );
}

export default ProfitLoss;
