"use client";
import React, { useState } from "react";
import ModalsLayout from "../modalsLayout";
import ArrowDown from "@/assets/icons/arrowDown";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";

const NewNotification = ({ show, setShow }: any) => {
  return (
    <ModalsLayout
      header="New Notification"
      flow={0}
      show={show}
      setShow={setShow}
    >
      <div className="w-full p-2 ">
        <h3 className="font-[500] text-[20px] md:text-[24px] lg:text-[30px] mb-4">
          Notification Type
        </h3>

        <div className="mb-6">
          <div className="flex justify-between items-center p-4 border border-[#E7E6F2] rounded-md">
            <span className="text-[20px] md:text-[22px] lg:text-[24px] cursor-pointer rounded-[16px]">
              Choose a notification type
            </span>
            <ArrowDown />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-medium mb-4">
            Write your message
          </h3>
          <textarea
            className="w-full h-[200px] md:h-[250px] lg:h-[321px] border border-[#89939F] mb-4 outline-none p-2 rounded-md"
            placeholder="Type Here"
          ></textarea>
        </div>

        <div className="mb-6">
          <div className="bg-[#F2F2F2] p-4 mb-4">
            <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-medium">
              Send to:
            </h3>
          </div>
          <div className="flex items-center mb-2">
            <input type="radio" id="agents" name="sendTo" className="mr-2" />
            <label
              htmlFor="agents"
              className="text-[18px] md:text-[20px] lg:text-[24px]"
            >
              Agents
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="customers" name="sendTo" className="mr-2" />
            <label
              htmlFor="customers"
              className="text-[18px] md:text-[20px] lg:text-[24px]"
            >
              Customers
            </label>
          </div>
        </div>

        {/* Activity Status Section */}
        <div className="mb-6">
          <div className="bg-[#F2F2F2] p-4 mb-6">
            <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-medium">
              Based on:
            </h3>
          </div>
          <span className="text-[24px] md:text-[26px] lg:text-[32px] font-medium ">
            Activity Status
          </span>
          <div className="flex items-center mb-2 mt-6">
            <input
              type="radio"
              id="active"
              name="activityStatus"
              className="mr-2"
            />
            <label
              htmlFor="active"
              className="text-[18px] md:text-[20px] lg:text-[24px]"
            >
              Active
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="inactive"
              name="activityStatus"
              className="mr-2"
            />
            <label
              htmlFor="inactive"
              className="text-[18px] md:text-[20px] lg:text-[24px]"
            >
              Inactive
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="suspended"
              name="activityStatus"
              className="mr-2"
            />
            <label
              htmlFor="suspended"
              className="text-[18px] md:text-[20px] lg:text-[24px]"
            >
              Suspended
            </label>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-medium">
              Location
            </h3>
            <button className="text-[16px] md:text-[18px] lg:text-[20px] text-blue-500">
              + Add New
            </button>
          </div>
          <div className="mb-4">
            <label className="text-[18px] md:text-[20px] lg:text-[24px] block mb-2">
              Region/Location
            </label>
            <Input placeholder="Enter location" />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <Button variant="primary" className="mt-6 w-full md:w-[252px] text-[20px]">
            SEND
          </Button>
        </div>
      </div>
    </ModalsLayout>
  );
};

export default NewNotification;
