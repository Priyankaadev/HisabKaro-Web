import React from 'react'
import DropdownInput from './dropdownInput'

function Purchase() {
  return (
    <div className='flex flex-col gap-2'>
       <div className='flex gap-2 '> 
        <DropdownInput placeholder={"Rate Per Unit"}/>
        <DropdownInput placeholder={'Freight Charges per Unit'}/>

        </div>
       <div className='flex gap-2'> 
        <DropdownInput placeholder={"Total Taxable Value per Unit"} />
        <DropdownInput placeholder={"HSN"} />
        
        </div>
       <div className='flex gap-2'> 
         <DropdownInput placeholder={"CGST%"} />
         <DropdownInput placeholder={"CGST Value"} />
    
        </div>
       <div className='flex gap-2'> 
       <DropdownInput placeholder={"SGST%"} />
       <DropdownInput placeholder={"SGST Value"} />
        </div>
       <div className='flex gap-2'> 
       <DropdownInput placeholder={"IGST%"} />
       <DropdownInput placeholder={"IGST Value"} />
        </div>
       <div className='flex gap-2'> 
       <DropdownInput placeholder={"Cess%"} />
       <DropdownInput placeholder={"Cess Value"} />
        </div>
       <div className='flex gap-2'> 
       <DropdownInput placeholder={"Total"} />
       <DropdownInput placeholder={"Total Value of Item"} />
        </div>
       <div className='flex gap-2'> 
       <DropdownInput placeholder={"MRP"} />

     
        </div>
        
    

      
    </div>
  )
}

export default Purchase
