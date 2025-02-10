import Image from 'next/image';
import React from 'react'
//icons
import { RxCross1 } from "react-icons/rx";

function MarkAttendance({name, location, date, profile}) {
  return (
    <div className='rounded-md '>
       <div className='p-2 rounded-full bg-green-100'><RxCross1 /></div>
       <p className='text-blue-500 text-[25px] font-semibold'>Mark Attendance</p>
    
    <div className='rounded-md  p-5 shadow-lg'>
      <div className='flex justify-between'>
        <p className='font-semibold'>Pratap Singh Chauhan</p>
        <button className='bg-blue-500 text-white p-2'>View Profile</button>
     
     
       </div>
       <div className='flex '>
        <div className='flex flex-col gap-2 basis-1/3'>
          <button className='px-6 py-2 bg-green-500 text-white'>Present</button>
          <button className='px-6 py-2 bg-red-100'>Absent</button>
          <button className='px-6 py-2 bg-yellow-100'>Half-Day</button> 
          <button className='px-6 py-2 bg-orange-100'>Leave</button>

        </div>
        <div className='basis-2/3 '>
        <Image src={profile} alt='Profile Picture'/>

        </div>
    </div>
   

    </div>

    <div className='rounded-md flex gap-1 shadow-lg'>
        <Image />
        <div className='flex flex-col gap-1'>
            <p className='font-bold'>Marked by {name}</p>
            <p className='font-semibold'>{date}</p>
            <p>{location}</p>
        </div>
    </div>

    <div className='flex justify-between '>
        <button className='border-[1px] border-blue-600 text-blue-500 bg-blue-200 py-3 px-6 '>
            Cancel
        </button>
        <button className='border-[1px] border-green-600 text-white bg-green-600 py-3 px-6 '>
            Submit
        </button>
    </div>

    </div>
  )
}

export default MarkAttendance
