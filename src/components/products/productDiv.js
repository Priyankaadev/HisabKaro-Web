import React from 'react'
//icons
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";


function ProductDiv({stock, price}) {
  return (
    <div className='border border-blue-400 rounded-md gap-2 p-3 bg-green-100'>
        <p className='text-[15px] font-semibold'>Organic Bananas</p>
        <p>Stock: {stock}</p>
        <p>{price}</p>
        <div className='flex justify-between'>
        <Image />
        <button className='flex gap-1 p-2'><FaMinus />{number}<FaPlus /></button>
        </div>

      
    </div>
  )
}

export default ProductDiv
