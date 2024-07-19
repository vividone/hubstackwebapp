import React from "react";
import SubscriptionCard from "@/components/common/subscriptionCard";

const page = () => {
  const cardsName = [
    "DSTV",
    "GOTv",
    "NETFLIX",
  ];
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-[3%] gap-10 py-4">
      {cardsName.map((value, key) => {
        return <SubscriptionCard key={key} values={value} />;
      })}
    </div>
  );
};

export default page;
