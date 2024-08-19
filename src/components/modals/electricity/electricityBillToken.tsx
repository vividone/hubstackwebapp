"use client"
import React, { useState } from "react";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import ClipBoard from "@/components/wallet/clipboard";

type FlowProps = {
  setFlow: (aug0: number) => void;
  data: any;
}

const CompletedElectricityModal: React.FC<FlowProps> = ({ data }) => {
  const [showAlternate, setShowAlternate] = useState(false)

  return (
      <div className="mt-4">

        <ClipBoard text={data?.transactionReference} label="Transaction Reference" />
                

        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px] mt-2">
          <div className="flex  flex-wrap items-center gap-4">
            <p>{data?.transactionDetails.service}</p>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col gap-1">
            <h2 className="font-bold">Payment Summary</h2>
            <div className="flex flex-col gap-1 py-4">

            <ClipBoard text={"12345123451234512345"} label="Token" />

                <div className="flex justify-between items-center gap-5 py-2">
                <span className="block opacity-[0.5]">Transaction Reference</span>
                <span className="flex items-center">{data?.transactionReference}</span>
                </div>

                <div className="flex justify-between items-center gap-5 py-2">
                <span className="block opacity-[0.5]">Meter Number</span>
                <span className="flex items-center">{data?.transactionDetails.customerId}</span>
                </div>

                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Amount</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount(data?.amount)}</span>
                </div>
                
                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Service Charge</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />0.00</span>
                </div>
                
                <div className="flex justify-between items-center gap-5 mb-6">
                <span className="block font-bold">TOTAL</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount(data?.amount)}</span>
                </div>

            </div>

          <div className="flex flex-col gap-4">
            <Button 
              variant="primary" 
              size="full"
              type="submit"
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

export default CompletedElectricityModal;
