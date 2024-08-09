'use client'
import { Input } from "@/components/common/inputs";
import ModalsLayout from "../modalsLayout";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/common/button";
import AirtimeDetailsModal from "./airtimedetails";
import CompletedAirtimeModal from "./airtimeCompleted";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";

type AirtimePaymentProps = {
    show: boolean;
    setShow: (aug0: boolean) => void;
}

type dataProps = {amount: string | number, phonenumber: string, network: string}

export default function AirtimePayment({ show, setShow }: AirtimePaymentProps) {
    const [data, setData] = useState<dataProps>({ amount: 0, phonenumber: "", network: "" })
    const [flow, setFlow] = useState("Airtime")
    const [error, setError] = useState<any>({})

    const handleNext = () => {
        setFlow("Your Order")
    }

    return (
        <ModalsLayout header={flow} show={show} setShow={setShow}>

            {
                flow === "Your Order" || flow === "Your Wallet" ?
                <AirtimeDetailsModal flow={flow} setFlow={setFlow} data={data} completePayment={() => setFlow("Purchase Details")} />
                :
                flow === "Purchase Details" ?
                <CompletedAirtimeModal flow={flow} setFlow={setFlow} data={data} />
                :
                <>
                    <div className="flex flex-col w-full mt-5">
                        <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                            Enter Airtime Amount
                        </label>
                        <div className="text-[#8c8b92] mt-2">
                        <Input 
                            type="number" 
                            name="amount" 
                            error={error?.amount}
                            onBlur={() => setData({ ...data, amount: +formatAmount(data.amount.toString())})} 
                            leftIcon={() => <NairaIcon className="w-[18px]" />} 
                            onChange={(e) => setData({ ...data, amount:  e.target.value})} placeholder="0.00" 
                        />
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-5">
                        <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                            Enter Phone Number
                        </label>
                        <div className="text-[#8c8b92] mt-2">
                        <Input type="number" name="amount" error={error?.phonenumber} onChange={(e) => setData({ ...data, phonenumber:  e.target.value})} placeholder="07000000000" />
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {
                            [ 
                                { id: 0, network: "mtn"},
                                { id: 1, network: "airtel"},
                                { id: 2, network: "9mobile"},
                                { id: 3, network: "glo"},
                            ].map((item: { id: number, network: string } ) => (
                                <button key={item.id} onClick={() => setData({ ...data, network:  item.network})} className={data.network === item.network ? "border-2 border-[#3D3066] rounded" : ""}>
                                    <Image src={`/images/airtime/${item.network}.png`} width={200} height={200} alt={item.network} />
                                </button>
                            ))
                        }
                        { error?.network ? <p className="mt-2 text-[12px] text-red-400">{error?.network}</p> : "" }
                    </div>

                    <p className="font-Inter text-[20px] font-normal mt-10">
                        By continuing, you agree to our{" "}
                        <span className="text-[#3D3066]">Terms and Conditions</span>
                    </p>
                    <div className="w-full">
                        <Button
                        type="submit"
                        size={"full"}
                        className="text-[20px] font-CabinetGrotesk mb-4"
                        onClick={() => handleNext()}
                        >
                        REVIEW ORDER
                        </Button>
                        
                    </div>
                </>
            }
        </ModalsLayout>
    )
}