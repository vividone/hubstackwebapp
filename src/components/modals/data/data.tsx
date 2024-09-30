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
import BillsSkeleton from "@/components/common/billsSkeleton";
import Image from "next/image";
import ToastComponent from "@/components/common/toastComponent";
import CompletedDataModal from "./dataPurchaseDetails";

type dataProps = {
  amount: number;
  customerId: string;
  service: any;
};

const Data = ({ setShow, show, billers }: any) => {
  const [flow, setFlow] = useState(0);    
  const [data, setData] = useState<dataProps>({ amount: 0, customerId: "", service: { } })
  const [userDetails, ] = useLocalStorage<any>(TOKEN.EMAIL)
  const { isLoading } = useGetBillersByCategoryId("4")
  const { data: formData, formik, isError, isPending, isSuccess, error } = usePayBill("buy-data");
  const { formik:completedForm, isPending: completePending, isSuccess: completedSuccess, isError: isCompletedError, error: completedError } = useCompleteBillPayment(formData?.transaction?._id || "", "data")
  
  const names = process.env.NODE_ENV === "development" ? ["Etisalat Recharge Top-Up", "Airtel Data Bundles", "GLO", "MTN Data Bundles", "NTEL Data Bundles"] : ["MTN Mobile Data_Plan", "9Mobile_Data_Bundles_VF", "GLO Data Bundle", "Airtel Data Bundles_Prepaid"]
  const billersList = billers?.filter((item: any )=> names.includes(item.Name));

  const completeAlternate = (ref: any) => {
    completedForm.setValues({ 
      transactionDetails: ref, 
    })

    completedForm.handleSubmit()
  }

  const makePayment = () => {
    if(formik.values.amount !== 0 && formik.values.customerId !== "" && formik.values.biller !== "" ) {
      formik.handleSubmit()
    }
  };
  
  useEffect(() => {
      if(isSuccess) {
        setFlow(4)
      }
  }, [isSuccess]);

  const flowHeaders: string[] = [
    "Data Bundle",
    "Data Bundle",
    "Your Order",
    "Your Wallet",
    "Purchase Details",
  ];

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
        <DataPayment setFlow={setFlow} data={{ ...data, ...formData, isPending }} completeAction={makePayment} />
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
                      billersList?.map((item: { Id: number, ShortName: string, Name: string, PaymentCode: string } ) => (
                          <button 
                            key={item.Id} 
                            onClick={() => {
                              setData({ ...data, service:  item}); 
                              formik.setFieldValue("service", item.Name?.split(" ")[0] + " Data")
                              formik.setFieldValue("biller", item.Name)
                              formik.setFieldValue("billerId", item.Id.toString())
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
