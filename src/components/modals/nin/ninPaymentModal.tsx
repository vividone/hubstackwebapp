"use client"
import React, { useState } from "react";
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

interface MywalletProps {
  slip?: NINCard;
  setShow: (show: boolean) => void;
}

const NinPaymentModal: React.FC<MywalletProps> = ({ slip, setShow }) => {
  const [flow, setFlow] = useState(0);

  const headers = [slip?.title, "Download slip"]

  return (
    <ModalsLayout flow={flow} setFlow={setFlow} header={headers[flow]} setShow={setShow} show={true}>
      {
        flow === 0 ?

          <div className="pb-[50px]">
            <div className="">
              <CurrentBalance />     

                <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
                    Enter NIN
                </label>
                <Input name="NIN" type="number" placeholder="123456789011" />
                <p className="font-bold mt-2">AMOUNT: {currencyFormatter(slip?.amount)}</p>

                <div className="mt-10 h-20">
                    <Button onClick={() => setFlow(1)}>
                    <span className="text-[16px] uppercase">PROCEED</span>
                    </Button>
                </div>
            </div>
          </div>

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
