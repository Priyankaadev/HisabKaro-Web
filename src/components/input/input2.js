import React from 'react'
//icons
import { FcMoneyTransfer } from "react-icons/fc";

function Input2({color, title, amount, date, }) {
  return (
    <div className={`${color} rounded-md py-2 px-8  flex`}>
    <div className='p-1'>
        <FcMoneyTransfer />
    </div>
    <div className='text-[12px] text-white '>
        <p>{title}</p>
        <p>&#8377;{amount}</p>
        <p>{date}</p>
    </div>
    </div>
  )
}

export default Input2
