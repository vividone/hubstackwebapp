"use client";
import React from "react";
import Dashboard from "@/components/page/sidebar";
import Navigation from "@/components/page/Navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { useRouter } from "next/navigation";

const RootLayout = ({ children }: any) => {
  const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
  const router = useRouter();

  if (!userDetails) {
    router.push("/");
  }

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="w-full sm:w-[35%] md:w-[35%] lg:w-[30%] xl:w-[20%] bg-[#3D3066] sm:fixed sm:h-full">
        <Dashboard />
      </div>
      <div className="flex flex-col w-full h-full sm:ml-[35%] md:ml-[35%] lg:ml-[30%] xl:ml-[20%]">
        <Navigation />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
