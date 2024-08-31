import React, { useEffect, useState } from "react";
import ModalsLayout from "../modalsLayout";
import { useGetBillersByCategoryId } from "@/helpers/api/useCategories";
import CustomIcons from "@/components/custom/customIcons";
import { useCompleteBillPayment, usePayBill } from "@/helpers/api/useServices";
import ToastComponent from "@/components/common/toastComponent";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import BettingForm from "./bettingForm";
import BettingDetails from "./bettingDetails";
import BettingPayment from "./bettingPayment";
import BettingPurchase from "./bettingCompleted";
import AlternatePaymentModal from "../AlternatePaymentModal";
type BettingProviders = {
  ShortName: string;
  Name: string;
  Id: string;
};

const BettingServices = ({ setShow, show }: any) => {
  const [flow, setFlow] = useState(0);
  const [data, setData] = useState<any>();
  const [active, setActive] = useState<BettingProviders | null>();
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
  const { billers, isLoading } = useGetBillersByCategoryId("41");
  const [isPadded, setIsPadded] = useState(true);

  const flowHeaders: string[] = [
    "Betting",
    "Betting",
    "Your Order",
    "Your Wallet",
  ];

  const providersList: BettingProviders[] = billers?.BillerList?.Category[0]?.Billers

  useEffect(() => {
    if (isSuccess) {
      // setData({ ...data, transactionReference: payCable?.transactionReference })
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

  const providers: any = [
    {
      LogoUrl: "1XBET.png",
      Name: "1XBET",
      Id: "1",
    },
    {
      LogoUrl: "360Bet.png",
      Name: "360Bet",
      Id: "2",
    },
    {
      LogoUrl: "Afriplay.png",
      Name: "Afriplay",
      Id: "3",
    },
    {
      LogoUrl: "BangBet.png",
      Name: "BangBet",
      Id: "4",
    },
    {
      LogoUrl: "BET.png",
      Name: "BET",
      Id: "5",
    },
    {
      LogoUrl: "Bet9ja.png",
      Name: "Bet9ja",
      Id: "6",
    },
    {
      LogoUrl: "QuestionMark.png",
      Name: "",
      Id: "7",
    },
    {
      LogoUrl: "Betfarm.png",
      Name: "Betfarm",
      Id: "8",
    },
    {
      LogoUrl: "Betgr8.png",
      Name: "Betgr8",
      Id: "9",
    },
    {
      LogoUrl: "BetKing.png",
      Name: "BetKing",
      Id: "11",
    },
    {
      LogoUrl: "Betway.png",
      Name: "Betway",
      Id: "12",
    },
    {
      LogoUrl: "GLOBABET.png",
      Name: "GLOBABET",
      Id: "13",
    },

    {
      LogoUrl: "ILOT.png",
      Name: "ILOT.png",
      Id: "14",
    },
    {
      LogoUrl: "KWIKBET247.png",
      Name: "KWIKBET",
      Id: "16",
    },
    {
      LogoUrl: "nairabet.png",
      Name: "Nairabet.com",
      Id: "17",
    },
    {
      LogoUrl: "NetBet.png",
      Name: "Netbet",
      Id: "18",
    },
    {
      LogoUrl: "Quickteller.png",
      Name: " Quickteller",
      Id: "19",
    },
    {
      LogoUrl: "SUREBET247.png",
      Name: "SUREBET247",
      Id: "20",
    },
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
                  // <button key={item.Id} onClick={() => {setActive(item); setFlow(1)}} title={item.Name}>
                  //   <CustomIcons src={"/images/betting/" + item.ShortName +".jpg"} alt={item.Name} />
                  // </button>
                  <button
                    key={item.Id}
                    onClick={() => {
                      setActive(item);
                      setFlow(1);
                    }}
                    title={item.Name}
                  >
                    <CustomIcons
                      // src={"/images/betting/" + item.LogoUrl + ".png"}
                      src={`/images/Betting/${item.LogoUrl}`}
                      alt={item.Name}
                    />
                  </button>
                ))
              }
            </div>
          </main>
        ) : flow === 1 ? (
          <BettingForm
            active={active}
            data={data}
            setData={setData}
            isPending={isPending}
            formik={cableForm}
            setFlow={setFlow}
          />
        ) : flow === 2 ? (
          <BettingDetails
            active={active}
            data={{ ...data, ...payCable }}
            setFlow={setFlow}
          />
        ) : flow === 3 ? (
          <BettingPayment
          
            active={active}
            data={{ ...data, ...payCable, isPending: completePending }}
            setFlow={setFlow}
            completeAction={completePayment}
          />
        ) : flow === 4 ? (
          <BettingPurchase active={active} data={data} setFlow={setFlow} />
        ) : (
          ""
        )}
      </ModalsLayout>
    </>
  );
};

export default BettingServices;
