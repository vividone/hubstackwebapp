import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Input } from "./inputs";
import Link from "next/link";

const Mywallet = () => {
  const [visibility, setVisibility] = useState(true);
  const existingData = {
    currentBalance: "#0.00",
    accountNumber: "0209064859",
    accountName: "Zainab Babalola",
    bankName: "Providus Bank",
  };

  return (
    <div className="h-screen max-w-[35vw] bg-whitesmoke overflow-y-scroll">
      <div className="flex justify-between p-[30px_40px]">
        <h3 className="text-[30px] font-medium text-[#111111]">My Wallet</h3>
        <Image
          src="./images/close.svg"
          alt="closebutton"
          width={20}
          height={20}
          //   onClick={}
          className="cursor-pointer"
        />
      </div>
      <div className="p-[10px_40px] border-y border-[#E7E6F2]">
        <div className="flex justify-between">
          <div>
            <span className="block font-bold text-[#111111] text-[18px]">
              Current Balance
            </span>
            <span className="block text-[#3D3066] text-[32px] font-bold font-openSans">
              {existingData.currentBalance}
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
              <VisibilityOffOutlinedIcon />
            </span>
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="desiredAmount"
            className="block text-[18px] font-normal"
          >
            Enter desired amount
          </label>
          <Input name="desiredAmount" type="number" placeholder="#5000" />
          <div className="mt-2 h-20">
            <Button>
              <span className="text-[16px]">FUND WALLET</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="p-[20px_30px]">
        <div className="border border-[#E7E6F2] p-4">
          <div className="flex gap-5">
            <div className="flex-1">
              <span className="block font-bold text-[18px]">
                {existingData.accountNumber}
              </span>
              <span className="block text-[16px]">Account Number</span>
            </div>
            <div className="flex-1 pt-1">
              <Image
                src="./images/copylogo.svg"
                alt="copylogo"
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className="flex-1">
              <span className="block font-bold text-[18px]">
                {existingData.accountName}
              </span>
              <span className="block text-[16px]">Account Name</span>
            </div>
            <div className="flex-1 pt-1">
              <Image
                src="./images/copylogo.svg"
                alt="copylogo"
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className="flex-1">
              <span className="block font-bold text-[18px]">
                {existingData.bankName}
              </span>
              <span className="block text-[16px]">Bank Name</span>
            </div>
            <div className="flex-1 pt-1">
              <Image
                src="./images/copylogo.svg"
                alt="copylogo"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-[20px_30px]">
        <div className="border border-[#E7E6F2] p-4">
          <h4 className="text-[20px] font-normal">Transactions</h4>
          <p className="text-[20px] font-normal">
            Your transaction shows here when you make any
          </p>
        </div>
        <div className="w-full text-center text-[#3D3066] font-['Cabinet_Grotesk'] font-bold text-[20px] mt-4">
          <Link href={""} className="block">
            VIEW MORE TRANSACTIONS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mywallet;
