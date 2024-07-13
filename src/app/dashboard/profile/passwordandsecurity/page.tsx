'use client'
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/inputs";
import ToastComponent from "@/components/common/toastComponent";
import { useProfilePasswordUpdate } from "@/helpers/profile";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { FormEvent } from "react";

const PageSecurity = () => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const { formik, isPending, isSuccess, isError, error } = useProfilePasswordUpdate(userDetails?._id, userDetails?.role)
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit()
  };
  
  <ToastComponent
    isSuccess={isSuccess} 
    isError={isError} 
    msg={isSuccess ? "Update successful" : isError ? "Update error " + error : Object.values(formik.errors)?.join(", ")}
  />

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[60px] my-[60px] md:w-[90%]">
      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Password</h2>
          <p className="w-[70%] text-[#8C8B92]">You can easily make changes to your password thereby improving your account security</p>
        </div>
        <div className="flex flex-col gap-[60px] items-center lg:w-[60%] w-full">
          <div className="w-full text-[#8c8b92] text-[20px] flex flex-col gap-3">
            <label htmlFor="firstname">Enter New Password</label>
            <Input
              placeholder="Password"
              name="password"
              data-test="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="w-full text-[#8c8b92] text-[20px] flex flex-col gap-3">
            <label htmlFor="firstname">Re-enter New Password</label>
            <Input
              placeholder="Confirm password"
              name="confirmPassword"
              data-test="confirm-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-[12px] text-red-500 text-center">{formik.errors.confirmPassword}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-6">
        <div className="w-[35%]"></div>
        <div className="lg:w-[60%] w-full flex justify-center">
          <Button
            size={"long"}
            variant="primary"
            type="submit"
            isLoading={isPending}
            disabled={isPending}
          >
            SAVE
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PageSecurity;
