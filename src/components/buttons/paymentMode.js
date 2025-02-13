import React from 'react'

function PaymentMode({mode}) {
  return (
    <button className='px-4 py-1 border border-gray-500 rounded-xl  text-gray-400'>{mode}</button>
  )
}

export default PaymentMode
