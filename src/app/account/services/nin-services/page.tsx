'use client'
import { Button } from "@/components/common/button";
import NinPaymentModal from "@/components/modals/ninPaymentModal";
import Image from "next/image";
import { useState } from "react";

const NinProductsPage = () => {
  const [show, setShow] = useState(false)
  const [active, setActive] = useState("")

  const individualCard = [
    {
      id: 0,
      title: "NIN Basic Slip",
      subText: "Get the NIMC Long Slip",
      units: "1 Unit",
      icon: "/basic-slip.png"
    },
    {
      id: 1,
      title: "NIN Regular Slip",
      subText: "Get the NIMC Standard  Slip",
      units: "1 Unit",
      icon: "/regular-slip.png"
    },
    {
      id: 2,
      title: "NIN Improved Slip",
      subText: "Get the NIMC Premium  Slip",
      units: "2 Units",
      icon: "/improved-slip.png"
    },
    {
      id: 3,
      title: "NIN Premium Slip",
      subText: "Get the NIMC Premium  Slip",
      units: "2 Units",
      icon: "/premium-slip.png"
    }
  ]

  return (
    <div className="pt-[25px] overflow-hidden">

      
      <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end duration-500 ${show ? "translate-x-0" : "translate-x-[150%]"}`}>
        <NinPaymentModal slip={active} setShow={setShow} />
      </div>

      <div className="flex flex-wrap md:gap-[3%] gap-10 py-4">
      {
        individualCard.map(item => (
            <div key={item.id} className="flex flex-col justify-between sm:w-[280px] w-full gap-4 p-6 rounded-[8px] mb-10 border border-[#8C8B92]/[0.2] shadow-md">
              <div className="bg-[#3D3066]/[0.1] p-3 px-4 rounded-[25px] w-fit flex items-center justify-center">
                <Image src={item.icon} alt={item.title} width={80} height={50}/>
              </div>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-[#8C8B92] my-2">{item.subText}</p>
              </div>
              <h2 className="font-bold text-2xl">{item.units}</h2>
              <Button 
                  size={"full"}
                  variant="secondary"
                  onClick={() => { setActive(item.title); setShow(true) }}
                  className="border-2 bg-[#00D7F7]"
              >
                  ORDER
              </Button>
            </div>
        ))
      }
      </div>


    </div>
  );
};

export default NinProductsPage;