import React, { useEffect, useState } from "react";
import ModalsLayout from "../modalsLayout";
import CustomIcons from "@/components/custom/customIcons";
import { useCompleteBillPayment, usePayBill } from "@/helpers/api/useServices";
import ToastComponent from "@/components/common/toastComponent";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import BillForm from "./BillForm";
import BillPayment from "./BillPayment";
import BillDetails from "./BillDetails";
import BillReceipt from "./BillReceipt";

type InterntProviders = {
  ShortName: string;
  Name: string;
  Id: string;
};

export interface ServicesProps {
  setShow:  (aug0: boolean) => void;
  show: boolean;
  billers: any;
  bill: string;
}

const BillServices = ({ setShow, show, billers, bill }: ServicesProps) => {
  const [flow, setFlow] = useState(0);
  const [data, setData] = useState<any>();
  const [active, setActive] = useState<InterntProviders | null>();
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const {
    data: payBill,
    formik: cableForm,
    isError,
    isPending,
    isSuccess,
    error,
  } = usePayBill(bill.split(" ")[0].toLowerCase());
  const {
    data: completedBill,
    formik: completedForm,
    isPending: completePending,
    isSuccess: completedSuccess,
  } = useCompleteBillPayment(payBill?.createTransaction._id || "");

  const flowHeaders: string[] = [
    bill, bill,
    "Your Order",
    "Your Wallet",
  ]

  useEffect(() => {
    if (isSuccess) {
      setFlow(2);
    }
  }, [isSuccess]);


  const completePayment = () => {
    completedForm.setValues({
      paymentCode: cableForm.values.paymentCode?.toString(),
      customerId: cableForm.values.customerId?.toString(),
      customerEmail: userDetails?.email,
      customerMobile: userDetails?.phone_number || "07000000000",
      requestReference: payBill?.createTransaction.transactionReference,
      amount: cableForm.values.amount,
    });

    console.log(cableForm.values, completedForm.values)

    completedForm.handleSubmit();
  };
  
  const completeAlternate = (ref: any) => {
    completedForm.setValues({ 
      transactionDetails: ref, 
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

                billers?.map((item: any) => (
                  <button
                    key={item.Id}
                    onClick={() => {
                      setActive(item);
                      cableForm.setFieldValue("service", item.Name)
                      cableForm.setFieldValue("biller", item.Name)
                      cableForm.setFieldValue("billerId", item.Id.toString())
                      cableForm.setFieldValue("paymentMode", "wallet")
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
          <BillForm
            active={active}
            bill={bill}
            data={data}
            setData={setData}
            isPending={isPending}
            formik={cableForm}
            setFlow={setFlow}
          />
        ) : flow === 2 ? (
          <BillDetails
            active={active}
            bill={bill}
            data={{ ...data, ...payBill }}
            completedForm={completedForm} 
            completeAlternate={completeAlternate}
            setFlow={setFlow}
          />
        ) : flow === 3 ? (
          <BillPayment
            active={active}
            bill={bill}
            data={{ ...data, ...payBill, isPending: completePending }}
            setFlow={setFlow}
            completeAction={completePayment}
          />
        ) : flow === 4 ? (
          <BillReceipt active={active} data={data} bill={bill} setFlow={setFlow} />
        ) : (
          ""
        )}
      </ModalsLayout>
    </>
  );
};

export default BillServices;
