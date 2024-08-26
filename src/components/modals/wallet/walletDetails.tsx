"use client";
import React, { useState } from "react";
import Link from "next/link";
import ShareIcon from "@/assets/icons/shareIcon";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import ClipBoard from "../../wallet/clipboard";
import ModalsLayout from "../modalsLayout";
import CurrentBalance from "../currentBalance";

interface MywalletProps {
  setShow: (show: boolean) => void;
  wallet: any;
}

const MywalletDetails: React.FC<MywalletProps> = ({ setShow, wallet }) => {
  const [flow, setFlow] = useState("Account Details");
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [content, setContent] = useState("Microbiz MFB");

  const dataSets: any = {
    "Microbiz MFB": wallet?.filter((item: any) => item.provider === "Microbiz MFB")[0],
    "Wema Bank": wallet?.filter((item: any) => item.provider === "Flutterwave")[0],
    "Paystack Titan": wallet?.filter((item: any) => item.provider === "Paystack Titan")[0],
  };

  const existingData = dataSets[content];

  return (
    <ModalsLayout flow={0} setFlow={() => {}} header={flow} show={true} setShow={setShow} isPadded={false}>
      <div className="mt-6">
        <div className="border-y border-[#E7E6F2] p-[30px_40px] ">
            <CurrentBalance />                
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
        </div>
      </div>

    </ModalsLayout>
  );
};

export default MywalletDetails;
