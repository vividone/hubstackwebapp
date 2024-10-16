"use client"
import React from "react";
import Image from "next/image";
import { usePDF } from "react-to-pdf";
import { Button } from "@/components/common/button";


const PersonalSlip: React.FC = () => {
  const { toPDF, targetRef } = usePDF({filename: 'nimc-slip.pdf'})

  return (
      <div>
        <div className="flex flex-col w-[457px] text-[8px] p-4" ref={targetRef}>

            <div className="flex justify-center items-center gap-[5%] p-4">
              <div className="text-center flex flex-col items-center gap-[1px]">
                <h1 className="font-bold text-[12px]">National Identity Management System</h1>
                <p className="font-bold text-[8px]">Federal Republic of Nigeria</p>
                <p className="text-[8px]">National Identification Number (NIN) - Digital Identification</p>
              </div>
              <div className="w-[150px]">
                <Image src={"/images/coat-of-arm.png"} alt="coat-of-arm" width={79} height={67}/>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="flex bg-[#A9A9A9] w-[150px] h-[240px]">
                {/* <Image src={"/images/profilepic.png"} alt="nimc" width={150} height={300}/> */}
              </div>

              <div className="flex-1">
                <table className="text-left w-full border border-black/[0.4] border-collapse">
                  <thead className="">
                    <tr className="text-center p-2">
                      <th className="p-2">
                      Personal Information
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">National Identification Number NIN</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">Tracking ID</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">First Name</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">Middle Name</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">Last Name</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">Maiden Name</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">Phone Number</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">Date of Birth</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">Gender</p>
                    </tr>
                    <tr className="flex justify-between border border-transparent border-t-black/[0.4] p-2">
                      <p className="w-[45%]">Residence</p>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <p className="text-[7.5px] mt-6">NOTE: The National Identification Number (NIN) is your identity. It is confidential and may only be released for legitimate transaction.</p>
        </div>

        <div className="mt-10 flex justify-center">
            <Button size="long" onClick={() => toPDF()}>Download Slip</Button>
        </div>
    </div>
  );
};

export default PersonalSlip;
