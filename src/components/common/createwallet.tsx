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
    <div className="flex flex-col bg-white w-[40vw] text-black  p-[40px_50px] h-[100vh] overflow-y-scroll">
      <div className="font-normal text-4xl mb-6 flex justify-between">
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
                    className="font-normal mt-5 text-xl font-openSans color-[#111111]"
                  >
                    Full Name
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
            <label htmlFor="email" className="font-normal mt-5 text-xl font-openSans">
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
              className="font-normal mt-5 text-xl font-openSans"
            >
              Phone Number
            </label>
            <div>
              <Input name="phoneNumber" type="text" placeholder="09023456789" />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="bvn" className="mt-5 font-openSans">
              <p className="text-xl font-normal">BVN</p>
              <p className="text-[14px]">
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
              className="font-normal mt-5 text-xl text-xl font-openSans"
            >
              Date of Birth
            </label>
            <div>
              <Input
                name="dateOfBirth"
                // type="date"
                placeholder="DD/MM/YY"
              />
              <ErrorMessage name="dateOfBirth" component="div" />
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
              />
              <ErrorMessage name="homeAddress" component="div" />
            </div>
          </div>
          <div className="flex flex-col mt-5 w-full font-Inter text-[20px] ">
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
          <div className="flex justify-center mt-8 mb-8 ">
            <Button
              className="font-normal font-['Cabinet_Grotesk']  text-[20px] w-[60%] "
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
