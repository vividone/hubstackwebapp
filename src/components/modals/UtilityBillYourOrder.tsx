import React from "react";
import Image from "next/image";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import CopyIcon from "@/assets/icons/CopyIcon";
import ShareIcon from "@/assets/icons/shareIcon";
import { Button } from "../common/button";
import ArrowDown from "@/assets/icons/arrowDown";

const UserUtilityYourOrder = ({ setShow }: any) => {
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
              <div className="rounded-md w-[86px] h-[56px] bg-white">
                <Image
                  width={86}
                  height={56}
                  alt="Orderlogo"
                  src="/images/OrderLogo.png"
                  className="w-full h-full"
                />
              </div>
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
            <h2 className="font-normal text-[16px] font-OpenSans md:text-lg">
              Meter Name
            </h2>
            <p className="text-[16px] text-[#8C8B92]">
              Babalola Zainab Opeyemi
            </p>
          </div>

          <div className="p-0 font-OpenSans">
            <h2 className="font-normal text-[16px] md:text-lg">Address</h2>
            <p className="text-[16px] text-[#8C8B92]">
              No 64, Are Oyebola Street, Opposite Dikat, Ring Road, Ibadan
            </p>
          </div>
        </div>

        <section className="mb-10 mt-6">
          <div className="flex justify-between my-2">
            <span className="text-[16px] text-[#8C8B92]">
              Electricity Amount
            </span>
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
        <section className="w-full">
          <Button type="submit" size={"full"} className="text-[16px] mb-4">
            PAY WITH WALLET
          </Button>
          {true && (
            <Button
              size={"full"}
              variant="secondary"
              className="text-[#3D3066] text-[16px]"
            >
              USE ALTERNATE PAYMENT METHOD
            </Button>
          )}
        </section>
      </main>
    </section>
  );
};

export default UserUtilityYourOrder;
