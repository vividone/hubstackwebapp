"use client";
import React, { useState, useEffect } from "react";
import { useCompleteBillPayment, usePayBill } from "@/helpers/services";
import ModalsLayout from "../modalsLayout";
import ToastComponent from "../../common/toastComponent";
import ElectricityBillForm from "./electricityBillForm";
import ElectricityBillDetails from "./electricityBillDetails";
import ElectricityBillToken from "./electricityBillToken";
import ElectricityBillPayment from "./electricityBillPayment";

const ElectricityBillModal = ({ show, setShow, billers }: any) => {
  const { data, formik, isError, isPending, isSuccess, error } = usePayBill("electricity");
  const { data: completedBill, formik:completedForm, isPending: completePending, isSuccess: completedSuccess } = useCompleteBillPayment(data?._id || "")
  const [ formData, setFormData] = useState<any>()
  const [flow, setFlow ] = useState(0)

  const flowHeaders: string[] = ["Electricity Bill", "Your Order", "Your Wallet", "Token Details"]

  const completePayment = () => {
    completedForm.setValues({ 
      paymentCode: data?.transactionDetails.paymentCode?.toString(), 
      customerId: data?.transactionDetails.customerId?.toString(), 
      customerEmail: "testJ@test.com",
      customerMobile: "2349077746616",
      requestReference: data?.transactionReference, 
      amount: data?.amount
    })
    console.log(completedForm.errors)
    completedForm.handleSubmit()
  }

  useEffect(() => {
    if(completedSuccess) {
      setFlow(4)
    }
  }, [completedSuccess])
  
  useEffect(() => {
    if(isError) {
      setFlow(1)
    }
  }, [isError])

  return (
    <>
    
    <ToastComponent
        isSuccess={isSuccess} 
        isError={isError} 
        msg={isSuccess ? "Successful" : isError ? "Error " + error : ""}
      />
      <ModalsLayout header={flowHeaders[flow]} flow={flow} setFlow={setFlow} setShow={setShow} show={show}>
      
      { 
        flow === 0 ?
          <ElectricityBillForm setFlow={setFlow} data={formData} formik={formik} billers={billers} setData={setFormData} />
        :
        flow === 1 ? 
        <ElectricityBillDetails data={formData} setFlow={setFlow}/> 
        : 
        flow === 2 ? 
        <ElectricityBillPayment data={formData} setFlow={setFlow}/> 
        : 
        flow === 3 ? 
        <ElectricityBillToken data={completedBill} setFlow={setFlow} /> :
        ""
      }

    </ModalsLayout>
    </>
  );
};

export default ElectricityBillModal;
