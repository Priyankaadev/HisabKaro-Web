'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { GoArrowDownLeft } from "react-icons/go";
  
  const Cash = [
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
    {
        Amount: 694.69,
      Mode: "Cash",
      Date: "14/02/2024",
      From: "Customer",
    },
  ]
  
  export function TableCash() {
    return (
      <Table >
      
        <TableHeader >
          <TableRow className='border-none text-gray-500 ' >
            <TableHead >Amount</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Date</TableHead>
            <TableHead >From</TableHead>
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
              <TableCell className='text-right' ><button className="text-white rounded-lg bg-blue-400 px-5 py-2">View</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  