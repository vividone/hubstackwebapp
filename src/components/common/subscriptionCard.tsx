"use client"
import React from "react";
import "./index.css";
import { Button } from "./button";
import Subcard from "@/assets/icons/Subcard";

const SubscriptionCard = ({value,setShow}: any) => {
  
  const placeholder = {
    title: "DSTV",
    logo: <Subcard />,
    btnText: "SUBSCRIBE",
    subText: "Get the NIMC Long Slip",
  };
  return (
    <div className="flex flex-col justify-between gap-3 p-6 rounded-[8px] border border-[#8C8B92]/[0.2] shadow-md w-[292px]">
      <p className="bg-[#3D3066]/[0.1] p-2 rounded-full h-[70px] w-[70px] flex items-center justify-center">
        {placeholder.logo}
      </p>
      <div>
        <p className="font-semibold text-[#000000] font-[Open Sans]">{value}</p>
        <p className="text-[#8C8B92] my-2">{placeholder.subText}</p>
      </div>
      <Button
        size={"full"}
        variant="secondary"
        onClick={() => setShow(true)}
        className="border-1"
      >
        {placeholder.btnText}
      </Button>
    </div>
  );
};

export default SubscriptionCard;
