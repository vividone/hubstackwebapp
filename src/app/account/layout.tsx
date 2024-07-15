'use client'
import React from "react";
import Dashboard from "@/components/page/sidebar";
import Navigation from "@/components/page/Navigation";

const RootLayout = ({ children }: any) => {

    return (
        <div className="flex w-full">
            <Dashboard />
            <div className="h-full w-[80%]">
                <Navigation />
                {children}
            </div>
        </div>
    );
};

export default RootLayout;
