"use client";
import { Button } from "@/components/common/button";
import React, { useState } from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import SpreadIcon from "@/assets/icons/SpreadIcon";
import AdminTable from "@/components/datavisulaization/table";
import Pagination from "@/components/tables/pagination";
import HistoryModal from "@/components/modals/historyModal";
import { History } from "@/components/tables/history";
import { SearchInput } from "@/components/common/inputs";
import CaratDown from "@/assets/icons/CaratDown";
import SortIcon from "@/assets/icons/SortIcon";
import AdminModal from "@/components/modals/Admin/AdminModal";
import CircularCheck from "@/assets/icons/CircularCheck";
import NairaIcon from "@/assets/icons/nairaIcon";

const Index = () => {
  const [show, setShow] = useState(false);

  const pseudoData = [
    {
      title: "Total Referrals",
      content: "13,000",
    },
    {
      title: "Conversion Rate",
      content: "67%",
    },
    {
      title: "Total commission",
      content: "200,000",
    },
  ];

  const tiers = [
    {
      title: "Bronze",
      color: "#CE8946",
      reward: "200/Referral",
      list: [
        "Refer a total of 5 people in a month to qualify",
        "Perform at least 20 transactions",
        "Maintain wallet balance of at least NGN 5,000",
        "Available to both users and agents",
      ],
    },
    {
      title: "Silver",
      color: "#C0C0C0",
      reward: "400/Referral",
      list: [
        "Refer a total of 5 people in a month to qualify",
        "Perform at least 20 transactions",
        "Maintain wallet balance of at least NGN 7,000",
        "Available to both users and agents",
      ],
    },
    {
      title: "Gold",
      color: "#FFBF00",
      reward: "600/Referral",
      list: [
        "Refer a total of 5 people in a month to qualify",
        "Perform at least 20 transactions",
        "Maintain wallet balance of at least NGN 10,000",
        "Available to both users and agents",
      ],
    },
  ];

  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk ">
      {/* Header Section */}
      {show && <AdminModal show={show} setShow={setShow} />}
      <div className="flex flex-col md:flex-row w-full mb-6 items-center">
        <h2 className="text-[24px] md:text-[28px] lg:text-[36px] font-medium mb-4 md:mb-0">
          Customers
        </h2>
      </div>

      {/* Stats Section */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between mb-8">
        {pseudoData.map((item, key) => (
          <div
            key={key}
            className="p-4 border border-[#E7E6F2] w-full sm:w-[48%] md:w-[335px] height-[150px] rounded-[15px]"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-[18px] md:text-[22px] lg:text-[24px]">
                {item.title}
              </h4>
              <SpreadIcon />
            </div>
            <div className="text-[28px] md:text-[36px] lg:text-[42px] font-bold">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className="flex flex-col justify-between w-full max-w-[479px] border border-[#E7E6F2] p-4 rounded-[20px]"
          >
            <div>
              <p
                className="px-2 text-[20px] md:text-[18px] font-[700]"
                style={{ color: tier.color }}
              >
                {tier.title}
              </p>
              <div className="flex items-center mt-2">
                <NairaIcon className="h-[32px] md:h-[28px]" />
                <p className="text-[42px] md:mt-1 md:text-[30px] text-[#000000] font-[700]">
                  {tier.reward}
                </p>
              </div>
              <ul className="list-none mt-4 space-y-3">
                {tier.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex gap-2 items-start font-[500] text-[18px] mb-2"
                  >
                    <div className="w-[10%]">
                      <CircularCheck className="h-[24px] w-[24px] md:h-[30px] md:w-[30px]" />
                    </div>
                    <p className="w-[80%]">
                      {/* Check for amounts that are in Naira and wrap them in a bold span */}
                      {item.split(" ").map((word, i) =>
                        word.includes("NGN") ||
                        word.includes("Naira") ||
                        /^\d+,\d+$/.test(word) ? (
                          <span key={i} className="font-bold">
                            {word}{" "}
                          </span>
                        ) : (
                          <span key={i}>{word} </span>
                        )
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 mb-2">
              <Button variant="secondary" size="full">
                CUSTOMIZE
              </Button>
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
          <span className="font-medium text-[14px] md:text-[16px] text-[#3D3066] ">
            Showing all Agents
          </span>

          <div className="flex items-center h-[56px] w-[160px] md:w-[180px] lg:w-[224px] rounded-lg p-[12px] border border-[#89939F] bg-white justify-between">
            <span className="text-[14px] md:text-[16px] text-[#292C30] font-medium">
              All AGENTS
            </span>
            <span className="ml-2  p-[4px] rounded bg-[#F5F8FC]">
              <CaratDown />
            </span>
          </div>

          <div className="flex items-center h-[56px] gap-[5px] rounded-lg p-[12px] border border-[#89939F] bg-white">
            <SortIcon />
            <span className="text-[14px] md:text-[16px] text-[#292C30] font-medium">
              Latest
            </span>
          </div>
        </div>

        <div className="w-full mt-6">
          {/* History Table Section */}
          <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-bold mb-2">
            Agent
          </h2>
          <History
            history={""}
            fields={["NAME", "TRANSACTIONS", "EARNED COMMISSION", "STATUS"]}
            className="text-[20px] font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
