import React, { ReactNode } from "react";
import Link from "@/components/custom/link";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="p-[20px_25px]">
      <h2 className="font-bold text-3xl mb-[20px]">Manage your account</h2>
      <nav className="w-full mb-[20px]">
        <ul className="flex gap-10 w-[80%] h-[30px]">
          <li className="font-bold text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] active:border-[#3D3066]">
            <Link href="/dashboard/profile/personalsettings">Personal Settings</Link>
          </li>
          <li className="font-bold text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] active:border-[#3D3066]">
            <Link href="/dashboard/profile/passwordandsecurity">Password and Security</Link>
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
