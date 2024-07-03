"use client";
import AuthSideImg from "@/components/authSideImg";
import { Button } from "@/components/common/button";
import { Input, PasswordVariantInput } from "@/components/common/inputs";
import ToastComponent from "@/components/common/toastComponent";
import Link from "@/components/custom/link";
import { useLogin } from "@/helpers/api/useAuth";
import { FRONTEND_URL } from "@/utils/pages";
import { FormEvent } from "react";
import Homepage from "./pages/Homepage";
import Pagelayout from "./pages/pagelayout";

const Login = () => {
  const { formik, isPending, isSuccess, isError, error } = useLogin();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <div className="flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full h-screen">

      <Pagelayout>
       <Homepage/>
      </Pagelayout>
   
    </div>
  );
};

export default Login;
