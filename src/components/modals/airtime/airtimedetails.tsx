"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import AlternatePaymentMethod from "../AlternatePaymentMethod";
type FlowProps = {
  setFlow: (aug0: number) => void;
  data: any;
};

const AirtimeDetailsModal: React.FC<FlowProps> = ({ setFlow, data }) => {
  const [showAlternate, setShowAlternate] = useState(false);
  const [showAlternatePayment, setShowAlternatePayment] = useState(false);
  
  return (
    <div className="mt-4">
      {showAlternatePayment && <AlternatePaymentMethod />}
      <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
        <div className="flex  flex-wrap items-center gap-4">
          <Image
            src={`/images/airtime/${data?.service.LogoUrl}`}
            alt={data?.service.Name}
            width={80}
            height={30}
          />
          <p>{data?.customerId}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-5">
            <span className="block ">Airtime Amount</span>
            <span className="flex items-center">
              <NairaIconElectricBill className="w-[12px]" />
              {formatAmount(data?.amount)}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5">
            <span className="block">Service Charge</span>
            <span className="flex items-center">
              <NairaIconElectricBill className="w-[12px]" />
              0.00
            </span>
          </div>

          <div className="flex justify-between items-center gap-5 mb-6">
            <span className="block font-bold">Total</span>
            <span className="flex items-center">
              <NairaIconElectricBill className="w-[12px]" />
              {formatAmount(data?.amount)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            onClick={() => setFlow(2)}
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

export default AirtimeDetailsModal;
