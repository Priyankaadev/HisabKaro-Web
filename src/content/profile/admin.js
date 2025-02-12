import { Switch } from '@/components/ui/switch'
import React from 'react'

function Admin() {

  return (
    <div className='rounded-lg shadow-md border p-3'>
        <div className='rounded-lg shadow-sm border px-4 py-2 flex items-center justify-between '>
            <p>Assign Admin Rights</p>
            <Switch />
        </div>

        <div className='rounded-lg shadow-lg border py-2 '>
     {/* Accordion Menu */}
      <Accordion type="single" collapsible className="mt-3 ">

        {/* Finance */}
        <AccordionItem value="finance  " className='border-none'>
          <AccordionTrigger className="flex justify-between text-[15px]  font-normal">
            <span className="flex justify-between items-center">
               Finance 
               <div className='flex gap-4 items-center'>
                <p>View</p>
                <p>Edit</p>
               </div>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 space-y-4">
            <p className="flex justify-between items-center">All 
                <div className='flex gap-4 '>
                
                </div>
            </p>
            <p className="flex justify-between items-center">Ledger 
                <div className='flex gap-2 '>
                
                </div>
            </p>
            <p className="flex justify-between items-center">Invoice<div>
                
                </div>
            </p>
            <p className="flex justify-between items-center">Sale Register<div>
                
                </div></p>
            <p className="flex justify-between items-center">Profit-Loss<div>
                
                </div></p>
            <p className="flex justify-between items-center">Udhari<div>
                
                </div></p>
            <p className="flex justify-between items-center">Bank Analysis<div>
                
                </div></p>
          </AccordionContent>
        </AccordionItem>
w
        {/* HRMS */}
        <AccordionItem value="hrms " className='border-none'>
          <AccordionTrigger className="flex justify-between text-[15px] font-normal">
            <span className="flex justify-between items-center">
              HRMS
              <div className='flex gap-2 items-center'>
                <p>View</p>
                <p>Edit</p>
               </div>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 space-y-4">
            <p className="flex  justify-between  items-center">Salary  <div className='flex gap-2 '>
                
                </div></p>
            <p className="flex  justify-between items-center">Salary Advance  <div className='flex gap-2 '>
                
                </div></p>
            <p className="flex justify-between  items-center">Ledger  <div className='flex gap-2 '>
                
                </div></p>
            <p className="flex  justify-between  items-center">Allowance/Bonus  <div className='flex gap-2 '>
                
                </div></p>
            <p className="flex justify-between  items-center">Deduction  <div className='flex gap-2 '>
                
                </div></p>
            <p className="flex  justify-between  items-center">Employee Ledger  <div className='flex gap-2 '>
                
                </div></p>
            <p className="flex  justify-between  items-center">Schedule  <div className='flex gap-2 '>
                
                </div></p>
            <p className="flex  justify-between  items-center">Request  <div className='flex gap-2 '>
                
                </div></p>
            <p className="flex  justify-between  items-center">Hiring  <div className='flex gap-2 '>
                
                </div></p>
          </AccordionContent>
        </AccordionItem>

        {/* Inventory */}
        <AccordionItem value="inventory" className='border-none'>
          <AccordionTrigger className="flex justify-between text-[15px] font-normal "> 
            <span className="flex justify-between items-center">
            Inventory
              <div className='flex gap-2 items-center'>
                <p>View</p>
                <p>Edit</p>
               </div>
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 space-y-4">
            <p className="flex justify-between items-center">Inventory 
                 <div className='flex gap-2 '>
                
                </div>
            </p>
            <p className="flex justify-between items-center">Purchase Register 
                 <div className='flex gap-2 '>
                
                </div>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        </div>
      
    </div>
  )
}

export default Admin
