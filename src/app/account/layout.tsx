'use client'
import React, { useState } from "react";
import Dashboard from "@/components/page/sidebar";
import Navigation from "@/components/page/Navigation";

const RootLayout = ({ children }: any) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex w-full">
            <Dashboard open={open} setOpen={setOpen}/>
            <div className="h-full md::w-[80%] w-full scroll sm:max-h-screen sm:overflow-y-scroll sm:hide">
                <Navigation open={open} setOpen={setOpen}/>
                {children}
            </div>
        </div>
    );
};

export default RootLayout;
