"use client";
import React, { useState } from "react";
import Dashboard from "@/components/page/sidebar";
import Navigation from "@/components/page/Navigation";

const RootLayout = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full">
      <Dashboard open={open} setOpen={setOpen} />
      <div className="h-full flex-1 w-full scroll max-h-screen overflow-y-scroll hide ">
        <Navigation open={open} setOpen={setOpen} />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
