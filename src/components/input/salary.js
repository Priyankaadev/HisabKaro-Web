'use client'
import { usePathname } from "next/navigation";
import React from "react";

function Salary() {
    const path = usePathname()
    const salary = path.includes("Advance")
  return (
   <>
    {salary? <div
     className=" p-1 rounded-lg bg-red-100 border border-red-600 text-red-600 "
     >
           93.38
    </div> : <div
     className=" p-1 rounded-lg bg-green-100 border border-green-600 text-green-600 "
     >
           93.38
    </div>}
    </>
  )
}

export default Salary;
