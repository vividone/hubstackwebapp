"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ShareIcon from "@/assets/icons/shareIcon";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import ClipBoard from "../../wallet/clipboard";
import ModalsLayout from "../modalsLayout";
import CurrentBalance from "../currentBalance";
import { Button } from "@/components/common/button";
import WalletForm from "./createwalletmodal";

interface MywalletProps {
  setShow: (show: boolean) => void;
  wallet: any;
  formik: any;
  isPending: boolean;
  isSuccess: boolean;
}

const MywalletDetails: React.FC<MywalletProps> = ({ setShow, wallet, formik, isPending, isSuccess }) => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [content, setContent] = useState("Wema Bank");
  const [showWallet, setShowWallet] = useState(false);

  const dataSets: any = {
    "Wema Bank": wallet?.filter((item: any) => item.provider === "Flutterwave")[0],
    "Paystack Titan": wallet?.filter((item: any) => item.provider === "Paystack Titan")[0],
  };

  useEffect(() => {
    if(isSuccess) {
      setShowWallet(false)
    }
  }, [isSuccess])

  const existingData = dataSets[content];

  return (
    <ModalsLayout flow={0} setFlow={() => {}} header={"Account Details"} show={true} setShow={setShow}>
      <div className="mt-6">
        <div className="border-y border-[#E7E6F2] py-[30px]">
            <CurrentBalance />                
        </div>

        <nav className="mt-8 mb-8">
          <div className="grid grid-cols-2 gap-12 border-b border-[#E7E7E7]">

            {
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
        <div className="mt-4">
          <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
              {
                !existingData ?
                  <div className="flex flex-col gap-6 items-center">
                    <p>Sorry, you do not have an account with this provider yet. Request account number by clicking the button below.</p>
                    <Button size="long" onClick={() => setShowWallet(true)}>Request</Button>                    
                    {showWallet && (
                      <WalletForm show={showWallet} setShow={setShowWallet} formik={formik} isPending={isPending} />
                    )}
                  </div>
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

                  <Link
                    href=""
                    className="flex items-center text-[#3D3066] text-[14px] mt-8 flex justify-center items-center gap-2"
                  >
                    <span className="font-bold"> SHARE DETAILS </span>
                    <ShareIcon width={16} height={19} />
                  </Link>
                </div>
                
              }
            
          </div>
        </div>
      </div>

    </ModalsLayout>
  );
};

export default MywalletDetails;
