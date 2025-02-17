import {   Edit2 } from 'lucide-react'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import ProfitProduct from '../products/profitProduct'


function ProfitLoss({onCancel}) {
  return (
    <div className='z-55 bg-gray-50 rounded-2xl p-4 flex flex-col gap-4 absolute z-50 w-[50%] h-full top-0 right-0 '>
      <div className='self-end' >
        <RxCross1 size={22} onClick={()=>onCancel(false)} />
        </div>
        <div className='text-[22px] mb-2 text-blue-400 flex items-center gap-5'>
           1234567890123 
           <div className="border border-green-400 p-2 rounded-2xl text-green-400">Paid</div>
        </div>
        <div className="rounded-xl w-full shadow-xl mb-2 p-2 bg-white border flex justify-between">
        <p>Gross Profit</p>
        <p>694.69</p>
    </div>
    {/* products */}
    <ProfitProduct />
    <hr />
    <ProfitProduct />
    <hr />
    <ProfitProduct />
    <hr />
    <ProfitProduct />


    </div>
  )
}

export default ProfitLoss
