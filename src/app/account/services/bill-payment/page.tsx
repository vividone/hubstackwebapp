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

const Billpayment = () => {
  const data = [
    {
      Icon: <AirtimeIcon />,
      text: "Airtime",
    },
    {
      Icon: <DataIcon />,
      text: "Data",
    },
    {
      Icon: <InternetIcon />,
      text: "Internet",
    },
    {
      Icon: <CableTvIcon />,
      text: "Cable TV",
    },
    {
      Icon: <ElectricityIcon />,
      text: "Electricity",
    },
    {
      Icon: <BettingIcon />,
      text: "Betting",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-[48%] p-[30px] md:p-[60px_25px]">
        <h2 className="text-[24px] md:text-[28px] 2xl:text-[36px] font-CabinetGrotesque font-medium">
          Bill Payments
        </h2>
        <div className="flex mt-[45px] border-r border-[#E7E7E7]">
          <div className="flex flex-wrap gap-[30px] ">
            {data.map((value, index) => (
              <div
                key={index}
                className="w-[206px] bg-[#00D7F7] h-[200px] bg-gray-300 rounded-lg flex flex-col items-center justify-center text-center"
              >
                <div className="p-[18px_16px] rounded-full bg-[#3D30661A]">{value.Icon}</div>
                <p className="mt-2 text-lg font-medium">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block md:mt-[143px] border-r border-[#E7E7E7]"></div> */}
      <div className="w-full md:w-[50%] mt-[30px] md:mt-[50px]">
        <div className="flex flex-col gap-[30px] p-[30px] md:p-[60px_25px]">
          <p className="mt-[20px] md:mt-[35px] text-[25px] font-medium">
            <span className="">History</span>
          </p>
          <div className="flex flex-wrap gap-[12px] items-center md:gap-[24px]">
            <SearchInput
              type="text"
              className="flex-grow border-none bg-white"
              placeholder="Search"
            />
            <div className="flex items-center h-[45px] rounded-lg p-[12px] border border-[#89939F] bg-white">
              <span className="text-[12px] text-[#292D32] font-medium font-CabinetGrotesk">
                All History
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
              <div className="mt-[30px] flex flex-col gap-10 items-center">
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billpayment;
