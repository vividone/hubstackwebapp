import ArrowIcon from "@/assets/icons/ArrowIcon";
import LossIcon from "@/assets/icons/Lost";
import NewNairaIcon from "@/assets/icons/nairaIcon";
import SpreadIcon from "@/assets/icons/SpreadIcon";
import React from "react";

const AdminCard = ({ boxDetails }:any) => {
  const color =
    boxDetails?.status === "loss"
      ? "#DC3545"
      : boxDetails?.status === "profit"
      ? "#2EB62C"
      : "#3D3066";

  const backgroundColor =
    boxDetails?.status === "loss"
      ? "#DC35454D"
      : boxDetails?.status === "profit"
      ? "#2EB62C1F"
      : "#3D30661F";

  return (
    <div className="w-[500px] border border-[#E7E6F2] rounded-[14px] p-4 pt-8 text-[24px] font-bold font-CabinetGrotesk">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-bold">{boxDetails.title}</h2>
        <SpreadIcon />
      </div>
      <div className="flex mt-2 items-center">
        <div className="flex items-center mr-4 ">
          <NewNairaIcon height={"30px"} width={"26.6px"} />
          <span className="text-[42px] ml-1 mt-0.5">
            {boxDetails.currprice}
          </span>
        </div>
        <div
          className="flex items-center h-[32px] p-2 rounded-[47px]"
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          <div className="mr-1">
            {boxDetails.status === "loss" ? (
              <LossIcon color={color} width={"13.5px"} height={"7"} />
            ) : (
              <ArrowIcon color={color} width={"13.5px"} height={"7"} />
            )}
          </div>
          <span className="text-[16px] font-[700]">
            {boxDetails.percentage}
          </span>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <span className="mr-2 font-normal text-[16px]">Last month</span>
        <div className="flex items-center">
          <NewNairaIcon width={"18px"} height={"18px"} />
          <span className="ml-0.5 mt-0.5 text-[26px]">
            {boxDetails.lastMonthPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
