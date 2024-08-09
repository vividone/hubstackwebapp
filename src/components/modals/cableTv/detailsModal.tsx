import React from "react";
import ArrrowLeft from "@/assets/icons/ArrrowLeft";
import Image from "next/image";
import { Input } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { Button } from "@/components/common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
const detailsModal = () => {
  return (
    <section className="flex flex-col bg-white w-[90vw] md:w-[45vw] text-black p-10 h-[100vh] overflow-y-scroll">
      <header className="flex justify-between items-center font-medium text-4xl mb-12">
        <span className="flex flex-2 items-center gap-4">
          <ArrrowLeft width={20} height={20} />
          <h1>Cable TV</h1>
        </span>
        <span className="flex-1">
          <Image
            width={20}
            height={20}
            alt="close button"
            src="/images/close.svg"
            className="cursor-pointer ml-auto"
            //   onClick={() => setShow(false)}
          />
        </span>
      </header>
      <main>
        <h3>Service Provider</h3>
        <section className="flex py-[14px] px-[20px]">
          <div className="w-[80.34px] h-[78px] rounded-[7px] ml-4"></div>
          <p>African Cable Television (ACTV) Subscription</p>
        </section>
        <section>
          <label
            htmlFor="decoderNumber"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            Enter Smartcard or Decoder Number
          </label>
          <Input placeholder="09025923159" name="decoderNumber" />

          <label
            htmlFor="desiredAmount"
            className="block text-[18px] mb-2 mt-8 font-normal"
          >
            Enter Amount
          </label>
          <Input
            leftIcon={() => <NairaIcon className="w-[18px]" />}
            name="desiredAmount"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            type="number"
            placeholder="0.00"
          />
        </section>
        <section>
          <div className="flex flex-col mt-5 w-full font-Inter text-[20px]">
            <span className="pt-1">
              By continuing, you agree to our{" "}
              <Link href={""} className="text-[#3D3066] font-medium ">
                Terms and Conditions{" "}
              </Link>
            </span>
          </div>
          <div className="flex justify-center mt-8 mb-8">
            <Button
              type="submit"
              size={"long"}
              // isLoading={isPending}
              // disabled={isPending}
            >
              REVIEW ORDER
            </Button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default detailsModal;
