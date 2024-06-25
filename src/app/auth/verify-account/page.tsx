'use client'
import VerifyAccount from "@/components/auth/VerifyAccount";
import AuthSideImg from "@/components/authSideImg";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

const VerifyAccountPage = () => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
 
  
  return (
    <div className="relative flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full">
      
      <AuthSideImg />

      <div className="md:w-[55%] w-full flex flex-col mx-auto min-h-screen py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
       
        <h1 className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px]">Please verify your account</h1>

        <div className="flex flex-col">

          <div className="flex-col mb-4">
            <p className="mt-1 text-primary_dark text-s text-[#8C8B82]">Please enter the verification code sent to <span className="font-semibold">{userDetails?.email}</span> to verify your account
            </p>
          </div>
          
          <div className="">
            <VerifyAccount />
          </div>

        </div>

        <div />
        <div />
      </div>
    </div>
  );
};

export default VerifyAccountPage;
