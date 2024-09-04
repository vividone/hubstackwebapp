'use client'
import React, { ReactNode } from "react";
import Link from "@/components/custom/link";
import { usePathname } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const pathname = usePathname()

  return (
    <div className="p-[50px_25px]">
      <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] mb-[20px] font-medium">Manage your account</h2>

      <nav className="w-full mb-[20px] border border-transparent border-b-[#E7E7E7]">
        <ul className="flex gap-10">
          <li className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${pathname === "/account/profile" ? "text-[#3D3066] font-bold border-b-[#3D3066]" : "font-normal"}`}>
            <Link href="/account/profile">Personal Settings</Link>
          </li>
          <li className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${pathname === "/account/profile/passwordandsecurity" ? "text-[#3D3066] font-bold border-b-[#3D3066]" : "font-normal"}`}>
            <Link href="/account/profile/passwordandsecurity">Password and Security</Link>
          </li>
          {
            userDetails?.role === "Agent" ?
            <li className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${pathname === "/account/profile/kyc" ? "text-[#3D3066] font-bold border-b-[#3D3066]" : "font-normal"}`}>
              <Link href="/account/profile/kyc">KYC</Link>
            </li>
            :
            ""
          }
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
