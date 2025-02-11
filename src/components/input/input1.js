import React from 'react'

function Input1({title, value, bg, text}) {

  return (
    <div className={`flex gap-3 text-[13px] px-4 py-2  font-semibold rounded-xl ${bg} `}>
      <p >
        {title}
      </p>
      <p className={`${text}`}>{value}</p>
    </div>
  )
}

export default Input1
