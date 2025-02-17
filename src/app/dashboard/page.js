'use client'
import React from "react";


import SalesGraph from "@/components/graph/salesGraph";
import Highlight from "@/components/highlights/highlight";
import Input1 from "@/components/input/input1";
import Input2 from "@/components/input/input2";
import Input3 from "@/components/input/input3";
import Input4 from "@/components/input/input4";
import Input5 from "@/components/input/input5";
import Profile1 from "@/components/profile/profile1";
import { useRouter } from "next/navigation";

function Dashboard() {

  const router = useRouter()
  return (
    <>
      <Highlight />
      <div className="flex gap-3 ">
        <div className="flex flex-col gap-3 ">
          <SalesGraph />
          <div className="flex gap-2">             
               <Input2
             
              color={"bg-green-400"}
              title={"Cash Book"}
              amount={"1694.69"}
              date={"On 02 Dec, 2023"}
            />
          
            <Input2
              color={"bg-red-600"}
              title={"Expense "}
              amount={"16"}
              date={"In Dec, 2023"}
            />

          </div>
          <div className="flex gap-2">
            <Input4
              value={909000}
              day={"Today"}
              month={"July"}
              year={"FYI 2024"}
            />
            <Input3 get={2000} give={4000} />
          </div>
          <Input5 />
        </div>

        <div className="rounded-lg border shadow-xl w-[50%] p-3 flex flex-col h-100vh">
          {/* right side attendance */}
          <div className="flex justify-between items-center font-semibold ">
            <p>Attendance</p>
            <p className="text-green-500 cursor-pointer" onClick={()=>router.push('/dashboard/staff')}>View All</p>
          </div>
          <div className="flex gap-2 items-center mt-3">
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

          <div className=" profile flex flex-col mt-5 gap-5 ">
            <Profile1 />
            <Profile1 />
            <Profile1 />
            <Profile1 />
            <Profile1 />
            <Profile1 />
            <Profile1 />
          </div>

          <div className="flex gap-2 mt-auto">
            <Input2
              color={"bg-orange-400"}
              title={"Salary"}
              amount={"1694.69"}
              date={"On 02 Dec, 2023"}
            />
            <Input2
              color={"bg-blue-500"}
              title={"Advance  "}
              amount={"16"}
              date={"In Dec, 2023"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
