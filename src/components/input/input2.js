'use client'
import React from 'react'
//icons
import { FcMoneyTransfer } from "react-icons/fc";

function Input2({color, title, amount, date, }) {
  return (
    <div className={`${color} rounded-lg p-3  w-[50%] flex gap-4`}>
    <div className='p-3 bg-opacity-35 bg-white rounded-md flex items-center '>
        <FcMoneyTransfer size={20} />
    </div>
    <div className='  '>
        <p className='text-[16px] text-white font-semibold'>{title}</p>
        <p className='text-[14px] text-white font-semibold'>&#8377;{amount}</p>
        <p className='text-[12px] text-white '>{date}</p>
    </div>
    </div>
  )
}

export default Input2
