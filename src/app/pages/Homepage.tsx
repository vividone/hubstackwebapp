import React, { useState } from "react";
import Navigation from "@/components/page/Navigation";
import Card from "@/components/common/card";
import { Button } from "@/components/common/button";
import Image from "next/image";
import WalletForm from "@/components/common/createwallet";

const Homepage = () => {
  const [user, setUser] = useState(false);
  const [showWallet, setShowwallet] = useState(false);
  const setShow = (bool: any) => {
    setShowwallet(bool);
  };
  const cardData = [
    {
      logo: "/images/dollar-bag-1.svg",
      amount: "$1000",
      type: "Income",
      visibility: true,
      colors: {
        logoBackground: "#FFFFFF1A",
        cardBackground: "#3D3066",
      },
    },
    {
      logo: "/images/boxwcheck.svg",
      amount: "$0",
      type: "Expense",
      visibility: true,
      colors: {
        logoBackground: "#3763D9",
        cardBackground: "#507FFF",
      },
    },
    {
      logo: "/images/frame.svg",
      amount: "$0",
      type: "Savings",
      visibility: true,
      colors: {
        logoBackground: "#0CBFD9",
        cardBackground: "#00D7F7",
      },
    },
    {
      logo: "/images/stack.svg",
      amount: "$0",
      type: "Investment",
      visibility: true,
      colors: {
        logoBackground: "#2F2E31",
        cardBackground: "#000000",
      },
    },
  ];

  return (
    <div className="flex-1 relative">
      {showWallet && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
          <WalletForm setShow={setShow} />
        </div>
      )}
      <main className="flex flex-col gap-[20px] p-[20px]">
        <div className="self-end">
        {/*for now till i implement the wallet component */}
          <Button size="md" onClick={() => setShow(true)}>
            <span className="flex items-center">
              <Image
                src="/images/cross.svg"
                alt="crosslogo"
                width={20}
                height={20}
                
              />
            </span>
            {user ? (
              <span className="w-full">FUND WALLET</span>
            ) : (
              <span>CREATE WALLET</span>
            )}
          </Button>
        </div>
        <div className="flex flex-wrap gap-[10px] justify-between">
          {cardData.map((value, key) => (
            <Card value={value} key={key} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Homepage;
