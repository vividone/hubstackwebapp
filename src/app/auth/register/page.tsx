'use client'
import { FRONTEND_URL } from "@/utils/pages";
import React, { useState } from "react";
import Image from "next/image";
import AuthSideImg from "@/components/authSideImg";
import Link from "@/components/custom/link";

const Register = () => {
  const [userType, setUserType] = useState("");


  return (
    <div className="flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full">
      
      <AuthSideImg />
      
      <div className="md:w-[65%] w-full flex flex-col items-center mx-auto min-h-screen py-[15vh] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-start">
       
        <h1 className="2xl:text-[40px] xl:text-[32px] text-[24px]">How would you like to register?</h1>
        
        <div className="flex flex-col gap-4 py-[40px] lg:w-[510px] w-full">

            {/* Agent selector */}
            <Link
                href={FRONTEND_URL.AGENT_REGISTER}
                className={`flex justify-between items-start border border-[#3D3066] px-[5%] py-[3%] rounded-[15px] ${userType === "agent" ? "bg-[#507FFF]": "bg-[#FCFCFC]"}`}
                onClick={() => setUserType("agent")}  
            >
                <div className="flex flex-col gap-4 md:w-[45%]">
                  <Image src={"/images/agent.svg"} alt="agent" width={180} height={100} />
                  <p className="xl:text-[26px]">I want to register as an agent</p>
                  </div>
                <Image src={"/images/Ellipse.svg"} alt="ellipse" className="bg-white rounded-full" width={40} height={40} />
            </Link>


            {/* Individual selector */}
            <Link
                href={FRONTEND_URL.INDIVIDUAL_REGISTER}
                className={`flex justify-between items-start border border-[#3D3066] px-[5%] py-[3%] rounded-[15px] ${userType === "individual" ? "bg-[#507FFF]": "bg-[#FCFCFC]"}`}
                onClick={() => setUserType("individual")} 
            >
                <div className="flex flex-col gap-4 md:w-[45%]">
                  <Image src={"/images/individual.svg"} alt="individual" width={100} height={100} />
                  <p className="xl:text-[26px]">I want to register as an Individual</p>
                </div>
                <Image src={"/images/Ellipse.svg"} alt="ellipse" className="bg-white rounded-full" width={40} height={40} />
            </Link>


        </div>
        
        {/* Already login */}
        <div className="flex w-full items-center mt-10 gap-2 justify-center">
          <p className="text-grey-300  text-s">
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

export default Register;
