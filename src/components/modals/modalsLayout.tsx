"use client";
import React, { ReactNode } from "react";
import Image from "next/image";
import ArrrowLeft from "@/assets/icons/ArrrowLeft";

interface MyModalProps {
  header?: string;
  show?: boolean;
  flow?: number | any;
  setFlow?: any;
  setShow?:any;
  children?: ReactNode | undefined;
}

export interface FlowProps {
  setFlow?: any;
  data?: any;
  completeAlternate?: any;
  completedForm?: any;
}

const ModalsLayout: React.FC<MyModalProps> = ({
  header,
  show,
  flow,
  setFlow,
  setShow,
  children,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
      <div
        className={`relative h-screen xl:w-[40vw] md:w-[500px] p-[30px_40px] w-full bg-white overflow-y-scroll z-[1000] duration-700 ${
          show ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        <div className={`flex justify-between pt-[55px]`}>
          <button
            className={`${flow > 0 ? "" : "hidden"}`}
            onClick={() => setFlow && setFlow(flow - 1)} 
          >
            <ArrrowLeft width={30} height={24} />
          </button>

          <h3 className="text-4xl font-medium text-[#111111]">{header}</h3>

          <button title="close button">
            <Image
              src="/images/close.svg"
              alt="closebutton"
              width={20}
              height={20}
              onClick={() => setShow && setShow(false)} // Check if setShow exists before calling it
              className="cursor-pointer"
            />
          </button>
        </div>

        <div className="pt-[40px]">{children}</div>
      </div>
    </div>
  );
};

export default ModalsLayout;
