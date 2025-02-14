'use client'
import React from "react";
import { BiEdit } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";

function AddManually({isOpen}) {
  return (
    <div className=" bg-white rounded-2xl py-2 px-5 flex flex-col gap-4 absolute z-50 w-[50%] h-full top-0 right-0  ">
      <div onClick={()=>isOpen(false)}
      className="self-end  w-fit  bg-green-50 rounded-full p-1">
        <GiCancel size={20} />
      </div>
      <div className=" flex items-center justify-between">
        <p className="text-blue-400 font-semibold text-[22px]">
            Apple
        </p>
        <BiEdit size={22} />
      </div>

      <div className="flex mt-auto w-full gap-4  ">
        <button 
        onClick={()=>isOpen(false)}
        className="border-blue-400 w-full rounded-xl border text-blue-400 bg-blue-100 p-2">Cancel</button>
        <button className=" text-white rounded-xl w-full bg-blue-500 p-2">Save</button>
      </div>

    </div>
  );
}

export default AddManually;

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// export function DialogDemo() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Edit Profile</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Edit profile</DialogTitle>
//           <DialogDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }
