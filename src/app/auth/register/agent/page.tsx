'use client'
import { FRONTEND_URL } from "@/utils/pages";
import React, { FormEvent, useState } from "react";
import AuthSideImg from "@/components/authSideImg";
import { Button } from "@/components/common/button";
import { Input, PasswordVariantInput } from "@/components/common/inputs";
import Link from "@/components/custom/link";
import { useSignupAgent } from "@/helpers/api/useAuth";
import ToastComponent from "@/components/common/toastComponent";
import { Dropdown } from "@/components/common/Dropdown";
import { regions, states } from "@/data/locationRegions";
import { useSearchParams } from "next/navigation";

type Options = {
  label: string,
  value: string
}

const RegisterAgent = () => {
  const [ selectedState, setSelectedState ] = useState<Options>({ label: "", value: "" })
  const [ selectedRegion, setSelectedRegion ] = useState<Options>()
  const { formik, isPending, isSuccess, isError, error } = useSignupAgent()

  const searchParams = useSearchParams();

  const referralCode = searchParams.get("ref") || null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    formik.setFieldValue("referralCode", referralCode || formik.values.referralCode)
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
      
      <div className="md:w-[65%] w-full flex-col mx-auto min-h-screen py-[15vh] 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-start">
       
        <h1 className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px]">Register as an Agent</h1>
        
        <form className="pt-8" onSubmit={handleSubmit}>
            <div className="pb-4 flex-col gap-2 w-full md:text-[20px]">
                <div className="flex gap-4 grid grid-cols-2">
                    <div>
                      <p className="mb-2">Firstname</p>
                      <Input 
                          placeholder="Firstname"
                          name="firstname"
                          data-test="username-firstname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.firstname && formik.errors.firstname}
                      />
                    </div>
                    <div>
                      <p className="mb-2">Lastname</p>
                      <Input 
                          placeholder="Lastname"
                          name="lastname"
                          data-test="username-lastname"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.lastname && formik.errors.lastname}
                      />
                    </div>
                </div>
                <p className="mt-4">Email Address</p>
                <Input 
                    placeholder="Email address"
                    name="email"
                    data-test="username-email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                />
                
                <p className="mt-4">Phone Number</p>
                <Input 
                    placeholder="Phone number"
                    name="phonenumber"
                    data-test="username-phoneNumber"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phonenumber && formik.errors.phonenumber}
                />
                
                <p className="mt-4">Business Name</p>
                <Input 
                    name="business_name"
                    placeholder="Business Name"
                    data-test="username-companyName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.business_name && formik.errors.business_name}
                />

                <p className="mt-4">Location</p>
                <Dropdown
                  placeholder="Location"
                  name="location"
                  value={selectedState || ""}
                  error={formik.touched.location && formik.errors.location ? true : false}
                  onChange={(value) => {
                    if (value) {
                      const selectedOption = value as Options;
                      setSelectedState(selectedOption)
                      formik.setFieldValue("location", selectedOption.value);
                    } else {
                      formik.setFieldValue("location", null);
                    }
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("location", true);
                  }}
                  options={states.map((item: any) => ({
                    label: item,
                    value: item,
                  }))}
                  className="items-start text-start justify-start rounded-lg"
                />
                
                <p className="mt-4">Region</p>
                <Dropdown
                  placeholder="Region"
                  name="region"
                  value={selectedRegion || ""}
                  error={formik.touched.region && formik.errors.region ? true : false}
                  onChange={(value) => {
                    if (value) {
                      const selectedOption = value as Options;
                      setSelectedRegion(selectedOption)
                      formik.setFieldValue("region", selectedOption.value);
                    } else {
                      formik.setFieldValue("region", null);
                    }
                  }}
                  onBlur={() => {
                    formik.setFieldTouched("region", true);
                  }}
                  options={regions[selectedState.value]?.map((item: string) => ({
                    label: item,
                    value: item,
                  }))}
                  className="items-start text-start justify-start rounded-lg"
                />
                    
                <p className="mt-4">Password</p>
                <PasswordVariantInput
                    placeholder="Enter password"
                    name="password"
                    data-test="username-password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && formik.errors.password}
                />

                <p className="mt-4">Referral Code</p>
                <Input 
                    placeholder="Enter referral code"
                    value={referralCode || formik.values.referralCode}
                    name="referralCode"
                    data-test="referralCode"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
            </div>

              
            
            <p className="2xl:text-[20px] xl:text-[18px] text-[16px] mb-12">
                By clicking the &quot;Create Account&quot; button, you agree to our 
                <a href={"/terms-and-conditions"} className="text-[#3D3066] font-bold"> Terms and Conditions</a> 
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
