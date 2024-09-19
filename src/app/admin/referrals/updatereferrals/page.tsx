"use client";
import React, { useState } from "react";
import AdminModal from "@/components/modals/Admin/AdminModal";
import { AddIcons, SubtractIcons } from "@/assets/icons/MathIcons";
import { Button } from "@/components/common/button";
import { RangeValue,Checkbox } from "@/components/common/inputs";
import ArrowDown from "@/assets/icons/arrowDown";

const Index = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk">
      {show && <AdminModal show={show} setShow={setShow} />}
      <div className="flex flex-col md:flex-row w-full mb-6">
        <h2 className="text-[20px] md:text-[36px] font-medium mb-4 md:mb-0">
          Update Referral Configuration
        </h2>
      </div>
      <div className="p-4 mt-4">
        {/* Table Layout for Referral Configuration */}
        <div className="space-y-6">
          {/* Headers */}
          <div className="flex flex-col md:flex-row text-[18px] md:text-[20px] font-[700] mb-8">
            <div className="w-full md:w-[30%]">
              <span>Products</span>
            </div>
            <div className="w-full md:w-[70%] flex justify-between">
              <span className="flex-1 text-center">Value</span>
              <span className="flex-1 text-center">Type</span>
              <span className="flex-1 text-center">Commission</span>
            </div>
          </div>

          {/* NIN Transactions Row */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[30%] text-[18px] md:text-[20px] font-[700] mb-4 md:mb-0">
              <span>NIN Transactions</span>
            </div>
            <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between">
              <div className="flex justify-center flex-1 mb-4 md:mb-0">
                <RangeValue />
              </div>
              <div className="flex justify-center flex-1 mb-4 md:mb-0">
                <div className="p-4 border border-[#E7E6F2] rounded-[6px] flex h-[50px] w-[130px] items-center justify-between">
                  <span>%</span>
                  <span>
                    <ArrowDown />
                  </span>
                </div>
              </div>
              <div className="flex justify-center flex-1">
                <div className="border border-[#E7E6F2] rounded-[6px] flex h-[50px] w-full p-4 items-center justify-center">
                  <span className="font-[500] text-[16px] text-[#3D3066]">
                    20% per transaction
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Sections: Number of Referrals, Minimum Transactions, Wallet Balance */}
          {[
            "Number of referrals in one month",
            "Minimum number of transactions",
            "Minimum wallet balance",
          ].map((label, index) => (
            <div className="flex flex-col md:flex-row mb-4" key={index}>
              <div className="w-full md:w-[30%] text-[18px] md:text-[20px] font-[700] mb-4 md:mb-0">
                <span>{label}</span>
              </div>
              <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between">
                <div className="flex justify-center flex-1 mb-4 md:mb-0">
                  <RangeValue />
                </div>
                <div className="flex justify-center flex-1 mb-4 md:mb-0">
                  <RangeValue />
                </div>
                <div className="flex justify-center flex-1">
                  <RangeValue />
                </div>
              </div>
            </div>
          ))}

          {/* Availability Section */}
          <div className="flex flex-col md:flex-row mb-4">
            <span className="w-full md:w-[30%] text-[18px] md:text-[20px] font-[700] mb-4 md:mb-0">
              Available to customer
            </span>
            <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between">
              <div className="flex justify-center flex-1 mb-4 md:mb-0">
                <Checkbox />
              </div>
              <div className="flex justify-center flex-1 mb-4 md:mb-0">
                <Checkbox />
              </div>
              <div className="flex justify-center flex-1">
                <Checkbox />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-4">
            <span className="w-full md:w-[30%] text-[18px] md:text-[20px] font-[700] mb-4 md:mb-0">
              Available to agents
            </span>
            <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between">
              <div className="flex justify-center flex-1 mb-4 md:mb-0">
                <Checkbox />
              </div>
              <div className="flex justify-center flex-1 mb-4 md:mb-0">
                <Checkbox />
              </div>
              <div className="flex justify-center flex-1">
                <Checkbox />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Notes Section */}
        <div className="mt-12">
          <div className="font-[700] text-[18px] md:text-[20px] text-[#3D3066] mb-4">
            Others:
          </div>
          <textarea className="w-full h-[120px] md:h-[160px] border p-2 outline-none border-[#DBDBDB]" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between mt-12">
          <Button variant="secondary" size="lg" className="mb-4 md:mb-0">
            BACK
          </Button>
          <Button variant="primary" size="lg">
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

