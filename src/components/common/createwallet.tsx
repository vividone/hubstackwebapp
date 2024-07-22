"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./inputs";
import { Button } from "./button";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useCreateWallet } from "@/helpers/wallet";
import ToastComponent from "@/components/common/toastComponent";
import { Dropdown } from "./Dropdown";
import { banks } from "@/data/bankCodes";
import axios from "axios";
import axiosInstance from "@/helpers/axiosConfig";

const WalletForm = ({ setShow }: any) => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const { formik, isPending, isSuccess, isError, error } = useCreateWallet();
  const [selectedBank, setSelectedBank] = useState<{ label: string, value: string }>()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formik.errors)
    formik.handleSubmit();
  };

  useEffect(() => {
    axiosInstance.get(`${process.env.NEXT_PUBLIC_BASE_URL}/wallet/banks`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="flex flex-col bg-white w-[45vw] text-black p-[40px_50px] h-[100vh] overflow-y-scroll">
      <div className="font-normal text-4xl mb-4 flex justify-between">
        <span>Create Wallet</span>
        <Image
          src="/images/close.svg"
          onClick={() => setShow(false)}
          alt="close"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
        <div className="flex gap-2">
          <div className="flex flex-col flex-1">
            <div className="flex space-x-4">
              <div className="flex flex-col flex-1 text-[#8c8b92]">
                <label
                  htmlFor="firstName"
                  className="font-normal mt-5 text-xl font-openSans color-[#111111]"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  name="firstname"
                  data-test="username-firstname"
                  placeholder="First name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="flex flex-col flex-1 justify-end text-[#8c8b92]">
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="font-normal mt-5 text-xl font-openSans text-[#8c8b92]"
          >
            Email Address
          </label>
          <div className="text-[#8c8b92]">
            <Input
              name="email"
              type="email"
              placeholder="Email address"
              value={formik.values.email}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-col w-full text-[#8c8b92]">
          <label
            htmlFor="phoneNumber"
            className="font-normal mt-5 text-xl font-openSans"
          >
            Phone Number
          </label>
          <div>
            <Input
              name="mobilenumber"
              type="text" // Changed to text to handle string
              placeholder="08059837774"
              value={formik.values.mobilenumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        
        <div className="flex flex-col w-full mt-8">
            <p className="text-xl font-normal">KYC Verification</p>
            <p className="text-[14px]">
              We are required to confirm your identity
            </p>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="bvn" className="mt-5 font-openSans">
            <p className="text-xl font-normal">BVN</p>
            <p className="text-[14px]">
              Your bank verification number isn&apos;t stored for any reason on our
              database
            </p>
          </label>
          <div>
            <Input
              name="bvn"
              type="text"
              placeholder="Enter your 11 digit BVN"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.touched.bvn && formik.errors.bvn ? "border-red-500" : ""
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="accountNumber" className="mt-5 font-openSans">
            <p className="text-xl font-normal">Existing Account Number</p>
            <p className="text-[14px]">
              Any of your bank Account number tied to your bvn
            </p>
          </label>
          <div>
            <Input
              name="existingAccountNumber"
              type="text"
              placeholder="Enter your 10 digit NUBAN"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="dateOfBirth"
            className="font-normal mt-5 text-xl font-openSans"
          >
            Bank
          </label>
          <div>
          <Dropdown
                  placeholder="Enter your existing bank name"
                  name="existingBankName"
                  value={selectedBank || ""}
                  error={formik.errors.existingBankName && formik.touched.existingBankName ? true : false}
                  onChange={(value) => {
                    if (value) {
                      const selectedOption = value as { label: string, value: string };
                      setSelectedBank(selectedOption)
                      formik.setFieldValue("existingBankName", selectedOption.value);
                    } else {
                      formik.setFieldValue("existingBankName", null);
                    }
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("existingBankName", true);
                  }}
                  options={banks.map((item: any) => ({
                    label: item.name,
                    value: item.name,
                  }))}
                  className="items-start text-start justify-start rounded-lg border border-[#E7E6F2] "
                />
          </div>
        </div>
        
        <div className="flex flex-col mt-5 w-full font-Inter text-[20px]">
          <span className="pt-1">
            By continuing, you agree to our{" "}
            <Link
              href={""}
              className="text-[#3D3066] font-medium cursor-pointer"
            >
              Terms and Conditions{" "}
            </Link>
          </span>
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <Button
            type="submit"
            size={"long"}
            isLoading={isPending}
            disabled={isPending}
          >
            Proceed
          </Button>
        </div>
      </form>
      <ToastComponent
        isSuccess={isSuccess}
        isError={isError}
        msg={
          isSuccess
            ? "Wallet creation is successful"
            : isError
            ? "Wallet creation error: " + error
            : Object.values(formik.errors)?.join(", ")

        }
      />
    </div>
  );
};

export default WalletForm;
