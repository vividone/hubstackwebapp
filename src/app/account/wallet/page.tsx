"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/common/button";
import Image from "next/image";
import WalletForm from "@/components/modals/wallet/createwalletmodal";
import { useCreateWallet, useGetAccountBalance, useGetWallet, useGetWalletHistory } from "@/helpers/api/useWallet";
import Card from "@/components/common/card";
import { History } from "@/components/tables/history";
import { Loader } from "@/assets/common/loader";
import Mywallet from "@/components/modals/wallet/Existinguserwallet";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import ToastComponent from "@/components/common/toastComponent";
import PlusIcon from "@/assets/icons/PlusIcon";
import TransferIcon from "@/assets/icons/TransferIcon";
import TransferFunds from "@/components/modals/wallet/TransferFunds";
import WalletIcon from "@/assets/icons/WalletIcon";
import MywalletDetails from "@/components/modals/wallet/walletDetails";


const Wallet = () => {
  const { wallet, formik, isPending, isSuccess, isError, error } = useCreateWallet();
  const [showWallet, setShowWallet] = useState(false);
  const [showWalletDetails, setShowWalletDetails] = useState(false);
  const [transferFunds, setTransferFunds] = useState(false);
  const { userWallet: getWallet, isLoading } = useGetWallet();
  const [ userWallet, setUserWallet ] = useState(getWallet);
  const { walletBalance } = useGetAccountBalance();
  const [ balance, setBalance] = useState(0);
  const [ hasWallet, setHasWallet] = useLocalStorage<boolean>(TOKEN.HASWALLET);
  const { history } = useGetWalletHistory();
  
  const refresh = (amount: number) => {
    setBalance(+balance + amount);
  };

  useEffect(() => {
    if(isSuccess) {
      setHasWallet(true)
      setUserWallet(wallet)
      setShowWallet(false)
    }
  }, [isSuccess])

  useEffect(() => {
    setBalance(walletBalance?.balance)
  }, [walletBalance])

  const cardData = {
      logo: "/images/dollar-bag-1.svg",
      amount: balance,
      type: "Balance",
      visibility: true,
  }


  return (
    <div className="">
      <div className="md:pr-[30px] px-[25px] ">
        
      <ToastComponent
        isSuccess={isSuccess}
        isError={isError}
        msg={
          isSuccess
            ? "Wallet created successfully"
            : isError
            ? "Wallet creation error: " + error
            : Object.values(formik.errors)?.join(", ")
        }
      />
        
        {!hasWallet && (userWallet && userWallet.length === 0) ? (
          <>
            <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-CabinetGrosteque mb-[50px] mt-[60px] font-medium">
              Wallet
            </h2>
            {showWallet && (
              <WalletForm show={showWallet} setShow={setShowWallet} formik={formik} isPending={isPending} />
            )}

            {isLoading ? (
              <Loader />
            ) : (
              <div className="flex flex-col flex-1 justify-center items-center gap-4 my-8">
                <Image
                  src={"/images/magnifyingGlass.png"}
                  alt="magnifying glass"
                  width={160}
                  height={100}
                />

                <p className="mt-1 text-primary_dark 2xl:text-[32px] text-[24px] my-4">
                  You do not have a wallet yet
                </p>

                <div className="flex flex-col gap-4 items-center justify-center mt-2">
                  <Button size="lg" onClick={() => setShowWallet(true)}>
                    <span className="flex items-center">
                      <Image
                        src="/images/cross.svg"
                        alt="crosslogo"
                        width={20}
                        height={20}
                      />
                    </span>
                    <span>CREATE WALLET</span>
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col flex-1 flex-wrap relative h-full ">
            <div className=" w-full py-[60px]">
              <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-CabinetGrosteque mb-[30px] font-medium">
                Wallet
              </h2>


              {/* modal */}

              {showWalletDetails && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 ">
                  <MywalletDetails setShow={setShowWalletDetails} wallet={getWallet || wallet} />
                </div>
              )}
              
              {showWallet && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 ">
                  <Mywallet setShow={setShowWallet} refreshWallet={refresh} wallet={getWallet || wallet} balance={balance} />
                </div>
              )}

              {transferFunds && (
                <TransferFunds setShow={setTransferFunds} refreshWallet={refresh}  />
              )}

              <div className="flex lg:flex-row flex-col pr-[3%] gap-6 justify-between bg-[#E6FBFF] rounded-[8px]">
                <Card value={cardData} />
                <div className="flex gap-12 p-4 items-center md:w-fit w-full">
                  
                  <button className="flex flex-col gap-3 items-center" onClick={() => setShowWalletDetails(true)}>
                    <span className="flex items-center justify-center h-[60px] w-[60px] p-5 bg-[#000]/[0.1] rounded-full"
                    >
                    <WalletIcon />
                    </span>
                    <span className="uppercase font-semibold">Account</span>
                  </button>
                  <button className="flex flex-col gap-3 items-center" onClick={() => setShowWallet(true)}>
                    <span className="flex items-center justify-center h-[60px] w-[60px] p-5 bg-[#000]/[0.1] rounded-full"
                    >
                    <PlusIcon />
                    </span>
                    <span className="uppercase font-semibold">Fund</span>
                  </button>

                  <button className="flex flex-col gap-3 items-center" onClick={() => setTransferFunds(true)}>
                    <span className="flex items-center justify-center h-[60px] w-[60px] p-[22px] bg-[#000]/[0.1] rounded-full"
                    >
                    <TransferIcon />
                    </span>
                    <span className="uppercase font-semibold">Transfer</span>
                  </button>
                </div>
              </div>

            </div>

            <div className="flex-1 mt-[30px] w-full">
              <h2 className="font-medium 2xl:text-[25px] text-[20px] pb-[30px]">
                Wallet Transactions
              </h2>

              <History history={history} fields={["Date", "Amount", "Status"]}  />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
