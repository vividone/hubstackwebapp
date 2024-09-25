"use client";
import { Button } from "@/components/common/button";
import React, { useState } from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import AdminModal from "@/components/modals/Admin/AdminModal";
import { ArrowUpCollapse } from "@/assets/icons/collapse";
import { ArrownDownCollapse } from "@/assets/icons/collapse";
import SpreadIcon from "@/assets/icons/SpreadIcon";
import NewNairaIcon from "@/assets/icons/newNairaIcon";

const rowData = [
  { service: "SERVICE", price: "PRICE", isHeader: true },
  { service: "NIN Search + Long Slip", price: "200.00" },
  { service: "NIN Search + Improved Slip", price: "200.00" },
  { service: "NIN Search + Standard Slip", price: "200.00" },
  { service: "NIN Search + Premium Slip", price: "200.00" },
];

const SMEData = [
  {
    plan: "PLAN",
    Network: "NETWORK",
    Bonus: "BONUS",
    price: "PRICE",
    isHeader: true,
  },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
  { plan: "1 GB / 1 DAY", Network: "9Mobile", Bonus: "300MB", price: "350.00" },
];

const Index = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk">
      {show && <AdminModal show={show} setShow={setShow} />}

      <div className="flex flex-col md:flex-row w-full mb-6 items-center">
        <h2 className="text-[24px] md:text-[36px] font-medium mb-4 md:mb-0">
          Services
        </h2>
        <Button
          icon={
            <PlusIcon className="h-[18.75px] w-[18.75px] color-[#FFFFFF]" />
          }
          size="lg"
          variant="primary"
          className="ml-0 md:ml-auto w-full md:w-[322px]"
          onClick={() => setShow(true)}
        >
          CREATE NEW
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 justify-between items-center p-2">
        <div className="w-full mt-6">
          <CustomDropDown heading="NIN VERIFICATION" rowData={rowData} />
        </div>
        <div className="w-full mt-6">
          <CustomDropDown heading="SME DATA" rowData={SMEData} />
        </div>
      </div>
    </div>
  );
};

export default Index;

export const CustomDropDown = ({ heading, rowData }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const headers = Object.keys(rowData[0]).filter((key) => key !== "isHeader");

  return (
    <div className="w-full">
      <div
        className="flex justify-between p-4 items-center cursor-pointer bg-[#3D30661A]"
        onClick={toggleCollapse}
      >
        <h3 className="px-4 font-[700] text-[24px] md:text-[20px]">
          {heading}
        </h3>
        <div>{isCollapsed ? <ArrownDownCollapse /> : <ArrowUpCollapse />}</div>
      </div>

      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isCollapsed ? "max-h-0" : "max-h-[1000px]"
        }`}
      >
        {rowData.map((row: any, index: any) => (
          <div
            key={index}
            className={`flex w-full py-3 items-center justify-between border-b border-[#E7E6F2] ${
              row.isHeader ? "font-[700] text-[18px]" : "font-[400] text-[16px]"
            }`}
          >
            {headers.map((header, headerIndex) => (
              <div
                key={headerIndex}
                className="flex-1 text-center flex justify-center items-center gap-1"
              >
                {header === "price" && !row.isHeader ? (
                  <>
                    <NewNairaIcon className="w-[16px] h-[16px]" />
                    <span>{row[header]}</span>
                  </>
                ) : (
                  row[header]
                )}
              </div>
            ))}
            <div className="flex justify-end flex-1 items-center px-4">
              {index !== 0 && <SpreadIcon className="cursor-pointer" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};