import AcceptReject from '@/components/buttons/acceptReject'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const Request = [
   
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
    {
    name: "Tushar",
      position: "Founder & CEO",
      from: "24 Jan,2024",
      to: "25 Jan,2024"
    },
  ]

function ReqTable() {
  return (
   <Table className='relative' >
         
           <TableHeader >
             <TableRow className='border-none text-gray-500 ' >
               <TableHead >Employee Name</TableHead>
               <TableHead>Position</TableHead>
               <TableHead>From</TableHead>
               <TableHead >To</TableHead>
               <TableHead  >Comment</TableHead>
               <TableHead className='text-right'>Accept/Reject</TableHead>
             </TableRow>
           </TableHeader>
           <TableBody>
             {Request.map((req, idx) => (
               <TableRow key={idx} className='border-none '>
                 <TableCell >{req.name}</TableCell>
                 <TableCell>{req.position}</TableCell>
                 <TableCell>{req.from}</TableCell>
                 <TableCell>{req.to}</TableCell>
                 <TableCell><button
                 className="text-white rounded-lg bg-blue-400 px-5 py-2">
                  View</button></TableCell>
                 <TableCell className='text-right' ><AcceptReject /> </TableCell>
               </TableRow>
             ))}
           </TableBody>
        
          
         </Table>
  )
}

export default ReqTable
