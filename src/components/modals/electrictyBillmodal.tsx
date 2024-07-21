"use client";
import React, { useState ,FormEvent } from "react";
import Close from "@/assets/icons/close";
import { Button } from "../common/button";
import { Input } from "../common/inputs";
import EyeIcon from "@/assets/icons/EyeIcon";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useElectricBll } from "@/helpers/services";

const ElectrictyBillmodal = ({ setShow }: any) => {
  const [checkBalance, setBalance] = useState(false);
  const [visibility, setVisibility] = useState(true);

  const { formik, isPending, isSuccess, isError, error } = useElectricBll();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formik.errors)
    formik.handleSubmit();
  };
  return (
    <div className="flex flex-col bg-white w-[45vw] text-black p-[40px_50px] h-[100vh] overflow-y-scroll">
      <div className="font-normal text-4xl mb-4 flex justify-between">
        <h3 className="text-4xl font-medium text-[#111111]">
          Electricity Bill
        </h3>
        <Image
          src="/images/close.svg"
          alt="closebutton"
          width={20}
          height={20}
          onClick={() => setShow(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="">
        <div className="flex justify-between">
          <div>
            <span className="block font-bold text-[#111111] text-[22px]">
              Wallet Balance
            </span>
            <span className="block text-[#111111] text-[32px] font-bold font-openSans">
              {visibility ? "2000" : "****"}
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
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
      <form
        action=""
        className="flex flex-col w-full h-full justify-cente"
      >
        <div className="flex flex-col w-full">
          <label
            htmlFor="meterNumber"
            className="font-normal mt-5 text-xl font-openSans color-[#111111]"
          >
            Meter Number
          </label>
          <div className="text-[#8c8b92]">
            <Input
              name="meterNumber"
              type="number"
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
              type="email"
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
        <div className="w-full flex align-center justify-center mt-[2.5rem]">
          <Button type="submit" size={"long"}>
            PAY
          </Button>
        </div>
      </form>
      {/* <div className="sucessfull">
        <div>
          <Image src={""} alt=""/>
          <p>Subscription Successful</p>
        </div>
        <Button >DOWNLOAD RECEIPT</Button>
      </div>
      <div className="unsucessfull">
        <div>
          <Image src={""} alt=""/>
          <p>Subscription Unsuccessful</p>
        </div>
        <Button size={"md"}>RETRY</Button>
      </div> */}
    </div>
  );
};

export default ElectrictyBillmodal;
