'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useState } from "react";
  import { GoArrowDownLeft } from "react-icons/go";
import InventoryDetails from "../popup/inventoryDetails";
  
  const Cash = [
    {
      head:"Amount",
      Amount: 694.69,
      Mode: "Cash",
      Date: "14/02/2024",
      From: "Customer",
    
    },
    {
      
        Amount: 694.69,
        Mode: "Cash",
        Date: "14/02/2024",
        From: "Customer",
    },
    {
        Amount: 694.69,
        Mode: "Cash",
        Date: "14/02/2024",
        From: "Customer",
    },
    {
        Amount: 694.69,
        Mode: "Cash",
        Date: "14/02/2024",
        From: "Customer",
    },
    {
        Amount: 694.69,
        Mode: "Cash",
        Date: "14/02/2024",
        From: "Customer",
    },
    {
        Amount: 694.69,
        Mode: "Cash",
        Date: "14/02/2024",
        From: "Customer",  
    },
    {
        Amount: 694.69,
      Mode: "Cash",
      Date: "14/02/2024",
      From: "Customer",
    },
  ]
  
  export function CashInvTable({h1,h2,h3,h4}) {
    const [openInvView, setOpenInvView]= useState(false)
    return (
   <>
   <Table className='relative' >
      
        <TableHeader >
          <TableRow className='border-none text-gray-500 ' >
            <TableHead >{h1}</TableHead>
            <TableHead>{h2}</TableHead>
            <TableHead>{h3}</TableHead>
            <TableHead >{h4}</TableHead>
            <TableHead className='text-right' >View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Cash.map((cash, idx) => (
            <TableRow key={idx} className='border-none '>
              <TableCell className='flex gap-2 items-center' ><GoArrowDownLeft color="green" size={22}/>&#8377;{cash.Amount}</TableCell>
              <TableCell>{cash.Mode}</TableCell>
              <TableCell>{cash.Date}</TableCell>
              <TableCell>{cash.From}</TableCell>
              <TableCell className='text-right' >
                <button
                onClick={()=>{
                  if(openInvView){
                    !openInvView
                  }
                  setOpenInvView(!openInvView)
                }}
                 className="text-white rounded-lg bg-blue-400 px-5 py-2">
                  View</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
     
       
      </Table>

      {/* Details popup when clicked view*/}
      {openInvView && (
         <InventoryDetails isOpen={setOpenInvView}/>
                   
            )}

      </>
    )
  }
  