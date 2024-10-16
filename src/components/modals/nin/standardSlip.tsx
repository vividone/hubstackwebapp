"use client"
import React from "react";
import Image from "next/image";
import { usePDF } from "react-to-pdf";
import { Button } from "@/components/common/button";


const StandardSlip: React.FC = () => {
  const { toPDF, targetRef } = usePDF({filename: 'nimc-slip.pdf'})

  return (
    <div>
        <div className="flex flex-col w-[457px] text-[8px] p-4 items-center justify-center" ref={targetRef}>

          <div className="flex flex-col relative w-[457px] h-[280px] text-[8px] bg-center py-2 bg-[length:250px_210px] bg-no-repeat bg-[url('/images/coat-of-arm-blurred.png')]  border border-black/[0.1]">
            <div className="">
              <div className="flex justify-center items-center gap-[5%] p-1">
                <div className="">
                  <Image src={"/images/coat-of-arm.png"} alt="coat-of-arm" width={60} height={60}/>
                </div>
              </div>

              <div className="flex gap-3 px-4">
                <div className="flex bg-[#A9A9A9] w-[80px] h-[120px]">
                  {/* <Image src={"/images/profilepic.png"} alt="nimc" width={150} height={300}/> */}
                </div>

                <div className="flex-1 flex flex-col justify-center gap-2 h-[120px]">
                  <div>
                    <p>Surname/Nom</p>
                    <p className="text-[10px] font-bold Eyetype-one">DOE</p>
                  </div>
                  <div>
                    <p>Given Names/Prenoms</p>
                    <p className="text-[10px] font-bold Eyetype-one">JOHN DEXTER</p>
                  </div>
                  <div>
                    <p>Date of Birth</p>
                    <p className="text-[10px] font-bold Eyetype-one">28 JUN 2002</p>
                  </div>                  
                </div>

                <div className="flex flex-col gap-1 items-center Eyetype-one -mt-4">
                  <p className="text-[12px] font-bold">NGA</p>
                  <p className="rotate-180 text-[10px] text-gray-400 tracking-[0.1em] opacity-[0.7] mt-2">12345678900</p>
                  <div className="bg-[#A9A9A9] w-[90px] h-[90px] ">
                    <Image src={"/images/barcode.png"} alt="nimc" width={300} height={300}/>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="flex flex-col mt-5 Eyetype-one">
              <p className="text-center font-bold text-[9px]">National Identification Number (NIN) </p>
              <p className="text-center font-bold text-[38px] -mt-4 ">1234 567 8900</p>
              <p className="text-center text-[6px] italic">Kindly ensure you scan the barcode to verify the credentials.</p>
            </div>

            <p className="absolute bottom-[33%] left-1 text-[10px] text-gray-400 tracking-[0.1em] rotate-[-30deg] opacity-[0.7]">12345678900</p>
            <p className="absolute bottom-6 left-0 text-[10px] text-gray-400 tracking-[0.1em] rotate-[-45deg] opacity-[0.7]">12345678900</p>
            <p className="absolute bottom-6 right-0 text-[10px] text-gray-400 tracking-[0.1em] rotate-[45deg] opacity-[0.7]">12345678900</p>
          </div>

          <div className="flex flex-col gap-2 p-4 w-[457px] h-[280px] rotate-180 items-center text-center text-[9px] border border-black/[0.1]">
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

export default StandardSlip;
