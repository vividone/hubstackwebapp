"use client"
import React, { useState } from "react";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Link from "../../custom/link";
import { Input } from "../../common/inputs";
import { Button } from "../../common/button";
import Confirmation from "../confirmation";

interface MywalletProps {
  slip: string;
  setShow: (show: boolean) => void;
}

const NinPaymentModal: React.FC<MywalletProps> = ({ slip, setShow }) => {
  const [visibility, setVisibility] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [status, setStatus] = useState("error");

  const existingData = {
    currentBalance: "0",
  };

  return (
    <div className="relative h-screen md:w-[40vw] sm:w-[300px] w-full bg-white duration-500 overflow-y-scroll z-[1000]">
      <div className="flex justify-between p-[30px_40px] pt-[55px]">
        <h3 className="text-4xl font-medium text-[#111111]">{slip}</h3>
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
        <div className="flex justify-between">
          <div>
            <span className="block font-bold text-[#111111] text-[18px]">Unit Balance</span>
            <span className="block text-[#3D3066] text-[32px]  font-bold font-openSans">
              {visibility ? existingData.currentBalance : "****"}
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
              {visibility ? (
                <RemoveRedEyeOutlinedIcon onClick={() => setVisibility(false)} />
              ) : (
                <VisibilityOffOutlinedIcon onClick={() => setVisibility(true)} />
              )}
            </span>
          </div>
        </div>
        
      </div>

      <div className="px-[40px] pb-[50px]">
        <div className="">

            <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
                Enter NIN
            </label>
            <Input name="NIN" type="number" placeholder="123456789011" />
            <p className="font-bold mt-2">UNIT COST: 1</p>

            <p className="2xl:text-[20px] xl:text-[18px] text-[16px]">
                    By continuing, you agree to our 
                    <a href="https://hubstack.app/terms-of-service"  className="text-[#3D3066] font-bold"> Terms and Conditions</a> 
                </p>
            <div className="mt-2 h-20">
                <Button onClick={() => setIsSuccess(true)}>
                <span className="text-[16px] uppercase">PROCEED TO BUY UNIT</span>
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
            subtext={status === "error" ? "No unit was debited" : "You have been debitted 2 units"} 
            buttonProps={{ text: status === "error" ? "TRY AGAIN" : "DOWNLOAD SLIP", action: setIsSuccess }} 
          />
        : 
        ""
      }
    </div>
  );
};

export default NinPaymentModal;
