import React from "react";
import Image from "next/image";
import { Button } from "../common/button";
import CopyIcon from "@/assets/icons/CopyIcon";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";

const TokenDetails = ({ setShow }: any) => {
  return (
    <section className="flex flex-col bg-white w-[90vw] md:w-[45vw] text-black h-[100vh] overflow-y-scroll p-10">
      <header className="flex justify-between items-center font-medium text-4xl mb-12 ">
        <h1>Token Details</h1>
        <Image
          width={20}
          height={20}
          alt="close button"
          src="/images/close.svg"
          className="cursor-pointer"
          onClick={() => setShow(false)}
        />
      </header>
      <section className="flex justify-between p-10 bg-[#E6FBFF]">
        <span className="bg-red text-[20px] font-semibold font-Opensans">
          1234-2341-1123-2878-9119
        </span>
        <span>
          <CopyIcon width={20.31} height={20.31} />
        </span>
      </section>

      <section className="mb-10 mt-6">
        <h2 className="font-bold mt-2 text-[20px]">Payment Summary</h2>
        <div className="flex justify-between my-2">
          <span className="text-[16px] text-[#8C8B92]">Electricity Amount</span>
          <span className="flex items-center text-[20px]">
            <NairaIconElectricBill width={19.5} height={18.25} /> 1000.00
          </span>
        </div>
        <div className="flex justify-between font-OpenSans">
          <span className="text-[16px] text-[#8C8B92]">Unit</span>
          <span className="flex items-center text-[20px]"> 13.22kwh</span>
        </div>
        <div className="flex justify-between font-OpenSans">
          <span className="text-[16px] text-[#8C8B92]">Service Charge</span>
          <span className="flex items-center text-[20px]">
            <NairaIconElectricBill width={19.5} height={18.25} /> 100.00
          </span>
        </div>
        <div className="flex justify-between my-2">
          <span className="font-bold">TOTAL</span>
          <span className="flex items-center text-[20px] font-normal">
            <NairaIconElectricBill width={19.5} height={18.25} /> 1100.00
          </span>
        </div>
      </section>

      <section className="w-full">
        <Button type="submit" size={"full"} className="text-[16px] mb-4">
          SHARE TOKEN
        </Button>
        {true && (
          <Button
            size={"full"}
            variant="secondary"
            className="text-[#3D3066] text-[16px]"
          >
            VIEW RECEIPT
          </Button>
        )}
      </section>
    </section>
  );
};

export default TokenDetails;
