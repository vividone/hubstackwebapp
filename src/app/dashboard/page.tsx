"use client";
import ServicesIcon from "@/assets/icons/ServicesIcon";
import SupportIcon from "@/assets/icons/SupportIcon";
import WalletIcon from "@/assets/icons/WalletIcon";
import { Button } from "@/components/common/button";
import { useRouter } from "next/navigation";
import { TOKEN } from "@/utils/token";
import useLocalStorage from "@/hooks/useLocalStorage";
import { useGetWallet } from "@/helpers/wallet";

const DashboardPage = () => {
  const router = useRouter();
  const { userWallet } = useGetWallet();

  const individualCard = [
    {
      id: 0,
      title: "Manage your wallet",
      subText:
        "Create a wallet, fund and start making transactions with your wallet.",
      buttonText: `${userWallet ? "Manage your wallet" : "Create a wallet"}`,
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
    <div className="p-[50px_25px]">
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
    </div>
  );
};

export default DashboardPage;
