"use client"
import React, { FormEvent } from "react";
import { Button } from "../../common/button";
import { FlowProps } from "../modalsLayout";
import { Dropdown } from "@/components/common/Dropdown";
import CurrencyField from "@/components/common/currencyInput";
import { Input } from "@/components/common/inputs";
import { LoaderIcon } from "react-hot-toast";
import { currencyFormatter } from "@/helpers/currencyConvert";

interface ElectricFlowProps extends FlowProps {
  setData: (aug0: any) => void;
  billers: any;
  formik: any;
  isPending: boolean;
  active?:any;
}

const ElectricityBillForm: React.FC<ElectricFlowProps> = ({ data, formik, isPending, billers, setData }) => {

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
              {
                billers ?
                <Dropdown
                  name="service"
                  value={data?.serviceProvider}
                  error={formik.errors.service}
                  onChange={(value) => {
                    if (value) {
                      const selectedOption = value as any;
                      setData({...data, serviceProvider: selectedOption})
                      formik.setFieldValue("service", "Electricity")
                      formik.setFieldValue("biller", selectedOption.value)
                      formik.setFieldValue("billerId", selectedOption.Id)
                      formik.setFieldValue("paymentMode", "wallet")
                      formik.setFieldValue("paymentCode", selectedOption.paymentCode) 
                      formik.setFieldValue("category", "billpayment") 
                    } else {
                    }
                  }}
                  options={billers?.map((item: any) => ({
                    label: item.Name,
                    value: item.Name,
                    Id: item.Id,
                    paymentCode: item.ProductCode
                  }))}
                  className="items-start text-start justify-start rounded-[8px]"
                />
                :
                <p className="flex justify-center py-4"><LoaderIcon /></p>
              }
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
                id="meterNumber"
                error={formik.errors.customerId && formik.errors.customerId + " meter number" }
                onChange={formik.handleChange}
                placeholder="Enter 11 digits meter number"
              />
            </div>
          </div>

          

          <div className="flex flex-col w-full my-5">
            <label
              htmlFor="amount"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              Amount
            </label>
            <div className="text-[#8c8b92] mt-2">
              {
                  data?.serviceProvider?.fixed ?  
                  <p className="text-[32px] text-black font-bold flex items-center">{currencyFormatter(data?.serviceProvider?.fee)}</p>
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

          <div className="flex flex-col gap-2 mt-12">
            <Button
              type="submit"
              size={"full"}
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
