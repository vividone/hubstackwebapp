'use client'
import React, { ReactNode } from "react";
import Link from "@/components/custom/link";
import { usePathname } from "next/navigation";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const pathname = usePathname()

  return (
    <div className="p-[20px_25px]">
      <h2 className="font-bold text-3xl mb-[40px]">Manage your account</h2>
      <nav className="w-full mb-[20px]">
        <ul className="flex gap-10">
          <li className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${pathname === "/account/profile" ? "text-[#3D3066] font-bold border-b-[#3D3066]" : "font-normal"}`}>
            <Link href="/account/profile">Personal Settings</Link>
          </li>
          <li className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${pathname === "/account/profile/passwordandsecurity" ? "text-[#3D3066] font-bold border-b-[#3D3066]" : "font-normal"}`}>
            <Link href="/account/profile/passwordandsecurity">Password and Security</Link>
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
