import React, { Children } from "react";
import Link from "@/components/custom/link";
import "../../../components/auth/profile.css" 

const RootLayout = ({children}:any) => {
  return (
    <div className="p-[20px_25px]">
      <h2 className="font-bold text-3xl mb-[20px]">Manage your account</h2>
      <nav className="w-full">
        <ul className="h-[30px] bg-red flex gap-10 w-[80%] ">
          <li className="Link hover:text-[#3D3066] font-bold border-solid border-[#3D3066] text-lg ">
            <Link href="/dashboard/profile/personalsettings" >Personal Settings</Link>
          </li>
          <li className="Link  hover:text-[#3D3066] font-bold border-solid border-[#3D3066] text-lg ">
            <Link href ="/dashboard/profile/passwordandsecurity" >Password and Security</Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
