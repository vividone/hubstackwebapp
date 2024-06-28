import ErrorIcon from "@/assets/inputs/ErrorIcon";
import { useVerifyLogin } from "@/helpers/api/useAuth";
import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "../common/button";
import { OTPInput } from "../common/OtpInput";
import ConfirmationMessage from "./confirmation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

const VerifyAccount = () => {
  const [otpError, setOtpError] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState("");
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  // const { formik: resendFormik, resendOTPIsSuccess } = useResendOTP();
  const { formik, isPending, isSuccess, isError, error } = useVerifyLogin();

  const handleChange = (otp: string) => {
    setVerifyOtp(otp)
    setOtpError(false);
    if (otp.length > 5) {
      formik.setFieldValue("otp", otp)
      formik.setFieldValue("email", userDetails.email)
      formik.handleSubmit();
    }
  };
  
  return (
    <div className="flex flex-col w-full">
      {/* form */}
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
        
        <p className="flex items-center justify-center text-center pt-8 gap-2 2xl:text-[20px] xl:text-[18px] text-[16px]">
            Didn&apos;t get code?
            <button className="text-[#3D3066] font-medium"> RESEND</button> 
        </p>

        <div className="flex justify-center">
            <Button
                size={"long"}
                variant="primary"
                isLoading={isPending}
                disabled={!isPending}
                dataTest="sign-in"
                name="sign-in"
                id="sign-in"
                type="submit"
            >
                VERIFY
            </Button>
          </div>
      </form>


      {/* Confirmation success modal */}

      {
        isSuccess ?
        <ConfirmationMessage heading="Hello John" text="Your personal account has been created successfully" />
        : 
        ""
      }
    </div>
  );
};

export default VerifyAccount;
