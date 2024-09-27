import React, { useEffect, useState } from "react";
import ModalsLayout from "../modalsLayout";
import CustomIcons from "@/components/custom/customIcons";
import { useCompleteBillPayment, usePayBill } from "@/helpers/api/useServices";
import ToastComponent from "@/components/common/toastComponent";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import InternetForm from "./internetForms";
import InternetPayment from "./internetPayment";
import InternetPurchase from "./internetCompleted";
import InternetDetails from "./internetdetails";

type InterntProviders = {
  ShortName: string;
  Name: string;
  Id: string;
};

const InternetServices = ({ setShow, show, billers }: any) => {
  const [flow, setFlow] = useState(0);
  const [data, setData] = useState<any>();
  const [active, setActive] = useState<InterntProviders | null>();
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const {
    data: payCable,
    formik: cableForm,
    isError,
    isPending,
    isSuccess,
    error,
  } = usePayBill("internet");
  const {
    data: completedBill,
    formik: completedForm,
    isPending: completePending,
    isSuccess: completedSuccess,
  } = useCompleteBillPayment(payCable?._id || "");

  const flowHeaders: string[] = [
    "Internet",
    "Internet",
    "Your Order",
    "Your Wallet",
  ];

  useEffect(() => {
    if (isSuccess) {
      setFlow(2);
    }
  }, [isSuccess]);


  const completePayment = () => {
    completedForm.setValues({
      paymentCode: payCable?.transactionDetails.paymentCode?.toString(),
      customerId: payCable?.transactionDetails.customerId?.toString(),
      customerEmail: userDetails?.email,
      customerMobile: userDetails?.phone_number,
      requestReference: payCable?.transactionReference,
      amount: payCable?.amount,
    });

    completedForm.handleSubmit();
  };
  
  const completeAlternate = (ref: any) => {
    completedForm.setValues({ 
      paymentCode: data?.transactionDetails.paymentCode?.toString(), 
      customerId: data?.transactionDetails.customerId?.toString(), 
      customerEmail: userDetails?.email,
      customerMobile: userDetails?.phone_number || "09012345678",
      requestReference: data?.transactionReference, 
      transactionDetails: ref, 
      amount: data?.amount,
    })

    completedForm.handleSubmit()
  }

  return (
    <>
      <ToastComponent
        isSuccess={isSuccess}
        isError={isError}
        msg={
          isSuccess || completedSuccess
            ? "Successful"
            : isError
            ? "Error " + error
            : Object.values(cableForm.errors).join(", ")
        }
      />

      <ModalsLayout
        header={flowHeaders[flow]}
        flow={flow}
        setFlow={setFlow}
        setShow={setShow}
        show={show}
      >
        {flow === 0 ? (
          <main>
            <header className="font-normal text-[20px] font-OpenSans">
              Choose A Service Provider
            </header>
            <div className="grid grid-cols-4 gap-5 py-5 ">
              {
                // isLoading ?
                // <>
                //   <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
                //   <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
                //   <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
                //   <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
                // </>

                billers?.map((item: any) => (
                  <button
                    key={item.Id}
                    onClick={() => {
                      setActive(item);
                      cableForm.setFieldValue("service", item.Name)
                      cableForm.setFieldValue("biller", item.Name)
                      cableForm.setFieldValue("billerId", item.Id.toString())
                      cableForm.setFieldValue("paymentMode", "wallet")
                      cableForm.setFieldValue("paymentCode", item.ProductCode)
                      cableForm.setFieldValue("category", "billpayment")
                      setFlow(1);
                    }}
                    title={item.Name}
                  >
                    <CustomIcons
                      src={"https://quickteller.com/images/Downloaded/" + item.MediumImageId + ".png" } // item.MediumImageId
                      alt={item.Name}
                    />
                  </button>
                ))
              }
            </div>
          </main>
        ) : flow === 1 ? (
          <InternetForm
            active={active}
            data={data}
            setData={setData}
            isPending={isPending}
            formik={cableForm}
            setFlow={setFlow}
          />
        ) : flow === 2 ? (
          <InternetDetails
            active={active}
            data={{ ...data, ...payCable }}
            completedForm={completedForm} 
            completeAlternate={completeAlternate}
            setFlow={setFlow}
          />
        ) : flow === 3 ? (
          <InternetPayment
            active={active}
            data={{ ...data, ...payCable, isPending: completePending }}
            setFlow={setFlow}
            completeAction={completePayment}
          />
        ) : flow === 4 ? (
          <InternetPurchase active={active} data={data} setFlow={setFlow} />
        ) : (
          ""
        )}
      </ModalsLayout>
    </>
  );
};

export default InternetServices;
