"use client"
import Image from "next/image";
import React from "react";
import { GoStar } from "react-icons/go";
import Absent from "../input/absent";
import Present from "../input/present";
import { useRouter } from "next/navigation";

function Profile1({ img, name, attendance, time }) {
  const router = useRouter()
  return (
    <div className="w-full flex justify-between items-center bg-slate-50 rounded-xl"
    onClick={()=>router.push('/dashboard/staff/profile/one')}
    >
      <div className="flex gap-2 items-center ">
        <div className="w-10 h-10 rounded-full   ">
          <img
            src="/auth/star-image.png"
            alt="Profile Image"
            className="rounded-full w-[100%] h-[100%]"
          />
        </div>
        <p className="text-[13px]">Pratap Singh Chauhan</p>
        <div>
          {/* {attendance && attendance === "Present" ?  */}
     
            <Present />
          
        </div>
        <GoStar />
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-400 rounded-lg px-2 py-1 text-white text-[13px] ">
          View
        </button>
        <Image
          src="/attendance/Call.png"
          width={30}
          height={20}
          alt="Whatsapp Icon"
        />
      </div>
    </div>
  );
}

export default Profile1;
