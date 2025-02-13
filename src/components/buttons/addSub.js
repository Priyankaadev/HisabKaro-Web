import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

function AddSub({quantity}) {
  return (
    <div className='flex border border-blue-300 rounded-xl w-[65%] justify-center'>
      <div className='p-2 self-center border-r-blue-300 '><FaMinus color='skyblue' /></div>
      <div className='p-2 self-center'>{quantity}</div>
      <div className='p-2 self-center border-l-blue-300'><FaPlus color='skyblue'/></div>
    </div>
  )
}

export default AddSub
