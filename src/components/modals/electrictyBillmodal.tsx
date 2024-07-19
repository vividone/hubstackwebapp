"use client";
import React, { useState } from "react";
import Close from "@/assets/icons/close";
import { Button } from "@mui/material";
import Input from "@mui/material";

const ElectrictyBillmodal = () => {
  const [show, setShow] = useState<any>(true);
  return (
    <div className="flex flex-col bg-white w-[45vw] text-black p-[40px_50px] h-[100vh] overflow-y-scroll">
      <div className="font-normal text-4xl mb-4 flex justify-between">
        <span>Create Wallet</span>
        <span onClick={() => setShow(false)}>
          <Close />
        </span>
      </div>
    </div>
  );
};

export default ElectrictyBillmodal;