"use client";
import React, { useState } from "react";
import { Button } from "@/components/common/button";
import BuyUnitsModal from "@/components/modals/buyUnitsModal";
import DollarBagIcon from "@/assets/icons/DollarBagIcon";
import { History } from "@/components/tables/history";


const NinProducts = () => {
  const [showWallet, setShowwallet] = useState(false)

  const setShow = (bool: any) => {
    setShowwallet(bool);
  };

  return (
    <div className="flex flex-1 flex-wrap relative h-full ">
      <div className="py-[60px] sm:pr-[30px]  md:border border-transparent border-r-[#E7E7E7]">
          
        <div className="w-[353px]">
          {showWallet && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
              <BuyUnitsModal setShow={setShow} />
            </div>
          )}
          <div className="flex flex-col p-[30px] gap-6 bg-[#00D7F7] sm:w-[350px] w-full rounded-[8px]">
            <span
                className="flex items-center justify-center h-[60px] w-[60px] bg-[#000]/[0.1] rounded-full"
            >
                <DollarBagIcon />
            </span>
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-2xl">0</h2>
                <p>Unit Balance</p>
            </div>
          </div>
            <div className="mt-12">
              <Button size="full" onClick={() => setShow(true)}>
                Buy unit
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 md:p-[60px_30px]">
          <h2 className="font-medium 2xl:text-[25px] text-[20px] pb-[40px]">Units History</h2>
          
          <History history={[]} />

        </div>
    </div>
  );
};

export default NinProducts;
