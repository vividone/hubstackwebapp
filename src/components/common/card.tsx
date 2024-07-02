import React, { useState } from "react";
import Image from "next/image";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface CardData {
  logo: string;
  amount: string;
  type: string;
  visibility: boolean;
  colors: {
    logoBackground: string;
    cardBackground: string;
  };
}

interface CardProps {
  value: CardData;
}

const Card = ({ value }: CardProps) => {
  const { logo, amount, type, visibility, colors } = value;
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAmount, setShowAmount] = useState(true);

  return (
    <div
      className="relative h-[160px] w-[250px] rounded-[10px] text-white p-[20px] flex"
      style={{ backgroundColor: colors.cardBackground }}
    >
      <div
        className={`absolute inset-0 z-[1000] rounded-[10px] bg-black bg-opacity-50 ${
          showOverlay ? "" : "hidden"
        }`}
      ></div>
      <div className="flex flex-col h-full w-full">
        <div className="flex-2 h-[50%]">
          <span
            className="flex items-center justify-center h-[35px] w-[35px] rounded-full"
            style={{ background: colors.logoBackground }}
          >
            <Image src={logo} alt="card logo" width={20} height={20} />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center h-[50%]">
          <span className="font-bold text-[25px] w-full font-sans">
            {showAmount ? amount : "****"}
          </span>
          <span className="font-normal text-[18px] w-full font-sans">
            {type}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end h-full w-full">
        <div className="flex-1 h-[50%] pt-[5px]">
          {visibility && (
            showAmount ? (
              <RemoveRedEyeOutlinedIcon
                className="cursor-pointer"
                onClick={() => setShowAmount(false)}
              />
            ) : (
              <VisibilityOffOutlinedIcon
                className="cursor-pointer"
                onClick={() => setShowAmount(true)}
              />
            )
          )}
        </div>
        <div className="self-end mt-auto h-[50%] flex items-end">
          <span>All Time</span>
        </div>
      </div>
    </div>
  );
};

export default Card;