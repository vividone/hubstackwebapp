import React, { useState, useEffect,FormEvent } from "react";
import Image from "next/image";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";
import Link from "next/link";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import CurrencyField from "@/components/common/currencyInput";
import { useGetServicesByBillerId } from "@/helpers/categories";

const DataForm = ({
  data,
  setData,
  formik,
  isPending
}: any) => {
  const [toggle, setToggle] = useState(true);
  const { services } = useGetServicesByBillerId(data?.Id);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit()
  }
  useEffect(() => {
    // Setting form fields with Formik
    formik.setFieldValue("service", data?.serviceProvider?.value);
    formik.setFieldValue("biller", data?.Name);
    formik.setFieldValue("billerId", data?.Id.toString());
    formik.setFieldValue("paymentMode", "wallet");
    formik.setFieldValue("paymentCode", data?.serviceProvider?.PaymentCode);
    formik.setFieldValue("category", "billpayment");
    formik.setFieldValue(
      "amount",
      data?.serviceProvider?.fixed ? data?.serviceProvider?.fee : data?.amount
    );
  }, [data]);

  // const handleReviewOrderClick = () => {
  //   setFlow((prev: any) => prev + 1);
  // };

  return (
    <div>
      <h2 className="font-normal text-[20px] font-OpenSans">
        Service Provider
      </h2>

      <form onSubmit={handleSubmit} className="pb-5">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[10px_30px]">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src={`/images/airtime/${data.ShortName}.png`}
              alt={data?.ShortName}
              width={80}
              height={80}
            />
            <p className="text-xl font-semibold text-[#3D3066]">
              {data.ShortName}
            </p>
          </div>
        </div>

        {/* Mobile Number Field */}
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
              value={data?.customerId || ""}
              onChange={(e) => {
                setData({ ...data, customerId: e.target.value });
                formik.setFieldValue("customerId", e.target.value); // Ensure Formik updates its value
              }}
            />
          </div>
        </div>

        {/* Data Amount Field */}
        <div className="flex flex-col w-full mt-5">
          <label
            htmlFor="amount"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            Enter Data Amount
          </label>
          <div className="text-[#8c8b92] mt-2">
            <CurrencyField
              onValueChange={(v: any) =>
                setData({ ...data, amount: v.floatValue })
              }
              value={
                data?.serviceProvider?.fixed
                  ? data?.serviceProvider?.fee
                  : data?.amount
              }
              disabled={data?.serviceProvider?.fixed}
            />
          </div>

          {/* Save Beneficiary Toggle */}
          <div className="flex mt-4 items-center gap-2">
            <div
              onClick={() => setToggle((prev) => !prev)}
              className="cursor-pointer"
            >
              {toggle ? (
                <ToggleOnOutlinedIcon className="text-[#3D3066] text-[35px]" />
              ) : (
                <ToggleOffOutlinedIcon className="text-[#3D3066] text-[35px]" />
              )}
            </div>
            <p className="text-[18px] font-OpenSans">Save Beneficiary</p>
          </div>
        </div>

        {/* Terms and Conditions */}
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
            isLoading={isPending}
            // onClick={handleReviewOrderClick}
          >
            <span className="text-[16px]">REVIEW ORDER</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;