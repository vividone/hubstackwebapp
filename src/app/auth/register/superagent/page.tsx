'use client'
import React, { FormEvent } from "react";
import AuthSideImg from "@/components/authSideImg";
import { Button } from "@/components/common/button";
import { Input, PasswordVariantInput } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { useSignupSuperAgent } from "@/helpers/api/useAuth";

const RegisterSuperAgent = () => {
    const { formik, isPending } = useSignupSuperAgent()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit()
  };


  return (
    <div className="flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full">
      
      <AuthSideImg />
      
      <div className="md:w-[65%] w-full flex flex-col mx-auto min-h-screen py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-start">
       
        <p className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px]">Register as a Super Agent</p>
        
        <form className="pt-8" onSubmit={handleSubmit}>
            <div className="flex pb-4 flex-col gap-2 w-full md:text-[20px]">
                <p className="mt-4">Fullname</p>
                <div className="flex gap-4 grid grid-cols-2">
                    <Input 
                        labelname="Firstname"
                        placeholder="Firstname"
                        name="firstName"
                        data-test="user-firstname"
                    />
                    <Input 
                        placeholder="Lastname" 
                        name="lastName"
                        data-test="user-lastname"
                    />
                </div>
                
                <p className="mt-4">Email Address</p>
                <Input 
                    placeholder="Email address"
                    name="email"
                    data-test="user-email"
                />
                
                <p className="mt-4">Phone Number</p>
                <Input 
                    placeholder="Phone number"
                    name="phoneNumber"
                    data-test="user-phoneNumber"
                />
                
                <p className="mt-4">Business Name</p>
                <Input 
                    placeholder="Business username"
                    name="companyName"
                    data-test="user-companyName"
                />

                <p className="mt-4">Region/Location</p>
                <Input 
                    placeholder="Enter your location"
                    name="location"
                    data-test="user-location"
                />
                    
                <p className="mt-4">Password</p>
                <PasswordVariantInput 
                    placeholder="Enter password"
                    name="password"
                    data-test="user-password"
                />
            </div>

              
            
            <p className="2xl:text-[20px] xl:text-[18px] text-[16px] mb-12">
                By continuing, you agree to our 
                <Link href={""} className="text-[#3D3066] font-bold"> Terms and Conditions</Link> 
            </p>


            <div className="flex justify-center">
                <Button 
                    size={"long"}
                    variant="primary"
                    isLoading={isPending}
                    disabled={!formik.isValid || isPending}
                    dataTest="sign-in"
                    name="sign-in"
                    id="sign-in"
                    type="submit"
                >
                    CREATE ACCOUNT
                </Button>
            </div>
        </form>
        
        
      </div>
    </div>
  );
};

export default RegisterSuperAgent;
