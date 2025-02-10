import React from 'react'

function Input5({stock, tax}) {
  return (
    <div className='rounded-md shadow-lg p-4'>
        <div className='flex justify-between '>
            <p>Inventory Stock Value</p>
            <p>&#8377;{stock}</p>
        </div>
        <div className='flex justify-between '>
        <p>Tax:</p>
        <p>&#8377;{tax}</p>
        </div>
        <div className='flex justify-between '>
        <button className='py-2 px-6 rounded-lg text-white bg-green-500'>View</button>
        <p>Total: sum</p>
        </div>
      
    </div>
  )
}

export default Input5

