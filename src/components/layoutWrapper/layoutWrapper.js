"use client";

import Header from "@/layout/header/header";
import Sidebar from "@/layout/sidebar/sidebar";
import { usePathname } from "next/navigation";
import RouteHighlight from "../routeHighlight/routeHighlight";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.includes('/auth')

  return (
    <div  >
      {!isAuthPage && <Header />}
      <div className="flex">
        {!isAuthPage && <Sidebar />}
        <div className="w-full" >
          <RouteHighlight/>
       {children}
       </div>
      </div>
    </div>
  );
}
