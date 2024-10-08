"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import CurrentBalance from "../currentBalance";
import { currencyFormatter } from "@/helpers/currencyConvert";

type FlowProps = {
  setFlow: (aug0: number) => void;
  data: any;
  completeAction: () => void;
};

const AirtimePayment: React.FC<FlowProps> = ({
  data,
  completeAction,
}) => {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <div className="mt-4">
      <CurrentBalance />
      <div className="mt-6">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px] ">
          <div className="flex  flex-wrap items-center gap-4">
            <Image
              src={`/images/airtime/${data?.logo}.jpg`}
              alt={data?.network}
              width={80}
              height={30}
            />
            <p className="text-xl font-semibold text-[#3D3066]">
              {data?.service.BillerName}
            </p>
          </div>
          <div className="py-4">
            <p>Mobile Number</p>
            {data?.customerId}
          </div>

          <div className="flex gap-12">
            <div>
              <p>Amount</p>
              {data?.amount}
            </div>
          </div>
        </div>
      </div>

       <div className="mt-6 flex flex-col gap-1">
        <p className="text-center mt-4">
          The amount of{" "}
          <span className="font-bold">NGN{data?.amount}</span>{" "}
          will be debited from your wallet balance, proceed below to complete
          transaction{" "}
        </p>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            isLoading={data?.isPending}
            onClick={() => completeAction()}
          >
            <span className="text-[16px]">PROCEED WITH WALLET</span>
          </Button>

          <Button
            variant="secondary"
            size="full"
            onClick={() => {
              setShowAlternate(!showAlternate);
              // setAlternatePayment(true);
            }}
          >
            <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
          </Button>
        </div>
      </div> 
    </div>
  );
};

export default AirtimePayment;
