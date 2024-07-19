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
      <h2 className="2xl:text-[36px] xl:text-[28px] text-[24px] mb-[20px] font-medium">NIN SERVICES</h2>
      <main>
        {children}
      </main>
    </div>
  );
};

export default RootLayout;
