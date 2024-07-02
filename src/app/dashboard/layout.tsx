'use client'
import React, { useEffect } from "react";
import Dashboard from "@/components/page/sidebar";
import Navigation from "@/components/page/Navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { useRouter } from "next/navigation";

const RootLayout = ({ children }: any) => {
    const [userDetails] = useLocalStorage<any>(TOKEN.EMAIL);
    const router = useRouter();

        if(!userDetails) {
            useEffect(() => {
                router.push("/")
            }, [userDetails])
            return (
                <></>
            )
        }
        else {
            return (
                <div className="flex w-full">
                    <Dashboard />
                    <div className="h-full w-[80%] background-[red]">
                        <Navigation /> 
                        {children}
                    </div>
                </div>
            );
        }

};

export default RootLayout;