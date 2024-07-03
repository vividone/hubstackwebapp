import React from "react";
import Dashboard from "@/components/page/sidebar";
import Navigation from "@/components/page/Navigation";

const Pagelayout = ({ children }: any) => {
  return (
    <div className="flex w-full">
      <Dashboard />
      <div className="h-full w-[80%] background-[red]">
        <Navigation /> 
        {children}
      </div>
    </div>
  );
};

export default Pagelayout;
