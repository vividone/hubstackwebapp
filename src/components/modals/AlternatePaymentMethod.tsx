"use client"
import React from "react";
import Image from "next/image";
import { usePaystackPayment } from 'react-paystack';
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

type AlternatePaymentProps = { 
  amount: number; 
  setFlow: (step: number) => void;
  setAlternatePayment: (status: boolean) => void;
}

const AlternatePaymentMethod = ({ amount, setFlow, setAlternatePayment }: AlternatePaymentProps) => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  
  const paystackConfig = {
    reference: (new Date()).getTime().toString(),
    email: userDetails?.email,
    amount: amount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
  };
  
  const initializePayment:any = usePaystackPayment(paystackConfig);

  const onSuccess = (reference: any) => {
    console.log(reference);
    setFlow(3);
  };

  const onClose = () => {
    console.log("Payment closed");
  };

  const handlePayment = (type: string) => {
    if (type === "Paystack") {
      initializePayment(onSuccess, onClose);
    }
    if (type === "Flutterwave") {

    }
    if (type === "Bank Account Transfer") {
      setAlternatePayment(false);
      setFlow(2.5); 
    }
  };

  const paymentOptions = [
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
    <section className="flex flex-col h-[100%] absolute inset-0 z-[500] justify-end">
      <div
        className="h-[100%] bg-[#00000080] cursor-pointer"
        onClick={() => setAlternatePayment(false)}
      ></div>
      <div className="relative w-full bg-[#E6FBFF] p-10">
        <header className="text-[24px] font-medium py-5 md:text-[30px]">
          <h2>Alternate Payment Method</h2>
        </header>
        <main>
          <div className="flex flex-col gap-4 text-[16px] font-semibold font-OpenSans md:text-[20px]">
            {paymentOptions.map((item, key) => (
              <button
                className="flex gap-4 w-full items-center cursor-pointer transition-transform transform hover:scale-105"
                key={key}
                onClick={() => handlePayment(item.title)}
              >
                <div
                  className="flex justify-center items-center w-[70px] h-[60px] rounded-[7px] md:w-[90px] md:h-[74px]"
                  style={{ background: item.background }}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={80}
                    height={80}
                    className="object-cover rounded-[7px]"
                  />
                </div>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default AlternatePaymentMethod;