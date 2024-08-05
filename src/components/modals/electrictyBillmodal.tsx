"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { Input } from "../common/inputs";
import { Button } from "../common/button";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import { usePayElectricity } from "@/helpers/services";
import ModalsLayout from "./modalsLayout";
import { Dropdown } from "../common/Dropdown";
import { states } from "@/data/locationRegions";
import ToastComponent from "../common/toastComponent";
const Amount = {
  total: `1,100`,
};

const ElectricityBillModal = ({ show, setShow, billers }: any) => {
  const { formik, isError, isPending, isSuccess, error } = usePayElectricity();
  const [serviceProvider, setServiceProvider] = useState<any>()
  const [state, setState] = useState<any>()
  const [meterType, setMeterType] = useState<any>()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const biller = billers?.Billers?.filter((item: any) => item.Name === serviceProvider.value)[0]

    formik.setFieldValue("service", serviceProvider.value)
    formik.setFieldValue("biller", biller.Name)
    formik.setFieldValue("billerId", biller.Id)
    formik.setFieldValue("paymentMode", "wallet")
    formik.setFieldValue("paymentCode", biller.PayDirectProductId)
    formik.setFieldValue("category", biller.CategoryId)
    
    console.log(formik.values, formik.errors)

    formik.handleSubmit();
  };

  return (
    <ModalsLayout header={"Electricity Bill"} setShow={setShow} show={show}>

      <ToastComponent
        isSuccess={isSuccess} 
        isError={isError} 
        msg={isSuccess ? "Successful" : isError ? "Error " + error : ""}
      />

      <main className="flex flex-col">         

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
                value={serviceProvider}
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as any;
                    setServiceProvider(selectedOption)
                  } else {
                  }
                }}
                options={billers?.Billers?.map((item: any) => ({
                  label: item.Name,
                  value: item.Name,
                }))}
                className="items-start text-start justify-start rounded-[8px] border border-[#E7E6F2]"
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
                type="number"
                name="customerCode"
                onChange={formik.handleChange}
                placeholder="123456789101112131415"
              />
            </div>
          </div>

          <div className="flex flex-col w-full mt-5">
            <label
              htmlFor="state"
              className="font-normal text-xl font-openSans text-[#111111]"
            >
              State
            </label>
            <div className="text-[#8c8b92] mt-2">
            <Dropdown
                name="state"
                value={state}
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as any;
                    setState(selectedOption)
                  } else {
                    setState({ label: "Abia", value: "Abia" })
                  }
                }}
                options={states.map((item: string) => ({
                  label: item,
                  value: item,
                }))}
                className="items-start text-start justify-start rounded-lg border border-[#E7E6F2]"
              />
            </div>
          </div>

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
                value={meterType}
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as any;
                    setMeterType(selectedOption)
                  } else {
                    setMeterType({ label: "Prepaid", value: "Prepaid" })
                  }
                }}
                options={["Prepaid", "Postpaid"].map((item: string) => ({
                  label: item,
                  value: item,
                }))}
                className="items-start text-start justify-start rounded-lg border border-[#E7E6F2]"
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
              <Input type="number" name="amount" onChange={formik.handleChange} placeholder="#1000" />
            </div>
          </div>

          <div className="mt-5">
            <div className="flex gap-2 items-center justify-between font-openSans">
              <span className="font-bold text-[#111111] text-[16px]">
                SERVICE CHARGE
              </span>
              <span className="flex items-center font-normal">
                <NairaIconElectricBill width={19.5} height={18.25} />
                <p className="font-normal text-[20px]">100</p>
              </span>
            </div>
            <div className="flex gap-2 items-center justify-between font-bold text-[#111111] text-[16px] font-openSans">
              <span className="font-bold text-[#111111] text-[16px]">
                TOTAL
              </span>
              <span className="flex items-center font-normal">
                <NairaIconElectricBill width={19.5} height={18.25} />
                <p className="font-normal text-[20px]">{Amount.total}</p>
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
              PAY NGN {Amount.total}
            </Button>
            {false && (
              <Button
                size={"full"}
                variant="secondary"
                isLoading={isPending}
                className="text-[20px] font-CabinetGrotesk font-bold text-[#3D3066]"
              >
                FUND WALLET
              </Button>
            )}
          </div>
        </form>
      </main>
    </ModalsLayout>
  );
};

export default ElectricityBillModal;
