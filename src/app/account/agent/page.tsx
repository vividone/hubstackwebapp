"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { TOKEN } from "@/utils/token";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface UserDetails {
  role: string;
}

const AgentPage = () => {
  const [userDetails] = useLocalStorage<UserDetails>(TOKEN.EMAIL);
  const router = useRouter();

  useEffect(() => {
    if (userDetails && userDetails.role !== "ADMIN") {
      router.push("/dashboard");
    }
  }, [userDetails, router]);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return <div>page</div>;
};

export default AgentPage;
