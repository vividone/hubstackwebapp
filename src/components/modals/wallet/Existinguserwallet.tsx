"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../common/button";
import Link from "next/link";
import ShareIcon from "@/assets/icons/shareIcon";
import AlternateWalletFunding from "../../modals/wallet/AlternateFunding";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useFundWallet, useVerifyFund } from "@/helpers/api/useWallet";
import ToastComponent from "../../common/toastComponent";
import Confirmation from "../confirmation";
import ClipBoard from "../../wallet/clipboard";
import ModalsLayout from "../modalsLayout";
import CurrencyField from "@/components/common/currencyInput";
import CurrentBalance from "../currentBalance";

interface MywalletProps {
  setShow: (show: boolean) => void;
  refreshWallet: (amount: number) => void;
  wallet: any;
  balance: number;
}

const Mywallet: React.FC<MywalletProps> = ({ setShow, refreshWallet, wallet, balance }) => {
  const {
    data: fundData,
    formik,
    isSuccess: initializeSuccess,
    isPending,
    isError,
    error,
  } = useFundWallet();
  const { formik: verify, isSuccess, isError: isVerifyError, isPending: isVerifyPending, error: verifyError } = useVerifyFund(fundData?._id);
  const [showAlternate, setShowAlternate] = useState(false);
  const [flow, setFlow] = useState("Account Details");
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [content, setContent] = useState("Microbiz MFB");

  const dataSets: any = {
    "Microbiz MFB": wallet?.filter((item: any) => item.provider === "Microbiz MFB")[0],
    "Wema Bank": wallet?.filter((item: any) => item.provider === "Flutterwave")[0],
    "Paystack Titan": wallet?.filter((item: any) => item.provider === "Paystack Titan")[0],
  };

  const existingData = dataSets[content];

  const handleSubmit = async () => {
    if(flow === "Fund Wallet") {
      formik.handleSubmit();
    }
    else if(flow === "verify") {
      verify.setFieldValue("transactionId", fundData._id);
      verify.handleSubmit();
      refreshWallet(fundData.amount);
      setFlow("")
    }
    else {
      setFlow("Fund Wallet")
    }
  };

  const closeSuccess = () => {
    setFlow("Account Details");
    setShow(false);
  };

  useEffect(() => {
    if (initializeSuccess) {
      setFlow("verify");
    }
  }, [initializeSuccess])

  return (
    <ModalsLayout flow={0} setFlow={() => {}} header={flow} show={true} setShow={setShow} isPadded={false}>
      <ToastComponent
        isSuccess={isSuccess}
        isError={isError}
        msg={
          isSuccess
            ? "Successful!"
            : isError || isVerifyError
            ? error || verifyError
            : ""
        }
      />
      <div onSubmit={handleSubmit} className="mt-6">
        <div className="">
          {flow === "Fund Wallet" ? (
            <div className="p-[0px_40px]">
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
                (formik.touched.amount && formik.errors.amount) ? 
                <p className="text-[12px] text-red-500 my-1">{formik.errors.amount}</p>
                :
                ""
              }
            </div>
          ) :
          flow === "verify" ?
          (
            <div className="border-y border-[#E7E6F2] p-[30px_40px] ">
              <CurrentBalance />                
            </div>
          )
          : ""
        }
        </div>
        <nav className="mt-8 mb-8 p-[0_40px] ">
          <div className="grid grid-cols-3 gap-12 border-b border-[#E7E7E7]">

            {
              [
                { id: 0, content: "Microbiz MFB" },
                { id: 1, content: "Wema Bank" },
                { id: 2, content: "Paystack Titan" },
              ]
              .map((item: {id: number, content: string}) => (
                <Link
                  key={item.id}
                  href="#"
                  title={item.content} aria-label={item.content}
                  onClick={() => setContent(item.content)}
                  className={`text-lg md:text-lg xxl:text-[25px] border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
                    content === item.content
                      ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                      : "font-normal"
                  }`}
                >
                  <span>{item.content}</span>
                </Link>
              ))
            }
            
          </div>
        </nav>
        <div className="mt-4 p-[0_40px]">
          <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
              {
                !existingData ?
                  <p>Sorry, you do not have an account with this provider yet. Please contact support</p>
                :

                <div className="flex flex-col gap-4">
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
                
              }
            
              <Link
                href=""
                className="flex items-center text-[#3D3066] text-[14px] mt-8 flex justify-center items-center gap-2"
              >
                <span className="font-bold"> SHARE DETAILS </span>
                <ShareIcon width={16} height={19} />
              </Link>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              variant="primary"
              size="long"
              type="submit"
              isLoading={isPending || isVerifyPending}
              disabled={isPending}
              onClick={() => handleSubmit()}
              // className="mt-10"
            >
              <span className="text-[16px] ">
                {flow === "Account Details" ? "FUND WALLET" : flow === "Fund Wallet" ? "CONTINUE" : "I HAVE MADE THIS TRANSFER"}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {
        flow === "Fund Wallet" ?
        
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
          {showAlternate && <AlternateWalletFunding setShow={setShowAlternate} />}
        </div>

        : ""
      }

      {isSuccess && (
        <Confirmation
          status={"success"}
          setShow={setShow}
          heading={"Fund Wallet"}
          text={"Transaction Successful"}
          subtext={"Your wallet has been credited with #" + formik.values.amount}
          buttonProps={{ text: "THANK YOU", action: () => closeSuccess() }}
        />
      )}
    </ModalsLayout>
  );
};

export default Mywallet;
