import Image from "next/image";
import React from "react";
import { GoStar } from "react-icons/go";

function Profile1({ img, name, attendance, time }) {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="flex gap-2 items-center ">
        <div className="w-30 h-30 rounded-full ">
          <Image src={img} alt="Profile Image"  />
        </div>
        <p>{name}</p>
        <div>
          {attendance && attendance === "Present" ? (
            <div className="flex gap-2 rounded-lg bg-green-200 border-[2px] border-[#2acd2a] ">
              {attendance}
              <div className="h-2 w-2 bg-green-600 rounded-full"></div>
              <p>{time}</p>
            </div>
          ) : (
            <div className="flex gap-2 rounded-lg bg-green-200 border-[2px] border-[#2acd2a] ">
              {attendance}
              <div className="h-2 w-2 bg-red-600 rounded-full"> </div>
              <p>{time}</p>
            </div>
          )}
        </div>
        <GoStar />
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-500 rounded-lg px-4 py-1 ">
            View
        </button>
        <Image src="/attendance/Call.png" width={30} height={30} alt="Whatsapp Icon"/>
      </div>
    </div>
  );
}

export default Profile1;
