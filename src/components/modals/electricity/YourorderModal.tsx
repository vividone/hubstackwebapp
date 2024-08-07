import React from "react";
import Image from "next/image";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import CopyIcon from "@/assets/icons/CopyIcon";
import ShareIcon from "@/assets/icons/shareIcon";
import { Button } from "../../common/button";
import ArrowDown from "@/assets/icons/arrowDown";

const YourOrderModal = ({ setShow }:any) => {
  return (
    <section className="flex flex-col bg-white w-[90vw] md:w-[45vw] text-black p-10 h-[100vh] overflow-y-scroll">
      <header className="flex justify-between items-center font-medium text-4xl mb-12">
        <h1>Your Order</h1>
        <Image
          width={20}
          height={20}
          alt="close button"
          src="/images/close.svg"
          className="cursor-pointer"
          onClick={() => setShow(false)}
        />
      </header>

      <main>
        <div className="flex flex-col p-4 md:p-8 bg-[#00D7F71A] border border-[#E7E6F2] rounded-md">
          <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 items-center">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="rounded-md w-[86px] h-[56px] bg-white">{/* image */}</div>
              <span className="font-semibold text-lg md:text-xl font-OpenSans">
                123456789101112131415
              </span>
            </div>
            <div className="flex bg-[#00D7F7] justify-between items-center p-2 md:p-4 rounded-md h-12 md:h-16 w-full md:w-48 transform cursor-pointer hover:scale-105">
              <p className="font-normal font-OpenSans">Prepaid</p>
              <span>
                <ArrowDown />
              </span>
            </div>
          </div>
          <div className="p-0 mb-4">
            <h2 className="font-normal text-[16px] font-OpenSans md:text-lg">Meter Name</h2>
            <p className="text-[16px] text-[#8C8B92]">Babalola Zainab Opeyemi</p>
          </div>

          <div className="p-0 font-OpenSans">
            <h2 className="font-normal text-[16px] md:text-lg">Address</h2>
            <p className="text-[16px] text-[#8C8B92]">No 64, Are Oyebola Street, Opposite Dikat, Ring Road, Ibadan</p>
          </div>
        </div>
        
        <section className="mb-10 mt-6">
          <div className="flex justify-between my-2">
            <span className="text-[16px] text-[#8C8B92]">Electricity Amount</span>
            <span className="flex items-center text-[20px]">
              <NairaIconElectricBill width={19.5} height={18.25} /> 1000.00
            </span>
          </div>
          <div className="flex justify-between font-OpenSans">
            <span className="text-[16px] text-[#8C8B92]">Service Charge</span>
            <span className="flex items-center text-[20px]">
              <NairaIconElectricBill width={19.5} height={18.25} /> 100.00
            </span>
          </div>
          <div className="flex justify-between my-2">
            <span className="font-bold">TOTAL</span>
            <span className="flex items-center text-[20px] font-normal">
              <NairaIconElectricBill width={19.5} height={18.25} /> 1100.00
            </span>
          </div>
        </section>

        <section className="bg-[#00D7F7] border border-[#E7E6F2] rounded-md p-4 md:p-8 font-OpenSans">
          <h2 className="font-bold text-[24px] mb-5">Bank Details</h2>
          <div className="flex justify-between items-center my-2">
            <div>
              <span className="block font-light text-[14px]">Account Number</span>
              <span className="font-semibold text-[20px]">0209064859</span>
            </div>
            <CopyIcon width={20.31} height={20.31} />
          </div>
          <div className="flex justify-between items-center my-2">
            <div>
              <span className="block font-light text-[14px]">Account Name</span>
              <span className="font-semibold text-[20px]">Babalola Zainab</span>
            </div>
            <CopyIcon width={20.31} height={20.31} />
          </div>
          <div className="flex justify-between my-2">
            <div>
              <span className="block font-light text-[14px]">Bank Name</span>
              <span className="font-semibold text-[20px]">Sterling Bank</span>
            </div>
            <CopyIcon width={20.31} height={20.31} />
          </div>
          <div className="flex flex-col items-center gap-5 mt-5">
            <div className="flex items-center gap-2">
              <p className="font-bold text-[16px] text-[#3D3066]">SHARE DETAILS</p>
              <ShareIcon width={17.1} height={21.1} className="text-[#3D3066] cursor-pointer" />
            </div>
            <Button size="full" variant="secondary" className="text-[#3D3066] text-[16px] font-bold bg-white">
              USE ALTERNATE TOP-UP METHOD
            </Button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default YourOrderModal;
