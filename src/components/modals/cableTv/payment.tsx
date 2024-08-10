"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import { formatAmount } from "@/helpers/amountFormatter";
import CurrentBalance from "../currentBalance";
import { FlowProps } from "../modalsLayout";


const CableTvPayment: React.FC<FlowProps> = ({ setFlow, data }) => {
  const [showAlternate, setShowAlternate] = useState(false)


  return (
      <div className="mt-4">

        <CurrentBalance />

        <div className="flex flex-col gap-1">
          
          <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
            <div className="flex  flex-wrap items-center gap-4">
              <Image src={data?.Image} alt={data?.title} width={80} height={80} />
              <p>{data?.title}</p>
            </div>
          </div>
          
          <p className="text-center">The amount of  NGN{formatAmount((+data?.amount + 100).toString())} will be debited from your wallet balance, proceed below to complete transaction </p>

          <div className="flex flex-col gap-4">
            <Button 
              variant="primary" 
              size="full"
              type="submit"
              onClick={() => setFlow(4)}
            >
              <span className="text-[16px]">PROCEED WITH WALLET</span>
            </Button>
          
            <Button variant="secondary" size="full" onClick={() => setShowAlternate(!showAlternate)}>
                <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
            </Button>
          </div>
          </div>

      </div>
      
  );
};

export default CableTvPayment;
