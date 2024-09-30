"use client";
import { Button } from "@/components/common/button";
import React, { useState } from "react";
import PlusIcon from "@/assets/icons/PlusIcon";
import AdminModal from "@/components/modals/Admin/AdminModal";
import CustomDropDown  from "@/components/common/table2";
import ServiceModal from "@/components/modals/Admin/services/Services";
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

const Services = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk">
      {show && < ServiceModal show={show} setShow={setShow} />}

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

export default Services;

