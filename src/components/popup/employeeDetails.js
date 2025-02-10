import React from "react";
//icons
import { MdKeyboardVoice } from "react-icons/md";

//shadcn
import { Switch } from "@/components/ui/switch"

function EmployeeDetails() {
  return (
    <div className="rounded-md ">
      <div className="p-2 rounded-full bg-green-100 ">
        <RxCross1 />
      </div>
      <p className="text-blue-500 text-[25px] font-semibold">
        Employee Details
      </p>

      {/* dropdown */}

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Employee Name
          </label>
          <div className="flex justify-between p-2">
            <input
              type="text"
              id="name"
              name="name"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter Name"
            />
            <MdKeyboardVoice />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="number" className="text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <div className="flex justify-between p-2">
            <input
              type="number"
              id="number"
              name="number"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter Mobile Number"
            />
            <MdKeyboardVoice />
          </div>
        </div>

        <div className="flex flex-col col-span-2">
          <label htmlFor="salary" className="text-sm font-medium text-gray-700">
            Salary
          </label>
          <div className="flex justify-between p-2">
            <input
              type="number"
              id="salary"
              name="salary"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Monthly Salary"
            />
            <MdKeyboardVoice />
          </div>
        </div>
      </div>

      <hr />
      <div className="flex justify-around ">
        <p>Assign Admin Rights</p>
        <Switch className="bg-green-500"/>
      </div>

      
    {/* conditional div below */}




    <div className='flex justify-between '>
        <button className='border-[1px] border-blue-600 text-blue-500 bg-blue-200 py-3 px-6 '>
            Cancel
        </button>
        <button className='border-[1px] border-green-600 text-white bg-green-600 py-3 px-6 '>
            Submit
        </button>
    </div>
    </div>
  );
}

export default EmployeeDetails;
