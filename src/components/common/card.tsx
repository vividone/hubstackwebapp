import React, { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DollarBagIcon from "@/assets/icons/DollarBagIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import { currencyFormatter } from "@/helpers/currencyConvert";

interface CardData {
  amount: number;
  type: string;
}

interface CardProps {
  value: CardData;
}

const Card = ({ value }: CardProps) => {
  const [visibility, setVisibility] = useState(false);
  const { amount, type } = value;

  return (
    <div className="flex flex-col gap-6 min-h-[210px] sm:w-[380px] w-full text-[#111111] rounded-[8px] p-[30px]">
      <div className="flex flex-col gap-4 h-full w-full">
        <div className="flex-2 h-[50%]">
          <span className="flex items-center justify-center h-[60px] w-[60px] bg-[#000]/[0.1] rounded-full">
            <DollarBagIcon />
          </span>
        </div>
      </div>

      <div className="flex justify-between items-end h-full w-full">
        <div className="flex flex-col justify-center h-[50%]">
          <p className="flex items-center gap-6 font-bold  2xl:text-[32px] text-[24px] w-full font-sans">
            {visibility ? <>{currencyFormatter(amount* 100)}</> : <span className="-mb-3">********</span> }
            <button className="w-fit" onClick={() => setVisibility(!visibility)}>
              {
                !visibility ? 
                  <RemoveRedEyeOutlinedIcon />
                  :
                  <VisibilityOffOutlinedIcon />
              }
            </button>
          </p>
          <span className="font-normal text-[18px] w-full font-sans">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;