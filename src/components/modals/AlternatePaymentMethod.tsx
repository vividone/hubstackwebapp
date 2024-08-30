"use client"
import Image from "next/image";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

type AlternatePaymentProps = { 
  amount: number; 
  setFlow: (step: number) => void;
  setAlternatePayment: (status: boolean) => void;
}

export default function AlternatePaymentMethod ({ amount, setFlow,setAlternatePayment }: AlternatePaymentProps) {
  const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)
  
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
  }

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
              item.title !== "Paystack" ?
                <button
                  className="flex gap-4 w-full items-center cursor-pointer transition-transform transform hover:scale-105"
                  key={key}
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
                :
                ""
              // <PaystackButton key={key} {...componentProps} className="flex gap-4 h-[100px] w-full items-center cursor-pointer transition-transform transform hover:scale-105">
              //   <Image
              //       src={item.img}
              //       alt={item.alt}
              //       width={80}
              //       height={80}
              //       className="object-cover rounded-[7px]"
              //     />
              //    <span>Paystack</span> 
              // </PaystackButton>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};