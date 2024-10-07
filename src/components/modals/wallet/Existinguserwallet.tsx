"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../common/button";
import Link from "next/link";
import ShareIcon from "@/assets/icons/shareIcon";
import AlternateWalletFunding from "../../modals/wallet/AlternateFunding";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useFundWallet, useVerifyFund } from "@/helpers/api/useWallet";
import Confirmation from "../confirmation";
import ClipBoard from "../../wallet/clipboard";
import ModalsLayout from "../modalsLayout";
import CurrencyField from "@/components/common/currencyInput";
import CurrentBalance from "../currentBalance";
import { useOutsideClick } from "@/helpers/useClickOutside";
import { currencyFormatter } from "@/helpers/currencyConvert";
import { Dropdown } from "@/components/common/Dropdown";
import Close from "@/assets/icons/close";
import { LoaderIcon } from "react-hot-toast";
import WalletForm from "./createwalletmodal";


interface MywalletProps {
  setShow: (show: boolean) => void;
  refreshWallet: (amount: number) => void;
  wallet: any;
  balance: number;
  isSuccess: boolean;
  formik: any
}

const Mywallet: React.FC<MywalletProps> = ({ setShow, refreshWallet, wallet, formik: createWallet, isSuccess: createWalletSuccess }) => {
  const {
    data: fundData,
    formik,
  } = useFundWallet();
  const { formik: verify, isSuccess, isPending } = useVerifyFund();
  const [showAlternate, setShowAlternate] = useState(false);
  const [flow, setFlow] = useState(0);
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [content, setContent] = useState("Wema Bank");
  const [status, setStatus] = useState("")
  const [showWallet, setShowWallet] = useState(false);

  const fundHeading = ["Fund Wallet", "Verify", "Success"]

  const dataSets: any = {
    "Wema Bank": wallet?.filter((item: any) => item.provider === "Flutterwave")[0],
    "Paystack Titan": wallet?.filter((item: any) => item.provider === "Paystack Titan")[0],
  };

  const existingData = dataSets[content];

  const alternateRef = useOutsideClick(setShowAlternate, false)

  const handleSubmit = async () => {
    if(flow === 0) {
      if(+formik.values.amount > 99.99) {
        setFlow(1);
      }
      else {
        formik.setErrors({ amount: "Amount must be between ₦100.00 and ₦5,000,000.00" })
      }
    }
    else if(flow === 1) {
      setStatus("Pending")
      setTimeout(() => {
        verify.handleSubmit();
        refreshWallet(fundData.amount);
      }, 100000)
    }
    else {
      setFlow(0)
    }
  };

  const verifyAlternate = () => {
    verify.setFieldValue("transactionId", fundData._id);
    verify.handleSubmit();
  }

  const closeSuccess = () => {
    setFlow(0);
    setShow(false);
  };

  useEffect(() => {
    if(createWalletSuccess) {
      setShowWallet(false)
    }
  }, [createWalletSuccess])

  useEffect(() => {
    if(isSuccess) {
      setFlow(0)
    }
  }, [isSuccess])

  return (
    <>
      
    <ModalsLayout flow={flow} setFlow={setFlow} header={fundHeading[flow]} show={true} setShow={setShow}>
      
      <div ref={alternateRef}>
        {showAlternate && <AlternateWalletFunding amount={formik.values.amount} setFlow={setFlow}  refreshWallet={verifyAlternate} setShow={setShowAlternate} />}
      </div>
      {
        status !== "" ?
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center p-8 bg-white/[0.8] backdrop-blur-sm z-[20]">
          <div className="flex justify-center flex-col gap-4 h-fit bg-white border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
            <div className="flex justify-between py-6">
              <h1 className="text-[20px] font-bold flex items-center gap-2"> <LoaderIcon />Payment Processing</h1>
              <button onClick={() => setStatus("")} ><Close/></button>
            </div>
            <p>We will confirm your payment and update your account shortly! </p>
            <p>Thanks</p>
            <div className="flex justify-end mt-6">
              <Button size="md" onClick={() => setStatus("")} className="px-8">OK</Button>
            </div>
          </div>
        </div>
        :
        ""
      }

      <div onSubmit={handleSubmit} className="mt-6">
        <div className="">
          {flow === 0 ? (
            <>
            <div className="">
            <label
              htmlFor="desiredAmount"
              className="block text-[18px] mb-2 mt-8 font-normal"
            >
              Choose Account
            </label>
            <Dropdown
              name="serviceProvider"
              value={{label: content, value: content}}
              onChange={(value) => {
                if (value) {
                  const selectedOption = value as any;
                  setContent(selectedOption?.value)
                  formik.setFieldValue("service", selectedOption.value);
                } else {
                }
              }}
              options={["Wema Bank", "Paystack Titan"].map((item: any) => ({
                label: item,
                value: item,
              }))}
              className="items-start text-start justify-start rounded-[8px]"
            />
            
          </div>
            <div className="">
              <label
                htmlFor="desiredAmount"
                className="block text-[18px] mb-2 mt-8 font-normal"
              >
                Amount
              </label>
              
              <CurrencyField 
                  onValueChange={(v: any) => formik.setFieldValue("amount", v.floatValue)} 
                />
                
              {
                formik.errors.amount ? 
                <p className="text-[12px] text-red-500 my-1">{formik.errors.amount}</p>
                :
                ""
              }
            </div>
            </>
          ) :
          flow === 1 ?
          (
            <div className="border-y border-[#E7E6F2]">
              <CurrentBalance />                
            </div>
          )
          : ""
        }
        </div>
        
        <div className="mt-4">
          {
            flow === 0 ? "" : flow === 1 ? 
            !existingData ?
            <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
              <p>You don&apos;t have an account number with this provider. Request account number by clicking the button below.</p>
            </div>
            :
            <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
              <p>Kindly pay <span className="px-1 font-bold text-[18px]">{currencyFormatter(formik.values.amount)}</span> to the account number shown below and click &apos;Confirm Transfer&apos;</p>
              <div className="flex flex-col gap-2 py-6">
                  <ClipBoard
                    label={"Account Number"}
                    text={existingData?.accountNumber}
                  />
                  <ClipBoard
                    label={"Account Name"}
                    text={userDetails?.firstname + " " + userDetails?.lastname}
                  />
                  <ClipBoard label={"Bank Name"} text={existingData?.bankName} />
              </div>
            </div>
            :
          
          <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
              <Link
                href=""
                className="flex items-center text-[#3D3066] text-[14px] mt-8 flex justify-center items-center gap-2"
              >
                <span className="font-bold"> SHARE DETAILS </span>
                <ShareIcon width={16} height={19} />
              </Link>
          </div>
          }

          <div className="mt-10 flex flex-col items-center gap-4">
            {
              !existingData && flow === 1 ?
              <>
              <Button size="long" onClick={() => setShowWallet(true)}>Request</Button>                    
              {showWallet && (
                <WalletForm show={showWallet} setShow={setShowWallet} formik={createWallet} isPending={isPending} />
              )}
              </>
              :
            <Button
              variant="primary"
              size="long"
              type="submit"
              isLoading={isPending}
              disabled={isPending}
              onClick={() => handleSubmit()}
              // className="mt-10"
            >
              <span className="text-[16px] ">
                {flow === 0 ? "CONTINUE" : "CONFIRM TRANSFER"}
              </span>
            </Button>
            }
          </div>
        </div>
      </div>

      {
        flow === 1 ?
        !existingData ? "" :
        <div className="flex justify-center mt-6">
          <Button
            variant="secondary"
            size="long"
            onClick={() => setShowAlternate(!showAlternate)}
          >
            <span className="text-[16px]">
              USE ALTERNATE TOP-UP METHOD
            </span>
          </Button>
        </div>

        : ""
      }

      {
      (isSuccess || flow === 2) && (
        <Confirmation
          status={"success"}
          setShow={setShow}
          heading={"Fund Wallet"}
          text={"Transaction Successful"}
          subtext={"Your wallet has been credited with " + currencyFormatter(formik.values.amount || fundData?.amount)}
          buttonProps={{ text: "CONTINUE", action: () => closeSuccess() }}
        />
      )}

      
    
    </ModalsLayout>
    </>
  );
};

export default Mywallet;
