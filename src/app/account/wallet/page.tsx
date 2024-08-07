"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/common/button";
import Image from "next/image";
import WalletForm from "@/components/modals/wallet/createwalletmodal";
import { useGetWallet, useGetWalletHistory } from "@/helpers/wallet";
import Card from "@/components/common/card";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { History } from "@/components/tables/history";
import { Loader } from "@/assets/common/loader";
import Mywallet from "@/components/modals/wallet/Existinguserwallet";


const Wallet = () => {
  const [showWallet, setShowWallet] = useState(false);
  const { userWallet, isLoading } = useGetWallet()
  const [hasWallet, ] = useLocalStorage<any>(TOKEN.HASWALLET)
  const [ wallet, setWallet] = useLocalStorage<any>(TOKEN.WALLET); 
  const { history } = useGetWalletHistory()

  const refresh = (amount: number) => {
    setWallet({ ...wallet, balance: amount})
  }

  const cardData = {
      logo: "/images/dollar-bag-1.svg",
      amount: wallet?.balance || userWallet?.balance,
      type: "Balance",
      visibility: true,
  }

  useEffect(() => {
    setWallet(userWallet)
  }, [userWallet])

  return (
    <div className="">
      <div className="md:pr-[30px] px-[25px] ">


      {
        !hasWallet || !userWallet ? 
        <>
        <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-CabinetGrosteque mb-[50px] mt-[60px] font-medium">Wallet</h2>
        { showWallet && <WalletForm show={showWallet} setShow={setShowWallet} /> }

        {
          isLoading ? <Loader /> :
          <div className="flex flex-col flex-1 justify-center items-center gap-4 my-8">

          <Image src={"/images/magnifyingGlass.png"} alt="magnifying glass" width={160} height={100} />

          <p className="mt-1 text-primary_dark 2xl:text-[32px] text-[24px] my-4">You do not have a wallet yet</p>

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
        }
        </>
        : 
        <div className="flex flex-1 flex-wrap relative h-full ">
          <div className="md:w-[383px] w-full sm:pr-[30px] py-[60px] border border-transparent sm:border-r-[#E7E7E7]">
            <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-CabinetGrosteque mb-[30px] font-medium">Wallet</h2>

            { showWallet && <Mywallet setShow={setShowWallet} refreshWallet={refresh}/> }

            <Card value={cardData} />

            <div className="mt-12">
              <Button size="full" onClick={() => setShowWallet(true)}>
                FUND WALLET
              </Button>
            </div>

          </div>
        
          <div className="flex-1 md:p-[60px_30px] w-full">
            <h2 className="font-medium 2xl:text-[25px] text-[20px] pb-[30px]">Wallet History</h2>
            
            <History history={history} />

          </div>

        </div>
        }
        </div>

        
    </div>
  );
};

export default Wallet;
