'use client'
import React, { useState } from "react";
import Image from "next/image";

const CustomIcons = ({ src, alt }: any) => {
  const [error, setError] = useState(false)

  return (
    <>
      <div className="rounded-[7px] flex items-center justify-center rounded-[10px] border border-[#D2D2D26B] p-1 cursor-pointer ">
        <Image src={error ? "/images/bill.svg" : src} onError={() => setError(true)} alt={alt} width={50} height={50} className="rounded-[5.95px] "/>
      </div>
    </>
  );
};

export default CustomIcons;
