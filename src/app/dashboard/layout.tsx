'use client'
import React, { useEffect } from "react";
import Dashboard from "@/components/page/sidebar";
import Navigation from "@/components/page/Navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { useRouter } from "next/navigation";

const RootLayout = ({ children }: any) => {
    // const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
    // const router = useRouter();

    // useEffect(() => {
    //     if (!userDetails) {
    //         router.push("/"); 
    //     }
    // }, [userDetails, router]);

    // if (!userDetails) {
    //     return null;
    // }

    return (
        <div className="flex w-full">
            <Dashboard />
            <div className="h-full w-[80%]">
                <Navigation />
                {children}
            </div>
        </div>
    );
};

export default RootLayout;
