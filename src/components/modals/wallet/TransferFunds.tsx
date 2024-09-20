"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "../../common/button";
import Link from "next/link";
import AlternateWalletFunding from "../../modals/wallet/AlternateFunding";
import { useFundWallet, useVerifyFund } from "@/helpers/api/useWallet";
import Confirmation from "../confirmation";
import ModalsLayout from "../modalsLayout";
import CurrentBalance from "../currentBalance";
import TransferToWallet from "./transfer/walletToWalletForm";
import TransferToBank from "./transfer/walletToBankForm";

interface MywalletProps {
  setShow: (show: boolean) => void;
  refreshWallet: (amount: number) => void;
}

const TransferFunds: React.FC<MywalletProps> = ({ setShow, refreshWallet }) => {
  const {
    data: fundData,
    formik,
    isPending,
    isSuccess,
    isError,
    error,
  } = useFundWallet();
  const { data, formik: verify, isSuccess: isSuccessVerify } = useVerifyFund();
  const [showAlternate, setShowAlternate] = useState(false);
  const [flow, setFlow] = useState(0);
  const [form, setForm] = useState<any>({});
  const [content, setContent] = useState("Wallet-Wallet");
  const [amount, setAmount] = useState<string>("0");

  const flowHeaders = ["Transfer", "Transfer", "Transfer Details", "Transfer"]

  const handleSubmit = async (e: FormEvent) => {
    
  };

  const closeSuccess = () => {
    setFlow(0);
    setShow(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setFlow(1);
    }
  }, [isSuccess])

  return (
    <ModalsLayout flow={flow} setFlow={setFlow} header={flowHeaders[flow]} show={true} setShow={setShow} isPadded={false}>
      
      <div onSubmit={handleSubmit} className="mt-2">
        <div className="px-10">
            <CurrentBalance />
        </div>
        <nav className="mt-2 mb-8 p-[0_40px] ">
          <div className="grid grid-cols-2 gap-12 border-b border-[#E7E7E7]">

            {
              [
                { id: 0, content: "Wallet-Wallet" },
                { id: 1, content: "Wallet-Bank" },
              ]
              .map((item: {id: number, content: string}) => (
                <Link
                  key={item.id}
                  href="#"
                  title={item.content} aria-label={item.content}
                  onClick={() => setContent(item.content)}
                  className={`text-lg md:text-lg xxl:text-[25px] border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
                    content === item.content
                      ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                      : "font-normal"
                  }`}
                >
                  <span>{item.content}</span>
                </Link>
              ))
            }
            
          </div>
        </nav>
      </div>  
          
      <div className="px-[40px]">
      {
        content === "Wallet-Wallet" ?
        <TransferToWallet form={form} setForm={setForm} formik={formik} isPending={isPending} handleSubmit={handleSubmit} />
        :
        <TransferToBank form={form} setForm={setForm} formik={formik} isPending={isPending} handleSubmit={handleSubmit} />

      }
      </div>
        
      <div className="flex justify-center mt-6">
        <Button
          variant="secondary"
          size="long"
          onClick={() => setContent("Wallet-Bank")}
        >
          <span className="text-[16px]">
            TRANSFER TO A BANK ACCOUNT INSTEAD
          </span>
        </Button>
        {showAlternate && <AlternateWalletFunding setShow={setShowAlternate} amount={+amount} setAmount={setAmount} setFlow={() => setFlow} refreshWallet={() => {}} />}
      </div>

      {isSuccessVerify && (
        <Confirmation
          status={"success"}
          setShow={setShow}
          heading={"Fund Wallet"}
          text={"Transaction Successful"}
          subtext={"Your wallet has been credited with #" + data.amount}
          buttonProps={{ text: "THANK YOU", action: () => closeSuccess() }}
        />
      )}
    </ModalsLayout>
  );
};

export default TransferFunds;
