"use client"
import React, { useState } from "react";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import Image from "next/image";
import { FlowProps } from "../modalsLayout";


interface CableTvProps extends FlowProps {
  active: any;
}

const CableTvDetails: React.FC<CableTvProps> = ({ setFlow, data, active }) => {
  const [showAlternate, setShowAlternate] = useState(false)


  return (
      <div className="mt-4">
        <h2 className="font-normal text-[20px] font-OpenSans">Service Provider</h2>
        
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
          <div className="flex  flex-wrap items-center gap-4">
            <Image src={active?.Image} alt={active?.title} width={80} height={80} />
            <p>{active?.title}</p>
          </div>

          <div className="py-4">
            <p>Smartcard or Decoder Number</p>
            <p className=" opacity-[0.7]">{data?.customerId}</p>
          </div>

          <div className="flex gap-12">
            <div>
              <p>Full Name</p>
              <p className="opacity-[0.7]">{data?.fullname}</p>
            </div>
            <div>
              <p>Cable TV Plan</p>
              <p className="opacity-[0.7]">{data?.plan}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1">
          
          <div className="flex flex-col gap-1">

            <div className="flex justify-between items-center gap-5">
              <span className="block ">Amount</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount(data?.amount)}</span>
            </div>
            
            <div className="flex justify-between items-center gap-5">
              <span className="block">Service Charge</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />100.00</span>
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
              onClick={() => setFlow(3)}
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

export default CableTvDetails;