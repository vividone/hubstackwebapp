"use client"
import React, { FormEvent } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { Input, MoneyInput } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { FlowProps } from "../modalsLayout";

interface CableTvProps extends FlowProps {
  active: any;
  setData: (aug0: any) => void;
}

const CableTvForm: React.FC<CableTvProps> = ({ setFlow, active, data, setData }) => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFlow(2)
  }

  return (
      <div className="mt-4">
        <h2 className="font-normal text-[20px] font-OpenSans">Service Provider</h2>
        
            <form onSubmit={handleSubmit} className="pb-5">
              
              <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[10px_30px]">
                <div className="flex  flex-wrap items-center gap-4">
                  <Image src={active?.Image} alt={active?.title} width={80} height={80} />
                  <p className="text-xl font-medium">{active?.title}</p>
                </div>
              </div>

              <div className="flex flex-col w-full mt-5">
                <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                  Enter Smartcard or Decoder Number
                </label>
                <div className="text-[#8c8b92] mt-2">
                <Input 
                    name="customerId" 
                    placeholder="0000000000" 
                    onChange={(e) => setData({ ...data, customerId: e.target.value })}
                />
                </div>
            </div>

            <div className="flex flex-col w-full mt-5">
                <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                  Cable TV Plan
                </label>
                <div className="text-[#8c8b92] mt-2">

                <Input  
                    name="plan" 
                    placeholder="" 
                    onChange={(e) => setData({ ...data, plan: e.target.value })}
                />
                </div>
            </div>

              <div className="flex flex-col w-full mt-5">
                <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                  Amount
                </label>
                <div className="text-[#8c8b92] mt-2">
                <MoneyInput  
                    name="amount" 
                    leftIcon={() => <NairaIcon className="w-[12px]" />} 
                    placeholder="0.00" 
                    onChange={(e) => setData({ ...data, amount: e.target.value })}
                />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-12">
                <p className="2xl:text-[20px] xl:text-[18px] text-[16px]">
                    By continuing, you agree to our 
                    <Link href={"/terms-and-conditions"} className="text-[#3D3066] font-bold"> Terms and Conditions</Link> 
                </p>
                <Button 
                  variant="primary" 
                  size="full"
                  type="submit"
                >
                  <span className="text-[16px]">REVIEW ORDER</span>
                </Button>
              </div>

            </form>

      </div>
      
  );
};

export default CableTvForm;
