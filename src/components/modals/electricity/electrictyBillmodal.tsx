"use client";
import React, { useState, useEffect } from "react";
import { useCompleteBillPayment, usePayBill } from "@/helpers/api/useServices";
import ModalsLayout from "../modalsLayout";
import ToastComponent from "../../common/toastComponent";
import ElectricityBillForm from "./electricityBillForm";
import ElectricityBillDetails from "./electricityBillDetails";
import ElectricityBillToken from "./electricityBillToken";
import ElectricityBillPayment from "./electricityBillPayment";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

const ElectricityBillModal = ({ show, setShow, billers }: any) => {
  const { data, formik, isPending, isSuccess, isError, error } = usePayBill("electricity");
  const { data: completedBill, formik:completedForm, isPending: completePending, isSuccess: completedSuccess, isError: isCompletedError, error: completedError } = useCompleteBillPayment(data?._id || "", "Electricity")
  const [ formData, setFormData] = useState<any>()
  const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)
  const [flow, setFlow ] = useState(0)

  const flowHeaders: string[] = ["Electricity Bill", "Your Order", "Your Wallet", "Token Details"]

  const completePayment = () => {
    completedForm.setValues({ 
      paymentCode: "0488051528", 
      customerId: data?.transactionDetails.customerId?.toString(), 
      customerEmail: userDetails?.email,
      customerMobile: userDetails?.phone_number || "09012345678",
      requestReference: data?.transactionReference, 
      amount: data?.amount
    })

    completedForm.handleSubmit()
  }

  useEffect(() => {
    if(completedSuccess) {
      setFlow(3)
    }
  }, [completedSuccess]);

  useEffect(() => {
    if (isSuccess) {
      setFlow(1);
    }
  }, [isSuccess]);

  return (
    <>
    
    <ToastComponent
        isSuccess={completedSuccess} 
        isError={isError || isCompletedError} 
        msg={completedSuccess ? "Successful" : isError || isCompletedError ? "Error " + error || completedError : ""}
      />
      <ModalsLayout header={flowHeaders[flow]} flow={flow} setFlow={setFlow} setShow={setShow} show={show}>
      
      { 
        flow === 0 ?
          <ElectricityBillForm setFlow={setFlow} data={formData} formik={formik} billers={billers} isPending={isPending} setData={setFormData} />
        :
        flow === 1 ? 
        <ElectricityBillDetails data={{ ...formData, ...data }} setFlow={setFlow}/> 
        : 
        flow === 2 ? 
        <ElectricityBillPayment data={{ ...formData, ...data }} completeAction={completePayment} setFlow={setFlow}/> 
        : 
        flow === 3 ? 
        <ElectricityBillToken data={{ ...completedBill, ...data }} setFlow={setFlow} /> :
        ""
      }

    </ModalsLayout>
    </>
  );
};

export default ElectricityBillModal;