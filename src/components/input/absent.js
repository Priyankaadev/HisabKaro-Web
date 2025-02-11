import React from "react";

function Absent() {
  return (
    <div className="flex gap-2 p-1 rounded-lg bg-red-100 border red-[#2acd2a] text-[red] ">
      Present <div className="h-2 w-2 bg-red-600 rounded-full"></div>
      <p>9:30 AM</p>
    </div>
  );
}

export default Absent;
