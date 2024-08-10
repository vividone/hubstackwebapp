"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { Dropdown } from "../../common/Dropdown";
import { formatAmount } from "@/helpers/amountFormatter";
import { FlowProps } from "../modalsLayout";


const ElectricityBillDetails: React.FC<FlowProps> = ({ setFlow, data }) => {
  const [showAlternate, setShowAlternate] = useState(false)
  const [meterType, setMeterType] = useState<any>()


  return (
      <div className="mt-4">

        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
          <div className="flex justify-between flex-wrap items-center gap-4">
            <Image src="/images/ibedc.png" alt="ibedc" width={80} height={30} />
            <p>{data?.transactionDetails?.customerId}</p>
            <Dropdown
                name="meterType"
                value={data?.meterType}
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as any;
                    setMeterType(selectedOption)
                  } else {
                    setMeterType({ label: "Prepaid", value: "Prepaid" })
                  }
                }}
                options={["Prepaid", "Postpaid"].map((item: string) => ({
                  label: item,
                  value: item,
                }))}
                className="items-start text-start justify-start rounded-lg bg-[#00D7F7] w-[170px] border border-[#E7E6F2]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              <span className="block">Meter Name</span>
              <span className="flex items-center opacity-[0.7]">Mariam</span>
            </div>
            <div className="">
              <span className="block">Address</span>
              <span className="flex items-center opacity-[0.7]">...</span>
            </div>
          </div>

        </div>
        
        <div className="mt-10 flex flex-col gap-1">
          
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center gap-5">
              <span className="block ">Electricity Amount</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount(data?.amount)}</span>
            </div>
            
            <div className="flex justify-between items-center gap-5">
              <span className="block">Service Charge</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />100.00</span>
            </div>
            
            <div className="flex justify-between items-center gap-5 mb-6">
              <span className="block font-bold">Total</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />{formatAmount((+data?.amount + 100).toString())}</span>
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
          
            <Button variant="secondary" size="full" onClick={() => setShowAlternate(!showAlternate)}>
                <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
            </Button>
          </div>
          </div>

      </div>
      
  );
};

export default ElectricityBillDetails;
