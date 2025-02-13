import React from 'react'

function InventoryStock({stock}) {
  return (
   <button className='bg-gray-100 text-blue-400 rounded-2xl px-4 text-[12px] py-1'>
    {stock}
   </button>
  )
}

export default InventoryStock
