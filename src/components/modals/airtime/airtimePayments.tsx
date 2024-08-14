"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import { formatAmount } from "@/helpers/amountFormatter";
import CurrentBalance from "../currentBalance";

type FlowProps = {
  setFlow: (aug0: number) => void;
  data: any;
};

const AirtimePayment: React.FC<FlowProps> = ({ setFlow, data }) => {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <div className="mt-4">
      <div className="w-full border-y border-[#E7E6F2] px-[40px]">
        <CurrentBalance />
      </div>
      <div className="px-[40px] mt-6">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px] ">
          <div className="flex  flex-wrap items-center gap-4">
            <Image
              src={`/images/airtime/${data?.network || "mtn"}.png`}
              alt={data?.network}
              width={80}
              height={30}
            />
            <p className="text-xl font-semibold text-[#3D3066]">
              {data?.phonenumber || "MTN"}
            </p>
          </div>
          <div className="py-4">
            <p>Mobile Number</p>
            {/* <p className=" opacity-[0.7]">{pseudo?.mobileNumber}</p> */}
          </div>

          <div className="flex gap-12">
            <div>
              <p>Data Plan</p>
              {/* <p className="opacity-[0.7]">{pseudo?.DataPlan}</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-1 px-[40px]">
        <p className="text-center mt-4">
          The amount of{" "}
          <span className="font-bold">
            NGN{formatAmount((+data?.amount + 100).toString())}
          </span>{" "}
          will be debited from your wallet balance, proceed below to complete
          transaction{" "}
        </p>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            onClick={() => setFlow(2)}
          >
            <span className="text-[16px]">PROCEED WITH WALLET</span>
          </Button>

          <Button
            variant="secondary"
            size="full"
            onClick={() => setShowAlternate(!showAlternate)}
          >
            <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AirtimePayment;
