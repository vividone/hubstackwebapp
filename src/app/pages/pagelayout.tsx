import React from "react";
import Dashboard from "@/components/page/Dashboard";
import Navigation from "@/components/page/Navigation";
import WalletForm from "@/components/common/createwallet";
import Mywallet from "@/components/common/Existinguserwallet";

const Pagelayout = ({ children }: any) => {
  return (
    <div className="flex w-full">
      <Dashboard />
      <div className="h-full w-[80%] background-[red]">
        {/* <Navigation /> */}
        {/* {children} */}
        {/* <WalletForm /> */}
        <Mywallet/>
      </div>
    </div>
  );
};

export default Pagelayout;
