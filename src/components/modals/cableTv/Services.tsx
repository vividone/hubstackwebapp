import React from "react";
import ModalsLayout from "../modalsLayout";
import Image from "next/image";

const CableTVServices = ({ setShow, show }: any) => {
  const data = [
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
        Image: "/images/cableTvImages/playTv.png",
        title: "playTv",
        id: "6",
      }
  ];
  return (
    <ModalsLayout header="Cable TV" setShow={setShow} show={show}>
      <header className="font-normal text-[20px] font-OpenSans mt-12 ">
        Choose A Service Provider
        
      </header>
      <main className="flex gap-2 flex-wrap justify-between">
        {data.map((items, key) => {
          return (
            <div className="w-[122.57px] h-[119px] rounded-[2px] cursor-pointer transform hover:scale(105)" key={key}>
              <Image src={items.Image} alt="" width={122.57} height={119} />
            </div>
          );
        })}
      </main>
    </ModalsLayout>
  );
};

export default CableTVServices;
