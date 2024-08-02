"use client";
import Image from "next/image";
import Close from "@/assets/icons/close";
import { Input } from "../common/inputs";
import { Button } from "../common/button";
import EyeIcon from "@/assets/icons/EyeIcon";
import EyeSlashIcon from "@/assets/icons/EyeSlashIcon";
import React, { useState, FormEvent } from "react";
import { useElectricBll } from "@/helpers/services";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const ElectrictyBillmodal = ({ setShow }: any) => {
  const [checkBalance, setBalance] = useState(false);
  const [visibility, setVisibility] = useState(true);

  const { formik, isPending, isSuccess, isError, error } = useElectricBll();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
    console.log(formik.errors);
  };
  const Amount = {
    total: `1,100`,
  };
  return (
    <div className="flex flex-col bg-white w-[45vw] text-black p-[40px_50px] h-[100vh] overflow-y-scroll">
      <div className="font-medium text-4xl flex justify-between">
        <span>Electricity Bill</span>
        <Image
          width={20}
          height={20}
          alt="closebutton"
          src="/images/close.svg"
          className="cursor-pointer"
          onClick={() => setShow(false)}
        />
      </div>
      <div className="mt-10">
        <div className="flex justify-between">
          <div>
            <span className="block font-bold text-[#111111] text-[22px]">
              Wallet Balance
            </span>
            <span className="flex block text-[#111111] text-[32px] font-bold font-openSans  items-center">
              <span className="pt-1">
                <NairaIconElectricBill />
              </span>
              {visibility ? "2000" : "****"}
            </span>
          </div>
          <div>
            <span className="cursor-pointer pr-[2rem]">
              {visibility ? (
                <RemoveRedEyeOutlinedIcon
                  onClick={() => setVisibility(false)}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  onClick={() => setVisibility(true)}
                />
              )}
            </span>
          </div>
        </div>
      </div>
      <form action="" className="flex flex-col w-full h-full justify-cente">
        <div className="flex flex-col w-full">
          <label
            htmlFor="meterNumber"
            className="font-normal mt-5 text-xl font-openSans color-[#111111]"
          >
            Meter Number
          </label>
          <div className="text-[#8c8b92]">
            <Input
              type="number"
              name="meterNumber"
              placeholder="123456789101112131415"
              // value={formik.values.email}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="state"
            className="font-normal mt-5 text-xl font-openSans color-[#111111]"
          >
            State
          </label>
          <div className="text-[#8c8b92]">
            <Input
              name="state"
              type="email"
              placeholder="Oyo"
              // value={formik.values.email}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="font-normal mt-5 text-xl font-openSans color-[#111111]"
          >
            Meter Type
          </label>
          <div className="text-[#8c8b92]">
            <Input
              name="email"
              type="select"
              placeholder="Email address"
              // value={formik.values.email}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="amount"
            className="font-normal mt-5 text-xl font-openSans color-[#111111]"
          >
            How Much Electricity Do You Want To Buy?
          </label>
          <div className="text-[#8c8b92]">
            <Input
              name="amount"
              type="number"
              placeholder="#1000"
              // value={formik.values.email}
            />
          </div>
        </div>
        <div className="mt-5">
          <p className="font-bold text-[#111111] text-[20px] font-openSans">
            SERVICE CHARGE:
            <span className="align-left font-normal">
              <NairaIconElectricBill />
              {Amount.total}
            </span>
          </p>
          <p className="font-bold text-[#111111] text-[20px] font-openSans">
            TOTAL:
            <span className="align-left font-normal">
              <NairaIconElectricBill />
              {Amount.total}
            </span>
          </p>
        </div>
        <p className="font-inter text-20px font-normal">
          By continuing, you agree to our{" "}
          <span className="text-[#3D3066]">Terms and Conditions </span>
        </p>
        <div className="w-full flex align-center justify-center mt-[2.5rem]">
          <Button type="submit" size={"long"}>
            REVIEW ORDER
          </Button>
          <Button size={"long"} variant="secondary">
            FUND WALLET
          </Button>
        </div>
      </form>
      {/* ======> sucessful and successful <====== */}
      {/* <div className="flex flex-col mt-10  w-full h-[392px] items-center justify-center">
         <div className="">
          <div className="flex flex-col gap-10 items-center">
            <Image
              src="/images/successful.svg"
              height={167}
              width={167}
              alt=""
            />
            <p className="text-[32px] text-[#111111] font-semibold font-cabinet-grostequeue">
              Subscription Successful
            </p>
            <Button size={"long"}>RETRY</Button>
          </div>
        </div>  
         <div>
          <div className="flex flex-col gap-10 items-center">
            <Image
              src="/images/unsuccessful.svg"
              height={167}
              width={167}
              alt=""
            />
            <p className="text-[32px] text-[#111111] font-medium font-cabinet-grostequeue">
              Subscription Successful
            </p>
            <Button size={"long"}>RETRY</Button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ElectrictyBillmodal;
