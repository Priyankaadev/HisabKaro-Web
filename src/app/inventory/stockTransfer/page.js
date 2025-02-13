"use client";

import { TableSale } from "@/components/sale/table";
import { StockTransferTable } from "@/components/tables/stockTransfer";
import React from "react";
import { FaSearch } from "react-icons/fa";


function StockTransfer() {
    
  return (
    <div className="w-full">
    
      <div className="rounded-lg mt-5 shadow-xl border p-4 w-[98%]">
        {/* header */}
        <div className="flex justify-between items-center px-5 mb-2 ">
          <p className="font-semibold text-[20px] ">Stock Transfer</p>
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
        <div className="flex gap-2  items-center mb-2 px-5 ">
            <p>From</p>
            <p>To</p>
            <button className="bg-green-400 px-4 py-1 text-white border rounded-xl">Stock Transfer</button>
            
        </div>
        {/* table */}
        <div className="px-5 ">
          <StockTransferTable  />
        </div>
      </div>
    </div>
  );
}

export default StockTransfer;
