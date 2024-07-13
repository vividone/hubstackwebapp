"use client"
import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Input } from "./inputs";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface MywalletProps {
  setShow: (show: boolean) => void;
}

const Mywallet: React.FC<MywalletProps> = ({ setShow }) => {
  const [visibility, setVisibility] = useState(true);
  const [copiedText, setCopiedText] = useState("");

  const existingData = {
    currentBalance: "#0.00",
    accountNumber: "0209064859",
    accountName: "Zainab Babalola",
    bankName: "Providus Bank",
  };

  const handleCopy = (text: string) => {
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="h-screen w-[52vw] bg-white overflow-y-scroll z-[1000]">
      <div className="flex justify-between p-[30px_40px] pt-[55px]">
        <h3 className="text-4xl font-medium text-[#111111]">My Wallet</h3>
        <Image
          src="/images/close.svg"
          alt="closebutton"
          width={20}
          height={20}
          onClick={() => setShow(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="p-[40px_50px] border-y border-[#E7E6F2]">
        <div className="flex justify-between">
          <div>
            <span className="block font-bold text-[#111111] text-[18px]">Current Balance</span>
            <span className="block p-[0_10px] text-[#3D3066] text-[32px]  font-bold font-openSans">
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
        <div className="mt-4">
          <label htmlFor="desiredAmount" className="block text-[18px] font-normal">
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
      <div className="p-[20px_30px] mt-4">
        <div className="border border-[#E7E6F2] p-4">
          <div className="flex gap-5">
            <div className="flex-1">
              <CopyToClipboard text={existingData.accountNumber} onCopy={() => handleCopy(existingData.accountNumber)}>
                <p className="block font-bold text-[18px] cursor-pointer">{existingData.accountNumber}</p>
              </CopyToClipboard>
              <span className="block text-[16px]">Account Number</span>
            </div>
            <div className="flex-1 pt-1">
              <CopyToClipboard text={existingData.accountNumber} onCopy={() => handleCopy(existingData.accountNumber)}>
                <Image
                  src="/images/copylogo.svg"
                  alt="copylogo"
                  height={20}
                  width={20}
                  className="cursor-pointer"
                  onClick={() => handleCopy(existingData.accountNumber)}
                />
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className="flex-1">
              <CopyToClipboard text={existingData.accountName} onCopy={() => handleCopy(existingData.accountName)}>
                <span className="block font-bold text-[18px] cursor-pointer">{existingData.accountName}</span>
              </CopyToClipboard>
              <span className="block text-[16px]">Account Name</span>
            </div>
            <div className="flex-1 pt-1">
              <CopyToClipboard text={existingData.accountName} onCopy={() => handleCopy(existingData.accountName)}>
                <Image
                  src="/images/copylogo.svg"
                  alt="copylogo"
                  height={20}
                  width={20}
                  className="cursor-pointer"
                  onClick={() => handleCopy(existingData.accountName)}
                />
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className="flex-1">
              <CopyToClipboard text={existingData.bankName} onCopy={() => handleCopy(existingData.bankName)}>
                <span className="block font-bold text-[18px] cursor-pointer">{existingData.bankName}</span>
              </CopyToClipboard>
              <span className="block text-[16px]">Bank Name</span>
            </div>
            <div className="flex-1 pt-1">
              <CopyToClipboard text={existingData.bankName} onCopy={() => handleCopy(existingData.bankName)}>
                <Image
                  src="/images/copylogo.svg"
                  alt="copylogo"
                  height={20}
                  width={20}
                  className="cursor-pointer"
                  onClick={() => handleCopy(existingData.bankName)}
                />
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[20px_30px]">
        <div className="border border-[#E7E6F2] p-4">
          <h4 className="text-[20px] font-nl">Transactions</h4>
          <p className="text-[15px] font-normal">Your transaction shows here when you make any</p>
          <div className="w-full text-center text-[#3D3066] font-['Cabinet_Grotesk'] font-bold text-[20px] mt-4">
            <Link href={""} className="block">
              VIEW MORE TRANSACTIONS
            </Link>
          </div>
        </div>
      </div>
      {copiedText && <div className="fixed bottom-4 right-4 p-2 bg-[#3D3066] text-white">Copied: {copiedText}</div>}
    </div>
  );
};

export default Mywallet;
