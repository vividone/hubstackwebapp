"use client";
import React, { FormEvent, useState} from "react";
import Image from "next/image";
import { Button } from "../../common/button";
import { Input } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { FlowProps } from "../modalsLayout";
import { usePayBill } from "@/helpers/api/useServices";
import { useGetServicesByBillerId } from "@/helpers/api/useCategories";
import { Dropdown } from "@/components/common/Dropdown";
import CurrencyField from "@/components/common/currencyInput";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

interface BettingProps extends FlowProps {
  active: any;
  setData: (aug0: any) => void;
  formik: any;
  isPending: boolean;
}

const BettingForm: React.FC<BettingProps> = ({
  active,
  data,
  formik,
  isPending,
  setData,
  setFlow
}) => {
  const { services } = useGetServicesByBillerId(active?.Id);
  const [toggle, setToggle] = useState(true);

  //   const handleSubmit = (e: FormEvent) => {
  //     e.preventDefault();

  //     formik.setFieldValue("service", data?.serviceProvider?.value)
  //     formik.setFieldValue("biller", active?.Name)
  //     formik.setFieldValue("billerId", active?.Id.toString())
  //     formik.setFieldValue("paymentMode", "wallet")
  //     formik.setFieldValue("paymentCode", data?.serviceProvider?.PaymentCode)
  //     formik.setFieldValue("category", "billpayment")
  //     formik.setFieldValue("amount",  data?.serviceProvider?.fixed ? data?.serviceProvider?.fee : data?.amount)

  //     console.log(formik.errors)

  //     formik.handleSubmit()
  //   }

  return (
    <div className="mt-4">
      <h2 className="font-normal text-[20px] font-OpenSans">
        Service Provider
      </h2>

      <form onSubmit={() => {}} className="pb-5">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[10px_30px]">
          <div className="flex  flex-wrap items-center gap-4">
            <Image
              src={"/images/betting/" + active?.LogoUrl }
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
            htmlFor="amount"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            Bet ID
          </label>
          <div className="text-[#8c8b92] mt-2">
            <Input
              name="customerId"
              placeholder="0000000000"
              error={formik.errors.customerId && formik.errors.customerId + " Bet ID"}
              onChange={(e) => {
                setData({ ...data, customerId: e.target.value });
                formik.setFieldValue("customerId", e.target.value);
              }}
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
            {data?.serviceProvider?.fixed ? (
              <p className="text-[32px] font-bold flex items-center">
                <NairaIconElectricBill width={32} />
                {data?.serviceProvider?.fee}.00
              </p>
            ) : (
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
            )}
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
          
          <Button
            variant="primary"
            size="full"
            type="submit"
            isLoading={isPending}
            // onClick={()=>{
            //     setFlow(2)
            // }}
          >
            <span className="text-[16px]">REVIEW ORDER</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BettingForm;