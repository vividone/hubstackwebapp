"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import AlternatePaymentMethod from "../AlternatePaymentMethod";
import { FlowProps } from "../modalsLayout";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { currencyFormatter } from "@/helpers/currencyConvert";


const AirtimeDetailsModal: React.FC<FlowProps> = ({ setFlow, data, completeAlternate, completedForm }) => {
  const [showAlternatePayment, setShowAlternatePayment] = useState(false);
  const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)

  const fillForm = () => {
    completedForm.setValues({ 
      paymentCode: data?.transactionDetails.paymentCode?.toString(), 
      customerId: data?.transactionDetails.customerId?.toString(), 
      customerEmail: userDetails?.email,
      customerMobile: userDetails?.phone_number || "09012345678",
      requestReference: data?.transactionReference, 
      amount: data?.amount,
    })
  }
  
  return (
    <div className="mt-4">
      {showAlternatePayment && <AlternatePaymentMethod amount={data?.amount} setFlow={setFlow} setShow={setShowAlternatePayment} complete={completeAlternate}/>}
      <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">
        <div className="flex  flex-wrap items-center gap-4">
          <Image
            src={`/images/airtime/${data?.logo}.jpg`}
            alt={data?.service.BillerName}
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
              {currencyFormatter(data?.amount)}
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
              {currencyFormatter(data?.amount)}
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
            onClick={() => {
              fillForm(); 
              setShowAlternatePayment(!showAlternatePayment)
            }}
          >
            <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AirtimeDetailsModal;
