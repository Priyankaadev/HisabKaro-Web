import Options from "@/components/input/options";
import Present from "@/components/input/present";
import Details from "@/content/profile/name/details";
import { Edit2, Mic, Share2 } from "lucide-react";
import React from "react";
import { GoStar } from "react-icons/go";

function ProfilePage() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center ">
        <div className="options flex gap-2 items-center">
          <Options option={"Details"} />
          <Options option={"Admin"} />
          <Options option={"Attendance & Salary"} />
          <Options option={"Documents"} />
        </div>
        <div className="other flex items-center gap-2 mr-5">
          <Present />
          <Share2 size={20} />
        </div>
      </div>

      {/* profile Details */}

    <div className="flex gap-3 mt-4 ">
       {/* left side */}
       <div className=" star-profile flex flex-col h-100vh basis-[40%] rounded-lg shadow-lg border p-4">
   <div className="flex justify-end">  <GoStar /></div> 
       <div className="w-36 h-60 rounded-full flex flex-col self-center  items-center gap-3 ">
         <img
           src="/auth/star-image.png"
           alt="Profile Image"
           className="rounded-full w-[100%] h-[100%]"
         />
         <p className="font-semibold text-center">Pratap Singh Chauhan</p>
         <p className="text-green-500">+919948574857</p>
       </div>
       <div>
   
       </div>
       <div className="border border-red-600 rounded-lg px-8 py-1 mt-auto text-center bg-red-200 ">
         Remove Employee
       </div>
   
       </div>
       {/* details right side  */}
      <Details />
    </div>
    </div>
  );
}

export default ProfilePage;
