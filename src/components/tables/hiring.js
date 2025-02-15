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
import PopupLayout from "../popupLayoutWrapper/popupLayout";
  
  const Hiring = [
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
 {
    name: "Hisab Karo",
      position: "Salesman/Sales",
      salary:"12000-13000",
      date: "14/02/2024",
      applications: 300,
    },
  ]
  
  export function HiringTable({h1,h2,h3,h4,h5}) {
    const [showPopup, setShowPopup] = useState(false);
    return (
   <>
   <Table className='relative' >
      
        <TableHeader >
          <TableRow className='border-none text-gray-500 ' >
            <TableHead >{h1}</TableHead>
            <TableHead>{h2}</TableHead>
            <TableHead>{h3}</TableHead>
            <TableHead >{h4}</TableHead>
            <TableHead >{h5}</TableHead>
            <TableHead className='text-right' >View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Hiring.map((hire, idx) => (
            <TableRow key={idx} className='border-none '>
              <TableCell >{hire.name}</TableCell>
              <TableCell>{hire.position}</TableCell>
              <TableCell>{hire.salary}</TableCell>
              <TableCell>{hire.date}</TableCell>
              <TableCell className='text-blue-500'>{hire.applications}</TableCell>
              <TableCell className='text-right' >
                <button
               onClick={() => setShowPopup(true)}
                 className="text-white rounded-lg bg-blue-400 px-5 py-2">
                  View</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
     
       
      </Table>

     {/* Show Popup when "View" is clicked */}
     {showPopup && (
        <PopupLayout onClose={() => setShowPopup(false)}>
          {/* <InventoryDetails /> */}
        </PopupLayout>
      )}
      </>
    )
  }
  