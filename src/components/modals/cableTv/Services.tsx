import React, { useEffect, useState } from "react";
import ModalsLayout from "../modalsLayout";
import Image from "next/image";
import CableTvForm from "./cableTvForm";
import CableTvDetails from "./detailsModal";
import CableTvPayment from "./payment"
import { useGetBillersByCategoryId } from "@/helpers/categories";
import CableTvPurchase from "./Purchasedetails";
import CustomIcons from "@/components/custom/customIcons";
type cableTvProviders = {
  LogoUrl: string;
  Name: string;
  Id: string;
}


const CableTVServices = ({ setShow, show }: any) => {
  const [flow, setFlow] = useState(0)
  const [data, setData] = useState<any>()
  const [active, setActive] = useState<cableTvProviders | null>()
  // const { billers, isLoading } = useGetBillersByCategoryId("2")

  const flowHeaders: string[] = ["Cable TV", "Cable TV", "Your Order", "Your Wallet"]

  // const providers: cableTvProviders[] = billers?.BillerList?.Category[0]?.Billers
  
  const providers: cableTvProviders[] = [
    {
      LogoUrl: "actTV.png",
      Name: "actTv",
      Id: "1",
    },
    {
      LogoUrl: "BoxOffice.png",
      Name: "Box Office",
      Id: "2",
    },
    {
      LogoUrl: "DaarSat.png",
      Name: "DaarSat",
      Id: "3",
    },
    {
      LogoUrl: "DSTV.png",
      Name: "DSTV",
      Id: "4",
    },
    {
      LogoUrl: "GOTV.png",
      Name: "GOTV",
      Id: "5",
    },
    {
      LogoUrl: "InfinityTv.png",
      Name: "Infinity TV",
      Id: "6",
    },
    {
      LogoUrl: "irokoTv.png",
      Name: "Iroko Tv",
      Id: "7",
    },
    {
      LogoUrl: "kwese.png",
      Name: "kwese",
      Id: "8",
    },
    {
      LogoUrl: "montageTv.png",
      Name: "Montage TV",
      Id: "9",
    },
    {
      LogoUrl: "100NairaShop.png",
      Name: "100 Naira Shop",
      Id: "10",
    },
    {
      LogoUrl: "playTv.png",
      Name: "Play TV",
      Id: "11",
    },
    {
      LogoUrl: "BigXtv.png",
      Name: "Big X TV",
      Id: "12",
    },
    // {
    //   LogoUrl: "starTimesTv.png",
    //   Name: "StarTimes TV",
    //   Id: "13",
    // },
    
    {
      LogoUrl: "TrendTv.png",
      Name: "Trend TV",
      Id: "14",
    }
  ];
  return (
    <ModalsLayout header={flowHeaders[flow]} flow={flow} setFlow={setFlow} setShow={setShow} show={show}>
      
      {

      flow === 0 ?
      <main>
        <header className="font-normal text-[20px] font-OpenSans">Choose A Service Provider</header>
        <div className="grid grid-cols-4 gap-5 py-5 ">
        {
          // isLoading ?
          // <>
          //   <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
          //   <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
          //   <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
          //   <div className="w-[120px] rounded bg-slate-200 h-[120px] animate-pulse"></div>
          // </>
          // :
            providers?.map((item) => (
                <button key={item.Id} onClick={() => {setActive(item); setFlow(1)}}>
                  <CustomIcons src={"/images/cableTvImages/" + item.LogoUrl} alt={item.Name} />
                </button>
              )
            )
        }
        </div>
      </main>
      :
      flow === 1 ?
      <CableTvForm active={active} data={data} setData={setData} setFlow={setFlow} />
      :
      flow === 2 ?
      <CableTvDetails active={active} data={data} setFlow={setFlow} />
      :
      flow === 3 ?
      <CableTvPayment data={active} setFlow={setFlow} />
      :
      flow === 4 ?
      <CableTvPurchase active={active} data={data} setFlow={setFlow} />
      :
      ""

      }

    </ModalsLayout>
  );
};

export default CableTVServices;
