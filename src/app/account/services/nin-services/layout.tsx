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
    <div className="p-[50px_25px]">
      <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] mb-[20px] font-medium">NIN Services</h2>

      <nav className="w-full mb-[20px] border border-transparent border-b-[#E7E7E7]">
        <ul className="flex gap-10">
          <li className={`pr-[3%] text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${pathname === "/account/services/nin-services" ? "text-[#3D3066] font-bold border-b-[#3D3066]" : "font-normal"}`}>
            <Link href="/account/services/nin-services">NIN Products</Link>
          </li>
          <li className={`pr-[3%] text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${pathname === "/account/services/nin-services/history" ? "text-[#3D3066] font-bold border-b-[#3D3066]" : "font-normal"}`}>
            <Link href="/account/services/nin-services/history">History</Link>
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
