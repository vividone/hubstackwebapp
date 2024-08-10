"use client"
import React, { useState } from "react";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import ClipBoard from "@/components/wallet/clipboard";
import { FlowProps } from "../modalsLayout";

const ElectricityBillToken: React.FC<FlowProps> = ({ setFlow, data }) => {
  const [showAlternate, setShowAlternate] = useState(false)


  return (
      <div className="mt-4">

        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[50px_30px]">
          <div className="flex justify-between items-center gap-4">
            <ClipBoard text={"123456789"} label="" />
          </div>
        </div>
        
        <div className="mt-10 flex flex-col gap-1">
            <h2 className="font-bold">Payment Summary</h2>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Electricity Amount</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount(data?.amount)}</span>
                </div>
                
                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Unit</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount(data?.amount)}</span>
                </div>
                
                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Service Charge</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />0.00</span>
                </div>
                
                <div className="flex justify-between items-center gap-5 mb-6">
                <span className="block font-bold">TOTAL</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount((+data?.amount + 100).toString())}</span>
                </div>

            </div>

          <div className="flex flex-col gap-4">
            <Button 
              variant="primary" 
              size="full"
              type="submit"
              onClick={() => {
                setFlow(4)
              }}
            >
              <span className="text-[16px]">SHARE TOKEN</span>
            </Button>
          
            <Button variant="secondary" size="full" onClick={() => setShowAlternate(!showAlternate)}>
                <span className="text-[16px]">VIEW RECEIPT</span>
            </Button>
          </div>
          </div>

      </div>
      
  );
};

export default ElectricityBillToken;
