"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { usePDF } from "react-to-pdf";


const PremiumSlip: React.FC = () => {
  const { toPDF, targetRef } = usePDF({filename: 'nimc-slip.pdf'})

  return (
    <div>
        <div className="flex flex-col w-[457px] text-[8px] p-4 items-center justify-center" ref={targetRef}>

          <div className="flex flex-col relative w-[457px] h-[280px] text-[8px] bg-center py-2 bg-cover bg-no-repeat bg-[url('/images/premium-slip.png')]  border border-black/[0.1]">
            <div className="">
              <div className="flex items-center py-[15%] gap-[14px] px-2">
                <div className="flex bg-[#A9A9A9] w-[98px] h-[130px] mt-[2px] -ml-[2px]">
                  {/* <Image src={"/images/profilepic.png"} alt="nimc" width={150} height={300}/> */}
                </div>

                <div className="flex-1 flex flex-col justify-center gap-7 h-[120px] mt-2">
                  <div>
                    <p className="text-[12px] Eyetype-one">DOE</p>
                  </div>
                  <div>
                    <p className="text-[12px] Eyetype-one">JOHN DEXTER</p>
                  </div>
                  <div className="flex justify-between w-[77%]">
                    <p className="text-[12px] Eyetype-one">28 JUN 2002</p>
                    <p className="text-[12px] Eyetype-one">M</p>
                  </div>                  
                </div>

                <div className="flex flex-col gap-1 items-center Eyetype-one mt-[-15%] -mr-1">
                  <div className="bg-white w-[125px] h-[120px] ">
                  <Image src={"/images/barcode.png"} alt="nimc" width={300} height={300}/>
                  </div>
                  <p className="text-[12px] Eyetype-one mt-[36%]">28 JUN 2002</p>

                </div>
              </div>

              <div className="text-center -mt-[11%]"> 
              <p className="text-center font-bold text-[32px] leading-[100%] Eyetype-one">1234 567 8900</p>
              </div>
              
            </div>
          </div>

          <div className="flex flex-col gap-2 p-4 w-[457px]  h-[280px] rotate-180 items-center text-center text-[9px] border border-black/[0.1]">
            <h1 className="font-bold text-[20px]">DISCLAIMER</h1>
            <p className="italic">Trust, but verify</p>
            <div>
              <p>Kindly ensure each time this ID is presented, that you verify the credentials using a Government-APPROVED verification resource.</p>
              <p>The details on the front of this NIN Slip must EXACTLY math the verification result</p>
            </div>
            <h1 className="font-bold text-[18px]">CAUTION!</h1>
            <p className="">If this NIN was not issued to the person on the front of this document, please DO NOT attempt to scan, photocopy, or replicate the personal data contained herein. </p>
            <p>You are only permitted to scan the barcode for the purpose of identity verification.</p>
            <p>THE FEDERAL GOVERNMENT of NIGERIA assumes no responsibility if you accept any variance in the scan result or do not scan the 2D barcode overleaf</p>
          </div>

        </div>
        <div className="mt-10 flex justify-center">
            <Button size="long" onClick={() => toPDF()}>Download Slip</Button>
        </div>
    </div>
  );
};

export default PremiumSlip;
