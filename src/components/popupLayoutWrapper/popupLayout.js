// 'use client '
// import React from 'react'

// function PopupLayout({children}) {
//   return (
//     <div className='w-[60%] h-full m-[5%] bg-white p-[4%]'>
//          <div className='p-2 rounded-full bg-green-100 '><RxCross1 color="gray"/></div>
//       {children}
//     </div>
//   )
// }

// export default PopupLayout

"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";

function PopupLayout({ children, onClose }) {
  
    return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Popup Container */}
      <div className="w-[60%] bg-white p-[4%] rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-green-100"
        >
          <RxCross1 color="gray" />
        </button>

        {/* Popup Content */}
        {children}
      </div>
    </div>
  );
}

export default PopupLayout;
