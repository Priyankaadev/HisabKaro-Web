'use client'
import React from 'react'
import { HiInformationCircle } from "react-icons/hi2";

function ProfitProduct() {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-3'>
            <img
            src='/products/maggie.png'
            className='rounded-xl w-fit'
            />
            <div className='flex flex-col'>
                <p>Product : <span className='text-blue-400'>Maggie</span></p>
                <div className='flex gap-2'>
                <p>Purchase Price : <span className='text-blue-400'>678.99</span></p>
                <p>MRP : <span className='text-blue-400'>7.88</span></p> 
                </div>
                <div className='flex gap-2'>
                <p>Tax : <span className='text-blue-400'>678.99</span></p>
                <p>Profit : <span className='text-blue-400'>7288</span></p> 
                </div>
                <div>

                </div>
            </div>
        </div>
        <HiInformationCircle />
      
    </div>
  )
}

export default ProfitProduct
