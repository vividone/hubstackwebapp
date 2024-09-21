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
import { Loader } from "@/assets/common/loader";
import { LoaderIcon } from "react-hot-toast";


interface MywalletProps {
  setShow: (show: boolean) => void;
  refreshWallet: (amount: number) => void;
  wallet: any;
  balance: number;
}

const Mywallet: React.FC<MywalletProps> = ({ setShow, refreshWallet, wallet }) => {
  const {
    data: fundData,
    formik,
  } = useFundWallet();
  const { formik: verify, isSuccess, isError, isPending } = useVerifyFund();
  const [showAlternate, setShowAlternate] = useState(false);
  const [flow, setFlow] = useState(0);
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [content, setContent] = useState("Wema Bank");
  const [status, setStatus] = useState("")

  const fundHeading = ["Account Details", "Fund Wallet", "Verify", "Success"]

  const dataSets: any = {
    "Wema Bank": wallet?.filter((item: any) => item.provider === "Flutterwave")[0],
    "Paystack Titan": wallet?.filter((item: any) => item.provider === "Paystack Titan")[0],
  };

  const existingData = dataSets[content];

  const alternateRef = useOutsideClick(setShowAlternate, false)

  const handleSubmit = async () => {
    if(flow === 1) {
      if(+formik.values.amount > 90) {
        setFlow(2);
      }
      else {
        formik.setErrors({ amount: "Input a valid amount" })
      }
    }
    else if(flow === 2) {
      verify.handleSubmit();
      refreshWallet(fundData.amount);
    }
    else {
      setFlow(1)
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
    if (isSuccess) {
      setFlow(0);
    }
    else if(isError) {
      setStatus("error")
    }
  }, [isSuccess, isError])

  return (
    <>
      
    <ModalsLayout flow={flow} setFlow={setFlow} header={fundHeading[flow]} show={true} setShow={setShow} isPadded={false}>
      
      <div ref={alternateRef}>
        {showAlternate && <AlternateWalletFunding amount={formik.values.amount} setFlow={setFlow}  refreshWallet={verifyAlternate} setShow={setShowAlternate} />}
      </div>
      {
        status !== "" ?
        <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center p-8 bg-white/[0.8] backdrop-blur-sm z-[20]">
          <div className="flex justify-center flex-col gap-4 h-fit bg-white border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
            <div className="flex justify-between py-6">
              <h1 className="text-[20px] font-bold flex items-center gap-2"> <LoaderIcon />Payment Processing</h1>
              <Close />
            </div>
            <p>We will confirm your payment and update your account shortly!</p>
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
          {flow === 1 ? (
            <>
            <div className="p-[0px_40px]">
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
            </>
          ) :
          flow === 2 ?
          (
            <div className="border-y border-[#E7E6F2] p-[20px_40px] ">
              <CurrentBalance />                
            </div>
          )
          : ""
        }
        </div>
        <nav className="mt-8 mb-8 p-[0_40px] ">
          <div className="grid grid-cols-2 gap-12 border-b border-[#E7E7E7]">

            {
              flow === 1 || flow === 2 ? "" :
              [
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
          {
            flow === 1 ? "" : flow === 2 ? 
            <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
              <p>Kindly pay <span className="px-1 font-bold text-[18px]">{currencyFormatter(formik.values.amount)}</span> to the account number shown below and click &apos;Confirm Transfer&apos;</p>
              
              <p className="text-[24px] font-bold mt-8">{existingData?.accountNumber}</p>
              <p className="uppercase">{userDetails?.firstname + " " + userDetails?.lastname}</p>
            </div>
            :
          
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
          }

          <div className="mt-10 flex flex-col items-center gap-4">
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
                {flow === 0 ? "FUND WALLET" : flow === 1 ? "CONTINUE" : "CONFIRM TRANSFER"}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {
        flow === 2 ?
        
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
      (isSuccess || flow === 3) && (
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
