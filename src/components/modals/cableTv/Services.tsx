import React from "react";
import ModalsLayout from "../modalsLayout";
import Image from "next/image";
const cableTVServices = ({ setShow, show }: any) => {
  const data = [
    {
      Image: "images/cableTvImages/actTv.png",
      title: "actTv",
      id: "1",
    },
    {
      Image: "images/cableTvImages/BoxOffice.png",
      title: "Box Office",
      id: "2",
    },
    {
      Image: "images/cableTvImages/DaarSat.png",
      title: "DaarSat",
      id: "3",
    },
    {
      Image: "images/cableTvImages/DSTV.png",
      title: "DSTV",
      id: "4",
    },
    {
      Image: "images/cableTvImages/GOTV.png",
      title: "GOTV",
      id: "4",
    },
    {
      Image: "images/cableTvImages/actTv.png",
      title: "actTv",
      id: "1",
    },
    {
      Image: "images/cableTvImages/actTv.png",
      title: "actTv",
      id: "1",
    },
    {
      Image: "images/cableTvImages/actTv.png",
      title: "actTv",
      id: "1",
    },
    {
      Image: "images/cableTvImages/actTv.png",
      title: "actTv",
      id: "1",
    },
    {
      Image: "images/cableTvImages/actTv.png",
      title: "actTv",
      id: "1",
    },
    {
      Image: "images/cableTvImages/actTv.png",
      title: "actTv",
      id: "1",
    },
    {
        Image:"images/cableTvImages/actTv.png",
        title:"actTv",
        id:"1"
      },{
        Image:"images/cableTvImages/actTv.png",
        title:"actTv",
        id:"1"
      },];
  return (
    <ModalsLayout header="Cable TV" setShow={setShow} show={show}>
      <header className="font-normal text-[20px] font-OpenSans">Choose A Service Provider</header>
      <main>
        {
            data.map((i,key)=>{
                return(
                    <div className="w-[122.57px] h-[119px] rounded-[2px]" key={key}>
                        <Image src="" alt="" ></Image>
                    </div>
                )
            })
        }
      </main>
    </ModalsLayout>
  );
};

export default cableTVServices;
