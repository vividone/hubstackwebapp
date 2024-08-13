"use client"
import React, { useState } from "react";
import { Button } from "../../common/button";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Input } from "../../common/inputs";
import Link from "../../custom/link";

interface MywalletProps {
  setShow: (show: boolean) => void;
}

const BuyUnitsModal: React.FC<MywalletProps> = ({ setShow }) => {
  const [visibility, setVisibility] = useState(true);

  const existingData = {
    currentBalance: "#0.00",
  };

  return (
    <div className="relative h-screen w-[40vw] bg-white overflow-y-scroll z-[1000]">
      <div className="flex justify-between p-[30px_40px] pt-[55px]">
        <h3 className="text-4xl font-medium text-[#111111]">Buy unit</h3>
        <Image
          src="/images/close.svg"
          alt="closebutton"
          width={20}
          height={20}
          onClick={() => setShow(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="p-[20px_40px]">
        <div className="flex justify-between">
          <div>
            <span className="block font-bold text-[#111111] text-[18px]">Wallet Balance</span>
            <span className="block text-[#3D3066] text-[32px]  font-bold font-openSans">
              {visibility ? existingData.currentBalance : "****"}
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

      <div className="p-[20px_50px]">
        <div className="mt-4">
            <label htmlFor="unit" className="block text-[18px] mb-2 font-normal">
                Units
            </label>
            
            <Input 
                placeholder="Unit:"
                name="unit"
                data-test="unit"
            />

            <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
                Price
            </label>
            <Input name="desiredAmount" type="number" placeholder="#0.00" />
            <p className="font-bold mt-2">UNIT COST: 1</p>

            <p className="2xl:text-[20px] xl:text-[18px] text-[16px]">
                    By continuing, you agree to our 
                    <Link href={"/terms-and-conditions"} className="text-[#3D3066] font-bold"> Terms and Conditions</Link> 
                </p>
            <div className="mt-2 h-20">
                <Button>
                <span className="text-[16px] uppercase">PAY NGN 150</span>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BuyUnitsModal;
