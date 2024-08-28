import React from "react";
import Image from "next/image";

const AlternatePaymentMethod = () => {
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
    <section className="flex mt-auto  bg-[#E6FBFF] w-full absolute bottom-top top-0 left-0 z-[100] bg-[#00000080] h-[100%]">
      <div className="w-[100%] mt-auto bg-[#E6FBFF] p-10">
        <header className="text-[24px] font-medium py-5 md:text-[30px]">
          <h2>Alternate Payment Method</h2>
        </header>
        <main>
          <div className="flex flex-col gap-4 text-[16px] font-semibold font-OpenSans md:text-[20px]">
            {data.map((item, key) => (
              <div
                className="flex gap-4 items-center cursor-pointer transition-transform transform hover:scale-105"
                key={key}
              >
                <div
                  className="flex justify-center items-center w-[70px] h-[60px] rounded-[7px] md:w-[90px] md:h-[74px]"
                  style={{ background: item.background }}
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    width={50}
                    height={50}
                    className="object-cover md:w-[40px] md:h-[40px]"
                  />
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default AlternatePaymentMethod;
