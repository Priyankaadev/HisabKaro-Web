import React from 'react'

function Input3({ get, give}) {
  return (
    <div className='shadow-lg border rounded-md p-3 w-[50%]'>
        <div className='flex justify-between'>
            <p className='font-semibold'>Due</p>
            <button className='py-1 px-2 rounded-lg text-white bg-green-500 '>View</button>
        </div>
    <div className=' flex flex-col gap-2 mt-2 '>
        <button className='bg-green-200 w-full  border-[1px] border-green-600  rounded-xl p-2 flex justify-between'>
            <p>To Get </p> <p>{get}</p>
        </button>
        <button className='bg-red-200 w-full border-[1px] border-red-600  rounded-xl p-2 flex justify-between'>
        <p>To Give</p> <p>{give}</p>
        </button>
       
    </div>
    </div>
  )
}

export default Input3
