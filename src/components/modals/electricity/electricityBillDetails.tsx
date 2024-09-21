"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { FlowProps } from "../modalsLayout";
import AlternatePaymentMethod from "../AlternatePaymentMethod";
import { currencyFormatter } from "@/helpers/currencyConvert";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";


const ElectricityBillDetails: React.FC<FlowProps> = ({ setFlow, data, completeAlternate, completedForm }) => {
  const [showAlternate, setShowAlternate] = useState(false)
  const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)

  const fillForm = () => {
    completedForm.setValues({ 
      paymentCode: "0488051528", 
      customerId: data?.transactionDetails.customerId?.toString(), 
      customerEmail: userDetails?.email,
      customerMobile: userDetails?.phone_number || "09012345678",
      requestReference: data?.transactionReference, 
      amount: data?.amount,
    })
  }

  return (
      <div className="mt-4">
          {showAlternate && <AlternatePaymentMethod amount={data?.amount} setFlow={setFlow}  setShow={setShowAlternate} complete={completeAlternate} />}

        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[20px_30px]">
          <div className="flex justify-between flex-wrap items-center gap-4">
            <Image src="/images/ibedc.png" alt="ibedc" width={80} height={30} />
            <p>{data?.transactionDetails?.customerId}</p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div className="">
              <span className="block">Service Name</span>
              <span className="flex items-center opacity-[0.7]">{data?.transactionDetails?.service}</span>
            </div>
          </div>

        </div>
        
        <div className="mt-10 flex flex-col gap-1">
          
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center gap-5">
              <span className="block ">Electricity Amount</span>
              <span className="flex items-center">{currencyFormatter(data?.amount)}</span>
            </div>
            
            <div className="flex justify-between items-center gap-5">
              <span className="block">Service Charge</span>
              <span className="flex items-center"><NairaIcon className="w-[12px]" />0.00</span>
            </div>
            
            <div className="flex justify-between items-center gap-5 mb-6">
              <span className="block font-bold">Total</span>
              <span className="flex items-center">{currencyFormatter(data?.amount)}</span>
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
          
            <Button variant="secondary" size="full" 
              onClick={() => {
                fillForm(); 
                setShowAlternate(!showAlternate)
              }}
            >
                <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
            </Button>
          </div>
          </div>

      </div>
      
  );
};

export default ElectricityBillDetails;
