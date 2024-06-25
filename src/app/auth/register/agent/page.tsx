'use client'
import { FRONTEND_URL } from "@/utils/pages";
import React, { FormEvent } from "react";
import AuthSideImg from "@/components/authSideImg";
import { Button } from "@/components/common/button";
import { Input, PasswordVariantInput } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { useSignupAgent } from "@/helpers/api/useAuth";
import ToastComponent from "@/components/common/toastComponent";

const RegisterAgent = () => {
  const { formik, isPending, isSuccess, isError, error } = useSignupAgent()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit()
  };


  return (
    <div className="flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full">

    <ToastComponent
      isSuccess={isSuccess} 
      isError={isError} 
      msg={isSuccess ? "Signup successful" : isError ? "Signup error " + error : ""}
    />
      
      <AuthSideImg />
      
      <div className="md:w-[65%] w-full flex-col mx-auto min-h-screen py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-start">
       
        <h1 className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px]">Register as an Agent</h1>
        
        <form className="pt-8" onSubmit={handleSubmit}>
            <div className="pb-4 flex-col gap-2 w-full md:text-[20px]">
                <p className="mt-4">Fullname</p>
                <div className="flex gap-4 grid grid-cols-2">
                    <Input 
                        placeholder="Firstname"
                        name="firstname"
                        data-test="username-firstname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.firstname}
                    />
                    <Input 
                        placeholder="Lastname"
                        name="lastname"
                        data-test="username-lastname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.lastname}
                    />
                </div>
                
                <p className="mt-4">Email Address</p>
                <Input 
                    placeholder="Email address"
                    name="email"
                    data-test="username-email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                />
                
                <p className="mt-4">Phone Number</p>
                <Input 
                    placeholder="Phone number"
                    name="phoneNumber"
                    data-test="username-phoneNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.phoneNumber}
                />
                
                <p className="mt-4">Business User Name</p>
                <Input 
                    placeholder="Business user"
                    name="companyName"
                    data-test="username-companyName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.companyName}
                />

                <p className="mt-4">Super Agent user</p>
                <Input 
                    placeholder="Super Agent user"
                    name="superAgent"
                    data-test="username-superAgent"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.superAgent}
                />

                <p className="mt-4">Region/Location</p>
                <Input 
                    placeholder="Enter your location"
                    name="location"
                    data-test="username-location"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.location}
                />
                    
                <p className="mt-4">Password</p>
                <PasswordVariantInput
                    placeholder="Enter password"
                    name="password"
                    data-test="username-password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                />
            </div>

              
            
            <p className="2xl:text-[20px] xl:text-[18px] text-[16px] mb-12">
                By continuing, you agree to our 
                <a href={""} className="text-[#3D3066] font-bold"> Terms and Conditions</a> 
            </p>


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
                    CREATE ACCOUNT
                </Button>
            </div>
        </form>

        <p className="text-center 2xl:text-[20px] xl:text-[18px] text-[16px] mt-6">
            Not an agent? 
            <Link href={FRONTEND_URL.INDIVIDUAL_REGISTER} className="text-[#3D3066] font-medium"> REGISTER AS AN INDIVIDUAL</Link> 
        </p>
        
        {/* Already login */}
        <div className="flex w-full items-center mt-6 gap-2 justify-center">
          <p className=" text-s">
            Already have an account?
          </p>
          <Link
            href={FRONTEND_URL.LOGIN}
            className="text-[#3D3066] font-medium text-s no-underline"
          >
            LOG IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterAgent;
