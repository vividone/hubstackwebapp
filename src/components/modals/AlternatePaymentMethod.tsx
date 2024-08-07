import React from "react";
import Image from "next/image";

const AlternatePaymentMethod = () => {
  const data = [
    {
      img: "/images/BankAccountTransfer.png",
      title: "Bank Account Transfer",
      backgorund: "#507FFF",
    },
    {
      img: "/images/paystack.png",
      title: "Paystack",
      background: "#000000",
    },
    {
      img: "/images/FlutterWave.png",
      title: "Flutterwave",
      background: "#000000",
    },
  ];
  return (
    <section className="mt-auto px-10 py-12 bg-[#E6FBFF]  w-[45vw] ">
      <header className="text-[40px] font-medium">
        <h2>Alternate Payment Method</h2>
      </header>
      <main>
        <section className="flex flex-col gap-4 font-semibold text-[20px] font-OpenSans">
          {data.map((item, key) => {
            return (
              <div className="flex gap-2 items-center" key={key}>
                <span className="flex justify-center items-center w-[90px] h-[74px] rounded-[7px] " style={{background:`${item.backgorund}`}}>
                    <Image src={item.img} alt="" width={42} height={42}/>
                </span>
                <span>Bank Account Transfer</span>
              </div>
            );
          })}
        </section>
      </main>
    </section>
  );
};

export default AlternatePaymentMethod;
