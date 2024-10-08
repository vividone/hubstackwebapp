'use client'
import ConfirmationMessage from "@/components/auth/confirmation";
import AuthSideImg from "@/components/authSideImg";
import { Button } from "@/components/common/button";
import { PasswordVariantInput } from "@/components/common/inputs";
import ToastComponent from "@/components/common/toastComponent";
import { useResetPassword } from "@/helpers/api/useAuth";
import { FRONTEND_URL } from "@/utils/pages";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token")
  const { formik, isPending, isSuccess, isError, error } = useResetPassword(token);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    formik.submitForm()
  }

  return (
    <div className="flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full">
      
      <ToastComponent
        isSuccess={isSuccess} 
        isError={isError} 
        msg={isSuccess ? "Password reset successfully" : isError ? "Password reset error " + error : ""}
      />
      
      <AuthSideImg />

      <div className="md:w-[65%] w-full flex flex-col mx-auto min-h-screen py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
       

        <h1 className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px] mt-16">New password</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="mt-1 text-primary_dark text-s text-[#8C8B82] mb-6">Choose a new password for your account</p>
          
            <p className="-mb-2">New password</p>
            <PasswordVariantInput
                placeholder="Enter password"
                name="password"
                data-test="user-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password}
            />

            <p className="mt-1 text-primary_dark text-s text-[#8C8B82] my-2">Your password must be at least 8 characters long and include 1 capital letter and 1 number</p>

            <p className="-mb-2">Confirm new password</p>
            <PasswordVariantInput
                placeholder="Enter password"
                name="confirmNewPassword"
                data-test="user-email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.confirmNewPassword}
            />

            <div className="flex flex-col items-center justify-center mt-8">
                <Button 
                    size={"long"}
                    variant="primary"
                    isLoading={isPending}
                    disabled={isPending}
                >
                    RESET PASSWORD
                </Button>
            </div>
        </form>

        <div className="flex flex-col items-center justify-center mt-4">
              <Button 
                  size={"long"}
                  variant="secondary"
                  onClick={() => router.push(FRONTEND_URL.LOGIN)}
              >
                  BACK TO LOGIN
              </Button>
          </div>
      </div>

    

      {/* Confirmation success modal */}

      {
        isSuccess ?
        <ConfirmationMessage heading="Password Reset Successful" text="Log in to your account with your new password" type={"reset"} />
        : 
        ""
      }
    </div>
  );
};

export default ResetPassword;
