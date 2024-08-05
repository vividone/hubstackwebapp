"use client"
import React, { FormEvent, use, useEffect, useState } from "react";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import ShareIcon from "@/assets/icons/shareIcon";
import AlternateWalletFunding from "../modals/AlternateFunding";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Input } from "./inputs";
import { useFundWallet, useGetWallet, useVerifyFund } from "@/helpers/wallet";
import ToastComponent from "./toastComponent";
import Confirmation from "../modals/confirmation";
import ClipBoard from "../wallet/clipboard";
import NairaIcon from "@/assets/icons/nairaIcon";

interface MywalletProps {
  setShow: (show: boolean) => void;
  refreshWallet: (amount: number) => void;
}

const Mywallet: React.FC<MywalletProps> = ({ setShow, refreshWallet }) => {
  const { data: fundData, formik, isPending, isSuccess, isError, error } = useFundWallet()
  const { data, formik: verify, isSuccess: isSuccessVerify } = useVerifyFund()
  const [showAlternate, setShowAlternate] = useState(false)
  const [showVerify, setShowVerify] = useState(false)
  const [ userWallet, setUserWallet] = useLocalStorage<any>(TOKEN.WALLET); 
  const [ userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);

  const existingData = {
    currentBalance: "#0.00",
    accountNumber: userWallet?.accountNumber,
    accountName: userDetails?.firstname + " " + userDetails?.lastname,
    bankName: userWallet?.bankName,
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if(showVerify) {
      setUserWallet({ ...userWallet, balance: userWallet.balance + fundData.amount})
      verify.setFieldValue("transactionId", fundData._id)
      verify.handleSubmit()
      refreshWallet(userWallet.balance + fundData.amount)
    }
    else {
      formik.handleSubmit()
    }
    
  };

  const closeSuccess = () => {
    setShowVerify(false)
    setShow(false)
  }

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
      msg={isSuccess ? "Successful! Proceed to confirm payment" : isError ? error : ""}
    />
    <form onSubmit={handleSubmit}>

      <div className="flex justify-between p-[40px_30px] pt-[55px]">
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
        { !showVerify ?  
          <>   
            <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
                Enter Amount
            </label>
            <Input 
              leftIcon={() => <NairaIcon className="w-[18px]" />}
              name="amount"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number" 
              placeholder="0.00" 
            />
          </> 
         : 
         <>
          <h2 className="text-xl font-semibold pb-2">Account Transfer</h2>
          <p>Transfer {fundData.amount} to the account below for this payment only,<br /> this session expires in 30mins</p>
        </>
         }
      </div>
      <div className="p-[20px_30px] mt-4">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
          { showVerify ? "" : 
          <p className="font-bold text-lg mb-6">
            Make transfer to the account details below
          </p>
          }
          <div className="flex flex-col gap-4">
            <ClipBoard label={"Account Number"} text={existingData.accountNumber} />
            <ClipBoard label={"Account Name"} text={existingData.accountName} />
            <ClipBoard label={"Bank Name"} text={existingData.bankName} />
          </div>
          { showVerify ? 
          ""
          :
          <Link href="" className="text-[#3D3066] mt-8 mb-6 flex justify-center items-center gap-2">SHARE DETAILS <ShareIcon /></Link>
          }

        </div>
        
        <div className="mt-10 flex flex-col items-center gap-4">

          { showVerify ? 
            <>
              <p className="text-center -mb-4">Please click the below button after a successful transfer</p>
              <p className="text-center">Your token will be sent once we receive your payment</p>
            </>
            :
            ""
          }
          <Button 
            variant="primary" 
            size="long"
            type="submit"
            isLoading={isPending}
            disabled={isPending} 
          >
            <span className="text-[16px]">{ !showVerify ? "CONTINUE" : "I HAVE MADE THIS TRANSFER" }</span>
          </Button>

          </div>
      </div>
      </form>
      
      <div className="flex justify-center">
        <Button variant="secondary" size="long" onClick={() => setShowAlternate(!showAlternate)}>
            <span className="text-[16px]">{ !showVerify ? "USE ALTERNATE POP-UP METHOD" : "USE PAYSTACK INSTEAD" }</span>
        </Button>
      </div>

      
      { showAlternate ? <AlternateWalletFunding setShow={setShowAlternate} /> : "" }
            
      {/* Confirmation success modal */}
      { isSuccessVerify ?
        <Confirmation 
          status={"success"} 
          setShow={setShow} 
          heading={"Fund Wallet"} 
          text={"Transaction Successful"} 
          subtext={"You wallet has been credited with #" + data.amount} 
          buttonProps={{ text: "THANK YOU", action: () => closeSuccess() }} 
        />
      : 
        ""
      }
    </div>
  );
};

export default Mywallet;
