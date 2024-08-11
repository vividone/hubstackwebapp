import React, { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DollarBagIcon from "@/assets/icons/DollarBagIcon";
import { formatAmount } from "@/helpers/amountFormatter";
interface CardData {
  amount: number;
  type: string;
}

interface CardProps {
  value: CardData;
}

const Card = ({ value }: CardProps) => {
  const [visibility, setVisibility] = useState(false)
  const { amount, type } = value;

  return (
    <div
      className="flex flex-col gap-6 min-h-[210px] w-[353px] text-[#111111] bg-[#00D7F7] rounded-[8px] p-[30px]"
    >
     
      <div className="flex justify-between items-start gap-4 h-full w-full">
        <div className="flex-2 h-[50%]">
          <span
            className="flex items-center justify-center h-[60px] w-[60px] bg-[#000]/[0.1] rounded-full"
          >
            <DollarBagIcon />
          </span>
        </div>

        <button className="h-[50%]" onClick={() => setVisibility(!visibility)}>
          {
            !visibility ? 
              <RemoveRedEyeOutlinedIcon />
               :
              <VisibilityOffOutlinedIcon />
          }
        </button>
      </div>


      <div className="flex justify-between items-end h-full w-full">
        <div className="flex flex-col justify-center items-center h-[50%]">
          <span className="flex items-center font-bold  2xl:text-[32px] text-[24px] w-full font-sans">
            {visibility ? <>₦{formatAmount(amount?.toString())}</> : "****"}
          </span>
          <span className="font-normal text-[18px] w-full font-sans">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;