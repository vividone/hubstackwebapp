"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { Dropdown } from "../../common/Dropdown";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { formatAmount } from "@/helpers/amountFormatter";

type FlowProps = {
  flow: string;
  setFlow: (aug0: string) => void;
  data: any;
  completePayment: () => void;
}

const AirtimeDetailsModal: React.FC<FlowProps> = ({ flow, setFlow, data, completePayment }) => {
  const [showAlternate, setShowAlternate] = useState(false)
  const [visibility, setVisibility ] = useState(false)
  const [ wallet, ] = useLocalStorage<any>(TOKEN.WALLET); 


  return (
      <div className="mt-4">

        {
          flow === "Your Wallet" ?
          <div className="py-4">
            <div className="flex justify-between">
              <div>
                <span className="block font-bold text-[#111111] text-[24px]">Current Balance</span>
                <span className="block text-[#3D3066] text-[32px]  font-bold font-openSans">
                  {visibility ? <div className="flex gap-1 items-center"><NairaIcon className="w-[16px]" />{formatAmount(wallet?.balance)}</div> : "****"}
                </span>
              </div>
              <div>
                <span className="cursor-pointer">
                  {visibility ? (
                    <RemoveRedEyeOutlinedIcon onClick={() => setVisibility(false)} />
                  ) : (
                    <VisibilityOffOutlinedIcon onClick={() => setVisibility(true)} />
                  )}
                </span>
              </div>
            </div>
            
          </div>
          :
          ""
        }

        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
          <div className="flex  flex-wrap items-center gap-4">
            <Image src={`/images/airtime/${data.network}.png`} alt={data.network} width={80} height={30} />
            <p>{data?.phonenumber}</p>
          </div>

        </div>
        
        <div className="mt-10 flex flex-col gap-1">
          
        {
          flow !== "Your Wallet" ?
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
          :
          
          <p className="text-center">The amount of  NGN{formatAmount((+data?.amount + 100).toString())} will be debited from your wallet balance, proceed below to complete transaction </p>
        }
          <div className="flex flex-col gap-4">
            <Button 
              variant="primary" 
              size="full"
              type="submit"
              onClick={() => {
                flow === "Your Wallet" ?
                completePayment()
                : setFlow("Your Wallet")
              }}
            >
              <span className="text-[16px]">{ flow !== "Your Wallet" ? "PAY WITH WALLET" : "PROCEED WITH WALLET" }</span>
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
