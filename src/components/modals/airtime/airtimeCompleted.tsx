"use client"
import React, { useState } from "react";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import ClipBoard from "@/components/wallet/clipboard";

type FlowProps = {
  flow: string;
  setFlow: (aug0: string) => void;
  data: any;
}

const CompletedAirtimeModal: React.FC<FlowProps> = ({ setFlow, data }) => {
  const [showAlternate, setShowAlternate] = useState(false)

  return (
      <div className="mt-4">

        <ClipBoard text={"1234-2341-1123-2878-9119"} label="" />
                

        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px] mt-2">
          <div className="flex  flex-wrap items-center gap-4">
            <p>{data?.phonenumber}</p>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col gap-1">
            <h2 className="font-bold">Payment Summary</h2>
            <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Airtime Amount</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount(data?.amount)}</span>
                </div>
                
                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Vat</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount("0")}</span>
                </div>

                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Debt</span>
                <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount("0")}</span>
                </div>
                
                <div className="flex justify-between items-center gap-5">
                <span className="block opacity-[0.5]">Service Charge</span>
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
              onClick={() => {
                setFlow("Your Wallet")
              }}
            >
              <span className="text-[16px]">SHARE RECEIPT</span>
            </Button>
          
            <Button variant="secondary" size="full" onClick={() => setShowAlternate(!showAlternate)}>
                <span className="text-[16px]">VIEW RECEIPT</span>
            </Button>
          </div>
          </div>

      </div>
      
  );
};

export default CompletedAirtimeModal;
