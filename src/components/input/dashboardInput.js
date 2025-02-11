import React from 'react'

function DashboardInput({mode, amount}) {
  return (
    <div className='rounded-lg  px-3 py-2 flex justify-center items-center bg-gray-200 text-gray-600 '>
        <p>{mode}</p>
        <p>&#8377;{amount}</p>
      
    </div>
  )
}

export default DashboardInput
