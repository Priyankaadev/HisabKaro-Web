// import Header from "@/layout/header/header";
// import Sidebar from "@/layout/sidebar/sidebar";
"use client " 

import SalesGraph from "@/components/graph/salesGraph";
import Input1 from "@/components/input/input1";
import Input2 from "@/components/input/input2";
import Input3 from "@/components/input/input3";
import Input4 from "@/components/input/input4";
import Input5 from "@/components/input/input5";

export default function Home() {
  return (
  <div className="w-full  ">
    <div className="flex justify-between mt-5 mx-5 items-center">
      <p className="font-bold text-[20px] text-[#4F4F4F]">Dashboard</p>
      <div className="flex gap-2 text-[15px]">
        <button className="px-8 py-2 bg-[#6AB7FD] text-white rounded-md shadow-xl">
          Quick Billing
        </button>
        <button className="px-6 py-2 bg-green-100 border-green-500 border-[1px] rounded-md shadow-xl">
         &#8377;IN
        </button>
        <button className="px-6 py-2 bg-red-100 border-red-500 border-[1px] rounded-md shadow-xl">
         &#8377;OUT
        </button>
        
   
      </div>

    </div>
    <div className="flex gap-5">

      <div className="flex flex-col gap-5 ">
      <SalesGraph />
    <div className="flex gap-2">
    <Input2 color={"bg-green-400"} title={"Cash Book"} amount={"1694.69"} date={"On 02 Dec, 2023"} />
    <Input2 color={"bg-red-600"} title={"Expense "} amount={"16"} date={"In Dec, 2023"} />
    </div>
    <div className="flex gap-2">
    <Input4 value={909000}  day={"Today"} month={"July"} year={"FYI 2024"} />
    <Input3  get={2000} give={4000} />
    </div>
    <Input5  />
    </div>

    <div className="rounded-md border shadow-xl w-[50%] p-5"> 
      {/* right side attendance */}
      <div className="flex justify-between items-center font-semibold "> <p>Attendance</p> <p className="text-green-500">View All</p></div>
      <div className="flex justify-evenly items-center mt-2">
        <Input1 color={green} value={0} title={"Present"}/>
        <Input1 color={red} value={99999} title={"Absent"}/>
        <Input1 color={orange} value={0} title={"Half-Day"}/>
        <Input1 color={yellow} value={0} title={"Leave"}/>

      </div>
    </div>
    </div>

  </div>
  )
}
