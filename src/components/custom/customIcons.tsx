import React from "react";
import Image from "next/image";
const CustomIcons = ({ src, alt }: any) => {
  return (
    <>
      <div className="rounded-[7px] w-[100px] h-[100px] rounded-[10px] border border-[#D2D2D26B] p-[10px] cursor-pointer ">
        <Image src={src} alt={alt} width={80} height={80} className="rounded-[5.95px] "/>
      </div>
    </>
  );
};

export default CustomIcons;
