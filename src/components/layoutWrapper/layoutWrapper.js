"use client";

import Header from "@/layout/header/header";
import Sidebar from "@/layout/sidebar/sidebar";
import { usePathname } from "next/navigation";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.includes('/auth')

  return (
    <div  >
      {!isAuthPage && <Header />}
      <div className="flex">
        {!isAuthPage && <Sidebar />}
       {children}
      </div>
    </div>
  );
}
