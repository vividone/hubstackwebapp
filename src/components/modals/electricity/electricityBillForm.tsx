"use client"
import React, { FormEvent, useEffect } from "react";
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
  active?:any;
}

const ElectricityBillForm: React.FC<ElectricFlowProps> = ({ setFlow, data, formik, isPending, billers, setData,active }) => {


  useEffect(() => {
    const biller = billers?.Billers?.filter((item: any) => item.Name === data?.serviceProvider.value)[0]

    formik.setFieldValue("biller", biller?.Name)
    formik.setFieldValue("billerId", biller?.Id)
    formik.setFieldValue("paymentMode", "wallet")
    formik.setFieldValue("paymentCode", "0488051528") 
    formik.setFieldValue("category", "billpayment") 
    
  }, [data?.serviceProvider, billers])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
              htmlFor="serviceProvider"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              Service Provider
            </label>
            <div className="text-[#8c8b92] mt-2">
              <Dropdown
                name="service"
                value={data?.serviceProvider}
                error={formik.errors.service}
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as any;
                    setData({...data, serviceProvider: selectedOption})
                    formik.setFieldValue("service", selectedOption.value)
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
                error={formik.touched.customerId && formik.errors.customerId}
                onChange={formik.handleChange}
                placeholder=""
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
              {
                  data?.serviceProvider?.fixed ?  
                  <p className="text-[32px] font-bold flex items-center"><NairaIconElectricBill width={32} />{data?.serviceProvider?.fee}.00</p>
                :
                <CurrencyField 
                  onValueChange={(v: any) => { setData({ ...data, amount: v.floatValue }); formik.setFieldValue("amount", v.floatValue)}} 
                  error={formik.errors.amount}
                  value={data?.serviceProvider?.fixed ? data?.serviceProvider?.fee : data?.amount || formik.values.amount} 
                  disabled={data?.serviceProvider?.fixed} 
                />
                }
            </div>
          </div>

          <p className="2xl:text-[20px] xl:text-[18px] text-[16px] mt-10">
              By continuing, you agree to our 
              <Link href={"/terms-and-conditions"} className="text-[#3D3066] font-bold"> Terms and Conditions</Link> 
          </p>

          <Button
            type="submit"
            size={"full"}
            isLoading={isPending}
          >
            REVIEW ORDER
          </Button>
            
        </form>

      </div>
      
  );
};

export default ElectricityBillForm;
