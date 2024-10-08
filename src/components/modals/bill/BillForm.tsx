"use client";
import React, { FormEvent, useEffect } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import { Input } from "@/components/common/inputs";
import { FlowProps } from "../modalsLayout";
import CurrencyField from "@/components/common/currencyInput";
import { Dropdown } from "@/components/common/Dropdown";
import { useGetServicesByBillerId } from "@/helpers/api/useCategories";
import { currencyFormatter } from "@/helpers/currencyConvert";

interface InternetProps extends FlowProps {
  active: any;
  setData: (aug0: any) => void;
  formik: any;
  isPending: boolean;
  bill: string;
}

const BillForm: React.FC<InternetProps> = ({ active, data, formik, isPending, setData, bill }) => {
  const { services } = useGetServicesByBillerId(active?.Id);

  const setFormikValues = () => {
    formik.setFieldValue("biller", active?.Name);
    formik.setFieldValue("billerId", active?.Id.toString());
    formik.setFieldValue("paymentMode", "wallet");
    formik.setFieldValue("category", "billpayment");
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formik.errors)
    formik.handleSubmit()
  }

  return (
    <div className="mt-4">
      <h2 className="font-normal text-[20px] font-OpenSans">
        Service Provider
      </h2>

      <form onSubmit={handleSubmit} className="pb-5">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[10px_30px]">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src={"https://quickteller.com/images/Downloaded/" + active.MediumImageId + ".png"}
              alt={active?.Name}
              width={80}
              height={80}
            />
            <p className="text-xl font-semibold text-[#3D3066]">
              {active?.Name}
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full mt-5">
          <label
            htmlFor="MobileNumber"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            { bill === "Internet" ? "Mobile Number" : bill === "Cable TV" ? "Decoder number" : "BET ID"}
          </label>
          <div className="text-[#8c8b92] mt-2">
            <Input
              name="MobileNumber"
              value={formik.values.customerId}
              placeholder={ bill === "Internet" ? "Mobile Number" : bill === "Cable TV" ? "Decoder number" : "BET ID"}
              onChange={(e) => {
                setData({ ...data, customerId: e.target.value });
                formik.setFieldValue("customerId", e.target.value);
                setFormikValues()
              }}
              error={formik.errors.customerId && ((bill === "Internet") ? formik.errors.customerId + "Mobile Number" : formik.errors.customerId + "BET ID")}
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-5">
          <label
            htmlFor="amount"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            { bill } Plan
          </label>
          <div className="text-[#8c8b92] mt-2">
            <Dropdown
              name="serviceProvider"
              value={data?.serviceProvider}
              error={formik.errors.service && "Choose a data plan"}
              onChange={(value) => {
                if (value) {
                  const selectedOption = value as any;
                  formik.setFieldValue("service", selectedOption.value);
                  formik.setFieldValue("amount", selectedOption.amount + selectedOption.ItemFee);
                  formik.setFieldValue("paymentCode", selectedOption.PaymentCode);
                  setData({ ...data, serviceProvider: selectedOption, amount: selectedOption.amont });
                } else {
                }
              }}
              options={services?.PaymentItems?.map((item: any) => ({
                label: item.Name,
                value: item.Name,
                amount: item.Amount / 100,
                PaymentCode: item.PaymentCode,
                ItemFee: +item.ItemFee / 100,
                fixed: item.IsAmountFixed,
              }))}
              className="items-start text-start justify-start rounded-[8px]"
            />
          </div>
        </div>

        <div className="flex flex-col w-full mt-5">
          <label
            htmlFor="amount"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            Amount
          </label>
          <div className="mt-2">
            {data?.serviceProvider?.fixed ? (
              <p className="text-[32px] font-bold flex items-center">
                {currencyFormatter(data?.serviceProvider?.amount)}
              </p>
            ) : (
              <CurrencyField
                onValueChange={(v: any) => {
                  setData({ ...data, amount: v.floatValue });
                  formik.setFieldValue("amount", v.floatValue)
                }}
                value={
                  data?.serviceProvider?.fixed
                    ? data?.serviceProvider?.fee
                    : data?.amount
                }
                disabled={data?.serviceProvider?.fixed}
                error={formik.touched.amount && formik.errors.amount}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-12">
          
          <Button
            variant="primary"
            size="full"
            type="submit"
            isLoading={isPending}
          >
            <span className="text-[16px]">REVIEW ORDER</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BillForm;