import React from "react";
import Image from "next/image";
import ArrrowLeft from "@/assets/icons/ArrrowLeft";
import { Button } from "../common/button";
import CopyIcon from "@/assets/icons/CopyIcon";

const AlternatePayment = ({ setShow }: any) => {
  const paymentDetails = [
    { label: "Account Number", value: "0209064859" },
    { label: "Account Name", value: "Babalola Zainab" },
    { label: "Bank Name", value: "Sterling Bank" },
  ];

  return (
    <section className="flex flex-col bg-white w-[90vw] md:w-[45vw] text-black p-10 h-[100vh] overflow-y-scroll">
      <header className="flex justify-between items-center font-medium text-4xl mb-12">
        <span className="flex flex-2 items-center gap-4">
          <ArrrowLeft width={20} height={20} />
          <h1>Alternate Payment</h1>
        </span>
        <span className="flex-1">
          <Image
            width={20}
            height={20}
            alt="close button"
            src="/images/close.svg"
            className="cursor-pointer ml-auto"
            onClick={() => setShow(false)}
          />
        </span>
      </header>

      <section className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-md p-4 md:p-8 font-OpenSans">
        {paymentDetails.map((detail, index) => (
          <div className="flex justify-between items-center my-2" key={index}>
            <div>
              <span className="block font-light text-[14px]">{detail.label}</span>
              <span className="font-semibold text-[20px]">{detail.value}</span>
            </div>
            <CopyIcon width={20.31} height={20.31} />
          </div>
        ))}
      </section>
      <section className="w-full pb-2 flex items-center justify-center text-center text-[16px] font-normal mt-10 mb-1">
      </section>
      <section className="w-full">
        <p className="w-[75%]">
          Please click the below button after a successful transfer. Your token
          will be sent once we receive your payment.
        </p>
        <Button type="submit" size={"full"} className="text-[16px] mb-4">
          PROCEED WITH WALLET
        </Button>
        <Button
          size={"full"}
          variant="secondary"
          className="text-[#3D3066] text-[16px]"
        >
          USE ALTERNATE PAYMENT METHOD
        </Button>
      </section>
    </section>
  );
};

export default AlternatePayment;
