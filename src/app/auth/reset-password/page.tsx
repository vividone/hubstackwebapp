'use client'
import AuthSideImg from "@/components/authSideImg";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/inputs";
import { useResetPassword } from "@/helpers/api/useAuth";
import { FRONTEND_URL } from "@/utils/pages";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const ResetPassword = () => {
  const router = useRouter();
  const { formik, isPending } = useResetPassword();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    formik.submitForm()
  }

  return (
    <div className="flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full">
      
      <AuthSideImg />

      <div className="md:w-[55%] w-full flex flex-col mx-auto min-h-screen py-10 2xl:px-[20%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
       

        <h1 className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px] mt-16">Forgot password</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="mt-1 text-primary_dark text-s text-[#8C8B82] mb-6">Please enter the email  you used to create your account so we can send you a link for resetting your password</p>
          
            <p className="-mb-2">Email Address</p>
            <Input 
                placeholder="EXAMPLE@GMAIL.COM"
                name="email"
                data-test="user-email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
            />

            <div className="flex flex-col gap-4 items-center justify-center mt-8">
                <Button 
                    size={"long"}
                    variant="primary"
                    isLoading={isPending}
                    disabled={!formik.isValid || isPending}
                >
                    SEND
                </Button>
                <Button 
                    size={"long"}
                    variant="secondary"
                    onClick={() => router.push(FRONTEND_URL.LOGIN)}
                >
                    BACK TO LOGIN
                </Button>
            </div>
        </form>

      </div>
    </div>
  );
};

export default ResetPassword;