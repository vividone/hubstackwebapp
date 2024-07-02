import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "./button"; // Assuming you have a button component

const WalletForm = () => {
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

  const onSubmit = (values:any) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col bg-white w-[490px] text-black p-10 h-screen " >
      <h1 className="font-bold text-2xl mb-2">Create Wallet</h1>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="flex flex-col w-full h-full">
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <label htmlFor="firstName" className="font-medium mt-2">
                First Name
              </label>
              <div>
                <Field
                  name="firstName"
                  type="text"
                  className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2"
                />
                <ErrorMessage name="firstName" component="div" />
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="lastName" className="font-medium mt-2">
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
            <label htmlFor="email" className="font-medium mt-2">
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
            <label htmlFor="phoneNumber" className="font-medium mt-2">
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
            <label htmlFor="bvn" className="font-medium mt-2">
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
            <label htmlFor="dateOfBirth" className="font-medium mt-2">
              Date of Birth
            </label>
            <div>
              <Field
                name="dateOfBirth"
                type="date"
                className="h-10 outline-none rounded-md border border-gray-200 text-gray-600 px-2 w-full"
              />
              <ErrorMessage name="dateOfBirth" component="div" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="homeAddress" className="font-medium mt-2">
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
          <div className="flex flex-col mt-2 w-full">
            <span>By continuing, you agree to our Terms and Conditions</span>
          </div>
          <div className="flex justify-center mt-5 w-full">
            <Button
              className="w-full h-[40px] p-2 text-white rounded-md text-lg "
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