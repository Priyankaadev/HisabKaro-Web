'use client'
import Image from 'next/image';
import React from 'react'
import { AiFillPieChart } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { IoBagCheckOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BiBell } from "react-icons/bi";



function Header() {

  
  return (
    <div className='w-full  flex justify-between px-[2.5%] py-2'>
              
    <div className='head-left flex justify-between gap-20 '>
            <div className='flex items-center gap-2'>
             <div  className='logo-box bg-[#edf9f2] rounded-md p-2 flex items-center ml-3'>
                <Image
                width={30}
                height={12}
                src='/auth/logo.png'
                alt='website logo' 
                className=''
                />
                </div>
                   <p className='font-semibold text-[20px]'>Hisab Karo</p> 
            </div> 
            <div className='head-left flex items-center gap-4'>
            <div className='dash flex gap-2 items-center'>
                <AiFillPieChart /> 
                <p>
                    Dashboard
                </p>
            </div>
            <div className='finance flex gap-2 items-center'>
                <VscGraph /> 
                <p>
                    Finance
                </p>
            </div>
            <div className='hrms flex gap-2 items-center'>
                <IoBagCheckOutline /> 
                <p>
                    HRMS
                </p>
            </div>
            <div className='inventory flex gap-2 items-center'>
                <GiShoppingCart /> 
                <p>
                   Inventory 
                </p>
            </div>

            </div>
          </div>

        

        <div className='head-right flex gap-5 items-center'>
         
          <div className='search-inp flex gap-2 bg-[#F9FAFB] items-center rounded-md py-2 px-6'>
            <FaSearch
            size={20}
             />
            <input
            type='text'   
            name='search'        
            placeholder='Search here...' 
            className='py-2 px-6 bg-[#F9FAFB]  outline-none focus:ring-0 focus:border-transparent'
             />
             </div>
             <div className='calender-icon'>
                <SlCalender size={22} />
             </div>
             <div className='bell-icon flex p-2 bg-[#FFFAF1]'>
                <BiBell  size={22}/>
                <div className='rounded-full h-2 w-2 top-0 bg-red-500'></div>

             </div>
             <div>

             </div>

        </div>



    </div>
  )
}

export default Header
