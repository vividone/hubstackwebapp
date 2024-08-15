"use client"
import React, { FormEvent } from "react";
import { Button } from "../../common/button";
import { FlowProps } from "../modalsLayout";
import { Dropdown } from "@/components/common/Dropdown";
import { formatAmount } from "@/helpers/amountFormatter";
import { states } from "@/data/locationRegions";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import Link from "next/link";
import CurrencyField from "@/components/common/currencyInput";
import { Input } from "@/components/common/inputs";

interface ElectricFlowProps extends FlowProps {
  setData: (aug0: any) => void;
  billers: any;
  formik: any;
  isPending: boolean;
}

const ElectricityBillForm: React.FC<ElectricFlowProps> = ({ setFlow, data, formik, isPending, billers, setData }) => {

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const biller = billers?.Billers?.filter((item: any) => item.Name === data?.serviceProvider.value)[0]

    formik.setFieldValue("service", data?.serviceProvider?.value) //
    formik.setFieldValue("biller", biller?.Name) //
    formik.setFieldValue("billerId", biller?.Id) //
    formik.setFieldValue("paymentMode", "wallet")
    formik.setFieldValue("paymentCode", biller?.PayDirectProductId) //
    formik.setFieldValue("category", "billpayment") //
    
    console.log(formik.values, formik.errors)

    formik.handleSubmit();
  };

  return (
      <div className="mt-4">
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full justify-center"
        >
          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="meterNumber"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              Service Provider
            </label>
            <div className="text-[#8c8b92] mt-2">
              <Dropdown
                name="serviceProvider"
                value={data?.serviceProvider}
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as any;
                    setData({...data, serviceProvider: selectedOption})
                  } else {
                  }
                }}
                options={billers?.Billers?.map((item: any) => ({
                  label: item.Name,
                  value: item.Name,
                }))}
                className="items-start text-start justify-start rounded-[8px]"
              />
            </div>
          </div>        

          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="meterNumber"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              Meter Number
            </label>
            <div className="text-[#8c8b92] mt-2">
              <Input
                type="text"
                name="customerId"
                onChange={formik.handleChange}
                placeholder="123456789101112131415"
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
            <div className="text-[#8c8b92] mt-2">
              <CurrencyField 
                onValueChange={(v: any) => {setData({ ...data, amount: v.floatValue }); formik.setFieldValue("amount", v.floatValue)}} 
                value={data?.serviceProvider?.fixed ? data?.serviceProvider?.fee : data?.amount} disabled={data?.serviceProvider?.fixed} 
              />
            </div>
          </div>

          <p className="2xl:text-[20px] xl:text-[18px] text-[16px] mt-10">
              By continuing, you agree to our 
              <Link href={"/terms-and-conditions"} className="text-[#3D3066] font-bold"> Terms and Conditions</Link> 
          </p>
          <div className="w-full">
            <Button
              type="submit"
              size={"full"}
              className="text-[20px] font-CabinetGrotesk mb-4"
              isLoading={isPending}
            >
              REVIEW ORDER
            </Button>
            
          </div>
        </form>

      </div>
      
  );
};

export default ElectricityBillForm;
