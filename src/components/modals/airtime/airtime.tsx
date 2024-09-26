'use client'
import { Input } from "@/components/common/inputs";
import ModalsLayout from "../modalsLayout";
import { useState,useEffect} from "react";
import Image from "next/image";
import { Button } from "@/components/common/button";
import AirtimeDetailsModal from "./airtimedetails";
import CompletedAirtimeModal from "./airtimeCompleted";
import AirtimePayment from "./airtimePayments";
import { useCompleteBillPayment, usePayBill } from "@/helpers/api/useServices";
import ToastComponent from "@/components/common/toastComponent";
import CurrencyField from "@/components/common/currencyInput";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { completeBillPayment } from "@/helpers/billPayment";
import BillsSkeleton from "@/components/common/billsSkeleton";

type AirtimePaymentProps = {
    show: boolean;
    setShow: (aug0: boolean) => void;
    billers: { Billers: [] }
}

type dataProps = {amount: string | number, customerId: string, service: any}

export default function AirtimeModal({ show, setShow, billers }: AirtimePaymentProps) {
    const { data: formData, formik, isError, isPending, isSuccess, error } = usePayBill("buy-airtime");
    const { formik:completedForm, isPending: completePending, isSuccess: completedSuccess, isError: isCompletedError, error: completedError } = useCompleteBillPayment(formData?.transaction?._id || "", "airtime")
    const [data, setData] = useState<dataProps>({ amount: 0, customerId: "", service: { } })
    const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)
    const [flow, setFlow] = useState(0)
    const flowHeaders: string[] = ["Airtime", "Your Order", "Your Wallet", "Purchase Details"]

    const names = process.env.NODE_ENV === "development" ?  ["Etisalat Recharge Top-Up", "Airtel Recharge Pins", "Glo QuickCharge", "MTN e-Charge Prepaid", "9mobile Postpaid Payments(New)"] : ["Airtel Mobile Top-up (Prepaid)", "9mobile Recharge (E-Top Up)", "GLO QuickCharge (Top-up)", "MTN Direct Top-up (Prepaid)"]
    const billersList = billers?.Billers?.filter((item: any ) => names.includes(item.Name));

    const completePayment = () => {
        completeBillPayment(formData, completedForm, userDetails)
    }
    
    const completeAlternate = (ref: any) => {
        completedForm.setValues({ 
          transactionDetails: ref, 
        })
    
        completedForm.handleSubmit()
    }
    
    useEffect(() => {
        if(isSuccess) {
          setFlow(1)
        }
    }, [isSuccess]);
    
    useEffect(() => {
        if(completedSuccess) {
          setFlow(3)
        }
    }, [completedSuccess]);

    return (
        <>
          
        <ToastComponent
            isSuccess={completedSuccess} 
            isError={isError || isCompletedError} 
            msg={completedSuccess ? "Successful" : isError || isCompletedError ? "Error " + error || completedError : ""}
        />

        <ModalsLayout header={flowHeaders[flow]} flow={flow} setFlow={setFlow} setShow={setShow} show={show} >

            {
                flow === 1 ?
                <AirtimeDetailsModal setFlow={setFlow} data={data}  completedForm={completedForm} completeAlternate={completeAlternate} />
                :
                flow === 2 ?
                <AirtimePayment setFlow={setFlow} data={{...data, ...formData?.transaction, isPending: completePending}}  completeAction={completePayment} />
                :
                flow === 3 ?
                <CompletedAirtimeModal setFlow={setFlow} data={{...data, ...formData?.transaction, isPending: completePending}} />
                :
                <>
                    <div className="flex flex-col w-full mt-5">
                        <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                            Amount
                        </label>
                        <div className="text-[#8c8b92] mt-2">


                        <CurrencyField 
                            onValueChange={(v: any) => {setData({ ...data, amount: v.floatValue }); formik.setFieldValue("amount", v.floatValue)}} 
                            value={data?.amount}
                            error={formik.errors.amount}
                        />
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-5">
                        <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                            Phone Number
                        </label>
                        <div className="text-[#8c8b92] mt-2">
                        <Input 
                            type="number" 
                            onChange={(e) => {setData({ ...data, customerId:  e.target.value}); formik.setFieldValue("customerId", e.target.value)}} 
                            placeholder="Enter your 11 digits phone number" 
                            error={formik.errors.customerId && formik.errors.customerId + " phone number"}
                        />
                        </div>
                    </div>
                    {
                    billersList ? 

                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {
                            billersList?.map((item: { Id: number, LogoUrl: string, ShortName: string, Name: string, ProductCode: string } ) => (
                                <button 
                                    key={item.Id} 
                                    onClick={() => {
                                        setData({ ...data, service:  item}); 
                                        formik.setFieldValue("biller", item.Name)
                                        formik.setFieldValue("service", item.Name?.split(" ")[0] + " Recharge")
                                        formik.setFieldValue("billerId", item.Id?.toString())
                                        formik.setFieldValue("paymentMode", "wallet")
                                        formik.setFieldValue("paymentCode", item.ProductCode)
                                        formik.setFieldValue("category", "billpayment")
                                    }} 
                                    className={data.service?.Name === item.Name ? "border-2 border-[#3D3066] rounded" : ""}
                                >
                                    <Image src={`/images/airtime/${item.ShortName}.jpg`} width={200} height={200} alt={item.Name} />
                                </button>
                            ))
                        }
                    </div>
                    :
                    <BillsSkeleton list={4} height={120} />
                    }
                    <p className="text-red-600 text-[12px]">{formik.errors.biller}</p>

                    <div className="w-full mt-12">
                        <Button
                            type="submit"
                            size={"full"}
                            isLoading={isPending}
                            className="text-[20px] font-CabinetGrotesk mb-4"
                            onClick={() => {console.log(formik.errors); formik.handleSubmit()}}
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