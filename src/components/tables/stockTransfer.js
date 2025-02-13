'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { CheckCheck } from "lucide-react";
import AddSub from "../buttons/addSub";
  
  const Stock = [
    {
      Items:"Apple",
      ID: 1234567890123,
      Quantity: 20 ,
      MRP: 200,
      Qty: 2
    
    },
    {
        Items:"Apple",
        ID: 1234567890123,
        Quantity: 20 ,
        MRP: 200,
        Qty: 2
      
      },
      {
        Items:"Apple",
        ID: 1234567890123,
        Quantity: 20 ,
        MRP: 200,
        Qty: 2
      
      },
      {
        Items:"Apple",
        ID: 1234567890123,
        Quantity: 20 ,
        MRP: 200,
        Qty: 2
      
      },
      {
        Items:"Apple",
        ID: 1234567890123,
        Quantity: 20 ,
        MRP: 200,
        Qty: 2
      
      },
      {
        Items:"Apple",
        ID: 1234567890123,
        Quantity: 20 ,
        MRP: 200,
        Qty: 2
      
      },
      {
        Items:"Apple",
        ID: 1234567890123,
        Quantity: 20 ,
        MRP: 200,
        Qty: 2
      
      },
      {
        Items:"Apple",
        ID: 1234567890123,
        Quantity: 20 ,
        MRP: 200,
        Qty: 2
      
      },
  ]
  
  export function StockTransferTable() {
    return (
      <Table >
      
        <TableHeader >
          <TableRow className='border-none text-gray-500 ' >
            <TableHead >Items</TableHead>
            <TableHead>Product ID</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead >MRP</TableHead>
            <TableHead >View</TableHead>
            <TableHead className='text-right' >Qty.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Stock.map((stock, idx) => (
            <TableRow key={idx} className='border-none '>
              <TableCell className='flex gap-2 items-center' ><CheckCheck color="green" size={22}/>&#8377;{stock.Items}</TableCell>
              <TableCell>{stock.ID}</TableCell>
              <TableCell>{stock.Quantity}</TableCell>
              <TableCell>&#8377;{stock.MRP}</TableCell>
              <TableCell ><button className="text-white rounded-lg bg-blue-400 px-5 py-2">View</button></TableCell>
              <TableCell className=''><AddSub quantity={stock.Qty} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  