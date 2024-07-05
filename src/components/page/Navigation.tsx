"use client"
import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

const Navigation = () => {
  const [showNotification, setShowNotification] = useState(true);
    const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
    console.log(userDetails)
    const fakeUserData = {
      name: "Zainab",
      profilePicture: "/images/profile.jpeg",
    };

  return (
    <div className="flex justify-between items-center p-5 w-full border-b border-gray-300 xlg:px-20 2xl:px-[70px] 2xl:py-[30px]">
      <div className="flex-1">
        <h2 className="m-0 text-2xl font-semibold">Welcome, {userDetails?.user}!</h2>
      </div>
      <div className="flex flex-1 items-center gap-8 justify-end">
        <div className="relative cursor-pointer p-2 rounded-lg border border-gray-300 bg-gray-100" onClick={() => setShowNotification(!showNotification)}>
          <Image src="/images/bell 2.svg" width={20} height={20} alt="bell logo" />
          {showNotification && <span className="absolute top-1 right-2 border-2 border-white w-2.5 h-2.5 bg-red-500 rounded-full"></span>}
        </div>
        <div className="flex items-center gap-1.5">
          <Image className="w-10 h-10 rounded-full object-cover cursor-pointer" src={fakeUserData.profilePicture} alt="profile-picture" width={40} height={40} />
          <KeyboardArrowDownRoundedIcon className="cursor-pointer" sx={{ color: "#637381" }} />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
