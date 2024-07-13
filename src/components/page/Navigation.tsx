"use client";
import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

const Navigation = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);

  const fakeUserData = {
    name: "Zainab",
    profilePicture: "/images/profile.jpeg",
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-[1.5em] w-full border-b border-gray-300  ">
      <div className="flex-1 mb-4 md:mb-0">
        <h2 className="m-0 text-2xl font-semibold text-center md:text-left">
          Welcome, {userDetails?.firstname}!
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
        <div className="flex items-center gap-2 md:gap-1.5">
          <Image
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover cursor-pointer"
            src={fakeUserData.profilePicture}
            alt="profile-picture"
            width={40}
            height={40}
          />
          <KeyboardArrowDownRoundedIcon
            className="cursor-pointer"
            sx={{ color: "#637381" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
