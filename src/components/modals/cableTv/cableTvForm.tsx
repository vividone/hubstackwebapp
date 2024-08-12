"use client"
import React, { FormEvent, useEffect } from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import NairaIcon from "@/assets/icons/nairaIcon";
import { Input, MoneyInput } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { FlowProps } from "../modalsLayout";
import { usePayBill } from "@/helpers/services";
import { useGetServicesByBillerId } from "@/helpers/categories";
import { Dropdown } from "@/components/common/Dropdown";

interface CableTvProps extends FlowProps {
  active: any;
  setData: (aug0: any) => void;
}

const CableTvForm: React.FC<CableTvProps> = ({ setFlow, active, data, setData }) => {
  const { data: formData, formik, isError, isPending, isSuccess, error } = usePayBill("cable");
  const { services } = useGetServicesByBillerId("480") //active?.Id

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    formik.setFieldValue("service", "DSTV Mobile") //data?.serviceProvider?.value
    formik.setFieldValue("biller", "DSTV") //active?.Name
    formik.setFieldValue("billerId", "480") //active?.Id.toString()
    formik.setFieldValue("paymentMode", "wallet")
    formik.setFieldValue("paymentCode", "48001") //data?.serviceProvider?.PaymentCode
    formik.setFieldValue("category", "billpayment") //

    formik.handleSubmit()
  }

  useEffect(() => {
    if(isSuccess) {
      setFlow(2)
    }
  }, [isSuccess])

  return (
      <div className="mt-4">
        <h2 className="font-normal text-[20px] font-OpenSans">Service Provider</h2>
        
            <form onSubmit={handleSubmit} className="pb-5">
              
              <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[10px_30px]">
                <div className="flex  flex-wrap items-center gap-4">
                <Image src={"/images/cableTvImages/" + active?.LogoUrl} alt={active?.Name} width={80} height={80} />
                  <p className="text-xl font-medium">{active?.Name}</p>
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
                <MoneyInput  
                    name="amount" 
                    type="number"
                    value={data?.serviceProvider?.fixed ? data?.serviceProvider?.fee : formik.values.amount}
                    disabled={data?.serviceProvider?.fixed}
                    leftIcon={() => <NairaIcon className="w-[12px]" />} 
                    placeholder="0.00" 
                    onChange={data?.serviceProvider?.fixed ? () => formik.setFieldValue("amount", +data?.serviceProvider?.fee): formik.handleChange}
                />
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
