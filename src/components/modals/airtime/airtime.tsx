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
import BillsSkeleton from "@/components/common/billsSkeleton";
import { useGetServicesByBillerId } from "@/helpers/api/useCategories";
import { currencyFormatter } from "@/helpers/currencyConvert";
import { RefetchOptions } from "@tanstack/react-query";

export interface BillPaymentProps {
    show: boolean;
    setShow: (aug0: boolean) => void;
    billers: [],
    refetch: (options?: RefetchOptions) => void;
}

export interface dataProps {
    amount: string | number, 
    customerId: string, 
    service: any, 
    biller?: string | number, 
    logo?: string
}

export default function AirtimeModal({ show, setShow, billers, refetch }: BillPaymentProps) {
    const { data: formData, formik, isError, isPending, isSuccess, error } = usePayBill("buy-airtime");
    const { services, isLoading } = useGetServicesByBillerId(formik.values.billerId)
    const { formik:completedForm, isPending: completePending, isSuccess: completedSuccess, isError: isCompletedError, error: completedError } = useCompleteBillPayment(formData?.transaction?._id || "", "airtime")
    const [data, setData] = useState<dataProps>({ amount: 0, customerId: "", service: { }, biller: "", logo: "" })
    const [flow, setFlow] = useState(0)
    const flowHeaders: string[] = ["Airtime", "Your Order", "Your Wallet", "Purchase Details"]

    const names = process.env.NODE_ENV === "development" ?  ["Etisalat Recharge Top-Up", "Airtel Recharge Pins", "Glo QuickCharge", "MTN e-Charge Prepaid", "9mobile Postpaid Payments(New)"] : ["Airtel Mobile Top-up (Prepaid)", "9mobile Recharge (E-Top Up)", "GLO QuickCharge (Top-up)", "MTN Direct Top-up (Prepaid)"]
    const billersList = billers?.filter((item: any ) => names.includes(item.Name));

    const makePayment = () => {
        formik.handleSubmit()
    }
    
    const completeAlternate = (ref: any) => {
        completedForm.setValues({ 
          transactionDetails: ref, 
        })
    
        completedForm.handleSubmit()
    }
    
    const handleSubmit = () => {
        if(formik.values.amount !== 0 && formik.values.customerId !== "" && formik.values.biller !== "" ) {
            setFlow(1)
        }
        else {
            formik.validateForm()
            console.log(formik.errors)
        }
    };
    
    useEffect(() => {
        if(isSuccess) {
          refetch()
          setFlow(3)
        }
    }, [isSuccess, refetch]);

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
                <AirtimeDetailsModal setFlow={setFlow} data={data} completedForm={completedForm} completeAlternate={completeAlternate} />
                :
                flow === 2 ?
                <AirtimePayment setFlow={setFlow} data={{...data, ...formData?.transaction, isPending}} completeAction={makePayment} />
                :
                flow === 3 ?
                <CompletedAirtimeModal setFlow={setFlow} data={{...data, ...formData?.transaction, isPending: completePending}} />
                :
                <>

                    <div className="flex flex-col w-full mt-5">
                        <label htmlFor="amount" className="font-normal text-xl font-openSans text-[#111111]">
                            Phone Number
                        </label>
                        <div className="text-[#8c8b92] mt-2">
                        <Input 
                            type="number" 
                            value={formik.values.customerId}
                            onChange={(e) => {setData({ ...data, customerId:  e.target.value}); formik.setFieldValue("customerId", e.target.value)}} 
                            placeholder="Enter your 11 digits phone number" 
                            error={formik.errors.customerId && formik.errors.customerId + " phone number"}
                        />
                        </div>
                    </div>
                    {
                    billersList ? 
                    <>
                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {
                            billersList?.map((item: { Id: number, LogoUrl: string, ShortName: string, Name: string, ProductCode: string } ) => (
                                <button 
                                    key={item.Id} 
                                    onClick={() => {
                                        setData({ ...data, biller: item.Id, logo: item.ShortName}); 
                                        formik.setFieldValue("billerId", item.Id?.toString())
                                    }} 
                                    className={data.biller === item.Id ? "border-2 border-[#3D3066] rounded" : ""}
                                >
                                    <Image src={`/images/airtime/${item.ShortName}.jpg`} width={200} height={200} alt={item.Name} />
                                </button>
                            ))
                        }
                    </div>
                    </>
                    :
                    <BillsSkeleton list={4} height={120} />
                    }

                    {
                    isLoading ?
                    <BillsSkeleton list={4} height={100} /> 
                    :
                    <>
                    <div className="grid sm:grid-cols-4 grid-cols-3 gap-4 mt-12">
                        {
                            services?.PaymentItems?.map((item: { Id: number, LogoUrl: string, BillerName: string, Amount: string, PaymentCode: string } ) => (
                                <button 
                                    key={item.Id} 
                                    onClick={() => {
                                        formik.setFieldValue("biller", item.BillerName)
                                        formik.setFieldValue("paymentCode", item.PaymentCode)
                                        formik.setFieldValue("paymentMode", "wallet")
                                        formik.setFieldValue("category", "billpayment")
                                        formik.setFieldValue("amount", +item.Amount/100)
                                        formik.setFieldValue("service", item.BillerName?.split(" ")[0] + " Recharge")
                                        setData({ ...data, service: item, amount: +item.Amount/100 })
                                        formik.validateForm()
                                    }} 
                                    className={`${formik.values.amount === +item.Amount/100 ? "border-2 border-[#3D3066] bg-[#E7E6F2]" : "border border-slate-200"} p-2 rounded`}
                                >
                                    { currencyFormatter(+item.Amount/100) }
                                </button>
                            ))
                        }
                        
                    </div>
                    <p className="text-red-600 text-[12px] pt-2">{formik.errors.service}</p>
                    </>

                    }

                    <div className="w-full mt-12">
                        <Button
                            type="submit"
                            size={"full"}
                            isLoading={isPending}
                            className="text-[20px] font-CabinetGrotesk mb-4"
                            onClick={() => handleSubmit()}
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