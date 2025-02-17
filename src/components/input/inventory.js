import React from 'react'
import { SelectDropdown } from '../buttons/selectDropdown'
import { PiPlus } from 'react-icons/pi'

function Inventory() {
  return (
    <div className='p-2 flex flex-col gap-2 rounded-lg '>
        <div className='flex gap-2 '>
        <input 
        type='text'
        placeholder='Location'
        className='rounded-lg p-2 border focus:outline-none focus:ring-0 '

        />
        <input 
        type='text'
        placeholder='Quantity'
        className='rounded-lg p-2 border focus:outline-none focus:ring-0 '

        />
        </div>
        <div className='flex gap-2 '>
         <SelectDropdown/> 
         <button className='p-2  flex justify-center bg-blue-500 rounded-xl '>
          <PiPlus color='white'/></button>
        </div>
      
    </div>
  )
}

export default Inventory
