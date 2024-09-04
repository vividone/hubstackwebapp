'use client'
import Countdown from "@/components/auth/countDown";
import AuthSideImg from "@/components/authSideImg";
import { OTPInput } from "@/components/common/OtpInput";
import { Button } from "@/components/common/button";
import { useVerifyResetPassword } from "@/helpers/api/useAuth";
import useSessionStorage from "@/hooks/useSessionStorage";
import { FRONTEND_URL } from "@/utils/pages";
import { TOKEN } from "@/utils/token";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ErrorIcon } from "react-hot-toast";

const ResetConfirmation = () => {
  const router = useRouter();
  const [ user, ] = useSessionStorage<string>(TOKEN.USER);
  const { formik, isPending, isSuccess, isError, error } = useVerifyResetPassword();
  const [otpError, setOtpError] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState("");
  const [count, setCount] = useState(60);

  const handleChange = (otp: string) => {
    setVerifyOtp(otp)
    setOtpError(false);
    if (otp.length > 5) {
      formik.setFieldValue("otp", otp)
      formik.handleSubmit();
    }
  };

  return (
    <div className="flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full">
      
      <AuthSideImg />

      <div className="md:w-[65%] w-full flex flex-col mx-auto min-h-screen py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
       

        <h1 className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px] mt-16">Verify Your Email</h1>

        <div className="flex flex-col gap-4">
            <p className="mt-1 text-primary_dark text-s text-[#8C8B82] mb-6">We have sent a code to {user}. Please enter the code below to continue</p>
            <p className="text-[#8C8B82] mt-2">Single-use code valid for 20 minutes</p>

            <form
              className="flex flex-col mt-8 w-full space-y-4"
            >
            <OTPInput
              className="!w-8 !h-8 lg:!w-12 lg:!h-12"
              setValue={handleChange}
              value={verifyOtp}
              error={otpError}
            />

            {isError && (
              <div className="flex items-center space-x-2">
                <ErrorIcon />
                <p className="text-sm  text-maroon-200">{error || "Password reset error"}</p>
              </div>
            )}
          
            <p className="-mb-2 text-[#8C8B82]">Didn&apos;t receive the code? Check spam folder or Resend OTP in <Countdown count={count} setCount={setCount} /> seconds</p>

            <div className="flex flex-col gap-4 items-center justify-center mt-8">
                <Button 
                    size={"long"}
                    variant="primary"
                    disabled={count !== 0}
                >
                    RESEND OTP
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

        <div />
        <div />
      </div>
    </div>
  );
};

export default ResetConfirmation;
