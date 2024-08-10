import React, { useEffect, useState } from "react";
import ModalsLayout from "../modalsLayout";
import Image from "next/image";
import CableTvForm from "./cableTvForm";
import CableTvDetails from "./cableTvDetails";
import CableTvPayment from "./cableTvPayment";
import { useGetBillersByCategoryId } from "@/helpers/categories";

type cableTvProviders = {
  Image: string;
  title: string;
  id: string;
}


const CableTVServices = ({ setShow, show }: any) => {
  const [flow, setFlow] = useState(0)
  const [data, setData] = useState<any>()
  const [active, setActive] = useState<cableTvProviders | null>()
  const { billers, isLoading } = useGetBillersByCategoryId("2")

  const flowHeaders: string[] = ["Cable TV", "Cable TV", "Your Order", "Your Wallet"]

  useEffect(() => {
    console.log(billers)
  }, [billers])

  const providers: cableTvProviders[] = [
    {
      Image: "/images/cableTvImages/actTv.png",
      title: "actTv",
      id: "1",
    },
    {
      Image: "/images/cableTvImages/BoxOffice.png",
      title: "Box Office",
      id: "2",
    },
    {
      Image: "/images/cableTvImages/DaarSat.png",
      title: "DaarSat",
      id: "3",
    },
    {
      Image: "/images/cableTvImages/DSTV.png",
      title: "DSTV",
      id: "4",
    },
    {
      Image: "/images/cableTvImages/GOTV.png",
      title: "GOTV",
      id: "5",
    },
    {
      Image: "/images/cableTvImages/InfinityTv.png",
      title: "Infinity TV",
      id: "6",
    },
    {
      Image: "/images/cableTvImages/irokoTv.png",
      title: "Iroko Tv",
      id: "7",
    },
    {
      Image: "/images/cableTvImages/kwese.png",
      title: "kwese",
      id: "8",
    },
    {
      Image: "/images/cableTvImages/montageTv.png",
      title: "Montage TV",
      id: "9",
    },
    {
      Image: "/images/cableTvImages/100NairaShop.png",
      title: "100 Naira Shop",
      id: "10",
    },
    {
      Image: "/images/cableTvImages/playTv.png",
      title: "Play TV",
      id: "11",
    },
    {
      Image: "/images/cableTvImages/BigXtv.png",
      title: "Big X TV",
      id: "12",
    },
    {
      Image: "/images/cableTvImages/starTimesTv.png",
      title: "StarTimes TV",
      id: "13",
    },
    {
      Image: "/images/cableTvImages/TrendTv.png",
      title: "Trend TV",
      id: "14",
    }
  ];

  return (
    <ModalsLayout header={flowHeaders[flow]} flow={flow} setFlow={setFlow} setShow={setShow} show={show}>
      
      {

      flow === 0 ?
      <main>
        <header className="font-normal text-[20px] font-OpenSans">Choose A Service Provider</header>
        <div className="grid grid-cols-4 gap-5 py-5">
        {
            providers.map((item) => (
                <button key={item.id} onClick={() => {setActive(item); setFlow(1)}}>
                  <Image src={item.Image} alt={item.title} width={122} height={120} />
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
      ""

      }

    </ModalsLayout>
  );
};

export default CableTVServices;
