"use client";
import React, { useState } from "react";
import ModalsLayout from "../modalsLayout";
import { ArrownDownCollapse, ArrowUpCollapse } from "@/assets/icons/collapse";
import Image from "next/image";

const AdminModal = ({ show, setShow }: any) => {
  const [currModal, setCurrmodal] = useState<string>("");

  const toggleCollapse = (title: string) => {
    // Toggle the clicked modal
    setCurrmodal((prev) => (prev === title ? "" : title));
  };

  const item = {
    title: "Profile",
    email: "adeboyejof306@gmail.com",
    phone: "+234 8132879084",
    address: "64, Are Oyebola Street, Opposite Dikat, Ring Road, Ibadan",
    userSince: "April 12th, 2024",
  };

  return (
    <ModalsLayout header="Agent Details" flow={0} show={show} setShow={setShow}>
      <div className="flex flex-col w-full items-center justify-center font-CabinetGrotesk space-y-6">
        {/* Profile Section */}
        <div className="flex flex-col items-center bg-[#F2F2F2] rounded-md p-6 py-10 w-full max-w-md">
          <Image src={"/images/profilepic.png"} height={220} width={220} alt="profile-image" objectFit="cover" />
          <div className="text-center mt-4">
            <p className="text-[36px] md:text-[28px] font-semibold">
              Adeboyejo Fawziyyah
            </p>
            <p className="text-[24px] md:text-[18px] font-normal text-gray-600">
              Agent
            </p>
          </div>
        </div>

        {/* Information Section */}

        <div className="w-full">
          <div className="w-full max-w-md mx-auto">
            <div className="rounded-t-md bg-[#F2F2F2] p-6 flex justify-between items-center mb-1">
              <span className="text-[28px] md:text-[22px] font-medium">
                {item.title}
              </span>
              <div
                onClick={() => toggleCollapse("PROFILE")}
                className="cursor-pointer"
              >
                {currModal === "PROFILE" ? <ArrowUpCollapse /> : <ArrownDownCollapse />}
              </div>
            </div>

            {/* Collapsible Content */}
            <div
              className={` rounded-b-md bg-[#F2F2F2] transition-all duration-500 ease-in-out overflow-hidden ${
                currModal === "PROFILE"
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6">
                <div className="text-[20px] md:text-[16px] font-normal">
                  <div className="flex mb-4">
                    <p className="font-medium w-[30%]">Email:</p>
                    <p className="font-semibold w-[70%]">{item.email}</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="font-medium w-[30%]">Phone No:</p>
                    <p className="font-semibold w-[70%]">{item.phone}</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="font-medium w-[30%]">Address:</p>
                    <p className="font-semibold w-[70%]">{item.address}</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="font-medium w-[30%]">User since:</p>
                    <p className="font-semibold w-[70%]">{item.userSince}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Section */}
        <div className="w-full">
          <div className="w-full max-w-md mx-auto">
            <div className="rounded-t-md bg-[#F2F2F2] p-6 flex justify-between items-center mb-1">
              <span className="text-[28px] md:text-[22px] font-medium">
                Business Details
              </span>
              <div
                onClick={() => toggleCollapse("BUSINESS")}
                className="cursor-pointer"
              >
                {currModal === "BUSINESS" ? <ArrowUpCollapse /> : <ArrownDownCollapse />}
              </div>
            </div>

            {/* Collapsible Content */}
            <div
              className={`rounded-b-md bg-[#F2F2F2] transition-all duration-500 ease-in-out overflow-hidden ${
                currModal === "BUSINESS"
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6">
                <div className="text-[20px] md:text-[16px] font-normal">
                  {/* Business Name */}
                  <div className="flex justify-between mb-4">
                    <div className="w-[48%]">
                      <p className="font-medium text-gray-600">Business Name:</p>
                    </div>
                    <div className="w-[48%]">
                      <p className="font-semibold text-[28px] md:text-[22px]">
                        Adeboj
                      </p>
                    </div>
                  </div>

                  {/* Wallet Balance and Status - Two Column Layout */}
                  <div className="flex justify-between mb-4">
                    <div className="w-[48%]">
                      <p className="font-medium text-gray-600">Wallet Balance</p>
                      <p className="font-semibold text-[28px] md:text-[22px]">
                        NGN 45,000
                      </p>
                    </div>
                    <div className="w-[48%] ">
                      <p className="font-medium text-gray-600">Status</p>
                      <p className="font-semibold text-[28px] md:text-[22px]">
                        Approved
                      </p>
                    </div>
                  </div>

                  {/* Total Referrals and Referral Level */}
                  <div className="flex justify-between mb-4">
                    <div className="w-[48%] bg-gray-100 rounded-md">
                      <p className="font-medium text-gray-600">
                        Total Referrals
                      </p>
                      <p className="font-semibold text-[28px] md:text-[22px]">
                        148
                      </p>
                    </div>
                    <div className="w-[48%] bg-gray-100">
                      <p className="font-medium text-gray-600">
                        Referral Level
                      </p>
                      <p className="font-semibold text-[28px] md:text-[22px]">
                        Silver
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History Section */}
        <div className="w-full ">
          <div className="w-full max-w-md mx-auto">
            <div className="rounded-t-md bg-[#F2F2F2] p-6 flex justify-between items-center mb-1 text-[24px] font-normal">
              <span className="text-[28px] md:text-[22px] font-medium">
                Transaction History
              </span>
              <div
                onClick={() => toggleCollapse("TRANSACTION")}
                className="cursor-pointer"
              >
                {currModal === "TRANSACTION" ? <ArrowUpCollapse /> : <ArrownDownCollapse />}
              </div>
            </div>

            {/* Collapsible Content */}
            <div
              className={`rounded-b-md bg-[#F2F2F2] transition-all duration-500 ease-in-out overflow-hidden ${
                currModal === "TRANSACTION"
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6">
                <div className="text-[20px] md:text-[16px] font-normal">
                  <div className="grid grid-cols-3 gap-4 mb-4 font-[700] text-[24px] md:text-[18px]">
                    {/* Headers */}
                    <div className="font-semibold text-center">
                      REFERENCE ID
                    </div>
                    <div className="font-semibold text-center">AMOUNT</div>
                    <div className="font-semibold text-center">DATE</div>
                  </div>

                  {/* Rows of data */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-[24px] md:text-[18px]">
                    <div className="text-center font-[500]">NIN3244496753</div>
                    <div className="text-center">NGN 150</div>
                    <div className="text-center">19/5/24</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-[24px] md:text-[18px]">
                    <div className="text-center font-[500]">NIN3244496753</div>
                    <div className="text-center">NGN 3000</div>
                    <div className="text-center">19/5/24</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-[24px] md:text-[18px]">
                    <div className="text-center font-[500]">DAT3215790853</div>
                    <div className="text-center">NGN 2,000</div>
                    <div className="text-center">19/5/24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalsLayout>
  );
};

export default AdminModal;
