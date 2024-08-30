"use client";
import CaratDown from "@/assets/icons/CaratDown";
import SortIcon from "@/assets/icons/SortIcon";
import { SearchInput } from "@/components/common/inputs";
import Image from "next/image";
import AirtimeIcon from "@/assets/icons/AirtimeIcon";
import DataIcon from "@/assets/icons/DataIcon";
import InternetIcon from "@/assets/icons/InternetIcon";
import CableTvIcon from "@/assets/icons/CableTvIcon";
import ElectricityIcon from "@/assets/icons/ElectricityIcon";
import BettingIcon from "@/assets/icons/BettingIcon";
import { useState } from "react";
import ElectricityBillModal from "@/components/modals/electricity/electrictyBillmodal";
import AirtimeModal from "@/components/modals/airtime/airtime";
import CableTVServices from "@/components/modals/cableTv/Services";
import Internet from "@/components/modals/internet/Services";
import Betting from "@/components/modals/betting/services";
import Data from "@/components/modals/data/data";
import { useGetTransactionHistory } from "@/helpers/api/useTransact";
import { History } from "@/components/tables/history";
const Billpayment = () => {
  const [active, setActive] = useState("")
  const { history } = useGetTransactionHistory("billpayment");
  const [show, setShow] = useState(false)

  
  const data = [
    {
      Icon:<AirtimeIcon/>,
      text: "Airtime",
      billerCategoryId: "4",
    },
    {
      Icon: <DataIcon />,
      text: "Data Bundle",
      billerCategoryId: "4",
    },
    {
      Icon: <InternetIcon />,
      text: "Internet",
      billerCategoryId: "5",
    },
    {
      Icon: <CableTvIcon />,
      text: "Cable TV",
      billerCategoryId: "2",
    },
    {
      Icon: <ElectricityIcon />,
      text: "Electricity",
      billerCategoryId: "1",
    },
    {
      Icon: <BettingIcon />,
      text: "Betting",
      billerCategoryId: "41",
    },
  ];

  return (
    <div className="flex flex-col md:flex-col w-full relative">
      <div className="w-full p-[30px] md:px-[60px_25px]">
        <h2 className="text-[24px] md:text-[28px] 2xl:text-[36px] font-CabinetGrotesque font-medium">
          Bill Payments
        </h2>
        <div className="flex mt-[50px]">
          <div className="flex flex-wrap gap-[30px] w-full">
            {data.map((value, index) => (
              <button
                key={index}
                className="bg-[#00D7F7] h-[150px] w-[150px] rounded-lg flex flex-col items-center justify-center text-center transform hover:scale-105 cursor-pointer"
                onClick={() => {setActive(value.text); setShow(!show)}}
              >
                <span className="p-[14px] rounded-full bg-[#3D30661A]">{value.Icon}</span>
                <span className="mt-4 text-[20px] font-semibold font-OpenSans text-[#000000]">{value.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-[100%] mt-[30px]">
        <div className="flex flex-col gap-[30px] px-[30px] ">
          <p className="mt-[20px] md:mt-[35px] text-[25px] font-medium">
            <span className="font-normal font-CabinetGrotesk text-25px">Transactions</span>
          </p>
          <div className="flex flex-wrap gap-[12px] justify-between items-center md:gap-[24px] p-2 bg-slate-100">
            <SearchInput
              type="text"
              className="flex-grow border-none bg-white"
              placeholder="Search"
            />

            <div className="flex gap-2 items-center">
              <div className="flex items-center h-[45px] rounded-lg p-[12px] border border-[#89939F] bg-white">
                <span className="text-[12px] text-[#292D32] font-medium font-CabinetGrotesk">
                  Transactions History
                </span>
                <span className="ml-2 p-[4px] rounded bg-[#F5F8FC]">
                  <CaratDown />
                </span>
              </div>
              <div className="flex items-center h-[45px] align-center gap-[5px] rounded-lg p-[12px] border border-[#89939F] bg-white">
                <span className="ml-2">
                  <SortIcon />
                </span>
                <span className="text-[12px] text-[#292D32] font-medium font-CabinetGrotesk">
                  Latest
                </span>
              </div>
            </div>

          </div>
          <div className="w-full py-4 overflow-x-auto">
            {false ? (
              <table className="table-auto text-left w-full min-w-[500px]">
                <thead>
                  <tr className="bg-[#3D3066]/[0.1]">
                    <th className="p-[20px]">Date</th>
                    <th className="p-[20px]">Referred</th>
                    <th className="p-[20px]">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="m-[200px] bg-red">
                    <td>12/7/2024</td>
                    <td>Jayson Benson</td>
                    <td>Activate</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div>
                {
                  history.length > 0 ?
                  <History history={history} fields={["Date", "Biller", "Amount", "Status"]} />
                  :
                  <div className="mt-[50px] flex flex-col gap-10 items-center">
                    <Image
                      src="/images/notransactions.svg"
                      height={167}
                      width={167}
                      alt=""
                    />
                    <p className="text-[32px] text-[#111111] font-medium font-cabinet-grostequeue">
                      No transactions yet
                    </p>
                  </div>
                }
              </div>
            )}
          </div>
        </div>

        {
          active === "Electricity" && show ?
          <ElectricityBillModal show={show} setShow={setShow} />
          : 
          active === "Airtime" && show ?
          <AirtimeModal show={show} setShow={setShow} />
          :
          active === "Cable TV" && show ?
          <CableTVServices show={show} setShow={setShow} />
          :
          active === "Data Bundle" && show ?
          <Data show={show} setShow={setShow} />
          :
          active === "Internet" && show ?
          <Internet show={show} setShow={setShow} />
          :
          active === "Betting" && show ?
          <Betting show={show} setShow={setShow} />
          :""
        }
      </div>
    </div>
  );
};

export default Billpayment;
