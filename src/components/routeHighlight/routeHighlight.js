import React from 'react'

function RouteHighlight() {
  return (
    <div className="flex justify-between mt-5 mb-5 items-center mx-3">
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
  )
}

export default RouteHighlight
