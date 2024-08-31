"use client"
import Image from "next/image";
import { Button } from "../../common/button";
import { SetStateAction, useEffect, useState } from "react";
import { Dropdown } from "../../common/Dropdown";
import useLocalStorage from "@/hooks/useLocalStorage";
import { PaystackButton } from "react-paystack";
import { TOKEN } from "@/utils/token";
import CurrencyField from "@/components/common/currencyInput";
import PaystackPayment from "./paystackPayment";
import FlutterwavePayment from "./flutterwavePayment";

type AlternateFundingProps = {
    amount: number;
    setAmount: any;
    setShow: SetStateAction<any>, 
    setFlow: (aug0: string) => void,
    refreshWallet: (aug0: number) => void
} 

export default function AlternateWalletFunding({ amount, setAmount, setShow, setFlow, refreshWallet }: AlternateFundingProps) {
    const [ selectedMethod, setSelectedMethod ] = useState<any>({value: "Paystack", label: "Paystack"})
    const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)


    
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
                    

                    <label htmlFor="desiredAmount" className="block text-[18px] mb-2 mt-8 font-normal">
                        Amount To Fund
                    </label>
                    <CurrencyField
                        onValueChange={(v: any) => setAmount(v.floatValue)} 
                    />
                    <label htmlFor="desiredAmount" className="block text-[18px] mt-6 mb-2 font-normal">
                        Payment Method
                    </label>

                    <Dropdown
                        placeholder=""
                        name="payment option"
                        value={selectedMethod}
                        onChange={(value) => {
                            if (value) {
                            const selectedOption = value as any;
                            setSelectedMethod(selectedOption)
                            
                        }}}
                        options={["Paystack", "Flutterwave"].map((item: any) => ({
                            label: item,
                            value: item,
                        }))}
                        className="items-start text-start justify-start rounded-lg border border-[#E7E6F2] "
                    />

                    <div className="mt-16 h-20">
                        {
                            selectedMethod?.value === "Paystack" ?
                            <PaystackPayment amount={amount} setFlow={setFlow} refreshWallet={refreshWallet} />
                            :
                            <FlutterwavePayment amount={amount} setFlow={setFlow} refreshWallet={refreshWallet} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}