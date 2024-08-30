"use client"
import Image from "next/image";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

type AlternatePaymentProps = { 
  amount: number; 
  setFlow: (aug0: number) => void; 
}

export default function AlternatePaymentMethod({ amount, setFlow }: AlternatePaymentProps) {
  const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL);
  
  const componentProps = {
    email: userDetails?.email,
    amount: amount * 100,
    metadata: {
      custom_fields: [],
      name: userDetails?.firstname,
      phone: userDetails?.phone_number,
    },
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
    onSuccess: (ref: any) => console.log(ref),
    onClose: () => {},
  };

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
      <div className="w-full mt-auto bg-[#E6FBFF] p-10 md:p-16">
        <header className="text-[24px] font-medium py-5 md:text-[30px] text-center md:text-left">
          <h2>Alternate Payment Method</h2>
        </header>
        <main>
          <div className="flex flex-col gap-4 text-[16px] font-semibold font-OpenSans md:text-[20px]">
            {data.map((item, key) => (
              item.title !== "Paystack" ? (
                <button
                  className="flex gap-4 w-full items-center cursor-pointer transition-transform transform hover:scale-105 rounded-lg shadow-lg p-4 md:p-6 bg-white"
                  key={key}
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
                  <span className="text-black">{item.title}</span>
                </button>
              ) : (
                ""
              )
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
