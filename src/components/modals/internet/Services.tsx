import React, { useEffect, useState } from "react";
import ModalsLayout from "../modalsLayout";
import { useGetBillersByCategoryId } from "@/helpers/api/useCategories";
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

const InternetServices = ({ setShow, show }: any) => {
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
  } = usePayBill("cable");
  const {
    data: completedBill,
    formik: completedForm,
    isPending: completePending,
    isSuccess: completedSuccess,
  } = useCompleteBillPayment(payCable?._id || "");
  const { billers, isLoading } = useGetBillersByCategoryId("5");
  const [isPadded, setIsPadded] = useState(true);

  const flowHeaders: string[] = [
    "Internet",
    "Internet",
    "Your Order",
    "Your Wallet",
  ];

  // const providers: InterntProviders[] = billers?.BillerList?.Category[0]?.Billers

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

  const providers = [
    { LogoUrl: "ZukuFiber", Name: "Zuku Fiber", Id: 1 },
    {
      LogoUrl: "UYOLOCALGOVERNMENTCOLLECTIONS",
      Name: "UYO LOCAL GOVERNMENT COLLECTIONS",
      Id: 2,
    },
    {
      LogoUrl: "TouchpointandDevices",
      Name: "Touchpoint and Devices",
      Id: 3,
    },
    { LogoUrl: "Swift4GSubscription", Name: "Swift 4G", Id: 4 },
    { LogoUrl: "SmileBundle", Name: "Smile Bundle", Id: 5 },
    { LogoUrl: "SmartSMSSolutions", Name: "Smart SMS Solutions", Id: 6 },
    {
      LogoUrl: "MultilinksInternete-PINVoucher",
      Name: "Multilinks Internet e-PIN Voucher",
      Id: 7,
    },
    { LogoUrl: "MTNfixedInternet", Name: "MTN fixed Internet", Id: 8 },
    { LogoUrl: "mobitelpayment", Name: "mobitel payment", Id: 9 },
    { LogoUrl: "jokatelswitch", Name: "jokatel switch", Id: 10 },
    { LogoUrl: "ipNXsubscription", Name: "ipNX subscription", Id: 11 },
    {
      LogoUrl: "InternetSolutionNigeria",
      Name: "Internet Solution Nigeria",
      Id: 12,
    },
    { LogoUrl: "estream", Name: "estream", Id: 13 },
    { LogoUrl: "ESBAdesigners", Name: "ESBA designers", Id: 14 },
    { LogoUrl: "spectranet", Name: "spectranet", Id: 15 },
  ];

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
        isPadded={isPadded}
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

                providers?.map((item: any) => (
                  <button
                    key={item.Id}
                    onClick={() => {
                      setActive(item);
                      setFlow(1);
                    }}
                    title={item.Name}
                  >
                    <CustomIcons
                      src={"/images/internet/" + item.LogoUrl+ ".png"}
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
