import React, { useState } from "react";
import Navigation from "@/components/page/Navigation";
import Card from "@/components/common/card";
import { Button } from "@/components/common/button";
import Image from "next/image";
import WalletForm from "@/components/common/createwallet";

const Homepage = () => {
  const [user, setUser] = useState(false);
  const [showWallet, setShowwallet] = useState(false);
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
    <div className="flex-1">
      {showWallet ? <WalletForm /> : null}
      {}
      <main className="flex flex-col gap-[20px] p-[20px]">
        <div className="self-end">
          <Button size="md">
            <span className="flex items-center">
              <Image
                src="/images/cross.svg"
                alt="crosslogo"
                width={20}
                height={20}
              />
            </span>
            {user ? (
              <span>FUND WALLET</span>
            ) : (
              <span onClick={() => setShowwallet(true)}>CREATE WALLET</span>
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
