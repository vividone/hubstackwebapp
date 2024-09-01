"use client"
import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import FlutterwavePayment from "./wallet/flutterwavePayment";
import { currencyFormatter } from "@/helpers/currencyConvert";
import { useOutsideClick } from "@/helpers/useClickOutside";
import { useCompleteBillPayment } from "@/helpers/api/useServices";

const PaystackPayment = dynamic(() => import("./wallet/paystackPayment"),  { ssr: false });

type AlternatePaymentProps = { 
  amount: number; 
  setFlow: (aug0: number) => void; 
  setShow: (aug0: boolean) => void; 
}

const AlternatePaymentMethod = ({ amount, setFlow, setShow }: AlternatePaymentProps) => {
  const [payment, setPayment]   = useState("")

  const handlePayment = (type: string) => {
    if(type === "success") {
      
    }
  }
 
  const alternateRef = useOutsideClick(setShow, false)

  const data = [
    {
      img: "/images/Bank.png",
      title: "Bank Account Transfer",
      background: "#507FFF",
      alt: "bank icon",
    },
    {
      img: "/images/paystack1.png",
      title: "Paystack",
      background: "#000000",
      alt: "paystack icon",
    },
    {
      img: "/images/flutterwavenew.png",
      title: "Flutterwave",
      background: "#000000",
      alt: "flutterwave icon",
    },
  ];

  return (
    <section className="flex mt-auto w-full absolute top-0 left-0 z-[100] bg-[#00000080] h-[100%]">
      <div ref={alternateRef} className="w-full mt-auto bg-[#E6FBFF] p-10 md:p-16">
        
      <div className={`flex justify-between`}>
        <header className="text-[24px] font-medium py-5 md:text-[30px] text-center md:text-left">
          <h2>Alternate Payment Method</h2>
        </header>

        <button title="close button">
          <Image
            src="/images/close.svg"
            alt="closebutton"
            width={20}
            height={20}
            onClick={() => payment === "" ? setShow(false) : setPayment("")}
            className="cursor-pointer"
          />
        </button>
      </div>

        {
          payment === "Paystack" ?
          <div>            
            <div className="flex justify-between items-center gap-5 py-6">
              <span className="block ">Amount</span>
              <span className="flex items-center">
                {currencyFormatter(amount)}
              </span>
            </div>
            <PaystackPayment amount={amount} setFlow={handlePayment} />
          </div>
          :
          payment === "Flutterwave" ?
          <div>         
            <div className="flex justify-between items-center gap-5 py-6">
              <span className="block ">Amount</span>
              <span className="flex items-center">
                {currencyFormatter(amount)}
              </span>
            </div>          
            <FlutterwavePayment amount={amount} setFlow={handlePayment} />
          </div>
          :
          <main>
          <div className="flex flex-col gap-4 text-[16px] font-semibold font-OpenSans md:text-[20px]">
            {data.map((item, key) => (
                <button
                  className="flex gap-4 w-full items-center cursor-pointer transition-transform transform hover:scale-105 rounded-lg shadow-lg p-4 md:p-6 bg-white"
                  key={key}
                  onClick={() => {
                    setPayment(item.title);
                  }}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={80}
                    height={80}
                    className="object-cover rounded-[7px]"
                  />
                  <span>{item.title}</span>
                </button>
            ))}
          </div>
        </main>
        }
        
      </div>
    </section>
  );
}

export default AlternatePaymentMethod;