import React from 'react'

function DropdownInput({placeholder}) {
  return (
    <input 
        type='text'
        placeholder={placeholder}
        className='rounded-lg p-2 border focus:outline-none focus:ring-0 w-full'

        />
  )
}

export default DropdownInput
