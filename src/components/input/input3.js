import React from 'react'

function Input3({ get, give}) {
  return (
    <div className='shadow-lg rounded-md p-4'>
        <div className='flex justify-between'>
            <p className='font-semibold'>Due</p>
            <button className='py-2 px-4 rounded-lg text-white bg-green-500 '>View</button>
        </div>
    <div className=' gap-1 '>
        <button className='bg-green-200  border-[1px] border-green-600  rounded-md p-2 flex justify-between'>
            <p>To Get</p> <p>{get}</p>
        </button>
        <button className='bg-red-200  border-[1px] border-red-600  rounded-md p-2 flex justify-between'>
        <p>To Give</p> <p>{give}</p>
        </button>
       
    </div>
    </div>
  )
}

export default Input3
