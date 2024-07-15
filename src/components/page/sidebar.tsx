"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "../custom/link";
import { TOKEN } from "@/utils/token";
import { useCookies } from "@/hooks/useCookies";
import useLocalStorage from "@/hooks/useLocalStorage";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { removeCookie } = useCookies();
  const router = useRouter();
  const [userDetails, setUserDetails] = useLocalStorage<any>(TOKEN.EMAIL);

  const handleMenuItemClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLogout = () => {
    removeCookie(TOKEN.ACCESS);
    setUserDetails(null);
    router.push("/");
  };

  const adminMenu = [
    {
      name: "Dashboard",
      logo: <GridViewOutlinedIcon sx={{ fontSize: 27 }} />,
      subItems: [
        { name: "Overview", href: "/Dashboard/overview" },
        { name: "Reports", href: "/Dashboard/reports" },
      ],
      href: "/account",
    },
    {
      name: "Wallet",
      logo: (
        <Image
          src="/images/dollar-bag-1.svg"
          width={27}
          height={27}
          alt="logo"
        />
      ),
      href: "/account/wallet",
    },
  ];

  const individualMenu = [
    {
      name: "Dashboard",
      logo: <GridViewOutlinedIcon sx={{ fontSize: 27 }} />,
      subItems: [
        { name: "Overview", href: "/Dashboard/overview" },
        { name: "Reports", href: "/Dashboard/reports" },
      ],
      href: "/account",
    },
    {
      name: "Wallet",
      logo: (
        <Image
          src="/images/dollar-bag-1.svg"
          width={27}
          height={27}
          alt="logo"
        />
      ),
      href: "/account/wallet",
    },
    {
      name: "Services",
      logo: (
        <Image src="/images/services.svg" width={27} height={27} alt="logo" />
      ),
      href: "services",
    },
  ];

  return (
    <div className="flex flex-col h-full w-full text-[whitesmoke] font-CabinetGrotesk">
      <div className="pl-6 pt-6 h-[10%]">
        <span>
          <Image
            src="/images/hubstackLogo.svg"
            alt="hub_stack_logo"
            width={180}
            height={180}
          />
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1 overflow-auto">
        <ul className="list-none p-0 m-0">
          {(userDetails?.role === "Individual" ? individualMenu : adminMenu).map(
            (item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center justify-between p-4 w-full mb-2 rounded-lg relative text-[#FFFFFF80] transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#FFFFFF1A] text-[whitesmoke]"
                    : ""
                } hover:bg-[#FFFFFF1A] hover:text-[whitesmoke] cursor-pointer`}
                onClick={() => handleMenuItemClick(index)}
              >
                <div className="flex gap-4">
                  <span>{item.logo}</span>
                  <span>{item.name}</span>
                </div>
                <span className="flex items-center justify-end w-8 transition-transform duration-300">
                  {activeIndex === index ? (
                    <KeyboardArrowDownRoundedIcon sx={{ fontSize: 27 }} />
                  ) : (
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: 27 }} />
                  )}
                </span>
              </Link>
            )
          )}
        </ul>
      </div>
      <div className="p-5 border-t-[2px] border-[#E7E7E733]">
        <Link
          href="/account/profile"
          className="flex gap-4 w-full p-4 rounded-lg hover:bg-[#FFFFFF1A] text-[#FFFFFF80] hover:text-[whitesmoke] cursor-pointer"
        >
          <Image
            src="/images/user-alt-3.svg"
            width={27}
            height={27}
            alt="icon_profile"
          />
          <span>Profile</span>
        </Link>
        <div
          className="flex gap-4 w-full p-4 rounded-lg hover:bg-[#FFFFFF1A] text-[#FFFFFF80] hover:text-[whitesmoke] cursor-pointer"
          onClick={handleLogout}
        >
          <Image
            src="/images/log-out 1.svg"
            width={27}
            height={27}
            alt="icon_profile"
          />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
