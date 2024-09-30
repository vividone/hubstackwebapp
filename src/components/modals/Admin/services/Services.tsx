"use client";
import React, { useState } from "react";
import ModalsLayout from "../../modalsLayout";
import { ArrownDownCollapse } from "@/assets/icons/collapse";
import { ArrowUpCollapse } from "@/assets/icons/collapse";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";

const ServiceModal = ({ show, setShow }: any) => {
  // State to handle dropdown toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [category, setCategory] = useState<any | number>(0);

  // Toggle the dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const categories = [
    {
      id: 0,
      name: "NIN Verification",
    },
    {
      id: 1,
      name: "SME Data",
    },
    {
      id: 2,
      name: "New Category",
    },
  ];
  
  return (
    <ModalsLayout header="New Service" flow={0} show={show} setShow={setShow}>
      <div className="w-full p-2 ">
        <h3 className="font-[500] text-[24px] md:text-[20px] lg:text-[30px] mb-10">
          Notification Type
        </h3>

        {/* Dropdown Section */}
        <div className="mb-10">
          <div
            className="flex justify-between items-center p-4 border border-[#E7E6F2] rounded-md cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-[22px] md:text-[20px] lg:text-[24px] rounded-[16px]">
              {categories.map((items, key) => (
                <span key={key}>{items.id === category && items.name}</span>
              ))}
            </span>
            {isDropdownOpen ? <ArrowUpCollapse /> : <ArrownDownCollapse />}
          </div>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="mt-2 p-4 border border-[#E7E6F2] rounded-md">
              <ul>
                {categories.map((items, key) => (
                  <li
                    key={key}
                    className="p-4 cursor-pointer hover:bg-[#3D30661A]"
                    onClick={() => {
                      setCategory(items.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {items.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* NIN Verification Section */}
        {category == 0 && (
          <>
            {/* Service Section */}
            <div className="mb-10">
              <h3 className="text-[24px] md:text-[20px] lg:text-[30px] font-medium mb-4">
                Service
              </h3>
              <textarea
                className="w-full h-[200px] md:h-[250px] lg:h-[321px] border border-[#E7E6F2] outline-none p-2 rounded-md"
                placeholder="Type in the new service"
              ></textarea>
            </div>

            {/* Price Section */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[24px] md:text-[20px] lg:text-[30px] font-medium">
                  Price
                </h3>
              </div>
              <div className="mb-4">
                <label className="text-[20px] md:text-[18px] lg:text-[24px] block mb-2">
                  Add Price
                </label>
                <Input placeholder="0.00" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <Button
                variant="primary"
                className="mt-6 w-full md:w-[252px] text-[20px]"
              >
                SUBMIT
              </Button>
            </div>
          </>
        )}

        {/* SME Data Section */}
        {category == 1 && (
          <>
            {/* Plan Section */}
            <div className="mb-10">
              <h3 className="text-[24px] md:text-[20px] lg:text-[30px] font-medium mb-4">
                Plan
              </h3>
              <textarea
                className="w-full h-[200px] md:h-[250px] lg:h-[321px] border border-[#E7E6F2] mb-4 outline-none p-2 rounded-md"
                placeholder="Type in the new service"
              ></textarea>
            </div>

            {/* Network Section */}
            <div className="mb-10">
              <div className="bg-[#F2F2F2] p-4 mb-4">
                <h3 className="text-[24px] md:text-[20px] lg:text-[30px] font-medium">
                  Network:
                </h3>
              </div>
              <div className="flex items-center mb-2">
                <input type="radio" id="airtel" name="network" className="mr-2" />
                <label htmlFor="airtel" className="text-[20px] md:text-[18px] lg:text-[24px]">
                  Airtel
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="mtn" name="network" className="mr-2" />
                <label htmlFor="mtn" className="text-[20px] md:text-[18px] lg:text-[24px]">
                  MTN
                </label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="9mobile" name="network" className="mr-2" />
                <label htmlFor="9mobile" className="text-[20px] md:text-[18px] lg:text-[24px]">
                  9mobile
                </label>
              </div>
            </div>

            {/* Bonus Section */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[24px] md:text-[20px] lg:text-[30px] font-medium">
                  Bonus
                </h3>
              </div>
              <div className="mb-4">
                <label className="text-[20px] md:text-[18px] lg:text-[24px] block mb-2">
                  Add bonus data
                </label>
                <Input placeholder="0.00" />
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[24px] md:text-[20px] lg:text-[30px] font-medium">
                  Price
                </h3>
              </div>
              <div className="mb-4">
                <label className="text-[20px] md:text-[18px] lg:text-[24px] block mb-2">
                  Add Price
                </label>
                <Input placeholder="0.00" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <Button
                variant="primary"
                className="mt-6 w-full md:w-[252px] text-[20px]"
              >
                SUBMIT
              </Button>
            </div>
          </>
        )}

        {/* New Category Section */}
        {category == 2 && (
          <>
            {/* New Category Input */}
            <div className="mb-10">
              <label className="font-[500] text-[20px] md:text-[18px] lg:text-[24px] block mb-2">
                Add New Category
              </label>
              <input
                placeholder="Type Here"
                className="border-b border-[#E7E6F2] outline-none h-[53px] w-full"
              />
            </div>

            {/* Service Section */}
            <div className="mb-10">
              <h3 className="text-[24px] md:text-[20px] lg:text-[30px] font-medium mb-4">
                Service
              </h3>
              <textarea
                className="w-full h-[200px] md:h-[250px] lg:h-[321px] border border-[#E7E6F2] mb-4 outline-none p-2 rounded-md"
                placeholder="Type in the new service"
              ></textarea>
            </div>

            {/* Price Section */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[24px] md:text-[20px] lg:text-[30px] font-medium">
                  Price
                </h3>
              </div>
              <div className="">
                <label className="text-[20px] md:text-[18px] lg:text-[24px] block mb-2">
                  Add Price
                </label>
                <Input placeholder="0.00" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-end">
              <Button
                variant="primary"
                className="mt-8 w-full md:w-[252px] text-[20px]"
              >
                SUBMIT
              </Button>
            </div>
          </>
        )}
      </div>
    </ModalsLayout>
  );
};

export default ServiceModal;