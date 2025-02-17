import {   Edit2 } from 'lucide-react'
import React from 'react'
import { GiCancel } from 'react-icons/gi'


function AddMore({assetOpen}) {
  return (
    <div className='rounded-xl bg-white p-5 w-[70%] h-[80%]  z-55 flex flex-col gap-3'>
      <div className='self-end' >
        <GiCancel size={22} onClick={()=>assetOpen(false)} />
        </div>
        <p className='text-[22px] mb-2 text-blue-400'>
            Assign Assets
        </p>
        <div className='flex gap-2'>
            <p>Asset Name</p>
            <Edit2 />
        </div>
        <input
        type='text'
        name='asset'
        placeholder='Ex. Laptop, Mobile, etc'
        className='p-2 w-full border rounded-xl focus:outline focus:ring-0'
        />
        <button className='bg-blue-400 text-white py-2 px-4 w-fit rounded-xl '>
            Add More</button>
      <div className='mt-auto flex items-center gap-2'>
         <button className='bg-blue-100 border-blue-500 border text-blue-500 basis-1/2 p-2'
         onClick={()=>{assetOpen(false)}}
         >Cancel</button>
         <button className='bg-green-500  border p-2 text-white basis-1/2'>Save</button>
         
      </div>
    </div>
  )
}

export default AddMore
