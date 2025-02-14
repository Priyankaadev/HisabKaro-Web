import React from 'react'

function AcceptReject() {
  return (
    <div className='flex gap-2 items-center'>
      <button className='rounded-xl border px-4 py-1 border-red-500 text-red-500'>Reject</button>
      <button className='rounded-xl border px-4 py-1 bg-green-500 text-white'>Accept</button>
    </div>
  )
}

export default AcceptReject
