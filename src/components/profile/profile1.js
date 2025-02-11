import Image from "next/image";
import React from "react";
import { GoStar } from "react-icons/go";

function Profile1({ img, name, attendance, time }) {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="flex gap-2 items-center ">
        <div className="w-10 h-10 rounded-full   ">
          <img src='/auth/star-image.png' alt="Profile Image"  className="rounded-full w-[100%] h-[100%]" />
        </div>
        <p className="text-[13px]">Pratap Singh Chauhan</p>
        <div>
          {attendance && attendance === "Present" ? (
            <div className="flex gap-2 p-1 rounded-lg bg-green-100 border border-[#2acd2a] text-[#2acd2a] ">
              Present
              <div className="h-2 w-2 bg-red-600 rounded-full"></div>
              <p>9:30 AM</p>
            </div>
          ) : (
            <div className="flex items-center px-1 gap-2 rounded-lg bg-green-100 border-[2px] text-[#2acd2a]  text-[13px] px-[1.5]  py-[0.5] border-[#2acd2a] ">
         Present
              <div className="h-2 w-2 bg-green-600 rounded-full"> </div>
              <p>9:30 AM</p>
            </div>
          )}
        </div>
        <GoStar />
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-400 rounded-lg px-2 py-1 text-white text-[13px] ">
            View
        </button>
        <Image src="/attendance/Call.png" width={30} height={20} alt="Whatsapp Icon"/>
      </div>
    </div>
  );
}

export default Profile1;
