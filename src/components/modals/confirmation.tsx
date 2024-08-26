import Image from "next/image";
import { Button } from "../common/button";

type ConfirmationProps = {
    status: string;
    heading: string;
    text: string;
    subtext: string;
    setShow: (bool: boolean) => void
    buttonProps: { text: string, action: any }
}

export default function Confirmation ({ status, heading, text, subtext, setShow, buttonProps }: ConfirmationProps) {
    return (
        <div>
            <div className="absolute top-0 left-0 z-[2] bg-white w-full h-full ">
                <div className="flex justify-between p-[30px_40px] pt-[55px]">
                    <h3 className="text-4xl font-medium text-[#111111]">{heading}</h3>
                    <Image
                        src="/images/close.svg"
                        alt="closebutton"
                        width={20}
                        height={20}
                        onClick={() => setShow(false)}
                        className="cursor-pointer"
                    />
                </div>

                <div className="flex flex-col items-center mt-[40px]">
                    {
                        status === "error" ?
                        <Image src={"/images/error.png"} alt="error" width={160} height={100} />
                        :
                        <Image src={"/images/thumbsup.svg"} alt="thumbs up" width={160} height={100} />
                    }

                    <h1 className="text-center font-medium 2xl:text-[40px] xl:text-[32px] text-[24px] mt-16">{text}</h1>

                    <div className="flex flex-col gap-4 items-center">
                        <p className="mt-1 text-primary_dark text-s text-[#8C8B82] mb-6">{subtext}</p>
                        
                        <Button 
                            size={"long"}
                            variant="primary"
                            onClick={() => buttonProps.action(false)}
                        >
                            {buttonProps.text}
                        </Button>
                            
                    </div>
                </div>
            </div>
        </div>
    )
}