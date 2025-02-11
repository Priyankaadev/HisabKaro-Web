import React from 'react'
import DashboardInput from '../input/dashboardInput'

function Highlight() {
  return (
    <div className="rounded-lg shadow-lg mt-3 mb-3  border p-3 gap-3 flex justify-between ">
    <div className="flex gap-3">
     <DashboardInput amount={2000} mode={"Cash"} />
     <DashboardInput amount={990} mode={"UPI"} />
     <DashboardInput amount={8700} mode={"Card"} />
     <DashboardInput amount={700} mode={"Online"} />
     <DashboardInput amount={2300} mode={"Cheque"} />
     </div>
     <div className="flex gap-2 items-center">
       <p className="font-bold text-[20px]">Total &#8377;19000</p>
       <p className="p-1 rounded-lg bg-gray-100 text-[13px] ">02 Dec,2023 </p>
     </div>
   </div>
  )
}

export default Highlight
