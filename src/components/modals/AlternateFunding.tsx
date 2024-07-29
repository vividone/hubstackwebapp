import Image from "next/image";
import { Input } from "../common/inputs";
import { Button } from "../common/button";
import { SetStateAction, useState } from "react";
import { Dropdown } from "../common/Dropdown";

type Options = {
    label: string,
    value: string
}

export default function AlternateWalletFunding({ setShow }: SetStateAction<any> ) {
    const [ selectedMethod, setSelectedMethod ] = useState<Options>()

    return (
        <div className="absolute h-full w-full top-0 right-0 bg-white overflow-y-scroll">
              <div className="flex justify-between p-[40px] pt-[55px]">
                <h3 className="text-4xl font-medium text-[#111111]">Fund Wallet</h3>
                <Image
                  src="/images/close.svg"
                  alt="closebutton"
                  width={20}
                  height={20}
                  onClick={() => setShow(false)}
                  className="cursor-pointer"
                />
              </div>
              
              <div className="p-[20px_50px] border-t border-[#E7E6F2]">
                <div className="mt-4">
                    <label htmlFor="desiredAmount" className="block text-[18px] mb-2 font-normal">
                        Payment Method
                    </label>

                    <Dropdown
                        placeholder=""
                        name="payment option"
                        value={selectedMethod || ""}
                        onChange={(value) => {
                            if (value) {
                            const selectedOption = value as Options;
                            setSelectedMethod(selectedOption)
                            
                        }}}
                        options={["Pay via card"].map((item: any) => ({
                            label: item,
                            value: item,
                        }))}
                        className="items-start text-start justify-start rounded-lg border border-[#E7E6F2] "
                    />

                    <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
                        Enter Amount To Fund
                    </label>
                    <Input name="desiredAmount" type="number" placeholder="#0.00" />
                    <div className="mt-16 h-20">
                        <Button>
                        <span className="text-[16px] uppercase">Continue</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}