"use client"
import React, { FormEvent, use, useEffect, useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ShareIcon from "@/assets/icons/shareIcon";
import AlternateWalletFunding from "../modals/AlternateFunding";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Input } from "./inputs";
import { useFundWallet, useVerifyFund } from "@/helpers/wallet";
import ToastComponent from "./toastComponent";
import Confirmation from "../modals/confirmation";
import { useRouter } from "next/navigation";

interface MywalletProps {
  setShow: (show: boolean) => void;
}

const Mywallet: React.FC<MywalletProps> = ({ setShow }) => {
  const { trxId, formik, isPending, isSuccess, isError, error } = useFundWallet()
  const { data, formik: verify, isSuccess: isSuccessVerify } = useVerifyFund()
  const [copiedText, setCopiedText] = useState("");
  const [showAlternate, setShowAlternate] = useState(false)
  const [showVerify, setShowVerify] = useState(false)
  const [ userWallet, ] = useLocalStorage<any>(TOKEN.WALLET); // to persist
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
  const router = useRouter()

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formik.errors)
    if(showVerify) {
      verify.setFieldValue("transactionId", trxId)
      verify.handleSubmit()
      console.log(trxId)
    }
    else {
      formik.handleSubmit()
    }
    
  };

  useEffect(() => {
    if(isSuccess) {
      setShowVerify(!showVerify)
    }
  }, [isSuccess])

  return (
    <div className="relative h-screen w-[40vw] bg-white overflow-y-scroll z-[1000]">

    <ToastComponent
      isSuccess={isSuccess} 
      isError={isError} 
      msg={isSuccess ? "successful" : isError ? error : ""}
    />
    <form onSubmit={handleSubmit}>

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
        <Input 
          name="amount"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="number" 
          placeholder="#0.00" 
        />
      </div>
      <div className="p-[20px_30px] mt-4">
        <div className="bg-[#E6FBFF] p-[30px]">
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
          <Button 
            variant="primary" 
            size="long"
            type="submit"
            isLoading={isPending}
            disabled={isPending} 
          >
            <span className="text-[16px]">{ !showVerify ? "CONTINUE" : "TRANSFER MADE" }</span>
          </Button>

          { !showVerify ? 
          <Button variant="secondary" size="long" onClick={() => setShowAlternate(!showAlternate)}>
            <span className="text-[16px]">USE ALTERNATE POP-UP METHOD</span>
          </Button>
          : ""
          }

            {
              showAlternate ?
              <AlternateWalletFunding setShow={setShowAlternate} />
              : 
              ""
            }
            {/* Confirmation success modal */}

            {
              isSuccessVerify ?
              
                <Confirmation 
                  status={"success"} 
                  setShow={setShow} 
                  heading={"Fund Wallet"} 
                  text={"Transaction Successful"} 
                  subtext={"You wallet has been credited with #" + data.amount} 
                  buttonProps={{ text: "THANK YOU", action: () => {router.push("/account/wallet"); setShow(false)} }} 
                />
              : 
              ""
            }
          </div>
      </div>
      {copiedText && <div className="fixed bottom-4 right-4 p-2 bg-[#3D3066] text-white">Copied: {copiedText}</div>}
      </form>
    </div>
  );
};

export default Mywallet;
