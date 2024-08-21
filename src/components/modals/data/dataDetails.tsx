import React, { useState } from "react";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import Image from "next/image";
import { FlowProps } from "../modalsLayout";

const DataDetails = ({ setFlow, data, item  }: any) => {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <div className="mt-4">
      <h2 className="font-normal text-[20px] font-OpenSans">
        Service Provider
      </h2>

      <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
        <div className="flex  flex-wrap items-center gap-4">
          <Image
            src={`/images/airtime/${data?.ShortName}.png`}
            alt={data?.ShortName}
            width={80}
            height={80}
          />
          <p className="text-xl font-semibold text-[#3D3066]">{data?.ShortName}</p>
        </div>

        <div className="py-4">
          <p>Mobile Number</p>
          <p className=" opacity-[0.7]">{data?.phonenumber||"08059837001"}</p>
        </div>

        <div className="flex gap-12">
          <div>
            <p>Data Plan</p>
            <p className="opacity-[0.7]">{data?.DataPlan||50.00}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-5">
            <span className="block ">Amount</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount(data?.amount)}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5">
            <span className="block">Service Charge</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              100.00
            </span>
          </div>

          <div className="flex justify-between items-center gap-5 mb-6">
            <span className="block font-bold">TOTAL</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount((+data?.amount + 100).toString())}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            onClick={() => {
              return setFlow(3);
            }}
          >
            <span className="text-[16px]">PAY WITH WALLET</span>
          </Button>

          <Button
            variant="secondary"
            size="full"
            onClick={() => {
              return setShowAlternate(!showAlternate);
            }}
          >
            <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataDetails;
