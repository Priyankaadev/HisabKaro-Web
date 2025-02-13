'use client'
import CalendarPopup from '@/components/calendar/calendar';
import {  TableCash } from '@/components/cashbook/table';
import FilterPayment from '@/components/popup/filterPayment';
import React, { useState } from 'react'
import { FaShareAlt } from 'react-icons/fa';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { SlCalender } from 'react-icons/sl';

function Cashbook() {
  const [openFilterPayment, setOpenFilterPayment] =useState(false)
  const [openCalendar , setOpenCalendar] = useState(false)
  return (
    <div className='w-full flex flex-col gap-3 relative z-1'>
      <div className='heading flex gap-4'>
        <div className='rounded-lg shadow-lg border flex justify-between basis-[42%] items-center p-3'>
            <p className='text-gray-500'>Running Balance</p>
            <p className='text-green-500'>1694.98</p>
        </div>
        <div className='rounded-lg shadow-lg border flex justify-between basis-[42%] items-center p-3'>
        <p className='text-gray-500'>Opening Cash Balance</p>
        <p className='text-blue-500'>200</p>
        </div>
        <div className=' flex gap-4 basis-[15%] items-center p-2'>
            <SlCalender  size={20}
            onClick={()=>{
              if(openCalendar){
                !openCalendar
              }
             setOpenCalendar( !openCalendar)
            }}
            />
           <div
             className='p-1 shaow-md border bg-blue-400 rounded-lg' 
             onClick={()=>{
              if(openFilterPayment){
                !openFilterPayment
              }
              setOpenFilterPayment(!openFilterPayment)
            }}
             ><HiOutlineAdjustmentsHorizontal size={18} color='white'  /></div> 
            <FaShareAlt size={20}/>
        </div>
      </div>
      {/* popup filter payment */}
      { 
        openFilterPayment? 
          <FilterPayment isOpen={setOpenFilterPayment}/>
          : null
      }
    {
      openCalendar? <CalendarPopup isOpen={setOpenCalendar}/> : null
    }
      <div className='rounded-lg shadow-xl border p-4 w-[98%]  '>
        <div className='px-5 '>
            <TableCash />

        </div>
        
      </div>
    </div>
  )
}

export default Cashbook
