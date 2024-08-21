"use client";
import React, { useState, useEffect } from "react";
import { useCompleteBillPayment, usePayBill } from "@/helpers/services";
import ModalsLayout from "../modalsLayout";
import ToastComponent from "../../common/toastComponent";
import ElectricityBillForm from "./electricityBillForm";
import ElectricityBillDetails from "./electricityBillDetails";
import ElectricityBillToken from "./electricityBillToken";
import ElectricityBillPayment from "./electricityBillPayment";
import CustomIcons from "@/components/custom/customIcons";

const ElectricityBillModal = ({ show, setShow, billers }: any) => {
  const { data, formik, isError, isPending, isSuccess, error } =
    usePayBill("electricity");
  const {
    data: completedBill,
    formik: completedForm,
    isPending: completePending,
    isSuccess: completedSuccess,
  } = useCompleteBillPayment(data?._id || "", "Electricity");
  const [formData, setFormData] = useState<any>();
  const [flow, setFlow] = useState(0);
  const providers = [
    {
      LogoUrl: "AbujaElectricDistributionCompany",
      Name: "Abuja Electric Distribution Company",
      Id: 1,
    },
    {
      LogoUrl: "beninElectricDistributionPLC",
      Name: "Benin Electric",
      Id: 2,
    },
    {
      LogoUrl: "EkoElectricDistributionCompany",
      Name: "Eko Electric Distribution Company",
      Id: 3,
    },
    {
      LogoUrl: "EnuguElectricityDistributionCompany",
      Name: "Enugu Electric",
      Id: 4,
    },
    { LogoUrl: "IBEDC", Name: "IBEDC", Id: 5 },
    { LogoUrl: "IkejaElectric", Name: "Ikeja Electric", Id: 6 },
    {
      LogoUrl: "JosElectricityDistributionCompany",
      Name: "Jos Electric Distribution Company",
      Id: 7,
    },
    {
      LogoUrl: "KadunaElectricityDistributionCompany",
      Name: "Kaduna Electric Distribution Company",
      Id: 8,
    },
    {
      LogoUrl: "KanoElectricityDistributionCompany",
      Name: "Kano Electric",
      Id: 9,
    },
    {
      LogoUrl: "PortHarcourtElectricityDistributionCompany",
      Name: "Port Harcourt Electric",
      Id: 10,
    },
    { LogoUrl: "YEDC", Name: "YEDC", Id: 11 },
  ];
  const flowHeaders: string[] = [
    "Electricity Bill",
    "Your Order",
    "Your Wallet",
    "Token Details",
  ];

  const completePayment = () => {
    completedForm.setValues(data?.transactionDetails);
    console.log(completedForm.errors);
    completedForm.handleSubmit();
  };

  useEffect(() => {
    if (completedSuccess) {
      setFlow(4);
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
        isSuccess={isSuccess}
        isError={isError}
        msg={isSuccess ? "Successful" : isError ? "Error " + error : ""}
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
            <div className="grid grid-cols-4 gap-5 py-5">
              {providers?.map((item: any) => (
                  <button
                  key={item.Id}
                  onClick={() => {
                    // setActive(item);
                    setFlow(1);
                  }}
                  title={item.Name}
                >
                  <CustomIcons
                    src={"/images/electricity/" + item.LogoUrl+ ".png"}
                    alt={item.Name}
                  />
                </button>
              ))}
            </div>
          </main>
        ) : flow === 1 ? (
          <ElectricityBillForm
            setFlow={setFlow}
            data={formData}
            formik={formik}
            billers={billers}
            isPending={isPending}
            setData={setFormData}
          />
        ) : flow === 2 ? (
          <ElectricityBillDetails
            data={{ ...formData, ...data }}
            setFlow={setFlow}
          />
        ) : flow === 3 ? (
          <ElectricityBillPayment
            data={{ ...formData, ...data }}
            completeAction={completePayment}
            setFlow={setFlow}
          />
        ) : flow === 4 ? (
          <ElectricityBillToken data={completedBill} setFlow={setFlow} />
        ) : (
          ""
        )}
      </ModalsLayout>
    </>
  );
};

export default ElectricityBillModal;