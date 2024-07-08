import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./inputs";
import { validationSchema } from "@/schema/walletschema/validation";
const WalletForm = ({ setShow }: any) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    bvn: "",
    dateOfBirth: "",
    homeAddress: "",
    terms: false,
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col bg-white w-[37vw] text-black  p-10 pb-20 h-[100vh] overflow-y-scroll">
      <div className="font-medium text-2xl mb-2 flex justify-between">
        <span>Create Wallet</span>
        <Image
          src="\images\close.svg"
          onClick={() => setShow(false)}
          alt="close"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col w-full h-full">
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <div className="flex space-x-4">
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="firstName"
                    className="font-medium mt-2 font-openSans color-[#111111]"
                  >
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    className="mt-1"
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div className="flex flex-col flex-1 justify-end">
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    className="mt-1"
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="font-medium mt-2 font-openSans">
              Email Address
            </label>
            <div>
              <Input name="email" type="email" placeholder="Email address" />
              <ErrorMessage name="email" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="phoneNumber"
              className="font-medium mt-2 font-openSans"
            >
              Phone Number
            </label>
            <div>
              <Input name="phoneNumber" type="text" placeholder="09023456789" />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="bvn" className="mt-2 font-openSans">
              <p className="font-medium">BVN</p>
              <p className="">
                your bank verification number isn’t stored for any reason on our
                database
              </p>
            </label>
            <div>
              <Input
                name="bvn"
                type="text"
                placeholder="Enter your 11 digit BVN"
              />
              <ErrorMessage name="bvn" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="dateOfBirth"
              className="font-medium mt-2 font-openSans"
            >
              Date of Birth
            </label>
            <div>
              <Input
                name="dateOfBirth"
                type="date"
                placeholder="Enter you location"
              />
              <ErrorMessage name="dateOfBirth" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="homeAddress"
              className="font-medium mt-2 font-openSans"
            >
              Home Address
            </label>
            <div>
              <Input
                name="homeAddress"
                type="text"
                placeholder="Enter you location"
              />
              <ErrorMessage name="homeAddress" component="div" />
            </div>
          </div>
          <div className="flex flex-col mt-2 w-full font-openSans">
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
          <div className="flex justify-center mt-5 w-full ">
            <Button
              className="p-[10px] w-[190px] text-base font-CabinetGrotesk font-bold"
              type="submit"
            >
              Proceed
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default WalletForm;
