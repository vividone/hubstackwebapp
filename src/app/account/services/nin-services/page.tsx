"use client";
import React, { useState } from "react";
import { Button } from "@/components/common/button";
import Card from "@/components/common/card";
import BuyUnitsModal from "@/components/common/buyUnitsModal";


const NinProducts = () => {
  const [showWallet, setShowwallet] = useState(false)

  const setShow = (bool: any) => {
    setShowwallet(bool);
  };


  const cardData = {
      logo: "/images/dollar-bag-1.svg",
      amount: "0",
      type: "Unit Balance",
      visibility: true,
  }

  return (
    <div className="flex flex-1 relative h-full ">
      <div className="py-[60px] pr-[30px]  border border-transparent border-r-[#E7E7E7]">
          
        <div className="w-[353px]">
          {showWallet && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
              <BuyUnitsModal setShow={setShow} />
            </div>
          )}
          <Card value={cardData} />
            <div className="mt-12">
              <Button size="full" onClick={() => setShow(true)}>
                Buy unit
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-[60px_30px]">
          <h2 className="font-medium 2xl:text-[25px] text-[20px] pb-[40px]">Units History</h2>
          
          <div className="w-full py-2 overflow-x-auto">
            <table className="table-auto text-left w-full min-w-[700px]">
                      <thead>
                          <tr className="bg-[#3D3066]/[0.1]">
                              <th className="p-[20px]">Date</th>
                              <th className="p-[20px]">Number of units</th>
                              <th className="p-[20px]">Amount</th>
                              <th className="p-[20px]">Status</th>
                          </tr>
                      </thead>
                      <tbody className="">

                      </tbody>
            </table>
          </div>

        </div>
    </div>
  );
};

export default NinProducts;
