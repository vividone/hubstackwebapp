"use client";
import ServicesIcon from "@/assets/icons/ServicesIcon";
import SupportIcon from "@/assets/icons/SupportIcon";
import WalletIcon from "@/assets/icons/WalletIcon";
import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import AdminCard from "@/components/common/AdminCard";
import React from "react";
import Barchart from "@/components/datavisulaization/barchart";
import Piechart from "@/components/datavisulaization/piechart";
import AdminTable from "@/components/datavisulaization/table";
import SpreadIcon from "@/assets/icons/SpreadIcon";

const DashboardPage = () => {
  const router = useRouter();
  const [hasWallet] = useLocalStorage<boolean>(TOKEN.HASWALLET);
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);

  const boxDetails = [
    {
      title: "Overall Wallet Balances",
      currprice: "34,250,680.00",
      lastMonthPrice: "3,950,800.00",
      percentage: "17.7%",
      status: "loss",
    },
    {
      title: "Overall Wallet Balances",
      currprice: "34,000.00",
      lastMonthPrice: "34,000.00",
      percentage: "17.7%",
      status: "profit",
    },
    {
      title: "Overall Wallet Balances",
      currprice: "64,680.00",
      lastMonthPrice: "64,680.00",
      percentage: "17.7%",
      status: "average",
    },
  ];

  const individualCard = [
    {
      id: 0,
      title: "Manage your wallet",
      subText:
        "Create a wallet, fund and start making transactions with your wallet.",
      buttonText: `${hasWallet ? "Manage your wallet" : "Create a wallet"}`,
      buttonHref: "/account/wallet",
      icon: <WalletIcon />,
    },
    {
      id: 1,
      title: "Request Services",
      subText:
        "Verify and print NIN slips, purchase airtime, data and pay for various bills.",
      buttonText: "Request Services",
      buttonHref: "/account/services/bill-payment",
      icon: <ServicesIcon />,
    },
    {
      id: 2,
      title: "Get Support",
      subText:
        "Having any issue or do you have questions ? Get quick support now.",
      buttonText: "Get Help",
      buttonHref: "/dashboard",
      icon: <SupportIcon />,
    },
  ];

  return (
    <div className="p-[50px_25px] overflow-x-hidden">
      {userDetails.role === "Individual" ? (
        <>
          <h1 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-medium">
            What would you like to do today ?
          </h1>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-[3%] gap-10 py-4">
            {individualCard.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between gap-3 p-6 rounded-[8px] border border-[#8C8B92]/[0.2] shadow-md"
              >
                <p className="bg-[#3D3066]/[0.1] p-2 rounded-full h-[70px] w-[70px] flex items-center justify-center">
                  {item.icon}
                </p>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-[#8C8B92] my-2">{item.subText}</p>
                </div>
                <Button
                  size={"full"}
                  variant="secondary"
                  onClick={() => router.push(item.buttonHref)}
                  className="border-2"
                >
                  {item.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className="2xl:text-[36px] xl:text-[28px] text-[24px] font-medium">
            Dashboard
          </h1>
          <div className="flex gap-4 justify-between flex-wrap w-full">
            {boxDetails.map((items, key) => (
              <AdminCard boxDetails={items} key={key} />
            ))}
          </div>

          <div className="flex width-[full] gap-4 my-10 flex-wrap">
            <div className="p-4 w-[60%] flex-1 border border-[#E7E6F2] rounded-[14px]">
              <h2 className="text-[24px] font-bold">Overview of Transactionse</h2>
              <Barchart />
            </div>
            <div className="w-[500px] p-4 border border-[#E7E6F2] rounded-[14px] ">
              <div className="flex items-center justify-between">
                <h2 className="text-[24px] font-bold">Service Usage</h2>
                <SpreadIcon />
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[16px] text-[#000000]">
                  Total Service Usage
                </span>
                <span className="font-[700] text-[36px]">5,752,609</span>
              </div>
              <Piechart />
            </div>
          </div>

          <div className="w-full p-4 rounded-[14px] border border-[#E7E6F2]">
            <span className="block font-[700] text-[24px] mt-5 mb-4  ">
              Top Performances
            </span>
            <AdminTable />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
