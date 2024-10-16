"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { usePDF } from 'react-to-pdf'


const LongSlip: React.FC = () => {
    const { toPDF, targetRef } = usePDF({filename: 'nimc-slip.pdf'})

  return (
    <div>
        <div className="flex flex-col w-[457px]" ref={targetRef}>

            <div className="flex justify-center items-start gap-[14%] border border-black p-1 pb-2">
              <div className="h-[30px] w-[30px]">
                <Image src={"/images/coat-of-arm.png"} alt="coat-of-arm" width={79} height={67}/>
              </div>
              <div className="text-center flex flex-col items-center gap-[1px]">
                <h1 className="font-bold text-[12px]">National Identity Management System</h1>
                <p className="font-bold text-[8px]">Federal Republic of Nigeria</p>
                <p className="font-bold text-[8px]">National Identification Number Slip (NINS)</p>
              </div>
              <div className="h-[40px] w-[40px]">
                <Image src={"/images/nimc.png"} alt="nimc" width={79} height={67}/>
              </div>
            </div>

            <div className="flex items-stretch font-bold">
              <div className="flex flex-col w-[28%]">
                <p className="border border-transparent border-b-black border-l-black py-[6px] px-[2px]">Tracking ID:</p>
                <p className="border border-transparent border-b-black border-l-black py-[6px] px-[2px]">NIN:</p>
                <p className="border border-transparent border-b-black border-l-black py-[6px] px-[2px] flex-1"></p>
              </div>
              <div className="w-[30%]">
                <p className="border border-transparent border-b-black border-l-black py-[6px] px-[2px]">Surname:</p>
                <p className="border border-transparent border-b-black border-l-black py-[6px] px-[2px]">First Name:</p>
                <p className="border border-transparent border-b-black border-l-black py-[6px] px-[2px]">Middle Name:</p>
                <p className="border border-transparent border-b-black border-l-black py-[6px] px-[2px]">Gender:</p>
              </div>
              <div className="flex flex-col w-[27%]">
                <p className="border border-transparent border-b-black border-l-black py-[6px] px-[2px] flex-1">Address:</p>
              </div>
              <div className="flex bg-gray-600 flex-1">
                {/* <Image src={"/images/profilepic.png"} alt="nimc" width={200} height={300}/> */}
              </div>
            </div>
            
            <div className="flex flex-col gap-1 border border-transparent border-b-black border-x-black p-1 font-[500]">
              <p><span className="font-bold">Note:</span> The <span className="font-bold italic">National Identification Number (NIN) is your identity</span>. It is confidential and may only be released for legitimate transactions. </p>
              <p>You will be notified when your National Identity Card is ready (for any enquiries please contact)</p>
            </div>

            <div className="flex">
              <div className="flex flex-col items-center gap-1 border border-transparent border-b-black border-x-black p-2">
                <div className="h-[15px] w-[15px] bg-slate-200 rounded-full">
                    <Image src={"/images/call.jpg"} alt="nimc" width={200} height={300}/>
                </div>
                <p>helpdesk@nimc.gov.ng</p>
              </div>
              <div className="flex flex-col items-center gap-1 border border-transparent border-b-black border-r-black p-2">
                <div className="h-[15px] w-[15px] bg-slate-200 rounded-full">
                    <Image src={"/images/explorer.png"} alt="nimc" width={200} height={300}/>
                </div>
                <p>www.nimc.gov.ng</p>
              </div>
              <div className="flex flex-col items-center gap-1 border border-transparent border-b-black border-r-black p-2">
                <div className="h-[15px] w-[15px] bg-slate-200 rounded-full">
                    <Image src={"/images/call.jpg"} alt="nimc" width={200} height={300}/>
                </div>
                <p>0700-CALL-NIMC</p>
                <p>(O7OO-2255-646)</p>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1 border border-transparent border-b-black border-r-black py-2">
                <div className="h-[15px] w-[15px] bg-slate-200 rounded-full"></div>
                <p>National Identity Management Commission</p>
                <p>11, Sokode Crescent, Off Dalaba Street, Zone 5 Wuse, Abuja Nigeria</p>
              </div>

            </div>

        </div>

        <div className="mt-10 flex justify-center">
            <Button size="long" onClick={() => toPDF()}>Download Slip</Button>
        </div>
    </div>
  );
};

export default LongSlip;
