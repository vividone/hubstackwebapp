import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import { useGetServicesByBillerId } from "@/helpers/api/useCategories";
import { Dropdown } from "@/components/common/Dropdown";
import NairaIconElectricBill from "@/assets/icons/NairaIconElectricBill";


const DataForm = ({
  setFlow,
  data,
  setData,
  formik,
  isPending
}: any) => {
  const [toggle, setToggle] = useState(true);
  const { services } = useGetServicesByBillerId(data?.service.Id)

  useEffect(() => {

    formik.setFieldValue("biller", data?.service.Name)
    formik.setFieldValue("billerId", data?.service.Id.toString())
    formik.setFieldValue("paymentCode", "0488051528")  //data?.serviceProvider?.PaymentCode
    formik.setFieldValue("paymentMode", "wallet")
    formik.setFieldValue("category", "billpayment") 
    
  }, [data])


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit()
  }

  return (
    <div>
      <h2 className="font-normal text-[20px] font-OpenSans">
        Service Provider
      </h2>

      <form onSubmit={handleSubmit} className="pb-5">
        <div className="bg-[#E6FBFF] border border-[#E7E6F2] rounded-[8px] p-[10px_30px]">
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src={`/images/data/${data?.service.ShortName}.jpg`}
              alt={data?.name}
              width={80}
              height={80}
            />
            <p className="text-xl font-semibold text-[#3D3066]">{data?.service.Name}</p>
          </div>
        </div>

        <div className="flex flex-col w-full mt-5">
          <label
            htmlFor="products"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            Products
          </label>
          <Dropdown
            name="serviceProvider"
            value={data?.serviceProvider}
            error={formik.touched.service && formik.errors.service}
            onChange={(value) => {
              if (value) {
                const selectedOption = value as any;
                setData({...data, serviceProvider: selectedOption})
                formik.setFieldValue("amount", selectedOption.fee)
              } else {
              }
            }}
            options={services?.PaymentItems?.map((item: any) => ({
              label: item.Name,
              value: item.Name,
              fee: item.Amount/100,
              PaymentCode: item.PaymentCode,
            }))}
            className="items-start text-start justify-start rounded-[8px]"
          />
        </div>

        <div className="flex flex-col w-full mt-5">
          <label
            htmlFor="amount"
            className="font-normal text-xl font-openSans text-[#111111]"
          >
            Phone Number
          </label>
          <div className="text-[#8c8b92] mt-2">
            <Input
              name="customerId"
              placeholder="0000000000"
              error={formik.errors.customerId && "Phone number " + formik.errors.customerId}
              onChange={(e) => {
                setData({ ...data, customerId: e.target.value });
                formik.setFieldValue("customerId", e.target.value);
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
            Amount
          </label>
          <div className="text-[#8c8b92] mt-2">
          <p className="text-[32px] font-bold flex items-center"><NairaIconElectricBill width={32} />{data?.serviceProvider?.fee || 0}.00</p>
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

export default DataForm;