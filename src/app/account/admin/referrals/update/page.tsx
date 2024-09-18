"use client"
import React, { useState } from "react";
import AdminModal from "@/components/modals/Admin/AdminModal";

const Index = () => {
  const [show, setShow] = useState(false);


  return (
    <div className="p-4 md:p-[50px_25px] overflow-x-hidden font-CabinetGrotesk ">
      {/* Header Section */}
      {show && <AdminModal show={show} setShow={setShow} />}
      <div className="flex flex-col md:flex-row w-full mb-6 items-center">
        <h2 className="text-[24px] md:text-[36px] font-medium mb-4 md:mb-0">
          Update Referral Plan
        </h2>
      </div>

    </div>
  );
};

export default Index;
