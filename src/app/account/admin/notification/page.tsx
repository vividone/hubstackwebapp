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
          onClick={() => setShow(true)}
        >
          Add New
        </Button>
      </div>


      <div>
        
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
      </div>
    </div>
  );
};

export default Index;
