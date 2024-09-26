"use client";
import React, { useState } from "react";
import { ArrowUpCollapse } from "@/assets/icons/collapse";
import { ArrownDownCollapse } from "@/assets/icons/collapse";
import SpreadIcon from "@/assets/icons/SpreadIcon";
import NewNairaIcon from "@/assets/icons/newNairaIcon";

 const CustomDropDown = ( {heading, rowData }:any) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);
    
    const headers = Object.keys(rowData[0]).filter((key) => key !== "isHeader");
    
    return (
      <div className="w-full">
        <div
          className="flex justify-between p-4 items-center cursor-pointer bg-[#3D30661A]"
          onClick={toggleCollapse}
          >
          <h3 className="px-4 font-[700] text-[24px] md:text-[20px]">
            {heading}
          </h3>
          <div>{isCollapsed ? <ArrownDownCollapse /> : <ArrowUpCollapse />}</div>
        </div>
  
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            isCollapsed ? "max-h-0" : "max-h-[1000px]"
          }`}
          >
          {rowData.map((row: any, index: any) => (
            <div
            key={index}
            className={`flex w-full py-3 items-center justify-between border-b border-[#E7E6F2] ${
              row.isHeader ? "font-[700] text-[18px]" : "font-[400] text-[16px]"
            }`}
            >
              {headers.map((header, headerIndex) => (
                <div
                key={headerIndex}
                className="flex-1 text-center flex justify-center items-center gap-1"
                >
                  {header === "price" && !row.isHeader ? (
                    <>
                      <NewNairaIcon className="w-[16px] h-[16px]" />
                      <span>{row[header]}</span>
                    </>
                  ) : (
                    row[header]
                  )}
                </div>
              ))}
              <div className="flex justify-end flex-1 items-center px-4">
                {index !== 0 && <SpreadIcon className="cursor-pointer" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default CustomDropDown