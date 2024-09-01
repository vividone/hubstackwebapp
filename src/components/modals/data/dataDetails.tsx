import React, { useEffect, useState } from "react";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import Image from "next/image";
import AlternatePaymentMethod from "../AlternatePaymentMethod";

const DataDetails = ({ setFlow, data }: any) => {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <div className="mt-4">
      <h2 className="font-normal text-[20px] font-OpenSans">
        Service Provider
      </h2>

      <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
        <div className="flex  flex-wrap items-center gap-4">
          <Image
            src={`/images/data/${data?.service.ShortName}.jpg`} 
            alt={data?.service.Name}
            width={80}
            height={80}
          />
          <p className="text-xl font-semibold text-[#3D3066]">{data?.service.Name}</p>
        </div>

        <div className="py-4">
          <p>Mobile Number</p>
          <p className=" opacity-[0.7]">{data?.customerId}</p>
        </div>

        <div className="flex gap-12">
          <div>
            <p>Data Plan</p>
            <p className="opacity-[0.7]">{data?.service.Name}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-5">
            <span className="block ">Amount</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount(data?.transaction.amount)}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5">
            <span className="block">Service Charge</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              0.00
            </span>
          </div>

          <div className="flex justify-between items-center gap-5 mb-6">
            <span className="block font-bold">TOTAL</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount(data?.transaction.amount)}
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

      
      {showAlternate && <AlternatePaymentMethod amount={data?.amount} setFlow={setFlow}  setShow={setShowAlternate} />}
    </div>
  );
};

export default DataDetails;
