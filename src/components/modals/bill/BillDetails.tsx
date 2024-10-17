"use client";
import React, { useState } from "react";
import { Button } from "../../common/button";
import Image from "next/image";
import { FlowProps } from "../modalsLayout";
import AlternatePaymentMethod from "../AlternatePaymentMethod";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { currencyFormatter } from "@/helpers/currencyConvert";

interface InternetProps extends FlowProps {
  active: any;
  bill: string;
}

const BillDetails: React.FC<InternetProps> = ({ setFlow, data, active, completedForm, completeAlternate, bill }) => {
  const [showAlternate, setShowAlternate] = useState(false);
  const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)

  const id = bill === "Internet" ? "Mobile Number" : bill === "Cable TV" ? "Decoder number" : bill === "Utility Bill" ? "Meter Number" : "BET ID"

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
      <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[30px]">

        {showAlternate && <AlternatePaymentMethod amount={data?.amount} setFlow={setFlow}  setShow={setShowAlternate} complete={completeAlternate} />}

        <div className="flex  flex-wrap items-center gap-4">
          <Image
            src={"https://quickteller.com/images/Downloaded/" + active.MediumImageId + ".png"}
            alt={active?.Name}
            width={80}
            height={80}
          />
          <p>{active?.Name}</p>
        </div>

        <div className="py-4 flex gap-6">
          <div className="">
            <p>Name</p>
            <p className=" opacity-[0.7]">{data?.customerName}</p>
          </div>
          <div className="">
            <p>{id}</p>
            <p className=" opacity-[0.7]">{data?.customerId}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-5">
            <span className="block ">Amount</span>
            <span className="flex items-center">
            {currencyFormatter(data?.amount)}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5">
            <span className="block">Service Charge</span>
            <span className="flex items-center">
              {currencyFormatter(data?.serviceProvider.ItemFee)}
            </span>
          </div>

          <div className="flex justify-between items-center gap-5 mb-6">
            <span className="block font-bold">TOTAL</span>
            <span className="flex items-center">
              {currencyFormatter(data?.amount + data?.serviceProvider.ItemFee)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button
            variant="primary"
            size="full"
            type="submit"
            onClick={() => setFlow(3)}
          >
            <span className="text-[16px]">PAY WITH WALLET</span>
          </Button>

          <Button
            variant="secondary"
            size="full"
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

export default BillDetails;
