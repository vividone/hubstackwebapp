'use client'
import React, { useState } from "react";
import Dashboard from "@/components/page/sidebar";
import Navigation from "@/components/page/Navigation";
import Image from "next/image";
import Link from "next/link";

const RootLayout = ({ children }: any) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex w-full">
            <Dashboard open={open} setOpen={setOpen}/>
            <div className="h-full flex-1 w-full scroll sm:max-h-screen sm:overflow-y-scroll sm:hide">
                <Navigation open={open} setOpen={setOpen}/>
                {children}
            </div>
            <Link href={"https://wa.me/2348039661975"} className="rounded-full shadow-lg fixed bottom-4 right-4 z-[200]">
                <Image src="/images/whatsapp.jpg" alt="whatsapp" width={40} height={40} className="rounded-full" />
            </Link>
        </div>
    );
};

export default RootLayout;
