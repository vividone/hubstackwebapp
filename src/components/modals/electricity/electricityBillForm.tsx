"use client"
import React, { FormEvent } from "react";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { Input, MoneyInput } from "@/components/common/inputs";
import { FlowProps } from "../modalsLayout";
import { Dropdown } from "@/components/common/Dropdown";
import { formatAmount } from "@/helpers/amountFormatter";
import { states } from "@/data/locationRegions";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";

interface ElectricFlowProps extends FlowProps {
  setData: (aug0: any) => void;
  billers: any;
  formik: any;
}

const ElectricityBillForm: React.FC<ElectricFlowProps> = ({ setFlow, data, formik, billers, setData }) => {

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

          {/* <div className="flex flex-col w-full mt-5">
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
          </div> */}

          {/* <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="state"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              State
            </label>
            <div className="text-[#8c8b92] mt-2">
            <Dropdown
                name="state"
                value={data?.state}
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as any;
                    setData({...data, state: selectedOption})
                  } else {
                    setData({...data, state: { label: "Abia", value: "Abia" }})
                  }
                }}
                options={states.map((item: string) => ({
                  label: item,
                  value: item,
                }))}
                className="items-start text-start justify-start rounded-lg"
              />
            </div>
          </div> */}

          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="meterType"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              Meter Type
            </label>
            <div className="text-[#8c8b92] mt-2">
            <Dropdown
                name="meterType"
                value={data?.meterType}
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as any;
                    setData({...data, meterType: selectedOption})
                  } else {
                    setData({...data, meterType: { label: "Prepaid", value: "Prepaid" }})
                  }
                }}
                options={["Prepaid", "Postpaid"].map((item: string) => ({
                  label: item,
                  value: item,
                }))}
                className="items-start text-start justify-start rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="amount"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              How Much Electricity Do You Want To Buy?
            </label>
            <div className="text-[#8c8b92] mt-2">
              <MoneyInput 
                name="amount" 
                leftIcon={() => <NairaIcon className="w-[14px]" />}
                onChange={formik.handleChange} 
                onBlur={(e) => setData({...data, amount: (+e.target.value).toString()})}
                placeholder="0" 
              />
            </div>
          </div>

          <div className="mt-5">
            <div className="flex gap-2 items-center justify-between font-openSans">
              <span className="font-bold text-[#111111] text-[16px]">
                SERVICE CHARGE
              </span>
              <span className="flex items-center font-normal">
                <NairaIconElectricBill width={19.5} height={18.25} />
                <p className="font-normal text-[20px]">100.00</p>
              </span>
            </div>
            <div className="flex gap-2 items-center justify-between font-bold text-[#111111] text-[16px] font-openSans">
              <span className="font-bold text-[#111111] text-[16px]">
                TOTAL
              </span>
              <span className="flex items-center font-normal">
                <NairaIconElectricBill width={19.5} height={18.25} />
                <p className="font-normal text-[20px]">{formatAmount((+data?.amount + 100).toString())}</p>
              </span>
            </div>
          </div>

          <p className="font-Inter text-[20px] font-normal mt-10">
            By continuing, you agree to our{" "}
            <span className="text-[#3D3066]">Terms and Conditions</span>
          </p>
          <div className="w-full">
            <Button
              type="submit"
              size={"full"}
              className="text-[20px] font-CabinetGrotesk mb-4"
            >
              PAY NGN {formatAmount((+data?.amount + 100).toString())}
            </Button>
            
          </div>
        </form>

      </div>
      
  );
};

export default ElectricityBillForm;
