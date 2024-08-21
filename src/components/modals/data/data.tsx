import React, { useEffect } from "react";
import ModalsLayout from "../modalsLayout";
import { Button } from "@/components/common/button";
import Link from "@/components/custom/link";
import CustomIcons from "@/components/custom/customIcons";
import { useState } from "react";
import DataForm from "./dataForm";
import DataDetails from "./dataDetails";
import DataPayment from "./payment";
import PurchaseDetails from "./dataPurchaseDetails";
import { useGetBillersByCategoryId } from "@/helpers/categories";
import { useCompleteBillPayment, usePayBill } from "@/helpers/services";

type dataProps = {
  name: string;
  network: string;
};

const Data = ({ setShow, show }: any) => {
  const [flow, setFlow] = useState(0);
  const [errors, setError] = useState<any>({});
  const [data, setData] = useState<dataProps>({ name: "", network: "" });
  const [pseudo, setpseudoUpdate] = useState("");
  const [isPadded, setIsPadded] = useState(true);

  const { billers, isLoading } = useGetBillersByCategoryId("4");
  const providers = billers?.BillerList?.Category[0]?.Billers;
  console.log(providers?.ShortName)
  const {
    data: payData,
    formik: Dataform,
    isError,
    isPending,
    isSuccess,
    error,
  } = usePayBill("buy-data");

  const flowHeaders: string[] = [
    "Data Bundle",
    "Data Bundle",
    "Your Order",
    "Your Wallet",
    "Purchase Details",
  ];
  const paddingHandler = () => {
    if (flow == 3) {
      setIsPadded(false);
    } else {
      setIsPadded(true);
    }
  };
  useEffect(() => {
    paddingHandler();
  }, [flow]);

  useEffect(() => {
    if (isSuccess) {
      setFlow(2);
    }
  }, [isSuccess]);

  return (
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
          formik={Dataform}
          isPending={isPending}
        />
      ) : flow === 2 ? (
        <DataDetails
          setFlow={setFlow}
          item={data}
          data={{ ...data, ...payData }}
          paddingHandler={paddingHandler}
        />
      ) : flow === 3 ? (
        <DataPayment setFlow={setFlow} data={data} pseudo={pseudo} />
      ) : flow === 4 ? (
        <PurchaseDetails setFlow={setFlow} data={data} pseudo={pseudo} />
      ) : (
        <>
          <header className="font-normal text-[20px] font-OpenSans">
            Choose A Service Provider
          </header>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {isLoading ? (
                <>
                  <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
                  <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
                  <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
                  <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
                </>
              ) : (
                providers?.map(
              (item:any) => (
                <button
                  key={item.id}
                  onClick={() => {
                    return (
                      setFlow(1),
                      setData(item)
                      
                    );
                  }}
                  // className={"  hover:border-2 border-[#3D3066] rounded"}
                >
                  <CustomIcons
                    src={`/images/airtime/${item?.ShortName }.png`}
                    alt={item?.ShortName}
                  />
                </button>
              )
            ))}
            {/* {error?.network ? (
              // <p className="mt-2 text-[12px] text-red-400">{error?.network}</p>
            ) : (
              ""
            )} */}
          </div>
        </>
      )}
    </ModalsLayout>
  );
};

export default Data;
