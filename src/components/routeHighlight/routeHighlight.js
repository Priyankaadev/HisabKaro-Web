"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function RouteHighlight() {
 
  const [activeButton, setActiveButton] = useState("");

  // Function to toggle button state
  const handleButtonClick = (buttonName) => {
    setActiveButton((prev) => (prev === buttonName ? "" : buttonName));
  };

  return (
    <>
      <div className="flex justify-between mt-5 mb-5 items-center mx-3">
        <p className="font-bold text-[20px] text-[#4F4F4F]">Dashboard</p>
        <div className="flex gap-2 text-[15px]">
          {/* Quick Billing Button */}
          <button
            onClick={() => handleButtonClick("isProductOpen")}
            className={`px-6 py-2 flex gap-3 items-center shadow-xl ${
              activeButton === "isProductOpen" ? "bg-[#6AB7FD] text-white shadow-blue-300" : "bg-[#6AB7FD]"
            } rounded-md`}
          >
            Quick Billing
            {activeButton === "isProductOpen" && (
              <div className="bg-white bg-opacity-40 p-1 rounded-full">
                <RxCross2 color="white" />
              </div>
            )}
          </button>

          {/* ₹IN Button */}
          <button
            onClick={() => handleButtonClick("isInOpen")}
            className={`px-6 py-2 flex gap-3 items-center shadow-xl ${
              activeButton === "isInOpen"
                ? "bg-green-300 border-green-500 border-[1px] text-white shadow-green-300"
                : "bg-green-300 border-green-500 border-[1px]"
            } rounded-md`}
          >
            &#8377;IN
            {activeButton === "isInOpen" && (
              <div className="bg-white bg-opacity-40 p-1 rounded-full">
                <RxCross2 color="white" />
              </div>
            )}
          </button>

          {/* ₹OUT Button */}
          <button
            onClick={() => handleButtonClick("isOutOpen")}
            className={`px-6 py-2 flex gap-3 items-center shadow-xl ${
              activeButton === "isOutOpen"
                ? "bg-red-300 border-red-500 shadow-red-300 text-white border-[1px]"
                : "bg-red-300 border-red-500 border-[1px]"
            } rounded-md`}
          >
            &#8377;OUT
            {activeButton === "isOutOpen" && (
              <div className="bg-white bg-opacity-40 p-1 rounded-full">
                <RxCross2 color="white" />
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default RouteHighlight;


// "use client";
// import Products from "@/content/dashboard/products";
// import React, { useState } from "react";
// import { RxCross2 } from "react-icons/rx";

// function RouteHighlight() {
//   const [openHighlight, setOpenHighlight] = useState(false);
//   const [isProductOpen, setIsProductOpen] = useState(false);
//   const [isInOpen, setIsInOpen] = useState(false);
//   const [isOutOpen, setIsOutOpen] = useState(false);
//   return (
//     <>
//       <div className="flex justify-between mt-5 mb-5 items-center mx-3">
//         <p className="font-bold text-[20px] text-[#4F4F4F]">Dashboard</p>
//         <div className="flex gap-2 text-[15px]">
//           {isProductOpen ? (
//             <button
//               onClick={() => {
//                 if (isProductOpen) {
//                   !isProductOpen;
//                 }
//                 setIsProductOpen(!isProductOpen);
//                 setOpenHighlight(!openHighlight);
//               }}
//               className="px-6 py-2 flex gap-3 items-center shadow-blue-300 bg-[#6AB7FD] text-white rounded-md shadow-xl"
//             >
//               Quick Billing
//               <div className="bg-white bg-opacity-40 p-1  rounded-full ">
//                 <RxCross2 color="white" />
//               </div>
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 if (openHighlight) {
//                   !openHighlight;
//                 }
//                 setOpenHighlight(!openHighlight);
//                 setIsProductOpen(!isProductOpen);
//               }}
//               className="px-8 py-2  bg-[#6AB7FD] text-white rounded-md shadow-xl"
//             >
//               Quick Billing
//             </button>
//           )}

//           {isInOpen ? (
//             <button
//               onClick={() => {
//                 if (openHighlight) {
//                   !openHighlight;
//                 }
//                 setOpenHighlight(!openHighlight);
//                 setIsInOpen(!isInOpen);
//               }}
//               className="px-6 py-2 flex gap-3 items-center shadow-green-300 bg-green-200 border-green-500 border-[1px] rounded-md shadow-xl"
//             >
//               &#8377;IN
//               <div className="bg-white bg-opacity-30 p-1   rounded-full ">
//                 <RxCross2 color="white" />
//               </div>
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 if (openHighlight) {
//                   !openHighlight;
//                 }
//                 setOpenHighlight(!openHighlight);
//                 setIsInOpen(!isInOpen);
//               }}
//               className="px-6 py-2  bg-green-100 border-green-500 border-[1px] rounded-md shadow-xl"
//             >
//               &#8377;IN
//             </button>
//           )}

//           {isOutOpen ? (
//             <button
//               onClick={() => {
//                 if (openHighlight) {
//                   !openHighlight;
//                 }
//                 setOpenHighlight(!openHighlight);
//                 setIsOutOpen(!isInOpen);
//               }}
//               className="px-6 py-2 flex gap-3 items-center shadow-red-300 bg-red-300 border-red-500 border-[1px] rounded-md shadow-xl"
//             >
//               &#8377;OUT
//               <div className="bg-white bg-opacity-30 p-1   rounded-full">
//                 <RxCross2 color="white" />
//               </div>
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 if (openHighlight) {
//                   !openHighlight;
//                 }
//                 setOpenHighlight(!openHighlight);
//                 setIsOutOpen(!isOutOpen);
//               }}
//               className="px-6 py-2 bg-red-100 border-red-500 border-[1px] rounded-md shadow-xl        "
//             >
//               &#8377;OUT
//             </button>
//           )}

//         </div>
//       </div>
//     </>
//   );
// }

// export default RouteHighlight;

