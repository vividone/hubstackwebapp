import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
const WalletForm = ({setShow}: any) => {
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

  // const validationSchema = Yup.object({
  //   firstName: Yup.string().required("Required"),
  //   lastName: Yup.string().required("Required"),
  //   email: Yup.string().email("Invalid email address").required("Required"),
  //   phoneNumber: Yup.string()
  //     .matches(/^\d+$/, "Invalid phone number")
  //     .required("Required"),
  //   bvn: Yup.string()
  //     .length(11, "BVN must be exactly 11 digits")
  //     .matches(/^\d+$/, "Invalid BVN")
  //     .required("Required"),
  //   dateOfBirth: Yup.date().required("Required"),
  //   homeAddress: Yup.string().required("Required"),
  //   terms: Yup.bool()
  //     .oneOf([true], "You must accept the terms and conditions")
  //     .required("Required"),
  // });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col bg-white m-w-[35.5vw] text-black  pt-7 pl-10 pr-10 h-screen">
      <div className="font-medium text-2xl mb-2 flex justify-between">
        <span>Create Wallet</span>
        <Image
          src="./images/close.svg"
          onClick={() => setShow(false)}
          alt="close"
          width={22}
          height={22}
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
              <label htmlFor="firstName" className="font-normal mt-2 font-openSans">
                First Name
              </label>
              <div>
                <Field
                  name="firstName"
                  type="text"
                  className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2 "
                />
                <ErrorMessage name="firstName" component="div" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="lastName" className="font-normal mt-2 font-openSans">
                Last Name
              </label>
              <div>
                <Field
                  name="lastName"
                  type="text"
                  className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2"
                />
                <ErrorMessage name="lastName" component="div" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="font-normal mt-2 font-openSans">
              Email Address
            </label>
            <div>
              <Field
                name="email"
                type="email"
                className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2 w-full w-[100%] "
              />
              <ErrorMessage name="email" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="phoneNumber" className="font-normal mt-2 font-openSans">
              Phone Number
            </label>
            <div>
              <Field
                name="phoneNumber"
                type="text"
                className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2 w-full"
              />
              <ErrorMessage name="phoneNumber" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="bvn" className="font-normal mt-2 font-openSans">
              BVN
            </label>
            <div>
              <Field
                name="bvn"
                type="text"
                className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2 w-full"
              />
              <ErrorMessage name="bvn" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="dateOfBirth" className="font-normal mt-2 font-openSans">
              Date of Birth
            </label>
            <div>
              <Field
                name="dateOfBirth"
                type="date"
                className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2 w-full "
              />
              <ErrorMessage name="dateOfBirth" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="homeAddress" className="font-normal mt-2 font-openSans">
              Home Address
            </label>
            <div>
              <Field
                name="homeAddress"
                type="text"
                className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2 w-full"
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
          <div className="flex justify-center mt-5 w-full">
            <Button
              className="w-[250px] text-xl font-CabinetGrotesk "
              type="submit"
              size="md"
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
