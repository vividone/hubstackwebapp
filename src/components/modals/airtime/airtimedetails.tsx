"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";

type FlowProps = {
  setFlow: (aug0: number) => void;
  data: any;
}

const AirtimeDetailsModal: React.FC<FlowProps> = ({ setFlow, data }) => {
  const [showAlternate, setShowAlternate] = useState(false)

  return (
      <div className="mt-4">

        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
          <div className="flex  flex-wrap items-center gap-4">
            <Image src={`/images/airtime/${data?.network || "mtn"}.png`} alt={data?.network} width={80} height={30} />
            <p>{data?.phonenumber}</p>
          </div>

        </div>
        
        <div className="mt-10 flex flex-col gap-1">
          
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center gap-5">
              <span className="block ">Airtime Amount</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount(data?.amount)}</span>
            </div>
            
            <div className="flex justify-between items-center gap-5">
              <span className="block">Service Charge</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />100.00</span>
            </div>
            
            <div className="flex justify-between items-center gap-5 mb-6">
              <span className="block font-bold">Total</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount((+data?.amount + 100).toString())}</span>
            </div>

          </div>

          <div className="flex flex-col gap-4">
            <Button 
              variant="primary" 
              size="full"
              type="submit"
              onClick={() => setFlow(2)}
            >
              <span className="text-[16px]">PAY WITH WALLET</span>
            </Button>
          
            <Button variant="secondary" size="full" onClick={() => setShowAlternate(!showAlternate)}>
                <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
            </Button>
          </div>
          </div>

      </div>
      
  );
};

export default AirtimeDetailsModal;