"use client";
import React, { useState } from "react";
import SubscriptionCard from "@/components/common/subscriptionCard";
import ElectricityBillModal from "@/components/modals/electricity/electrictyBillmodal";

const Utility = () => {
  const [show, setShow] = useState<any>(false);
  const cardsName = ["DSTV", "GOTV", "NETFLIX"];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-[3%] gap-10 py-4">
      {show && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
          <ElectricityBillModal setShow={setShow} />

          {/* <DetailsModal show={setShow} setShow={setShow}/> */}
        </div>
      )}
      {cardsName.map((value, key) => {
        return <SubscriptionCard key={key} values={value} setShow={setShow} />;
      })}
    </div>
  );
};

export default Utility;
