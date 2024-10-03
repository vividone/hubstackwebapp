import React, {  useState } from "react";
import { formatAmount } from "@/helpers/amountFormatter";
import NairaIcon from "@/assets/icons/nairaIcon";
import { Button } from "@/components/common/button";
import ClipBoard from "@/components/wallet/clipboard";
import Image from "next/image";
import { currencyFormatter } from "@/helpers/currencyConvert";

const BillReceipt = ({ setFlow, data, bill }: any) => {
  const [showAlternate, setShowAlternate] = useState(false);

  return (
    <div className="mt-4">
      <ClipBoard text={"1234-2341-1123-2878-9119"} label="" />

      <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px] mt-4">
        <div className="flex  flex-wrap items-center gap-4">
          <Image
            src={``}
            alt={data?.name}
            width={80}
            height={80}
          />
          <p className="text-xl font-semibold text-[#3D3066]">{data?.name}</p>
        </div>
        <div className="py-4">
          <p>{ bill === "Internet" ? "Mobile Number" : "BET ID"}</p>
          <p className=" opacity-[0.7]">{data?.customerId}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        <h2 className="font-bold">Payment Summary</h2>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-5">
            <span className="block opacity-[0.5]">Amount</span>
            <span className="flex items-center">
              {currencyFormatter(data?.amount - data?.serviceProvider.ItemFee)}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5">
            <span className="block opacity-[0.5]">Vat</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount("0")}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5">
            <span className="block opacity-[0.5]">Debt</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount("0")}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5">
            <span className="block opacity-[0.5]">Service Charge</span>
            <span className="flex items-center">
              {currencyFormatter(data?.serviceProvider.ItemFee)}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5 mb-6">
            <span className="block font-bold">TOTAL</span>
            <span className="flex items-center">
              {currencyFormatter(data?.amount)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            onClick={() => {
              setFlow(4);
            }}
          >
            <span className="text-[16px]">SHARE RECEIPT</span>
          </Button>

          <Button
            variant="secondary"
            size="full"
            onClick={() => setShowAlternate(!showAlternate)}
          >
            <span className="text-[16px]">VIEW RECEIPT</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillReceipt;