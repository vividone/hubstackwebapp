"use client";
import React, { useState } from "react";
import Card from "@/components/common/card";
import { Button } from "@/components/common/button";
import Image from "next/image";
import WalletForm from "@/components/common/createwallet";
// import Mywallet from "@/components/common/Existinguserwallet";
const Wallet = () => {
  const [user, setUser] = useState(true);
  const [showWallet, setShowwallet] = useState(false);
  const setShow = (bool: any) => {
    setShowwallet(bool);
  };
  const cardData = [
    {
      logo: "/images/dollar-bag-1.svg",
      amount: "$1000",
      type: "Wallet Balance",
      visibility: true,
      colors: {
        logoBackground: "#FFFFFF1A",
        cardBackground: "#3D3066",
      },
    },
    {
      logo: "/images/boxwcheck.svg",
      amount: "$0",
      type: "Inflow",
      visibility: true,
      colors: {
        logoBackground: "#3763D9",
        cardBackground: "#507FFF",
      },
    },
    {
      logo: "/images/Frame.svg",
      amount: "$0",
      type: "Outflow",
      visibility: true,
      colors: {
        logoBackground: "#0CBFD9",
        cardBackground: "#00D7F7",
      },
    },
    {
      logo: "/images/stack.svg",
      amount: "$0",
      type: "Transactions",
      visibility: true,
      colors: {
        logoBackground: "#2F2E31",
        cardBackground: "#000000",
      },
    },
  ];

  return (
    <div className="flex-1 relative 2xl:px-[70px]">
      {showWallet && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
          <WalletForm setShow={setShow} />
          {/* <Mywallet setShow={setShow} /> */}
        </div>
      )}
      <main className="flex flex-col gap-[20px] p-[20px] ">
        <div className="self-end">
          <Button size="long" onClick={() => setShow(true)}>
            <span className="flex items-center">
              <Image
                src="/images/cross.svg"
                alt="crosslogo"
                width={20}
                height={20}
              />
            </span>
            { user ? (
              <span >FUND WALLET</span>
            ) : (
              <span>CREATE WALLET</span>
            )}
          </Button>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[20px] 2xl:gap-[30px]">
          {cardData.map((value, key) => (
            <Card value={value} key={key} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Wallet;
