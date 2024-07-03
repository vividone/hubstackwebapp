"use client";
import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuItemClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const menuItems = [
    {
      name: "Dashboard",
      logo: <GridViewOutlinedIcon sx={{ fontSize: 27 }} />,
      subItems: [
        { name: "Overview", href: "/Dashboard/overview" },
        { name: "Reports", href: "/Dashboard/reports" },
      ],
    },
    {
      name: "Settings",
      logo: (
        <Image
          src="\images\dollar-bag-1.svg"
          width={27}
          height={27}
          alt="logo"
        />
      ),
      subItems: [
        { name: "Profile Settings", href: "/settings/profile" },
        { name: "Account Settings", href: "/settings/account" },
      ],
    },
    {
      name: "Profile",
      logo: (
        <PermIdentityOutlinedIcon sx={{ fontSize: 30}} />
      ),
      subItems: [
        { name: "View Profile", href: "/profile/view" },
        { name: "Edit Profile", href: "/profile/edit" },
      ],
    },
  ];

  return (
    <div className="w-35%  sm:w-[25%] md:w-[35%] lg:w-[30%] xl:w-[250px] min-h-screen bg-[#3D3066] flex flex-col gap-[20px] text-[whitesmoke] font-CabinetGrotesk  ">
      <div className="pl-[20px] pt-[20px] h-[10%]">
        <span>
          <Image
            src="/images/hubstackLogo.svg"
            alt="hub_stack_logo"
            width={180}
            height={180}
          />
        </span>
      </div>
      <div className="p-[20px] flex flex-col flex-1 f" >
        <ul className="list-none p-0 m-0">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-between list-none p-[15px] w-full mb-[10px] rounded-[8px] relative text-[#FFFFFF80] transition-[0.3s] ease-in-out ${
                activeIndex === index ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
              } hover:bg-[#FFFFFF1A] hover:text-[whitesmoke] cursor-pointer`}
              onClick={() => handleMenuItemClick(index)}
            >
              <div className="flex gap-[10px] justify-between">
                <span>{item.logo}</span>
                <span>{item.name}</span>
              </div>
              <span className="flex items-center justify-end w-[30px] transition-transform duration-300">
                {activeIndex === index ? (
                  <KeyboardArrowDownRoundedIcon sx={{ fontSize: 27 }} />
                ) : (
                  <KeyboardArrowRightRoundedIcon sx={{ fontSize: 27 }} />
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-[20px] border-t-[2px] border-[#E7E7E733]">
        <div className="profile flex gap-[10px] w-full p-[15px] rounded-[8px] hover:bg-[#FFFFFF1A] text-[#FFFFFF80] hover:text-[whitesmoke] cursor-pointer">
          <Image
            src="/images/user-alt-3.svg"
            width={27}
            height={27}
            alt="icon_profile"
          />
          <span>Profile</span>
        </div>
        <div className="flex gap-[10px] w-full p-[15px] rounded-[8px] hover:bg-[#FFFFFF1A] text-[#FFFFFF80] hover:text-[whitesmoke] cursor-pointer">
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
