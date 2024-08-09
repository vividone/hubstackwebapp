import React, { useState } from "react";
import ArrrowLeft from "@/assets/icons/ArrrowLeft";
import Image from "next/image";
import { Input } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { Button } from "@/components/common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import YourOrderModal from "../electricity/YourorderModal";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import { set } from "nprogress";
import CableTvWallet from "./wallet";

const DetailsModal = ({show,setShow}:any) => {
  const [Review, setReview] = useState(true);
  const [wallet, setWallet] = useState(true);

  return (
    <>
      {wallet && (
        <section className="flex flex-col bg-white h-screen md:w-[40vw] sm:w-[400px] w-full text-black p-10  overflow-y-scroll">
          <header className="w-[85%] flex justify-between items-center font-medium text-4xl mb-12">
            <span>
              <ArrrowLeft width={20} height={20} />
            </span>
            <span className="flex  items-center gap-4">
              <h1>Cable TV</h1>
            </span>
            <span className="">
              <Image
                width={20}
                height={20}
                alt="close button"
                src="/images/close.svg"
                className="cursor-pointer ml-auto"
                onClick={() => setShow(false)}
              />
            </span>
          </header>
          <main>
            <h3 className="text-[20px] font-normal font-OpenSans mb-2">
              Service Provider
            </h3>
            {Review ? (
              <section className="flex items-center py-[14px] px-[20px] bg-[#E6FBFF] border border-[#E7E6F2] gap-6 rounded-[7px]">
                <div className="w-[80.34px] h-[78px] rounded-[7px] ml-4 bg-[white]"></div>
                <p className="font-semibold lg:text-[20px] sm:text[16px] font-OpenSans">
                  African Cable Television (ACTV) Subscription
                </p>
              </section>
            ) : (
              <div className="flex flex-col p-4 md:p-8 bg-[#00D7F71A] border border-[#E7E6F2] rounded-md">
                <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 items-center">
                  <div className="flex items-center gap-3 md:gap-5">
                    <div className="rounded-md w-[86px] h-[56px] bg-white">
                      <Image
                        src="/images/cableTvImages/actTV.png"
                        width={86}
                        height={56}
                        alt="TV logo"
                      />
                    </div>
                    <span className="font-semibold lg:text-[20px] sm:text[16px] font-OpenSans">
                      African Cable Television (ACTV) Subscription
                    </span>
                  </div>
                </div>
                <div className="p-0 mb-4 mt-4">
                  <h2 className="font-normal text-[16px] font-OpenSans md:text-lg">
                    Smartcard or Decoder Number
                  </h2>
                  <p className="text-[16px] text-[#8C8B92]">09025923159</p>
                </div>

                <div className="flex p-0 font-OpenSans gap-[20%]">
                  <div>
                    <h2 className="font-normal text-[16px] md:text-lg">
                      Full Name
                    </h2>
                    <p className="text-[16px] text-[#8C8B92]">
                      Babalola Zainab Opeyemi
                    </p>
                  </div>
                  <div>
                    <h2 className="font-normal text-[16px] md:text-lg">
                      Cable TV Plan
                    </h2>
                    <p className="text-[16px] text-[#8C8B92]">ACTV</p>
                  </div>
                </div>
              </div>
            )}
            {!Review && (
              <section className="mb-10 mt-6">
                <div className="flex justify-between my-2">
                  <span className="text-[16px] text-[#8C8B92]">
                    Electricity Amount
                  </span>
                  <span className="flex items-center text-[20px]">
                    <NairaIconElectricBill width={19.5} height={18.25} />{" "}
                    1000.00
                  </span>
                </div>
                <div className="flex justify-between font-OpenSans">
                  <span className="text-[16px] text-[#8C8B92]">
                    Service Charge
                  </span>
                  <span className="flex items-center text-[20px]">
                    <NairaIconElectricBill width={19.5} height={18.25} /> 100.00
                  </span>
                </div>
                <div className="flex justify-between my-2">
                  <span className="font-bold">TOTAL</span>
                  <span className="flex items-center text-[20px] font-normal">
                    <NairaIconElectricBill width={19.5} height={18.25} />{" "}
                    1100.00
                  </span>
                </div>
              </section>
            )}
            {Review && (
              <section className="mt-8">
                <label
                  htmlFor="decoderNumber"
                  className="font-normal text-xl font-openSans text-[#111111]"
                >
                  Enter Smartcard or Decoder Number
                </label>
                <Input placeholder="09025923159" name="decoderNumber" />

                <label
                  htmlFor="desiredAmount"
                  className="block text-xl mb-2 mt-8 font-normal"
                >
                  Enter Amount
                </label>
                <Input
                  leftIcon={() => <NairaIcon className="w-[18px] mr-1" />}
                  name="desiredAmount"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  type="number"
                  placeholder="0.00"
                />
              </section>
            )}
            <section>
              {Review ? (
                <>
                  <div className="flex flex-col mt-5 w-full font-Inter text-xl">
                    <span className="pt-1">
                      By continuing, you agree to our{" "}
                      <Link
                        href={""}
                        className="text-[#3D3066] font-medium font-Inter "
                      >
                        Terms and Conditions{" "}
                      </Link>
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      size={"full"}
                      // isLoading={isPending}
                      // disabled={isPending}
                      className="text-[16px]"
                      onClick={() => {
                        setReview(false);
                      }}
                    >
                      REVIEW ORDER
                    </Button>
                  </div>
                </>
              ) : (
                <div>
                  <div className="flex justify-center mb-6">
                    <Button
                      type="submit"
                      size={"full"}
                      // isLoading={isPending}
                      // disabled={isPending}
                      className="text-[16px]"
                      onClick={() => {
                        setWallet(false);
                      }}
                    >
                      PAY WITH WALLET
                    </Button>
                  </div>
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      size={"full"}
                      variant="secondary"
                      // isLoading={isPending}
                      // disabled={isPending}
                      className="text-[16px]"
                      onClick={() => {
                        setReview(false);
                      }}
                    >
                      USE ALTERNATE PAYMENT METHOD
                    </Button>
                  </div>
                </div>
              )}
            </section>
          </main>
        </section>
      )}
      {!wallet && <CableTvWallet show={show} setShow={setShow}/>}
    </>
  );
};

export default DetailsModal;
