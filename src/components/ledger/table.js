'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  
  const Ledger = [
    {
      Name: "Tushar",
      Balance: 60,
      
    
    },
    {
        Name: "Ginny",
        Balance: 2000,
        
      
      },
      {
        Name: "Viral",
        Balance: 0,
        
      
      },
      {
        Name: "Manisha",
        Balance: 60,
        
      
      },
      {
        Name: "Ayush",
        Balance: 60,
        
      
      },
      {
        Name: "Ponny",
        Balance: 60,
        
      
      },
      {
        Name: "Anni",
        Balance: 60,
        
      
      },
      {
        Name: "Tushar",
        Balance: 60,
        
      
      },
      {
        Name: "Tushar",
        Balance: 60,
        
      
      },
  ]
  
  export function TableLedger() {
    return (
      <Table >
      
        <TableHeader >
          <TableRow className='border-none text-gray-500 ' >
            <TableHead >Name</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead className='text-right' >View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Ledger.map((person, idx) => (
            <TableRow key={idx} className='border-none '>
              <TableCell  >{person.Name}</TableCell>
              <TableCell>&#8377;{person.Balance}</TableCell>
              <TableCell className='text-right' ><button className="text-white rounded-lg bg-blue-400 px-5 py-2">View</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  