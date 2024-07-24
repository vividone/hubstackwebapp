"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/common/button";
import Image from "next/image";
import WalletForm from "@/components/modals/createwalletmodal";
import { useGetWallet } from "@/helpers/wallet";
import Card from "@/components/common/card";
import Mywallet from "@/components/common/Existinguserwallet";


const Wallet = () => {
  const [showWallet, setShowwallet] = useState(false);
  const [wallet, setWallet] = useState({})


  const setShow = (bool: any) => {
    setShowwallet(bool);
  };

  useEffect(() => {
    if(localStorage.wallet) {
      setWallet(localStorage.wallet)
    }
    else if(localStorage.hasWallet) {
      const { userWallet } = useGetWallet()
      setWallet(userWallet)
    }
  }, [localStorage.hasWallet, localStorage.wallet])

  const cardData = {
      logo: "/images/dollar-bag-1.svg",
      amount: "₦0.0",
      type: "Wallet Balance",
      visibility: true,
    }

  return (
    <div className="flex-1 relative h-full p-[50px_25px] ">

      <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-CabinetGrosteque mb-[50px] font-medium">Wallet</h2>

      {
        localStorage.hasWallet ? 
        <>
        {showWallet && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
            <WalletForm setShow={setShow} />
          </div>
        )}

        <div className="flex flex-col flex-1 justify-center items-center gap-4 my-8">

          <Image src={"/images/magnifyingGlass.png"} alt="magnifying glass" width={160} height={100} />

          <p className="mt-1 text-primary_dark 2xl:text-[32px] text-[24px] my-4">You do not have a wallet yet</p>

          <div className="flex flex-col gap-4 items-center justify-center mt-2">
            <Button size="lg" onClick={() => setShow(true)}>
              <span className="flex items-center">
                <Image
                  src="/images/cross.svg"
                  alt="crosslogo"
                  width={20}
                  height={20}
                />
              </span>
              <span>CREATE WALLET</span>
            </Button>
          </div>
        </div>
        </>
        : 
        
        <div className="w-[353px]">
          {showWallet && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
              <Mywallet setShow={setShow} />
            </div>
          )}
          <Card value={cardData} />
          <div className="mt-12">
            <Button size="full" onClick={() => setShow(true)}>
              FUND WALLET
            </Button>
          </div>
        </div>
        }
    </div>
  );
};

export default Wallet;
