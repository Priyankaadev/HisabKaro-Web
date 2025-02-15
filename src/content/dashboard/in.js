'use client'

import { PickDate } from "@/components/calendar/pickDate";
import { Dropdown } from "@/components/cart/dropdown";
import Options from "@/components/input/options";
import MoreDetails from "@/components/moreDetails/moreDetails";

import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


function In() {
  const [closeButton, setCloseButton] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const handleCloseButton= ()=>{
    if(closeButton){
      !closeButton
    }
    setCloseButton(!closeButton)
  }
  return (
    <div className="rounded-lg h-[90%] relative shadow-lg border w-full py-4 px-[2%] flex flex-col gap-3">
      <div className="head flex justify-between items-center mb-2 ">
        <p className="font-semibold text-[15px]">Products</p>
        <PickDate />
      </div>

      <div className="flex items-center gap-3 ">
        <Options option={"Cash"} />
        <Options option={"UPI"} />
        <Options option={"Card"} />
        <Options option={"Online"} />
        <Options option={"Cheque"} />
      </div>
    <input 
    type="number"
    className="border rounded-2xl p-2 w-full focus:outline-none focus:ring-0"
    placeholder="Amount.."
    />
    <textarea
className="border p-2 rounded-xl focus:outline-none focus:ring-0 "
    name="comment"
    rows='6'
    cols='full'
    placeholder="Comment"
    />
  {  closeButton? 
   <button 
    onClick={()=>{
      handleCloseButton()

    }}
    className="flex gap-1 mb-5 bg-blue-400 w-fit shadow-lg shadow-blue-300 rounded-lg items-center text-white py-2 px-4">
      Add more details
 <div
       className="bg-white bg-opacity-40  rounded-full ">
        <RxCross2   color="white"/>
       </div> 
    </button> 
    :  
    <button 
    onClick={()=>{
      handleCloseButton()

    }}
    className=" bg-blue-400 w-fit rounded-lg  text-white py-2 px-4">
      Add more details
 
    </button>

    }

   {closeButton?
    <MoreDetails /> :null }
  
      {/* buttons */}
       <div className="checkout mt-auto w-full flex justify-end ">
        {/* <div className="buttons flex gap-2 items-center basis-1/2  absolute bottom-2 mr-5">
            <Dropdown />
            <button 
            onClick={()=>{
                setCheckoutOpen(!checkoutOpen)
            }}
            className="bg-green-500 text-white w-52 h-10 shadow-lg border basis-2/3  py-1 rounded-lg">Next</button>
            
        </div> */}

       
      </div>

    </div>
  );
}

export default In;
