'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link from "@/components/custom/link";
const Services = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className="w-full mb-[20px] border border-transparent border-b-[#E7E7E7]">
        <ul className="flex gap-10">
          <li
            className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
              pathname === "/account/services/ninproducts"
                ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                : "font-normal"
            }`}
          >
            <Link href="/account/services/ninproducts">NIN Products</Link>
          </li>
          <li
            className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
              pathname === "/account/services/unit"
                ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                : "font-normal"
            }`}
          >
            <Link href="/account/services/unit">Unit</Link>
          </li>
          <li
            className={`text-lg border-b-2 border-transparent transition duration-100 ease-in-out hover:border-[#3D3066] hover:text-[#3D3066] ${
              pathname === "/account/services/history"
                ? "text-[#3D3066] font-bold border-b-[#3D3066]"
                : "font-normal"
            }`}
          >
            <Link href="/account/services/history">History</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Services;
