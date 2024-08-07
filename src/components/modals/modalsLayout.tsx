"use client"
import React, { ReactNode } from "react";
import Image from "next/image";

interface MyModalProps {
    header: string;
    show: boolean;
    setShow: (show: boolean) => void;
    children: ReactNode | undefined;
}

const ModalsLayout: React.FC<MyModalProps> = ({ header, show, setShow, children }) => {

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
        
        <div className={`relative h-screen md:w-[40vw] sm:w-[400px] w-full bg-white overflow-y-scroll z-[1000] duration-700 ${ show ? "translate-x-0" : "trnaslate-x-[100%]" }`}>
        <div className="flex justify-between p-[30px_40px] pt-[55px]">
            <h3 className="text-4xl font-medium text-[#111111]">{header}</h3>
            <button title="close button">
                <Image
                src="/images/close.svg"
                alt="closebutton"
                width={20}
                height={20}
                onClick={() => setShow(false)}
                className="cursor-pointer"
                />
            </button>
        </div>

        <div className="px-[40px]">
            { children }
        </div>
        
        </div>

    </div>
  )
}
export default ModalsLayout;