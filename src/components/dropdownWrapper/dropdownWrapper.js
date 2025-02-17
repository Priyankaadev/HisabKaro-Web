'use client'
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";

function DropdownWrapper({children}) {
    // const [openDropdown, setOpenDropdown] = useState(false) 
      const [dropdownState, setDropdownState] = useState({
        product: false,
        inventory: false,
        purchase: false,
        invoices: false,
      });
    
      const toggleDropdown = (dropdown) => {
        setDropdownState((prevState) => ({
          ...prevState,
          [dropdown]: !prevState[dropdown], // Toggle only the clicked dropdown
        }));
      };
    
  return (
    <>
    <div
  
    className='w-full rounded-xl bg-white p-2 flex flex-col gap-5'>
    
    <div 
     onClick={()=>toggleDropdown("product")}
      className='w-full rounded-xl  bg-white flex justify-between'>
        <p>Product Details</p>      
        <FaChevronDown color='gray' size={20} />
   
    </div>
    {dropdownState.product && <div className="w-full h-auto">{children[0]}</div>}
    </div>

    <div
  
    className='w-full rounded-xl bg-white p-2 flex flex-col gap-5'>
    <div 
     onClick={()=>toggleDropdown("inventory")}
      className='w-full rounded  bg-white flex justify-between'>
        <p>Inventory</p>      
        <FaChevronDown color='gray' size={20} />
   
    </div>
    {dropdownState.inventory && <div className="w-full h-auto">{children[1]}</div>}
 </div>

    <div
  
    className='w-full rounded-xl bg-white p-2 flex flex-col gap-5'>
    <div 
     onClick={()=>toggleDropdown("purchase")}
      className='w-full rounded  bg-white flex justify-between'>
        <p>Purchase, Price, Taxes & MRP</p>      
        <FaChevronDown color='gray' size={20} />
   
    </div>
    {dropdownState.purchase && <div className="w-full h-auto">{children[2]}</div>}
    </div>
 
    <div
  
  className='w-full rounded-xl bg-white p-2 flex flex-col gap-5'>
    <div 
     onClick={()=>toggleDropdown("invoices")}
      className='w-full rounded  bg-white flex justify-between'>
        <p>Invoices</p>      
        <FaChevronDown color='gray' size={20} />
   
    </div>
  
    {dropdownState.invoices && <div className="w-full h-auto">{children[3]}</div>}
    </div>
    </>

  )
}

export default DropdownWrapper
