"use client";
import React, { useState } from "react";
import Image from "next/image";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import MenuIcon from "@/assets/icons/MenuIcon";
import Link from "../custom/link";
import { IUserDetails } from "@/interface/profile";

const Navigation = ({ open, setOpen }: any) => {
  const [showNotification, setShowNotification] = useState(true);
  const [userDetails] = useLocalStorage<IUserDetails>(TOKEN.EMAIL);

  return (
    <div className="flex justify-between items-center px-[25px] py-[15px] w-full border-b border-gray-300">
      <div className="flex-1 flex flex-row items-center gap-2">
        <button className="p-3 md:hidden" onClick={() => setOpen(!open)}><MenuIcon /></button>
        <h2 className="m-0 text-2xl font-semibold text-center md:text-left">
          Welcome, {userDetails?.firstname}
        </h2>
      </div>
      <div className="flex items-center gap-4 md:gap-8 justify-center md:justify-end">
        <div
          className="relative cursor-pointer p-2 rounded-lg border border-gray-300 bg-gray-100"
          onClick={() => setShowNotification(!showNotification)}
        >
          <Image
            src="/images/bell 2.svg"
            width={20}
            height={20}
            alt="bell logo"
          />
          {showNotification && (
            <span className="absolute top-1 right-2 border-2 border-white w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          )}
        </div>
        <Link href="/account/profile" className="flex items-center gap-2 md:gap-1.5">
          <Image
            className="w-8 h-8 bg-[#65C9FF] md:w-10 md:h-10 rounded-full object-cover cursor-pointer"
            src={userDetails?.avatar ? `/avatars/${userDetails?.avatar}.svg` : "/avatars/M4.svg"}
            alt="profile-picture"
            width={40}
            height={40}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
