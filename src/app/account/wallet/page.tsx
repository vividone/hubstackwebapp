"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/common/button";
import Image from "next/image";
import WalletForm from "@/components/modals/createwalletmodal";
import { useGetWallet, useGetWalletHistory } from "@/helpers/wallet";
import Card from "@/components/common/card";
import Mywallet from "@/components/common/Existinguserwallet";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";


const Wallet = () => {
  const [showWallet, setShowwallet] = useState(false);
  const { userWallet } = useGetWallet()
  const [hasWallet, ] = useLocalStorage<any>(TOKEN.HASWALLET)
  const [ wallet, setWallet] = useLocalStorage<any>(TOKEN.WALLET); 
  const { history } = useGetWalletHistory()


  const setShow = (bool: any) => {
    setShowwallet(bool);
  };

  useEffect(() => {
    setWallet({ ...wallet, ...userWallet })
  }, [userWallet, wallet])

  const cardData = {
      logo: "/images/dollar-bag-1.svg",
      amount: wallet?.balance || "0",
      type: "Balance",
      visibility: true,
    }

  return (
    <div className="">
      <div className="md:pr-[30px] p-[60px_25px]  border border-transparent border-r-[#E7E7E7]">

      <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-CabinetGrosteque mb-[50px] font-medium">Wallet</h2>

      {
        !hasWallet || !userWallet ? 
        <>
        {showWallet && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
            <WalletForm setShow={setShow} />
          </div>
        )}

        <div className="flex flex-col flex-1 justify-center items-center gap-4 my-8">

          <Image src={"/images/magnifyingGlass.png"} alt="magnifying glass" width={160} height={100} />

          <p className="mt-1 text-primary_dark 2xl:text-[32px] text-[24px] my-4">You do not have a wallet yet</p>

          <div className="flex flex-col gap-4 items-center justify-center mt-2">
            <Button size="lg" onClick={() => setShow(true)}>
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
        </>
        : 
        <div className="flex flex-1 flex-wrap relative h-full ">
          <div className="md:w-[353px] w-full">
            {showWallet && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-end">
                <Mywallet setShow={setShow} />
              </div>
            )}
            <Card value={cardData} />
            <div className="mt-12">
              <Button size="full" onClick={() => setShow(true)}>
                FUND WALLET
              </Button>
            </div>
          </div>
        
          <div className="flex-1 md:p-[60px_30px] w-full">
            <h2 className="font-medium 2xl:text-[25px] text-[20px] pb-[40px]">Wallet History</h2>
            
            <div className="w-full py-2 overflow-x-auto">
              <table className="table-auto text-left w-full min-w-[700px]">
                        <thead>
                            <tr className="bg-[#3D3066]/[0.1]">
                                <th className="p-[20px]">Date</th>
                                <th className="p-[20px]">Amount</th>
                                <th className="p-[20px]">Type</th>
                                <th className="p-[20px]">Status</th>
                            </tr>
                        </thead>
                        <tbody className="">

                        </tbody>
              </table>
            </div>

          </div>

        </div>
        }
        </div>

        
    </div>
  );
};

export default Wallet;
