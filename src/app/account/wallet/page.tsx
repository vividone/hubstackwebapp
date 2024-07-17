"use client";
import React, { useState } from "react";
import Card from "@/components/common/card";
import { Button } from "@/components/common/button";
import Image from "next/image";
import WalletForm from "@/components/common/createwallet";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
const Wallet = () => {
  const [showWallet, setShowwallet] = useState(false);
  const [hasWallet,] = useLocalStorage(TOKEN.HASWALLET)
  const setShow = (bool: any) => {
    setShowwallet(bool);
  };
  const cardData = [
    {
      logo: "/images/dollar-bag-1.svg",
      amount: "₦1000",
      type: "Balance",
      visibility: true,
      colors: {
        logoBackground: "#FFFFFF1A",
        cardBackground: "#3D3066",
      },
    },
    {
      logo: "/images/boxwcheck.svg",
      amount: "₦0",
      type: "Inflow",
      visibility: false,
      colors: {
        logoBackground: "#3763D9",
        cardBackground: "#507FFF",
      },
    },
    {
      logo: "/images/Frame.svg",
      amount: "₦0",
      type: "Outflow",
      visibility: false,
      colors: {
        logoBackground: "#0CBFD9",
        cardBackground: "#00D7F7",
      },
    },
    {
      logo: "/images/stack.svg",
      amount: "₦0",
      type: "Transactions",
      visibility: false,
      colors: {
        logoBackground: "#2F2E31",
        cardBackground: "#000000",
      },
    },
  ];

  return (
    <div className="flex-1 relative">
      <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-CabinetGrosteque p-[20px_25px] text-[#000000]">Your Wallet</h2>
      {showWallet && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
          <WalletForm setShow={setShow} />
          {/* <Mywallet setShow={setShow} /> */}
        </div>
      )}
      <main className="flex flex-col gap-[20px] p-[0px_20px]">
        <div className="self-end">
          <Button size="lg" onClick={() => setShow(true)}>
            <span className="flex items-center">
              <Image
                src="/images/cross.svg"
                alt="crosslogo"
                width={20}
                height={20}
              />
            </span>
            { hasWallet ? (
              <span >FUND WALLET</span>
            ) : (
              <span>CREATE WALLET</span>
            )}
          </Button>
        </div>
        <div className="pl-[0.2rem] grid xl:grid-cols-4 sm:grid-cols-2 gap-[20px] 2xl:gap-[30px]">
          {cardData.map((value, key) => (
            <Card value={value} key={key} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Wallet;
