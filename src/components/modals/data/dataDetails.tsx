import React, { useEffect, useState } from "react";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import Image from "next/image";
import AlternatePaymentMethod from "../AlternatePaymentMethod";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { currencyFormatter } from "@/helpers/currencyConvert";

const DataDetails = ({ setFlow, data, completeAlternate, completedForm }: any) => {
  const [showAlternate, setShowAlternate] = useState(false);
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
              {currencyFormatter(data?.serviceProvider?.fee)}
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
              {currencyFormatter(data?.serviceProvider?.fee)}
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
              fillForm(); 
              setShowAlternate(!showAlternate)
            }}
          >
            <span className="text-[16px]">USE ALTERNATE PAYMENT METHOD</span>
          </Button>
        </div>
      </div>

      
      {showAlternate && <AlternatePaymentMethod amount={data?.amount} setFlow={setFlow}  setShow={setShowAlternate} complete={completeAlternate} />}
    </div>
  );
};

export default DataDetails;
