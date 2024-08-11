'use client'
import { Input } from "@/components/common/inputs";
import ModalsLayout from "../modalsLayout";
import { useState,useEffect} from "react";
import Image from "next/image";
import { Button } from "@/components/common/button";
import AirtimeDetailsModal from "./airtimedetails";
import CompletedAirtimeModal from "./airtimeCompleted";
import NairaIcon from "@/assets/icons/nairaIcon";
import { formatAmount } from "@/helpers/amountFormatter";
import AirtimePayment from "./airtimePayments";
import { usePayBill } from "@/helpers/services";
import ToastComponent from "@/components/common/toastComponent";
import Link from "@/components/custom/link";
import CurrencyField from "@/components/common/currencyInput";

type AirtimePaymentProps = {
    show: boolean;
    setShow: (aug0: boolean) => void;
}

type dataProps = {amount: string | number, phonenumber: string, network: string}

export default function AirtimeModal({ show, setShow }: AirtimePaymentProps) {
    const { data: formData, formik, isError, isPending, isSuccess, error } = usePayBill("buy-airtime");
    const [data, setData] = useState<dataProps>({ amount: 0, phonenumber: "", network: "" })
    const [flow, setFlow] = useState(0)
    const [isPadded, setIsPadded] = useState(true);
    const flowHeaders: string[] = ["Airtime", "Your Order", "Your Wallet", "Purchase Details"]

    const handleNext = () => {
        formik.setFieldValue("service", "Airtime") //data?.serviceProvider?.value
        formik.setFieldValue("biller", data.network) //
        formik.setFieldValue("billerId", "480") //active?.data.networkId
        formik.setFieldValue("paymentMode", "wallet")
        formik.setFieldValue("customerId", data.phonenumber) //
        formik.setFieldValue("amount", 1000) //data.amount
        formik.setFieldValue("paymentCode", "48001") //data?.serviceProvider?.PaymentCode
        formik.setFieldValue("category", "billpayment") //

        formik.handleSubmit()
    }
    const paddingHandler = () => {
        if (flow == 2) {
          setIsPadded(false);
        } else {
          setIsPadded(true);
        }
      };
      useEffect(() => {
        paddingHandler();
      }, [flow]);

    return (
        <>
          
      <ToastComponent
        isSuccess={isSuccess}
        isError={isError}
        msg={
          isSuccess
            ? "Successful"
            : isError
            ? "Airtime purchase error: " + error
            : Object.values(formik.errors)?.join(", ")
        }
      />

        <ModalsLayout header={flowHeaders[flow]} flow={flow} setFlow={setFlow} setShow={setShow} show={show}>

            {
                flow === 1 ?
                <AirtimeDetailsModal setFlow={setFlow} data={data} />
                :
                flow === 2 ?
                <AirtimePayment setFlow={setFlow} data={data} />
                :
                flow === 3 ?
                <CompletedAirtimeModal setFlow={setFlow} data={data} />
                :
                <>
                    <div className="flex flex-col w-full mt-5">
                        <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                            Enter Airtime Amount
                        </label>
                        <div className="text-[#8c8b92] mt-2">


                        <CurrencyField 
                            onValueChange={(v: any) => setData({ ...data, amount: v.floatValue })} 
                        />
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-5">
                        <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                            Enter Phone Number
                        </label>
                        <div className="text-[#8c8b92] mt-2">
                        <Input type="number" onChange={(e) => setData({ ...data, phonenumber:  e.target.value})} placeholder="07000000000" />
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
                        {/* { error?.network ? <p className="mt-2 text-[12px] text-red-400">{error?.network}</p> : "" } */}
                    </div>

                    <p className="2xl:text-[20px] xl:text-[18px] text-[16px] mt-10">
                    By continuing, you agree to our 
                    <Link href={"/terms-and-conditions"} className="text-[#3D3066] font-bold"> Terms and Conditions</Link> 
                </p>
                    <div className="w-full">
                        <Button
                        type="submit"
                        size={"full"}
                        isLoading={isPending}
                        className="text-[20px] font-CabinetGrotesk mb-4"
                        onClick={() => handleNext()}
                        >
                        REVIEW ORDER
                        </Button>
                        
                    </div>
                </>
            }
        </ModalsLayout>
        </>
    )
}