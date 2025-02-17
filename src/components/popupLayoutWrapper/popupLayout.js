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


function PopupLayout({ children }) {  
    return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
        {/* Popup Content */}
      

        {children}
  
     
      </div>

  );
}

export default PopupLayout;
