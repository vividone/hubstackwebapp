"use client";
import { Button } from "@/components/common/button";
import React, { useState } from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import SpreadIcon from "@/assets/icons/SpreadIcon";
import { History } from "@/components/tables/history";
import { SearchInput } from "@/components/common/inputs";
import CaratDown from "@/assets/icons/CaratDown";
import SortIcon from "@/assets/icons/SortIcon";
import AdminModal from "@/components/modals/Admin/AdminModal";

const Index = () => {
  const [show, setShow] = useState(false);

  const pseudoData = [
    {
      title: "Total Agents ",
      content: "278,000",
    },
    {
      title: "Verified ",
      content: "260,960",
    },
    {
      title: "Unverified",
      content: "278,000",
    },
    {
      title: "Suspended",
      content: "278,000",
    },
  ];
  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk ">
      {/* Header Section */}
      {show && <AdminModal show={show} setShow={setShow} />}
      <div className="flex flex-col md:flex-row w-full mb-6 items-center">
        <h2 className="text-[24px] md:text-[36px] font-medium mb-4 md:mb-0">
          Agents
        </h2>
        <Button
          icon={
            <PlusIcon className="h-[18.75px] w-[18.75px] color-[#FFFFFF]" />
          }
          size="lg"
          variant="primary"
          className="ml-0 md:ml-auto w-full md:w-[322px]"
          onClick={()=>setShow(true)}
        >
          Add New
        </Button>
      </div>

      {/* Stats Section */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between mb-8">
        {pseudoData.map((item, key) => (
          <div
            key={key}
            className="p-4 border border-[#E7E6F2] w-full sm:w-[48%] md:w-[335px] height-[150px] rounded-[15px]"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-[20px] md:text-[24px]">
                {item.title}
              </h4>
              <SpreadIcon />
            </div>
            <div className="text-[32px] md:text-[42px] font-bold">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter & Search Section */}
      <div className="mt-10 flex flex-wrap gap-4 justify-between items-center p-2 ">
        <div className="flex-grow">
          <SearchInput
            type="text"
            placeholder="Search"
            className="w-full bg-white border-none"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex gap-2 items-center ">
          <span className="font-medium text-[16px] text-[#3D3066] ">
            Showing all Agents
          </span>

          <div className="flex items-center h-[66px] w-[180px] lg:w-[224px] rounded-lg p-[12px] border border-[#89939F] bg-white justify-between">
            <span className="text-[16px] text-[#292C30] font-medium">
              All AGENTS
            </span>
            <span className="ml-2  p-[4px] rounded bg-[#F5F8FC]">
              <CaratDown />
            </span>
          </div>

          <div className="flex items-center h-[66px] gap-[5px] rounded-lg p-[12px] border border-[#89939F] bg-white">
            <SortIcon />
            <span className="text-[16px] text-[#292C30] font-medium">
              Latest
            </span>
          </div>
        </div>

        <div className="w-full mt-6">
          {/* History Table Section */}
          <h2 className="text-[20px] md:text-[24px] font-bold mb-2">Agent</h2>
          <History
            history={""}
            fields={["NAME", "TRANSACTIONS", "EARNED COMMISSION", "STATUS"]}
            className="text-[24px] font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
