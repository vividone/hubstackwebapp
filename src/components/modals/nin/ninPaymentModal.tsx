"use client"
import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "../../common/inputs";
import { Button } from "../../common/button";
import Confirmation from "../confirmation";
import CurrentBalance from "../currentBalance";
import { currencyFormatter } from "@/helpers/currencyConvert";
import { NINCard } from "@/app/account/services/nin-services/page";
import ModalsLayout from "../modalsLayout";
import LongSlip from "./longSlip";
import PersonalSlip from "./personalSlip";
import StandardSlip from "./standardSlip";
import PremiumSlip from "./premiumSlip";
import { useValidateNIN } from "@/helpers/api/useServices";

interface MywalletProps {
  slip?: NINCard;
  setShow: (show: boolean) => void;
}

const NinPaymentModal: React.FC<MywalletProps> = ({ slip, setShow }) => {
  const [flow, setFlow] = useState(0);
  const { data, formik, isSuccess, isPending } = useValidateNIN()

  const headers = [slip?.title, "Download slip"]

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    formik.setFieldValue("amount", slip?.amount)
    formik.handleSubmit()
  }

  useEffect(() => {
    if(isSuccess) {
      setFlow(1)
    }
  }, [isSuccess])


  return (
    <ModalsLayout flow={flow} setFlow={setFlow} header={headers[flow]} setShow={setShow} show={true}>
      {
        flow === 0 ?

          <form onSubmit={handleSubmit} className="pb-[50px]">
            <div className="">
              <CurrentBalance />     

                <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
                    Enter NIN
                </label>
                <Input name="nin" type="number" 
                  value={formik.values.nin} 
                  error={formik.touched.nin && formik.errors.nin} 
                  onChange={formik.handleChange} 
                  placeholder="Enter 11 digit NIN" 
                />
                <p className="font-bold mt-2">AMOUNT: {currencyFormatter(slip?.amount)}</p>

                <div className="mt-10 h-20">
                    <Button isLoading={isPending}>
                      <span className="text-[16px] uppercase">PROCEED</span>
                    </Button>
                </div>
            </div>
          </form>

          // <Confirmation 
          //   status={status} 
          //   setShow={setShow} 
          //   heading={"NIN Long Slip"} 
          //   text={status === "error" ? "No Record Found" : "Transaction Successful"} 
          //   subtext={status === "error" ? "No amount was debited" : `You have been debitted ${currencyFormatter(slip?.amount)}`} 
          //   buttonProps={{ text: status === "error" ? "TRY AGAIN" : "DOWNLOAD SLIP", action: setIsSuccess }} 
          // />
        : flow === 1 ? 
        <div className="flex flex-col gap-6 Open-Sans text-[7px] text-black overflow-x-auto ">
          {
            slip?.title === "NIN Basic Slip"
            ? <LongSlip />
            :
            slip?.title === "NIN Personal Info Slip"
            ? <PersonalSlip />
            :
            slip?.title === "NIN Standard Slip"
            ? <StandardSlip/>
            :
            slip?.title === "NIN Premium Slip"
            ? <PremiumSlip />
            :
            ""
          }
        </div>
        : 
        <></>
      }
    </ModalsLayout>
  );
};

export default NinPaymentModal;
