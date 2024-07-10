"use client";
import React from "react";
// import "../../../../components/auth/profilesetting.css";
import { Input } from "@/components/common/inputs";
import { Button } from "@/components/common/button";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  photo: File | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

const Personalsettings: React.FC = () => {
  const initialValues: FormValues = {
    photo: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  };

  const validationSchema = Yup.object({
    photo: Yup.mixed().required("Profile Photo is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Home Address is required"),
  });

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="">
      <div className="description">
        <div>
          <p>Changes cannot be made to your name after account creation</p>
        </div>
      </div>
      <form action=""></form>
    </div>
  );
};

export default Personalsettings;
