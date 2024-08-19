import React from "react";
import { formatAmount } from "@/helpers/amountFormatter";
import NairaIcon from "@/assets/icons/nairaIcon";
import { Button } from "@/components/common/button";
import Confirmation from "../confirmation";

const CableTvPurchase = ({ active, setFlow, data }: any) => {
  console.log(data)
  return (
    <div>
      <div className="flex flex-col p-4 md:p-8 bg-[#00D7F71A] border border-[#E7E6F2] rounded-md">
        <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 items-center ">
          <div className="flex items-center gap-3 md:gap-5">
            
            <span className="font-semibold lg:text-[20px] sm:text[16px] font-OpenSans">
              {active?.Name}
            </span>
          </div>
        </div>
        <div className="p-0 mb-4 mt-4">
          <h2 className="font-normal text-[16px] font-OpenSans md:text-lg">
            Smartcard or Decoder Number
          </h2>
          <p className="text-[16px] text-[#8C8B92]">{data?.customerId}</p>
        </div>

        <div className="flex p-0 font-OpenSans gap-[20%]">
          <div>
            <h2 className="font-normal text-[16px] md:text-lg">Full Name</h2>
            <p className="text-[16px] text-[#8C8B92]">
              Babalola Zainab Opeyemi
            </p>
          </div>
          <div>
            <h2 className="font-normal text-[16px] md:text-lg">
              Cable TV Plan
            </h2>
            <p className="text-[16px] text-[#8C8B92]">ACTV</p>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-1">
        <h2 className="font-bold">Payment Summary</h2>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-5">
            <span className="block opacity-[0.5]">Data amount</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount(data?.amount|| "1000")}
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
            <span className="block opacity-[0.5]">Debit</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount("0")}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5">
            <span className="block opacity-[0.5]">Service Charge</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              100.00
            </span>
          </div>

          <div className="flex justify-between items-center gap-5 mb-6">
            <span className="block font-bold">TOTAL</span>
            <span className="flex items-center">
              <NairaIcon className="w-[12px]" />
              {formatAmount((+data?.amount).toString())}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
          >
            <span className="text-[16px]">SHARE RECEIPT</span>
          </Button>

          <Button
            variant="secondary"
            size="full"
            // onClick={() => setShowAlternate(!showAlternate)}
          >
            <span className="text-[16px]">VIEW RECEIPT</span>
          </Button>
        </div>
      </div>
      </div>
  );
};

export default CableTvPurchase;
