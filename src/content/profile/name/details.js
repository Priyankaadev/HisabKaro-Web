'use client'
import AddMore from '@/components/popup/addMore'
import { Edit2, Mic } from 'lucide-react'
import React, { useState } from 'react'


function Details() {
  const [assignAssets, setAssignAssets] = useState(false)
  return (
    <div className="flex  flex-col gap-5 z-1 basis-[58%] ">
    
     {/* details */}
      <div className="details rounded-lg border p-4 shadow-lg">
        <p className="mb-3 font-bold">Details</p>
        <div className="grid grid-cols-2 grid-flow-row gap-4">
          <div className="relative  flex gap-2 flex-col ">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700"
            >
              Employee Name
            </label>
            <div className="relative w-full rounded-lg border">          
              <input
                id="name"
                type="text"
                placeholder="Name.."
                className="w-full border border-gray-300 rounded-md px-6 py-1 "
              />
                <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="relative flex gap-2 flex-col">
            <label
              htmlFor="number"
              className="text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <div className="relative w-full rounded-lg border">          
              <input
                id="number"
                type="number"
                placeholder="Number.."
                className="w-full border border-gray-300 rounded-md px-6 py-1 "
              />
                <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
          </div>
          <div className="relative flex gap-2 flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700"
            >
             Department
            </label>
            <div className="relative w-full rounded-lg border">          
              <input
                id="name"
                type="text"
                placeholder="eg. manager.."
                className="w-full border border-gray-300 rounded-md px-6 py-1 "
              />
            </div>
          </div>
          <div className="relative flex gap-2 flex-col ">
            <label
              htmlFor="date"
              className="text-sm font-medium text-gray-700"
            >
              Date of Joining
            </label>
            <div className="relative w-full rounded-lg border">          
              <input
                id="date"
                type="number"
                placeholder="Date of joining.."
                className="w-full border border-gray-300 rounded-md px-6 py-1 "
              />
            </div>
          </div>
        </div>
      </div>
      {/* assets */}
      <div className="assets rounded-lg border p-4 shadow-lg">
        <div className="flex justify-between items-center ">
        <p className="mb-3 font-bold">Assets</p>
        <div className="flex gap-2 items-center">
            <Edit2 size={20} />
      <button
      onClick={()=>setAssignAssets(!assignAssets)}
       className="bg-blue-500 border text-white text-[12px] font-bold p-2 rounded-lg">
        Add More
        </button>
        </div>
        </div>
        {/* popup assign assets */}
        {
          assignAssets?  
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <AddMore assetOpen={setAssignAssets}/>
            </div> : ''
          
        }
        <div className="grid grid-cols-2 grid-flow-row gap-4 z-1">
          <div className=" flex gap-2 flex-col ">
            <label
              htmlFor="company"
              className="text-sm font-medium text-gray-700"
            >
            Company Mobile Number
            </label>
            <div className=" w-full rounded-lg border">          
              <input
                id="company"
                type="number"
                placeholder="Company mobile number.."
                className="w-full border border-gray-300 rounded-md px-6 py-1 "
              />
            </div>
          </div>
          <div className=" flex gap-2 flex-col">
            <label
              htmlFor="number"
              className="text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <div className=" w-full rounded-lg border">          
              <input
                id="number"
                type="number"
                placeholder="Number.."
                className="w-full border border-gray-300 rounded-md px-6 py-1 "
              />
            </div>
          </div>
          <div className=" flex gap-2 flex-col">
            <label
              htmlFor="laptop"
              className="text-sm font-medium text-gray-700"
            >
             Laptop
            </label>
            <div className=" w-full rounded-lg border">          
              <input
                id="laptop"
                type="text"
                placeholder="laptop.."
                className="w-full border border-gray-300 rounded-md px-6 py-1 "
              />
            </div>
          </div>
          <div className=" flex gap-2 flex-col ">
            <label
              htmlFor="asset"
              className="text-sm font-medium text-gray-700"
            >
              Date of Joining
            </label>
            <div className=" w-full rounded-lg border">          
              <input
                id="date"
                type="number"
                placeholder="Date of joining.."
                className="w-full border border-gray-300 rounded-md px-6 py-1 "
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  

  )
}

export default Details
