"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Input } from "../../common/inputs";
import { Button } from "../../common/button";
import Confirmation from "../confirmation";
import CurrentBalance from "../currentBalance";
import { currencyFormatter } from "@/helpers/currencyConvert";
import { NINCard } from "@/app/account/services/nin-services/page";

interface MywalletProps {
  slip?: NINCard;
  setShow: (show: boolean) => void;
}

const NinPaymentModal: React.FC<MywalletProps> = ({ slip, setShow }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [status, setStatus] = useState("error");

  return (
    <div className="relative h-screen md:w-[40vw] sm:w-[300px] w-full bg-white duration-500 overflow-y-scroll z-[1000]">
      <div className="flex justify-between p-[30px_40px] pt-[55px]">
        <h3 className="text-4xl font-medium text-[#111111]">{slip?.title}</h3>
        <Image
          src="/images/close.svg"
          alt="closebutton"
          width={20}
          height={20}
          onClick={() => setShow(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="px-[40px] pt-[20px]">
        <CurrentBalance />        
      </div>

      <div className="px-[40px] pb-[50px]">
        <div className="">

            <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
                Enter NIN
            </label>
            <Input name="NIN" type="number" placeholder="123456789011" />
            <p className="font-bold mt-2">AMOUNT: {currencyFormatter(slip?.amount)}</p>

            <div className="mt-10 h-20">
                <Button onClick={() => setIsSuccess(true)}>
                <span className="text-[16px] uppercase">PROCEED</span>
                </Button>
            </div>
        </div>
      </div>

      {/* Confirmation success modal */}

      {
        isSuccess ?
        
          <Confirmation 
            status={status} 
            setShow={setShow} 
            heading={"NIN Long Slip"} 
            text={status === "error" ? "No Record Found" : "Transaction Successful"} 
            subtext={status === "error" ? "No amount was debited" : `You have been debitted ${currencyFormatter(slip?.amount)}`} 
            buttonProps={{ text: status === "error" ? "TRY AGAIN" : "DOWNLOAD SLIP", action: setIsSuccess }} 
          />
        : 
        ""
      }
    </div>
  );
};

export default NinPaymentModal;
