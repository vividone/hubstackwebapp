import React, { useState } from "react";
import Image from "next/image";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import CopyIcon from "@/assets/icons/CopyIcon";
import ShareIcon from "@/assets/icons/shareIcon";
import { Button } from "@/components/common/button";
import ArrowDown from "@/assets/icons/arrowDown";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import CableTvPurchase from "./Purchasedetails";
const CableTvWallet = ({ show, setShow}: any) => {
  const [visibility, setVisibility] = useState(true);
  const [purchase, setPurchase] = useState(true);
  return (
    <>
       {purchase && (
        <section className="flex flex-col bg-white h-screen md:w-[40vw] sm:w-[400px] w-full text-black h-[100vh] overflow-y-scroll">
          <header className="flex justify-between items-center font-medium text-4xl mb-10 p-10">
            <h1>Your Wallet</h1>
            <Image
              width={20}
              height={20}
              alt="close button"
              src="/images/close.svg"
              className="cursor-pointer"
              onClick={() => setShow(false)}
            />
          </header>
          <div className="flex justify-between items-center w-full border-y border-[#E7E6F2] px-10 py-5">
            <div>
              <span className="block font-bold text-[#111111] text-[22px]">
                Current Balance
              </span>
              <span className="flex items-center text-[#111111] text-[32px] font-bold font-openSans">
                {visibility && (
                  <NairaIconElectricBill
                    width={26}
                    height={26}
                    className="pt-1"
                  />
                )}
                <span className="pb-1">{visibility ? "2000.00" : "*****"}</span>
              </span>
            </div>
            <span className="cursor-pointer pr-[2rem]">
              {visibility ? (
                <RemoveRedEyeOutlinedIcon
                  onClick={() => setVisibility(false)}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  onClick={() => setVisibility(true)}
                />
              )}
            </span>
          </div>

          <main className="px-10 py-8">
            <div className="flex flex-col p-4 md:p-8 bg-[#00D7F71A] border border-[#E7E6F2] rounded-md">
              <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 items-center">
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="rounded-md w-[86px] h-[56px] bg-white">
                    <Image
                      src="/images/cableTvImages/actTV.png"
                      width={86}
                      height={56}
                      alt="TV logo"
                    />
                  </div>
                  <span className="font-semibold lg:text-[20px] sm:text[16px] font-OpenSans">
                    African Cable Television (ACTV) Subscription
                  </span>
                </div>
              </div>
              <div className="p-0 mb-4 mt-4">
                <h2 className="font-normal text-[16px] font-OpenSans md:text-lg">
                  Smartcard or Decoder Number
                </h2>
                <p className="text-[16px] text-[#8C8B92]">09025923159</p>
              </div>

              <div className="flex p-0 font-OpenSans gap-[20%]">
                <div>
                  <h2 className="font-normal text-[16px] md:text-lg">
                    Full Name
                  </h2>
                  <p className="text-[16px] text-[#8C8B92]">
                    Babalola Zainab Opeyemi
                  </p>
                </div>
                <div>
                  <h2 className="font-normal text-[16px] md:text-lg">
                    Cable TV Plan
                  </h2>
                  <p className="text-[16px] text-[#8C8B92]">ACTV</p>
                </div>
              </div>
            </div>
            <section className="w-full pb-2 flex items-center justify-center text-center text-[16px] font-normal items-center mt-8">
              <p className=" w-[75%]">
                The amount of <span className="font-bold">NGN1,100.00</span>{" "}
                will be debited from your wallet balance, proceed below to
                complete transaction
              </p>
            </section>
            <section className="w-full">
              <Button type="submit" size={"full"} className="text-[16px] mb-4 "onClick={()=>{
                setPurchase(false)
              }}>
                PROCEED WITH WALLET
              </Button>
              {true && (
                <Button
                  size={"full"}
                  variant="secondary"
                  className="text-[#3D3066] text-[16px]"
                >
                  USE ALTERNATE PAMENT METHOD
                </Button>
              )}
            </section>
          </main>
        </section>
      )}
      {!purchase && <CableTvPurchase show={show} setShow={setShow} />} 
    </>
  );
};

export default CableTvWallet;
