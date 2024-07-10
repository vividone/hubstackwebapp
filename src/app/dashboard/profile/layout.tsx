import React, { Children } from "react";
import Link from "@/components/custom/link";
import Personalsettings from "@/components/profile/personalsettings";
import Passwordandsecurity from "@/components/profile/passwordandsecurity";
const RootLayout = ({children}:any) => {
  return (
    <div>
      <h2>Manage your account</h2>
      <nav>
        <ul>
          <li className="">
            <Link href="/dashboard/profile/personalsettings" >Personal Settings</Link>
          </li>
          <li className="">
            <Link href ="/passwordandsecurity" >Password and Security</Link>
          </li>
          <li className="">
            <Link href="/security">Security</Link>
          </li>
          <li className="">
            <Link href="/security">Security</Link>
          </li>
          <li className="">
            <Link href="/security">Security</Link>
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
