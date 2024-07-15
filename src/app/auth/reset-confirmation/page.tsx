'use client'
import AuthSideImg from "@/components/authSideImg";
import { Button } from "@/components/common/button";
import useSessionStorage from "@/hooks/useSessionStorage";
import { FRONTEND_URL } from "@/utils/pages";
import { TOKEN } from "@/utils/token";
import { useRouter } from "next/navigation";

const ResetConfirmation = () => {
  const router = useRouter();
  const [ user, ] = useSessionStorage<string>(TOKEN.USER);

  return (
    <div className="flex pb-10 slideshow lg:pb-0 lg:gap-x-4 xl:gap-x-8 w-full">
      
      <AuthSideImg />

      <div className="md:w-[65%] w-full flex flex-col mx-auto min-h-screen py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
       

        <h1 className="font-medium 2xl:text-[40px] xl:text-[32px] text-[24px] mt-16">Forgot password</h1>

        <div className="flex flex-col gap-4">
            <p className="mt-1 text-primary_dark text-s text-[#8C8B82] mb-6">We have sent an email with password reset information to {user}</p>
          
            <p className="-mb-2 text-[#8C8B82]">Didn&apos;t receive the email? Check spam folder or</p>

            <div className="flex flex-col gap-4 items-center justify-center mt-8">
                <Button 
                    size={"long"}
                    variant="primary"
                    onClick={() => router.push(FRONTEND_URL.LOGIN)}
                >
                    RESEND EMAIL
                </Button>
                <Button 
                    size={"long"}
                    variant="secondary"
                    onClick={() => router.push(FRONTEND_URL.LOGIN)}
                >
                    BACK TO LOGIN
                </Button>
            </div>
        </div>

        <div />
        <div />
      </div>
    </div>
  );
};

export default ResetConfirmation;
