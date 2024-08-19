'use client'
import { Button } from "@/components/common/button";
import { PasswordVariantInput } from "@/components/common/inputs";
import ToastComponent from "@/components/common/toastComponent";
import { useProfilePasswordUpdate } from "@/helpers/api/useProfile";
import { FormEvent } from "react";

const PageSecurity = () => {
  const { formik, isPending, isSuccess, isError, error } = useProfilePasswordUpdate()
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formik.errors)
    formik.handleSubmit()
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[60px] my-[60px] md:w-[90%]">
      
      <ToastComponent
        isSuccess={isSuccess} 
        isError={isError} 
        msg={isSuccess ? "Update successful" : isError ? "Update error " + error : Object.values(formik.errors)?.join(", ")}
      />

      <div className="flex justify-between flex-wrap gap-6">
        <div className="flex flex-col gap-2 lg:w-[35%]">
          <h2 className="font-medium text-lg">Password</h2>
          <p className="w-[70%] text-[#8C8B92]">You can easily make changes to your password thereby improving your account security</p>
        </div>
        <div className="flex flex-col gap-[60px] items-center lg:w-[60%] w-full">
          <div className="w-full text-[#8c8b92] text-[20px] flex flex-col gap-3">
            <label htmlFor="firstname">Old Password</label>
            <PasswordVariantInput
              placeholder="Password"
              name="oldPassword"
              data-test="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.oldPassword && formik.errors.oldPassword}
            />
          </div>
          <div className="w-full text-[#8c8b92] text-[20px] flex flex-col gap-3">
            <label htmlFor="firstname">New Password</label>
            <PasswordVariantInput
              placeholder="Password"
              name="newPassword"
              data-test="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.newPassword && formik.errors.newPassword}
            />
          </div>
          <div className="w-full text-[#8c8b92] text-[20px] flex flex-col gap-3">
            <label htmlFor="firstname">Confirm New Password</label>
            <PasswordVariantInput
              placeholder="Confirm password"
              name="confirmNewPassword"
              data-test="confirm-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
            />
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
