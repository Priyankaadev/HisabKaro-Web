import React from 'react'
import { SlCalender } from "react-icons/sl";

function Input4({value, day, month, year}) {
  return (
    <div className='shadow-lg rounded-md p-4'>
        <div className='flex justify-between'>
            <p className='font-semibold'>Invoice Value</p>
            <button className='py-2 px-4 rounded-lg text-white bg-green-500'>View</button>
        </div>
        <div className='flex justify-between'>
      <p>&#8377;{value}</p>  
      <SlCalender />
    </div>
    <div className='flex justify-between'>
        <button className='bg-[#e8e7e7] text-[#CDCDCD]  border-[1px] border-[gray]  rounded-md p-2'>
            {day}
        </button>
        <button className='bg-[#e8e7e7] text-[#CDCDCD] border-[1px] border-[gray]  rounded-md p-2'>
            {month}
        </button>
        <button className='bg-[#e8e7e7] text-[#CDCDCD] border-[1px] border-[gray]  rounded-md p-2'>
            {year}
        </button>
    </div>
    </div>
  )
}

export default Input4
