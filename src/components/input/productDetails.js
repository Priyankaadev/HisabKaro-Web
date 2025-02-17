import React from 'react'
import { SelectDropdown } from '../buttons/selectDropdown'
import { PiPlus } from 'react-icons/pi'

function ProductDetails() {
  return (
    <div className='w-full flex gap-2 p-2  rounded-lg '>
      <div className='border border-dashed flex basis-[40%] items-center justify-center'>
      Upload Image
      </div>
      <div className='flex flex-col gap-2 basis-[60%]'>
        <input 
        type='text'
        placeholder='Product Name'
        className='rounded-lg p-2 border focus:outline-none focus:ring-0 '

        />
        <input 
        type='text'
        placeholder='Product ID'
        className='rounded-lg p-2 border focus:outline-none focus:ring-0 '

        />
        <div className='flex gap-2'>
            <SelectDropdown/> 
            <button className='p-2 basis-[20%] flex justify-center bg-blue-500 rounded-xl '><PiPlus color='white'/></button>
        </div>
        <div className='flex gap-2'>
            <SelectDropdown/> 
            <button className='p-2 basis-[20%] flex justify-center bg-blue-500 rounded-xl '><PiPlus color='white'/></button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ProductDetails
