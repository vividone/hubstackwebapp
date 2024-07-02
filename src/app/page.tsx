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
      <ToastComponent
        isSuccess={isSuccess}
        isError={isError}
        msg={
          isSuccess ? "Login successful" : isError ? "Login error " + error : ""
        }
      />

      <AuthSideImg />

      <div className="md:w-[65%] w-full flex flex-col mx-auto min-h-screen py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
        <p className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px]">
          Login as an Individual
        </p>

        <form className="pt-8" onSubmit={handleSubmit}>
          <div className="flex pb-4 flex-col gap-2 w-full md:text-[20px]">
            <p className="mt-4">Email Address</p>
            <Input
              placeholder="Email Address"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              data-test="username-email"
            />
            <p className="mt-4">Password</p>
            <PasswordVariantInput
              placeholder="Enter password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.password}
              data-test="username-password"
            />
          </div>

          <p className="text-left 2xl:text-[20px] xl:text-[18px] text-[16px] mb-12">
            Forgot password?
            <Link
              href={FRONTEND_URL.RESET_PASSWORD}
              className="text-[#3D3066] font-medium"
            >
              {" "}
              RESET
            </Link>
          </p>

          {/* Already login */}
          <div className="flex justify-center">
            <Button
              size={"long"}
              variant="primary"
              isLoading={isPending}
              disabled={isPending}
              dataTest="sign-in"
              name="sign-in"
              id="sign-in"
              type="submit"
            >
              LOG IN
            </Button>
          </div>
        </form>

        <p className="text-center 2xl:text-[20px] xl:text-[18px] text-[16px] mt-6">
          Not an individual?
          <Link
            href={FRONTEND_URL.AGENT_LOGIN}
            className="text-[#3D3066] font-medium"
          >
            {" "}
            LOGIN AS AN AGENT
          </Link>
        </p>

        {/* Already login */}
        <div className="flex w-full items-center mt-6 gap-2 justify-center">
          <p className=" text-s">Don&apos;t have an account?</p>
          <Link
            href={FRONTEND_URL.REGISTER}
            className="text-[#3D3066] font-medium text-s no-underline"
          >
            CREATE ACCOUNT
          </Link>
        </div>
      </div>
    </div>
    // <Pagelayout>
    //   <Homepage/>
    // </Pagelayout>
  );
};

export default Login;
