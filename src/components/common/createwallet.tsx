"use client";
import React, { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./inputs";
import { Button } from "./button";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useCreateWalletForm } from "@/helpers/wallet";
import ToastComponent from "@/components/common/toastComponent";

const WalletForm = ({ setShow }: any) => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const { formik, isPending, isSuccess, isError, error } = useCreateWalletForm(
    userDetails?._id,
    userDetails?.role
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  <ToastComponent
    isSuccess={isSuccess}
    isError={isError}
    msg={
      isSuccess
        ? "wallet creation is sucessful "
        : isError
        ? "wallet creation error " + error
        : Object.values(formik.errors)?.join(", ")
    }
  />;

  return (
    <div className="flex flex-col bg-white w-[45vw] text-black p-[40px_50px] h-[100vh] overflow-y-scroll">
      <div className="font-normal text-4xl mb-6 flex justify-between">
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
                  name="firstName"
                  className="mt-1 text-[#8c8b92]"
                  data-test="username-firstname"
                  placeholder="First name"
                  value={userDetails?.firstname}
                  disabled={true}
                />
               
              </div>
              <div className="flex flex-col flex-1 justify-end">
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="mt-1 text-[#8c8b92]"
                  value={userDetails?.lastname}
                  disabled={true}
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
              value={userDetails?.email}
              disabled={true}
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
              name="phoneNumber"
              type="number"
              placeholder="09023456789"
              value={userDetails?.phone_number}
              disabled={true}
            />
            
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="bvn" className="mt-5 font-openSans">
            <p className="text-xl font-normal">BVN</p>
            <p className="text-[14px]">
              Your bank verification number isn’t stored for any reason on our
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
            />
            
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="dateOfBirth"
            className="font-normal mt-5 text-xl font-openSans"
          >
            Date of Birth
          </label>
          <div>
            <Input
              name="dateOfBirth"
              placeholder="DD/MM/YY"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
           
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            htmlFor="homeAddress"
            className="font-normal mt-5 text-xl font-openSans"
          >
            Home Address
          </label>
          <div>
            <Input
              name="homeAddress"
              type="text"
              placeholder="Enter your location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
    </div>
  );
};

export default WalletForm;