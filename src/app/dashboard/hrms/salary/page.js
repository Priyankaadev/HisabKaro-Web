'use client'
import Profile1 from '@/components/profile/profile1'
import ProfileAdvance from '@/components/profile/profileAdvance'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SalaryPage() {
  return (
    <div className='w-full'>
        <div className='flex rounded-xl shadow-lg border justify-between items-center p-2 w-[30%]'>
            <p>Total Due</p>
            <p className='text-green-500'>1699.33</p>
        </div>
        <div className="rounded-lg shadow-lg border p-[3%] mt-2 w-full ">
        <div className="flex justify-between">
        {/* heading */}
        <p className='text-[22px]'>Salary </p>
          {/* search bar */}
        <div className="search-inp flex gap-2 basis-1/3 bg-[#f5f8fa] items-center rounded-xl  px-6">
          <FaSearch size={20} />
          <input
            type="text"
            name="search"
            placeholder="Search here..."
            className="w-full p-2 bg-[#f5f8fa] rounded-xl outline-none focus:ring-0 focus:border-transparent "
          
          />
        </div>

        </div>
        {/* employees */}
        <div className=" profile flex flex-col mt-5 gap-5 ">
        <ProfileAdvance />
        <ProfileAdvance />
        <ProfileAdvance />
        <ProfileAdvance />
        <ProfileAdvance />
        <ProfileAdvance />
        <ProfileAdvance />
          </div>
      </div>
      
    </div>
  )
}

export default SalaryPage
