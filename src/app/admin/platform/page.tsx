import { Button } from "@/components/common/button";
import React from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import SpreadIcon from "@/assets/icons/SpreadIcon";
import AdminTable from "@/components/datavisulaization/table";
import Pagination from "@/components/tables/pagination";
import HistoryModal from "@/components/modals/historyModal";
import { History } from "@/components/tables/history";
import { Input, SearchInput } from "@/components/common/inputs";
import CaratDown from "@/assets/icons/CaratDown";
import SortIcon from "@/assets/icons/SortIcon";
import Edit from "@/assets/icons/Write";
import Image from "next/image";

const Index = () => {
  const pseudoData = [
    { title: "Total Agents", content: "278,000" },
    { title: "Verified", content: "260,960" },
    { title: "Unverified", content: "278,000" },
    { title: "Suspended", content: "278,000" },
  ];
  const color = ["#00D7F7", "#3D3066", "#507FFF", "#111111", "#7BA4FF"];

  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk">
      <div className="flex flex-col md:flex-row w-full mb-6 ">
        <h2 className="text-[24px] md:text-[36px] font-medium mb-4 md:mb-0">
          Platform
        </h2>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-[30%] text-[24px] md:text-[20px] my-auto">
          <p className="font-[700]">Platform name</p>
          <p className="font-[400]">Input platform name</p>
        </div>
        <div className="flex w-full md:w-[70%] justify-between">
          <div className="flex-[1.2] ">
            <Input placeholder="HUBSTACK" disabled={true} />
          </div>
          <div className="flex-[1] flex">
            <div className="w-[50%] ml-auto">
              <Edit className="w-[31.66px] h-[31.66px] m-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Company Logo Section */}
      <div className="flex flex-col md:flex-row w-full mt-10">
        <div className="w-full md:w-[30%] text-[24px] md:text-[20px] my-auto ">
          <p className="font-[700]">Company logo</p>
          <p className="font-[400]">Upload the company logo</p>
        </div>
        <div className="flex w-full md:w-[70%] justify-start md:justify-between items-center">
          {/* Adjust the flex properties for small screens */}
          <div className="flex flex-[1.2] items-center gap-4">
            <div className="w-[100px] h-[100px] bg-[#3D3066] rounded-[13px]">
              <Image
                src="/images/Hubstack Logo-02.png"
                alt="logo"
                height={100}
                width={100}
                className="w-[100px] h-[100px]"
              />
            </div>

            <Button variant="special" size="md" className="mr-4">
              Replace logo
            </Button>
          </div>
          <div className="flex-1 flex justify-start md:justify-end   md:mt-0">
            <Button variant="danger" size="md">
              Remove
            </Button>
          </div>
        </div>
      </div>

      {/* Brand Color Section */}
      <div className="flex flex-col md:flex-row w-full mt-10">
        <div className="w-full md:w-[30%] text-[24px] md:text-[20px] my-auto">
          <p className="font-[700]">Brand colour</p>
          <p className="font-[400]">Select or customize your brand colour</p>
        </div>
        <div className="flex w-full md:w-[70%] justify-start items-start">
          <div className="flex flex-col flex-[1.2] items-start gap-4">
            {/* Ensure colors are aligned left on small screens */}
            <div className="w-full flex gap-4 justify-start">
              {color.map((items, key) => (
                <div
                  key={key}
                  style={{ background: items }}
                  className="w-[50px] h-[50px] rounded-full"
                ></div>
              ))}
            </div>
            <div className="w-full flex gap-6 text-[20px] items-center mt-2 justify-start">
              <span className="text-[#00000080]">Custom colour</span>
              <div className="flex gap-2 border border-[#DBDBDB] p-2 rounded-[6px] items-center">
                <div className="bg-[#3D3066] rounded-[4px] h-[26px] w-[26px]"></div>
                <span className="text-[16px] font-500">#3D3066</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other sections remain unchanged */}
      <div className="flex flex-col md:flex-row w-full mt-10">
        <div className="w-full md:w-[30%] text-[24px] md:text-[20px] my-auto">
          <p className="font-[700]">Brand Images</p>
          <p className="font-[400]">Upload brand images</p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2">
          <div className="h-[204px] w-full md:w-[277px] bg-[#F2F2F2]"></div>
          <div className="h-[204px] w-full md:w-[277px] bg-[#F2F2F2]"></div>
          <div className="h-[204px] w-full md:w-[277px] bg-[#F2F2F2]"></div>
        </div>
      </div>

      <div className="w-full mt-6">
        <span className="font-[700] text-[32px] md:text-[29px]">
          Contact Details
        </span>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Location
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="Lagos, Nigeria"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Email Address
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="fortbridgeinc@gmail.com"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Phone Number
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="080 000 000 00"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-6">
        <span className="font-[700] text-[32px] md:text-[26px]">
          General Settings
        </span>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Time Zone
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="(UTC+01:00) West Africa Time"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-4">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Language
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="English (US)"
              className="w-full md:w-[612px] md:w-[400px]"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[30%]">
            <span className="font-[700] text-[24px] md:text-[20px]">
              Currency
            </span>
          </div>
          <div className="w-full md:w-[70%] flex items-center">
            <Input
              placeholder="Naira"
              className="w-full md:w-[612px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
