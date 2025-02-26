'use client'
import CalendarPopup from "@/components/calendar/calendar";
import { TableLedger } from "@/components/ledger/table";
import InventoryDetails from "@/components/popup/inventoryDetails";
import PopupLayout from "@/components/popupLayoutWrapper/popupLayout";
import { Switch } from "@/components/ui/switch";
import { Plus, Share2 } from "lucide-react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function Ledger() {
  const [openCalendar, setOpenCalendar] = useState(false)
  const [openCreateBtn, setOpenCreateBtn] =useState(false)

  return (
    <div className="w-full">
      <div className="flex justify-end items-center gap-3 mr-5">
        <SlCalender onClick={()=>setOpenCalendar(!openCalendar)}/>
        <div className="bg-green-100 flex gap-2 px-4 py-2 rounded-2xl"> 
            <p>GST Input & Output</p>
            <Switch />
        </div>
        <Share2 size={18}/>
      </div>
      <div className="rounded-lg mt-5 shadow-xl border p-4 w-[98%]">
        {/* header */}
        <div className="flex justify-between items-center px-5 mb-2 ">
            <p className="font-semibold text-[20px] ">Ledger</p>
            <div className="flex items-center gap-3">
                   <div className="search-inp flex gap-2 bg-[#f5f8fa] items-center rounded-xl  px-6">
                          <FaSearch size={20} />
                          <input
                            type="text"
                            name="search"
                            placeholder="Search here..."
                            className="w-full p-2 bg-[#f5f8fa] rounded-xl outline-none focus:ring-0 focus:border-transparent"
                          
                          />
                    </div>
                <button
                onClick={()=>setOpenCreateBtn(!openCreateBtn)}
                 className="bg-blue-400 rounded-xl flex p-2 items-center text-white "
                 >
                  <Plus color=" white" size={20}/>Create Ledger</button>
                  {openCreateBtn && 
                  <PopupLayout>
                    <InventoryDetails onCancel={setOpenCreateBtn}/>
                  </PopupLayout>
                  }
            </div>
        </div>
        {/* table */}
        <div className="px-5 ">
            <TableLedger />
        </div>
      </div>
      {openCalendar && <CalendarPopup isOpen={setOpenCalendar} />}
    </div>
  );
}

export default Ledger;
