import Options from "@/components/input/options";
import Present from "@/components/input/present";
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
        {/* right side */}
        <div className="flex  flex-col gap-5 basis-[58%] ">
         {/* details */}
          <div className="details rounded-lg border p-4 shadow-lg">
            <p className="mb-3 font-bold">Details</p>
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <div className="relative  flex gap-2 flex-col ">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Employee Name
                </label>
                <div className="relative w-full rounded-lg border">          
                  <input
                    id="name"
                    type="text"
                    placeholder="Name.."
                    className="w-full border border-gray-300 rounded-md px-6 py-1 "
                  />
                    <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                </div>
              </div>
              <div className="relative flex gap-2 flex-col">
                <label
                  htmlFor="number"
                  className="text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <div className="relative w-full rounded-lg border">          
                  <input
                    id="number"
                    type="number"
                    placeholder="Number.."
                    className="w-full border border-gray-300 rounded-md px-6 py-1 "
                  />
                    <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                </div>
              </div>
              <div className="relative flex gap-2 flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                 Department
                </label>
                <div className="relative w-full rounded-lg border">          
                  <input
                    id="name"
                    type="text"
                    placeholder="eg. manager.."
                    className="w-full border border-gray-300 rounded-md px-6 py-1 "
                  />
                </div>
              </div>
              <div className="relative flex gap-2 flex-col ">
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-gray-700"
                >
                  Date of Joining
                </label>
                <div className="relative w-full rounded-lg border">          
                  <input
                    id="date"
                    type="number"
                    placeholder="Date of joining.."
                    className="w-full border border-gray-300 rounded-md px-6 py-1 "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* assets */}
          <div className="assets rounded-lg border p-4 shadow-lg">
            <div className="flex justify-between items-center ">
            <p className="mb-3 font-bold">Assets</p>
            <div className="flex gap-2 items-center">
                <Edit2 size={20} />
          <button className="bg-blue-500 border text-white text-[12px] font-bold p-2 rounded-lg">Add More</button>
            </div>
            </div>
            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <div className="relative  flex gap-2 flex-col ">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700"
                >
                Company Mobile Number
                </label>
                <div className="relative w-full rounded-lg border">          
                  <input
                    id="company"
                    type="number"
                    placeholder="Company mobile number.."
                    className="w-full border border-gray-300 rounded-md px-6 py-1 "
                  />
                </div>
              </div>
              <div className="relative flex gap-2 flex-col">
                <label
                  htmlFor="number"
                  className="text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <div className="relative w-full rounded-lg border">          
                  <input
                    id="number"
                    type="number"
                    placeholder="Number.."
                    className="w-full border border-gray-300 rounded-md px-6 py-1 "
                  />
                </div>
              </div>
              <div className="relative flex gap-2 flex-col">
                <label
                  htmlFor="laptop"
                  className="text-sm font-medium text-gray-700"
                >
                 Laptop
                </label>
                <div className="relative w-full rounded-lg border">          
                  <input
                    id="laptop"
                    type="text"
                    placeholder="laptop.."
                    className="w-full border border-gray-300 rounded-md px-6 py-1 "
                  />
                </div>
              </div>
              <div className="relative flex gap-2 flex-col ">
                <label
                  htmlFor="asset"
                  className="text-sm font-medium text-gray-700"
                >
                  Date of Joining
                </label>
                <div className="relative w-full rounded-lg border">          
                  <input
                    id="date"
                    type="number"
                    placeholder="Date of joining.."
                    className="w-full border border-gray-300 rounded-md px-6 py-1 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
