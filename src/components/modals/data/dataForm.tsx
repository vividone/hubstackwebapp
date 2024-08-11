import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";
import Link from "next/link";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import CurrencyField from "@/components/common/currencyInput";
const DataForm = ({
  handleSubmit,
  setFlow,
  data,
  setData,
  setpseudoUpdate,
}: any) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <h2 className="font-normal text-[20px] font-OpenSans">
        Service Provider
      </h2>

      <form onSubmit={handleSubmit} className="pb-5">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[10px_30px]">
          <div className="flex  flex-wrap items-center gap-4">
            <Image
              src={`/images/airtime/${data.network}.png`}
              alt={data?.name}
              width={80}
              height={80}
            />
            <p className="text-xl font-semibold text-[#3D3066]">{data.name}</p>
          </div>
        </div>

        <div className="flex flex-col w-full mt-5">
          <label
            htmlFor="amount"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            Enter Mobile Number
          </label>
          <div className="text-[#8c8b92] mt-2">
            <Input
              name="customerId"
              placeholder="0000000000"
              onChange={(e) => {
                setData({ ...data, customerId: e.target.value });
                // formik.setFieldValue("customerId", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-5">
          <label
            htmlFor="amount"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            Enter Data Amount
          </label>
          <div className="text-[#8c8b92] mt-2">
          <CurrencyField
                onValueChange={(v: any) => setData({ ...data, amount: v.floatValue })} 
                value={data?.serviceProvider?.fixed ? data?.serviceProvider?.fee : data?.amount} disabled={data?.serviceProvider?.fixed} 
              />
          </div>
          <div className="flex mt-4 items-center gap-2">
            {toggle ? (
              <div
                onClick={() => {
                  setToggle(false);
                }}
              >
                <ToggleOnOutlinedIcon className="text-[#3D3066] text-[35px] cursor-pointer"/>
              </div>
            ) : (
              <div
                onClick={() => {
                  setToggle(true);
                }}
              >
                <ToggleOffOutlinedIcon className="text-[#3D3066] text-[35px] cursor-pointer" />
              </div>
            )}
            <p className="text-[18px] font-OpenSans">Save Beneficiary</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-12">
          <p className="2xl:text-[20px] xl:text-[18px] text-[16px]">
            By continuing, you agree to our
            <Link
              href={"/terms-and-conditions"}
              className="text-[#3D3066] font-bold"
            >
              {" "}
              Terms and Conditions
            </Link>
          </p>
          <Button
            variant="primary"
            size="full"
            type="submit"
            // isLoading={isPending}

            onClick={() => {
              return (
                setFlow((prev: any) => prev + 1),
                setpseudoUpdate({
                  DataPlan: "1000",
                  mobileNumber: "09025923159",
                })
              );
            }}
          >
            <span className="text-[16px]">REVIEW ORDER</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;
