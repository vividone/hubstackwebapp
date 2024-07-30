"use client"
import React, { useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ShareIcon from "@/assets/icons/shareIcon";
import AlternateWalletFunding from "../modals/AlternateFunding";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Input } from "./inputs";

interface MywalletProps {
  setShow: (show: boolean) => void;
}

const Mywallet: React.FC<MywalletProps> = ({ setShow }) => {
  const [visibility, setVisibility] = useState(true);
  const [copiedText, setCopiedText] = useState("");
  const [showAlternate, setShowAlternate] = useState(false)
  const [showVerify, setShowVerify] = useState(false)
  const [ userWallet, ] = useLocalStorage<any>(TOKEN.WALLET); // to persist
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);

  const existingData = {
    currentBalance: "#0.00",
    accountNumber: userWallet?.accountNumber,
    accountName: userDetails?.firstname + " " + userDetails?.lastname,
    bankName: userWallet?.preferred_bank,
  };

  const handleCopy = (text: string) => {
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="relative h-screen w-[40vw] bg-white overflow-y-scroll z-[1000]">
      <div className="flex justify-between p-[30px_40px] pt-[55px]">
        <h3 className="text-4xl font-medium text-[#111111]">Fund Wallet</h3>
        <Image
          src="/images/close.svg"
          alt="closebutton"
          width={20}
          height={20}
          onClick={() => setShow(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="px-[30px]">      
        <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
            { showVerify ? "Transfer" : "Enter Amount" }
        </label>
        <Input name="desiredAmount" type="number" placeholder="#0.00" />
      </div>
      <div className="p-[20px_30px] mt-4">
        <div className="bg-[#E7E6F2] p-[30px]">
          <p className="font-bold text-lg mb-6">
            { showVerify ? "Confirm that you have made transfer" : "Make transfer to the account details below" }
          </p>
          <div className="flex justify-between w-full gap-5">
            <div className="">
              <CopyToClipboard text={existingData.accountNumber} onCopy={() => handleCopy(existingData.accountNumber)}>
                <p className="block font-bold text-[18px] cursor-pointer">{existingData.accountNumber}</p>
              </CopyToClipboard>
              <span className="block text-[16px]">Account Number</span>
            </div>
            <div className="pt-1">
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
          <div className="flex justify-between gap-5 mt-4">
            <div className="">
              <CopyToClipboard text={existingData.accountName} onCopy={() => handleCopy(existingData.accountName)}>
                <span className="block font-bold text-[18px] cursor-pointer">{existingData.accountName}</span>
              </CopyToClipboard>
              <span className="block text-[16px]">Account Name</span>
            </div>
            <div className="pt-1">
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
          <div className="flex justify-between gap-5 mt-4">
            <div className="">
              <CopyToClipboard text={existingData.bankName} onCopy={() => handleCopy(existingData.bankName)}>
                <span className="block font-bold text-[18px] cursor-pointer">{existingData.bankName}</span>
              </CopyToClipboard>
              <span className="block text-[16px]">Bank Name</span>
            </div>
            <div className="pt-1">
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

          { showVerify ? 
          <p className="mt-6 font-bold">Give us few minutes to confirm your transaction</p>
          :
          <Link href="" className="text-[#3D3066] mt-8 mb-6 flex justify-center items-center gap-2">SHARE DETAILS <ShareIcon /></Link>
          }

        </div>
        
        <div className="mt-10 flex flex-col items-center gap-4">
          
          { showVerify ? 
          
          <Button variant="primary" size="long" onClick={() => setShowVerify(!showVerify)}>
            <span className="text-[16px]">TRANSFER MADE</span>
          </Button>
          : 
          <>
          <Button variant="primary" size="long" onClick={() => setShowVerify(!showVerify)}>
            <span className="text-[16px]">CONTINUE</span>
          </Button>

          <Button variant="secondary" size="long" onClick={() => setShowAlternate(!showAlternate)}>
            <span className="text-[16px]">USE ALTERNATE POP-UP METHOD</span>
          </Button> 
        </>
        }

            {
              showAlternate ?
              <AlternateWalletFunding setShow={setShowAlternate} />
              : 
              ""
            }
          </div>
      </div>
      {copiedText && <div className="fixed bottom-4 right-4 p-2 bg-[#3D3066] text-white">Copied: {copiedText}</div>}
    </div>
  );
};

export default Mywallet;
