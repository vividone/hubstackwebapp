"use client";
import { TOKEN } from "@/utils/token";
import { Input } from "../../common/inputs";
import { Button } from "../../common/button";
import { Dropdown } from "../../common/Dropdown";
import useLocalStorage from "@/hooks/useLocalStorage";
import React, { FormEvent, useState } from "react";
import { useGetAllBanks } from "@/helpers/api/useWallet";
import ModalsLayout from "../modalsLayout";

const WalletForm = ({ setShow, show, formik, isPending }: any) => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const [selectedBank, setSelectedBank] = useState<{
    label: string;
    value: string;
  }>();
  const { allBanks } = useGetAllBanks();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };


  return (
    <ModalsLayout
      flow={0}
      setFlow={() => {}}
      header="Create Wallet"
      setShow={setShow}
      show={show}
    >
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
                  value={userDetails?.firstname}
                  disabled
                />
              </div>
              <div className="flex flex-col flex-1 justify-end text-[#8c8b92]">
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Last name"
                  value={userDetails?.lastname}
                  disabled
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
              type="text"
              placeholder="08059837774"
              value={formik.values.mobilenumber}
              onChange={formik.handleChange}
              error={formik.touched.mobilenumber && formik.errors.mobilenumber}
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
              Your bank verification number isn&apos;t stored for any reason on
              our database
            </p>
          </label>
          <div>
            <Input
              name="bvn"
              type="text"
              placeholder="Enter your 11 digit BVN"
              value={formik.values.bvn}
              onChange={formik.handleChange}
              error={formik.touched.bvn && formik.errors.bvn}
              onBlur={formik.handleBlur}              
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="accountNumber" className="mt-5 font-openSans">
            <p className="text-xl font-normal">Account Number</p>
            <p className="text-[14px]">
              An account number linked to your BVN
            </p>
          </label>
          <div>
            <Input
              name="existingAccountNumber"
              type="text"
              placeholder="Enter your 10 digit NUBAN"
              onChange={formik.handleChange}
              error={formik.touched.existingAccountNumber && formik.errors.existingAccountNumber}
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
              error={formik.touched.existingBankName && formik.errors.existingBankName}
              onChange={(value: any) => {
                if (value) {
                  const selectedOption = value as {
                    label: string;
                    value: string;
                  };
                  setSelectedBank(selectedOption);
                  formik.setFieldValue(
                    "existingBankName",
                    selectedOption.value
                  );
                } else {
                  formik.setFieldValue("existingBankName", null);
                }
              }}
              onBlur={() => {
                formik.setFieldTouched("existingBankName", true);
              }}
              options={allBanks?.data?.map((item: any) => ({
                label: item.name,
                value: item.name,
              }))}
              className="items-start text-start justify-start rounded-lg border border-[#E7E6F2] "
            />
          </div>
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
    </ModalsLayout>
  );
};

export default WalletForm;
