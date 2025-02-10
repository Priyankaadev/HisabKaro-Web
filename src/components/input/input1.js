import React from 'react'

function Input1({title, value, color}) {

  return (
    <div className={` flex justify-between text-[12px]  font-semibold rounded-lg bg-${color}`}>
      <p >
        {title}
      </p>
      <p className={`text-${color}`}>{value}</p>
    </div>
  )
}

export default Input1
