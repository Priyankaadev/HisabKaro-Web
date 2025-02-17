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

  
  const Sold = [
    {
    Name: "Pardeshi ZigWheels Pvt Ltd.",
      Invoice: 1234567890123,
      Amount:"1,10,000 ",
      Date: "14/02/2024",
      Category: "Spare, Accessories"
    
    },
    {
    Name: "Pardeshi ZigWheels Pvt Ltd.",
      Invoice: 1234567890123,
      Amount:"1,10,000 ",
      Date: "14/02/2024",
      Category: "Spare, Accessories"
    
    },
    {
    Name: "Pardeshi ZigWheels Pvt Ltd.",
      Invoice: 1234567890123,
      Amount:"1,10,000 ",
      Date: "14/02/2024",
      Category: "Spare, Accessories"
    
    },
    {
    Name: "Pardeshi ZigWheels Pvt Ltd.",
      Invoice: 1234567890123,
      Amount:"1,10,000 ",
      Date: "14/02/2024",
      Category: "Spare, Accessories"
    
    },
    {
    Name: "Pardeshi ZigWheels Pvt Ltd.",
      Invoice: 1234567890123,
      Amount:"1,10,000 ",
      Date: "14/02/2024",
      Category: "Spare, Accessories"
    
    },
    {
    Name: "Pardeshi ZigWheels Pvt Ltd.",
      Invoice: 1234567890123,
      Amount:"1,10,000 ",
      Date: "14/02/2024",
      Category: "Spare, Accessories"
    
    },
    {
    Name: "Pardeshi ZigWheels Pvt Ltd.",
      Invoice: 1234567890123,
      Amount:"1,10,000 ",
      Date: "14/02/2024",
      Category: "Spare, Accessories"
    
    },
   
  ]
  
  export function TableSale() {
    const [showPurchase, setShowPurchase] = useState(false)
    return (
      <Table >
      
        <TableHeader >
          <TableRow className='border-none text-gray-500 ' >
            <TableHead >Customer Name</TableHead>
            <TableHead>Invoice Number</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead >Date</TableHead>
            <TableHead >Category</TableHead>
            <TableHead className='text-right' >View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Sold.map((item, idx) => (
            <TableRow key={idx} className='border-none '>
              <TableCell  >{item.Name}</TableCell>
              <TableCell>{item.Invoice}</TableCell>
            <TableCell>&#8377;{item.Amount}</TableCell>
              <TableCell>{item.Date}</TableCell>
              <TableCell className='text-blue-400'>{item.Category}</TableCell>
              <TableCell className='text-right' >
                <button
              onClick={()=>setShowPurchase(!showPurchase)}
              className="text-white rounded-lg bg-blue-400 px-5 py-2">
                View</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        {showPurchase && 
        <PopupLayout>
       <InventoryDetails onCancel={setShowPurchase}/>
        </PopupLayout>
        }
       
      </Table>
    )
  }
  