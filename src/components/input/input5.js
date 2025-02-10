import React from 'react'

function Input5({stock, tax}) {
  return (
    <div className='rounded-md shadow-lg border p-4 flex flex-col gap-2'>
        <div className='flex justify-between items-center '>
            <p className='font-semibold text-gray-500'>Inventory Stock Value</p>
            <p>&#8377;{stock}</p>
        </div>
        <div className='flex justify-between items-center'>
        <p>Tax:</p>
        <p>&#8377;{tax}</p>
        </div>
        <div className='flex justify-between items-center'>
        <button className='py-1 px-6 rounded-lg text-white bg-green-500'>View</button>
        <p>Total: sum</p>
        </div>
      
    </div>
  )
}

export default Input5

