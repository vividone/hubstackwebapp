"use client";
import React, { useState } from "react";
import { Button } from "../../common/button";
import { formatAmount } from "@/helpers/amountFormatter";
import CurrentBalance from "../currentBalance";

const InternetPayment: React.FC<any> = ({
  setFlow,
  data,
}:
any) => {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <div className="mt-4">
      {/* {showAlternatePayment && <AlternatePaymentMethod />} */}

      <div className="w-full border-y border-[#E7E6F2]">
        <CurrentBalance />
      </div>

      <div className="flex flex-col gap-1  mt-6">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
          <div className="flex  flex-wrap items-center gap-4">
            <p className="text-xl font-semibold text-[#3D3066]">{data?.name}</p>
          </div>
          <div className="py-4">
            <p>Bet ID</p>
            <p className=" opacity-[0.7]">{data?.customerId}</p>
          </div>
        </div>

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
            isLoading={data?.isPending}
            onClick={() => {
              return setFlow(4);
            }}
          >
            <span className="text-[16px]">PAY WITH WALLET</span>
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

export default InternetPayment;
