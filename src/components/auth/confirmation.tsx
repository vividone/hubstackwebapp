'use client'
import { Loader } from "@/assets/loader";
import { Button } from "@/components/common/button";
import { FRONTEND_URL } from "@/utils/pages";
import Image from "next/image";
import { useRouter } from "next/navigation";

type confirmationTexts = {
  heading: string,
  text: string,
  type: string
}

const ConfirmationMessage = ({ heading, text, type }: confirmationTexts) => {
  const router = useRouter();

  return (

      <div className="absolute top-0 md:left-[35%] left-0 z-[2] bg-white md:w-[55%] w-full flex flex-col items-center mx-auto min-h-screen py-10 2xl:px-[15%] lg:px-[10%] px-[5%] scroll max-h-screen overflow-y-scroll hide justify-center">
       
        <Image src={"/images/thumbsup.svg"} alt="thumbs up" width={160} height={100} />

        <h1 className="text-center font-medium 2xl:text-[40px] xl:text-[32px] text-[24px] mt-16">{heading}</h1>

        <div className="flex flex-col gap-4 items-center">
            <p className="mt-1 text-primary_dark text-s text-[#8C8B82] mb-6">{text}</p>
          
            {
              type === "verify" ?
              <p>Preparing your account <Loader /></p>
              :
              <Button 
                  size={"long"}
                  variant="primary"
                  onClick={() => router.push(FRONTEND_URL.LOGIN)}
              >
                  LOG IN
              </Button>
            }

        </div>

      </div>
  );
};

export default ConfirmationMessage;
