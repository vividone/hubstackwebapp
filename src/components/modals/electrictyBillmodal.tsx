"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { Input } from "../common/inputs";
import { Button } from "../common/button";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useElectricBll } from "@/helpers/services";
import Confirmation from "./confirmation";
const Amount = {
  total: `1,100`,
};

const ElectricityBillModal = ({ setShow }: any) => {
  const [visibility, setVisibility] = useState(true);
  const { formik, isPending, isSuccess, isError, error } = useElectricBll();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
    console.log(formik.errors);
  };

  return (
    <div className="flex flex-col bg-white w-[90vw] md:w-[45vw] text-black p-10 h-[100vh] overflow-y-scroll">
      <header className="flex justify-between items-center font-medium text-4xl mb-12">
        <h1>Electricity Bill</h1>
        <Image
          width={20}
          height={20}
          alt="close button"
          src="/images/close.svg"
          className="cursor-pointer"
          onClick={() => setShow(false)}
        />
      </header>

      <main className="flex flex-col">
        <div className="flex justify-between items-center ">
          <div>
            <span className="block font-bold text-[#111111] text-[22px]">
              Wallet Balance
            </span>
            <span className="flex items-center text-[#111111] text-[32px] font-bold font-openSans">
              <NairaIconElectricBill
                width={19.5}
                height={18.25}
                className="pt-1"
              />
              {visibility ? "2000" : "****"}
            </span>
          </div>
          <span className="cursor-pointer pr-[2rem]">
            {visibility ? (
              <RemoveRedEyeOutlinedIcon onClick={() => setVisibility(false)} />
            ) : (
              <VisibilityOffOutlinedIcon onClick={() => setVisibility(true)} />
            )}
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full justify-center"
        >
          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="meterNumber"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              Meter Number
            </label>
            <div className="text-[#8c8b92]">
              <Input
                type="number"
                name="meterNumber"
                placeholder="123456789101112131415"
              />
            </div>
          </div>

          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="state"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              State
            </label>
            <div className="text-[#8c8b92]">
              <Input type="text" name="state" placeholder="Oyo" />
            </div>
          </div>

          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="meterType"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              Meter Type
            </label>
            <div className="text-[#8c8b92]">
              <Input type="select" name="meterType" placeholder="Meter Type" />
            </div>
          </div>

          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="amount"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              How Much Electricity Do You Want To Buy?
            </label>
            <div className="text-[#8c8b92]">
              <Input type="number" name="amount" placeholder="#1000" />
            </div>
          </div>

          <div className="mt-5">
            <div className="flex gap-2 items-center font-openSans">
              <span className="font-bold text-[#111111] text-[16px]">
                SERVICE CHARGE
              </span>
              <span className="flex items-center font-normal">
                <NairaIconElectricBill width={19.5} height={18.25} />
                <p className="font-normal text-[20px]">{Amount.total}</p>
              </span>
            </div>
            <div className="flex gap-2 items-center font-bold text-[#111111] text-[16px] font-openSans">
              <span className="font-bold text-[#111111] text-[16px]">
                TOTAL
              </span>
              <span className="flex items-center font-normal">
                <NairaIconElectricBill width={19.5} height={18.25} />
                <p className="font-normal text-[20px]">{Amount.total}</p>
              </span>
            </div>
          </div>

          <p className="font-Inter text-[20px] font-normal mt-10">
            By continuing, you agree to our{" "}
            <span className="text-[#3D3066]">Terms and Conditions</span>
          </p>
          <div className="w-full">
            <Button
              type="submit"
              size={"full"}
              className="text-[20px] font-CabinetGrotesk mb-4"
            >
              PAY NGN {Amount.total}
            </Button>
            {false && (
              <Button
                size={"full"}
                variant="secondary"
                className="text-[20px] font-CabinetGrotesk font-bold text-[#3D3066]"
              >
                FUND WALLET
              </Button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
};

export default ElectricityBillModal;
