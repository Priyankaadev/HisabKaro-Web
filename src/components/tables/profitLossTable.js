'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useState } from "react"
import PopupLayout from "../popupLayoutWrapper/popupLayout"
import InventoryDetails from "../popup/inventoryDetails"
import ProfitLoss from "../popup/profitLoss"

  
  const Profit = [
    {
 
      Invoice: 1234567890123,
      Amount:"1,10,000 ",
      Date: "14/02/2024",
      Category: "Paid"
    
    },
    {
 
        Invoice: 1234567890123,
        Amount:"1,10,000 ",
        Date: "14/02/2024",
        Category: "Paid"
      
      },
      {
 
        Invoice: 1234567890123,
        Amount:"1,10,000 ",
        Date: "14/02/2024",
        Category: "Paid"
      
      },
      {
 
        Invoice: 1234567890123,
        Amount:"1,10,000 ",
        Date: "14/02/2024",
        Category: "Paid"
      
      },
      {
 
        Invoice: 1234567890123,
        Amount:"1,10,000 ",
        Date: "14/02/2024",
        Category: "Paid"
      
      },
      {
 
        Invoice: 1234567890123,
        Amount:"1,10,000 ",
        Date: "14/02/2024",
        Category: "Paid"
      
      },
      {
 
        Invoice: 1234567890123,
        Amount:"1,10,000 ",
        Date: "14/02/2024",
        Category: "Paid"
      
      },
   
  ]
  
  export function ProfitLossTable() {
    const [showProfit, setShowProfit] = useState(false)
    return (
      <Table >
      
        <TableHeader >
          <TableRow className='border-none text-gray-500 ' >
            <TableHead >Invoice Number</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead >Date</TableHead>
            <TableHead >Status</TableHead>
            <TableHead className='text-right' >View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Profit.map((item, idx) => (
            <TableRow key={idx} className='border-none '>
              <TableCell>{item.Invoice}</TableCell>
            <TableCell>&#8377;{item.Amount}</TableCell>
              <TableCell>{item.Date}</TableCell>
              <TableCell ><div className="border border-green-400 px-4 py-2 rounded-xl text-green-400 justify-center w-fit">{item.Category}</div></TableCell>
              <TableCell className='text-right' >
                <button
              onClick={()=>setShowProfit(!showProfit)}
              className="text-white rounded-lg bg-blue-400 px-5 py-2">
                View</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        {showProfit && 
        <PopupLayout>
         <ProfitLoss onCancel={setShowProfit}/>
        </PopupLayout>
        }
       
      </Table>
    )
  }
  