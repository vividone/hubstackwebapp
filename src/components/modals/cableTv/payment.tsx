import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import { formatAmount } from "@/helpers/amountFormatter";
import CurrentBalance from "../currentBalance";
import { FlowProps } from "../modalsLayout";

interface CableTvProps extends FlowProps {
  active: any;
  completeAction: () => void;
  isSuccess: boolean;
}

const CableTvPayment: React.FC<CableTvProps> = ({ setFlow, data, active, completeAction, isSuccess }) => {
  const [showAlternate, setShowAlternate] = useState(false);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isSuccess) {
  //       setFlow(4);
  //       clearInterval(interval); 
  //     }
  //   }, 500); 
  //   return () => clearInterval(interval); 
  // }, [isSuccess]);
  

  return (
    <div className="mt-4">
      <CurrentBalance />

      <div className="flex flex-col gap-1">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src={"/images/cableTvImages/" + active?.ShortName + ".jpg"}
              alt={active?.Name}
              width={80}
              height={80}
            />
            <p className="text-xl font-semibold text-[#3D3066]">{active?.Name}</p>
          </div>
        </div>

        <p className="text-center pb-4 pt-8">
          The amount of <span className="font-bold">NGN{formatAmount(data?.amount)}</span> will be debited from your wallet balance. Proceed below to complete the transaction.
        </p>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            isLoading={data?.isPending}
            onClick={()=>{completeAction();}} 
          >
            <span className="text-[16px]">PROCEED WITH WALLET</span>
          </Button>

          <Button variant="secondary" size="full" onClick={() => setShowAlternate(!showAlternate)}>
            <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CableTvPayment;
