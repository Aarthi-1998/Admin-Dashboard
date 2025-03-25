"use client"
import Image from "next/image";
import Sidebar from "@/app/components/Sidebar"
import Header from "@/app/components/Header"
import HomeComponent from "@/app/components/HomeComponent"
import { useState } from "react";
export default function Home() {

   const [openSidebar,setOpenSidebar]=useState(false)


  return (
    <div className="grid h-screen grid-cols-[260px_1fr] grid-rows-[60px_auto] bg-gray-900 text-gray-300" >
      <header className="col-start-2">
       <Header toggleSidebar={()=>setOpenSidebar(!openSidebar)} />
       </header>
        <aside className="bg-gray-700 row-span-2">
           <Sidebar isOpen={openSidebar} toggleSidebar={()=>setOpenSidebar(!openSidebar)} />
        </aside>
        <main className=" col-start-2 p-6 bg-gray-900">
      <HomeComponent/>

        </main>
    </div>
  );
}
