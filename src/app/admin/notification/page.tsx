"use client";
import { Button } from "@/components/common/button";
import React, { useState } from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import SpreadIcon from "@/assets/icons/SpreadIcon";
import { SearchInput } from "@/components/common/inputs";
import CaratDown from "@/assets/icons/CaratDown";
import SortIcon from "@/assets/icons/SortIcon";
import NewNotification from "@/components/modals/notification/Notification";

const Index = () => {
  const [show, setShow] = useState(false);
  const [expandedIndices, setExpandedIndices] = useState<any>([]);

  const notificationMessages = [
    "CONGRATULATION! You’ve entered the silver referral level. This means that you now earn NGN 300 per referrals. This is our little way of appreciating your continuous hard work in referring people to platform. Thank You.",
    "Hi Zainab, we hope this message finds you well. We are happy to inform you of our latest deals. You can now top-up your airtime and mobile data at even cheaper rates...",
    "CONGRATULATION! You’ve entered the silver referral level. This means that you now earn NGN 300 per referrals. This is our little way of appreciating your continuous hard work in referring people to platform. Thank You.",
    "Hi Zainab, we hope this message finds you well. We are happy to inform you of our latest deals. You can now top-up your airtime and mobile data at even cheaper rates... see more",
    "CONGRATULATION! You’ve entered the silver referral level. This means that you now earn NGN 300 per referrals. This is our little way of appreciating your continuous hard work in referring people to platform. Thank You.",
    "Hi Zainab, we hope this message finds you well. We are happy to inform you of our latest deals. You can now top-up your airtime and mobile data at even cheaper rates...",
    "CONGRATULATION! You’ve entered the silver referral level. This means that you now earn NGN 300 per referrals. This is our little way of appreciating your continuous hard work in referring people to platform. Thank You.",
  ];

  // Toggles "See More" functionality
  const toggleExpanded = (index: any) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i: any) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk ">
      {show && <NewNotification setShow={setShow} show={show} />}
      {/* Header Section */}
      <div className="flex flex-col md:flex-row w-full mb-6 items-center">
        <h2 className="text-[24px] md:text-[36px] font-medium mb-4 md:mb-0">
          Notifications
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

      {/* Filter & Search Section */}
      <div className="w-full mt-10 flex flex-wrap gap-4 justify-between items-center p-2 ">
        <div className="flex-grow w-[40%] ">
          <SearchInput
            type="text"
            placeholder="Search"
            className="bg-white border-none"
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
      </div>

      {/* Notification List */}
      <div className="p-2 mt-4">
        <span className="font-[700] text-[24px] md:text-[20px] text-[#000000] ">
          All Notifications
        </span>

        <div className="space-y-3 ">
          {notificationMessages.map((message, index) => {
            const isExpanded = expandedIndices.includes(index);
            const displayMessage = isExpanded
              ? message
              : `${message.substring(0, 100)}...`;

            return (
              <div
                key={index}
                className="flex gap-4 p-4 align-center flex-wrap bg-[#F2F2F2] mt-6"
              >
                <p className="w-[93%] text-[24px] md:text-[18px]">
                  {displayMessage}
                  {!isExpanded && message.length > 100 && (
                    <span
                      onClick={() => toggleExpanded(index)}
                      className="ml-[2] text-500 text-[#507FFF] md:text-[18px] cursor-pointer"
                    >
                      see more
                    </span>
                  )}
                  {isExpanded && (
                    <span
                      onClick={() => toggleExpanded(index)}
                      className="ml-[2] text-500 text-[#507FFF] md:text-[18px] cursor-pointer"
                    >
                      see less
                    </span>
                  )}
                </p>
                <div className="flex w-[5%] my-[auto] justify-end ">
                  <SpreadIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
