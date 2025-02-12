import Image from 'next/image'
import React from 'react'

function ProfileIndicator() {
  return (
    <div className=' flex rounded-full border-dashed p-1 h-7 w-7 border-blue-500 items-center justify-center '>
      <Image src='/products/avatar.png' width={12} height={10} className='rounded-full p '/>
    </div>
  )
}

export default ProfileIndicator
