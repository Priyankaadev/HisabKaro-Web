"use client"
import React from 'react'
import PaymentMode from '../buttons/paymentMode'

function FilterPayment({isOpen}) {
  return (
    <div className='h-auto z-30 bg-white top-[11%] absolute w-[60%] right-[7%] border shadow-xl rounded-xl p-5 flex flex-col gap-3'>
        <p className='font-bold text-[20px]'>
            Filter Payment
        </p>
        <p className='text-[15px] text-gray-400'>Payment Sources</p>
        <div className='flex gap-2 justify-stretch items-center'>
            <PaymentMode mode={"Cash"} />
            <PaymentMode mode={"UPI"} />
            <PaymentMode mode={"Card"} />
            <PaymentMode mode={"Online"} />
            <PaymentMode mode={"Cheque"} />
        </div>
        <div className='border-t-[1px] border-gray-400 w-fit py-3 flex gap-2'>
        <button className='rounded-2xl px-4 py-1 border border-gray-500 text-gray-400 '>All Payments</button>
        <button className='rounded-2xl px-4 py-1 border border-gray-500 text-gray-400'>IN</button>
        <button className='rounded-2xl px-4 py-1 border border-gray-500 text-gray-400'>OUT</button>
        </div>

        <div className='flex flex-col gap-2'>
            <button className='bg-green-500 text-white rounded-lg border p-2'>Confirm</button>
            <button 
            onClick={()=>isOpen(false)}
            className='  rounded-lg border text-black p-2'>Cancel</button>
        </div>

         

      
    </div>
  )
}

export default FilterPayment
