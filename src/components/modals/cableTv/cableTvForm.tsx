"use client"
import React, { FormEvent, useEffect } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import { Input } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { FlowProps } from "../modalsLayout";
import { usePayBill } from "@/helpers/services";
import { useGetServicesByBillerId } from "@/helpers/categories";
import { Dropdown } from "@/components/common/Dropdown";
import CurrencyField from "@/components/common/currencyInput";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";

interface CableTvProps extends FlowProps {
  active: any;
  setData: (aug0: any) => void;
  formik: any;
  isPending: boolean;
}

const CableTvForm: React.FC<CableTvProps> = ({ active, data, formik, isPending, setData }) => {
  const { services } = useGetServicesByBillerId(active?.Id)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    formik.setFieldValue("service", data?.serviceProvider?.value)
    formik.setFieldValue("biller", active?.Name)
    formik.setFieldValue("billerId", active?.Id.toString())
    formik.setFieldValue("paymentMode", "wallet")
    formik.setFieldValue("paymentCode", data?.serviceProvider?.PaymentCode) 
    formik.setFieldValue("category", "billpayment") 
    formik.setFieldValue("amount", data?.amount)

    formik.handleSubmit()
  }

  return (
      <div className="mt-4">
        <h2 className="font-normal text-[20px] font-OpenSans">Service Provider</h2>
        
            <form onSubmit={handleSubmit} className="pb-5">
              
              <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[10px_30px]">
                <div className="flex  flex-wrap items-center gap-4">
                <Image src={"/images/cableTvImages/" + active?.ShortName +".jpg"} alt={active?.Name} width={80} height={80} />
                  <p className="text-xl font-semibold text-[#3D3066]">{active?.Name}</p>
                </div>
              </div>

              <div className="flex flex-col w-full mt-5">
                <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                  Enter Smartcard or Decoder Number
                </label>
                <div className="text-[#8c8b92] mt-2">
                <Input 
                    name="customerId" 
                    placeholder="0000000000" 
                    onChange={(e) => {
                      setData({ ...data, customerId: e.target.value });
                      formik.setFieldValue("customerId", e.target.value)
                    }}

                />
                </div>
            </div>

            <div className="flex flex-col w-full mt-5">
                <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                  Cable TV Plan
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
                    options={services?.PaymentItems?.map((item: any) => ({
                      label: item.Name,
                      value: item.Name,
                      fee: item.Amount/100,
                      PaymentCode: item.PaymentCode,
                      fixed: item.IsAmountFixed
                    }))}
                    className="items-start text-start justify-start rounded-[8px]"
                  />
                </div>
            </div>

              <div className="flex flex-col w-full mt-5">
                <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                  Amount
                </label>
                <div className="text-[#8c8b92] mt-2">
              
                {
                  data?.serviceProvider?.fixed ?  
                  <p className="text-[32px] font-bold flex items-center"><NairaIconElectricBill width={32} />{data?.serviceProvider?.fee}.00</p>
                :
                <CurrencyField 
                  onValueChange={(v: any) => setData({ ...data, amount: v.floatValue })} 
                  value={data?.serviceProvider?.fixed ? data?.serviceProvider?.fee : data?.amount} 
                  disabled={data?.serviceProvider?.fixed} 
                />
                }
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-12">
                <p className="2xl:text-[20px] xl:text-[18px] text-[16px]">
                    By continuing, you agree to our 
                    <Link href={"/terms-and-conditions"} className="text-[#3D3066] font-bold"> Terms and Conditions</Link> 
                </p>
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

export default CableTvForm;
