import React, { useEffect } from "react";
import ModalsLayout from "../modalsLayout";
import { useState } from "react";
import DataForm from "./dataForm";
import DataDetails from "./dataDetails";
import DataPayment from "./payment";
import { useCompleteBillPayment, usePayBill } from "@/helpers/api/useServices";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { useGetBillersByCategoryId } from "@/helpers/api/useCategories";
import { completeBillPayment } from "@/helpers/billPayment";
import BillsSkeleton from "@/components/common/billsSkeleton";
import Image from "next/image";
import ToastComponent from "@/components/common/toastComponent";
import CompletedDataModal from "./dataPurchaseDetails";

type dataProps = {
  amount: number;
  customerId: string;
  service: any;
};

const Data = ({ setShow, show }: any) => {
  const [flow, setFlow] = useState(0);    
  const [data, setData] = useState<dataProps>({ amount: 0, customerId: "", service: { } })
  const [isPadded, setIsPadded] = useState(true);
  const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)
  const { billers, isLoading } = useGetBillersByCategoryId("4")
  const { data: formData, formik, isError, isPending, isSuccess, error } = usePayBill("buy-data");
  const { formik:completedForm, isPending: completePending, isSuccess: completedSuccess, isError: isCompletedError, error: completedError } = useCompleteBillPayment(formData?.transaction?._id || "", "data")
  
  const names = ["Etisalat Recharge Top-Up", "Airtel Data Bundles", "GLO", "MTN Data Bundles", "NTEL Data Bundles"]
  const prodnames = ["MTN Mobile Data_Plan", "9Mobile_Data_Bundles_VF", "GLO Data Bundle", "Airtel Data Bundles"]
  const billersList = billers?.BillerList?.Category[0]?.Billers?.filter((item: any )=> names.includes(item.Name));

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
        setFlow(2)
      }
  }, [isSuccess]);
  
  useEffect(() => {
      if(completedSuccess) {
        setFlow(4)
      }
  }, [completedSuccess]);

  const flowHeaders: string[] = [
    "Data Bundle",
    "Data Bundle",
    "Your Order",
    "Your Wallet",
    "Purchase Details",
  ];

  useEffect(() => {
    if (isSuccess) {
      setFlow(2);
    }
  }, [isSuccess]);

  return (
    <>
        
    <ToastComponent
        isSuccess={completedSuccess} 
        isError={isError || isCompletedError} 
        msg={completedSuccess ? "Successful" : isError || isCompletedError ? "Error " + error || completedError : ""}
      />


    <ModalsLayout
      flow={flow}
      setFlow={setFlow}
      header={flowHeaders[flow]}
      setShow={setShow}
      show={show}
      isPadded={isPadded}
    >
      {flow === 1 ? (
        <DataForm
          setFlow={setFlow}
          data={data}
          setData={setData}
          formik={formik}
          isPending={isPending}
        />
      ) : flow === 2 ? (
        <DataDetails
          setFlow={setFlow}
          data={{ ...data, ...formData }}
          completedForm={completedForm}
          completeAlternate={completeAlternate}
        />
      ) : flow === 3 ? (
        <DataPayment setFlow={setFlow} data={{ ...data, ...formData, isPending: completePending }} completeAction={completePayment} />
      ) : flow === 4 ? (
        <CompletedDataModal setFlow={setFlow} data={{...data, ...formData?.transaction}} />
      ) : (
        <>
          <header className="font-normal text-[20px] font-OpenSans">
            Choose A Service Provider
          </header>
          {
              isLoading ?
                  <BillsSkeleton list={4} height={120} />
              :
              <div className="grid grid-cols-4 gap-4 mt-4">
                  {
                      billersList?.map((item: { Id: number, ShortName: string, Name: string } ) => (
                          <button 
                            key={item.Id} 
                            onClick={() => {
                              setData({ ...data, service:  item}); 
                              formik.setFieldValue("service", item.Name?.split(" ")[0] + " Data")
                              formik.setFieldValue("biller", item.Name)
                              formik.setFieldValue("billerId", item.Id.toString())
                              formik.setFieldValue("paymentCode", "0488051528")  //data?.serviceProvider?.PaymentCode
                              formik.setFieldValue("paymentMode", "wallet")
                              formik.setFieldValue("category", "billpayment") 
                              setFlow(1)
                            }} 
                            className={data.service?.Name === item.Name ? "border-2 border-[#3D3066] rounded" : ""}
                          >
                              <Image src={`/images/data/${item.ShortName}.jpg`} width={200} height={200} alt={item.Name} />
                          </button>
                      ))
                  }
              </div>
          }
        </>
      )}
    </ModalsLayout>
    </>
  );
};

export default Data;
