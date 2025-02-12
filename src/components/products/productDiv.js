import React from 'react'
//icons
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Image from 'next/image';


function ProductDiv({stock, price}) {
  return (
    <div className='border border-blue-400 rounded-md gap-2 px-5 py-3 bg-green-50'>
        <p className='text-[15px] font-semibold'>Organic Bananas</p>
        <p>Stock: {stock}</p>
        <p>&#8377;{price}</p>
        <div className='flex justify-between'>
        <Image src='/auth/logo.png' alt='Product Item' width={35} height={5}/>
        <button className='flex gap-1 px-2 items-center bg-blue-500 rounded-lg   text-white'><FaMinus color='white' />1<FaPlus color='white'/></button>
        </div>

      
    </div>
  )
}

export default ProductDiv
