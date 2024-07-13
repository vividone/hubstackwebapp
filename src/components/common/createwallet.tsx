"use client";
import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./inputs";
import { useUrls } from "@/helpers/useUrls";
import { validationSchema } from "@/schema/walletschema/validation";
import axios from "axios";

const WalletForm = ({ setShow }: any) => {
  const { createWalletUrl } = useUrls();

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

  const onSubmit = async (values: any, { setSubmitting }: any) => {
    const { homeAddress, ...dataToSubmit } = values;
    console.log("Values to be submitted:", dataToSubmit); // Log values to console
    try {
      const response = await axios.post(createWalletUrl, dataToSubmit);
      console.log("Response from server:", response.data);
      // Handle the response or show a success message
    } catch (error) {
      console.error("Error creating wallet:", error);
      // Handle error or show an error message
    } finally {
      setSubmitting(false);
    }
  };
// console.log(initialValues)
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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, values }) => (
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
                      type="text"
                      name="firstName"
                      className="mt-1"
                      data-test="username-firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      placeholder="First name"
                    />
                    <ErrorMessage name="firstName" component="div" />
                  </div>
                  <div className="flex flex-col flex-1 justify-end">
                    <Input
                      name="lastName"
                      type="text"
                      placeholder="Last name"
                      className="mt-1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <ErrorMessage name="lastName" component="div" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className="font-normal mt-5 text-xl font-openSans"
              >
                Email Address
              </label>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
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
                <Input
                  name="phoneNumber"
                  type="number"
                  placeholder="09023456789"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                />
                <ErrorMessage name="phoneNumber" component="div" />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="bvn" className="mt-5 font-openSans">
                <p className="text-xl font-normal">BVN</p>
                <p className="text-[14px]">
                  Your bank verification number isn’t stored for any reason on
                  our database
                </p>
              </label>
              <div>
                <Input
                  name="bvn"
                  type="text"
                  placeholder="Enter your 11 digit BVN"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bvn}
                />
                <ErrorMessage name="bvn" component="div" />
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dateOfBirth}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.homeAddress}
                />
                <ErrorMessage name="homeAddress" component="div" />
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
              <Button className=" " type="submit" size={"long"}>
                Proceed
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WalletForm;
