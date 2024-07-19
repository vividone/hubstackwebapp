"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { superAgent, individualMenu } from "@/utils/sidebarMenue";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { TOKEN } from "@/utils/token";
import { useCookies } from "@/hooks/useCookies";
import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "../custom/link";

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { removeCookie } = useCookies();
  const router = useRouter();
  const pathname = usePathname();
  const [userDetails, setUserDetails] = useLocalStorage<any>(TOKEN.EMAIL);

  useEffect(() => {
    const currentMenu = userDetails?.role === "Individual" ? individualMenu : superAgent;

    const activeItemIndex = currentMenu.findIndex(
      (item: any) =>
        item.href === pathname ||
        (item.subItems && item.subItems.some((subItem: any) => subItem.href === pathname))
    );

    if (activeItemIndex !== -1) {
      setActiveIndex(activeItemIndex);
    } else {
      setActiveIndex(null);
    }
  }, [pathname, userDetails]);

  const handleMenuItemClick = (item: any, index: number) => {
    if (item.subItems) {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex(null);
      router.push(item.href);
    }
  };

  const handleSubItemClick = (subItem: any) => {
    router.push(subItem.href.startsWith("/") ? subItem.href : `/${subItem.href}`);
  };

  const isActive = (item: any) => {
    if (pathname === item.href) return true;
    if (item.subItems) {
      return item.subItems.some(
        (subItem: any) => pathname === subItem.href || pathname.includes(subItem.href)
      );
    }
    return false;
  };

  const handleLogout = () => {
    removeCookie(TOKEN.ACCESS);
    setUserDetails(null);
    router.push("/");
  };

  return (
    <div className="flex flex-col h-full text-[whitesmoke] bg-[#3D3066] h-screen sm:w-[40%] lg:w-[35%] xl:w-[24%]">
      <div className="pl-6 pt-6 h-[10%]">
        <span>
          <Image
            src="/images/hubstackLogo.svg"
            alt="hub_stack_logo"
            width={180}
            height={180}
          />
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1 overflow-auto">
        <ul className="list-none p-0 m-0">
          {(userDetails?.role === "Individual" ? individualMenu : superAgent).map((item: any, index: number) => (
            <li key={index}>
              <div
                className={`flex items-center justify-between list-none p-[15px] w-full mb-[10px] rounded-[8px] relative text-[#FFFFFF80] transition-[0.3s] ease-in-out ${
                  isActive(item) ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
                } hover:bg-[#FFFFFF1A] hover:text-[whitesmoke] cursor-pointer`}
                onClick={() => handleMenuItemClick(item, index)}
              >
                <div className="flex gap-4">
                  <span>{item.logo}</span>
                  <span>{item.name}</span>
                </div>
                {item.subItems && (
                  <span className="flex items-center justify-end w-8 transition-transform duration-300">
                    {activeIndex === index ? (
                      <KeyboardArrowDownRoundedIcon sx={{ fontSize: 27 }} />
                    ) : (
                      <KeyboardArrowRightRoundedIcon sx={{ fontSize: 27 }} />
                    )}
                  </span>
                )}
              </div>
              {activeIndex === index && item.subItems && (
                <ul className="">
                  {item.subItems.map((subItem: any, subIndex: number) => (
                    <li
                      key={subIndex}
                      className={`p-[10px] text-[#FFFFFF80] hover:text-[whitesmoke] rounded-[8px] cursor-pointer ${
                        pathname === subItem.href ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
                      }`}
                      onClick={() => handleSubItemClick(subItem)}
                    >
                      {subItem.Name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 border-t-[2px] border-[#E7E7E733]">
        <Link
          href="/account/profile"
          className={`flex gap-4 items-center w-full p-4 rounded-lg hover:bg-[#FFFFFF1A] text-[#FFFFFF80] hover:text-[whitesmoke] cursor-pointer ${
            pathname.includes("/account/profile") ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
          }`}
        >
          <Image
            src="/images/user-alt-3.svg"
            width={27}
            height={27}
            alt="icon_profile"
          />
          <span>Profile</span>
        </Link>
        <div
          className="flex gap-4 w-full p-4 rounded-lg hover:bg-[#FFFFFF1A] text-[#FFFFFF80] hover:text-[whitesmoke] cursor-pointer"
          onClick={handleLogout}
        >
          <Image
            src="/images/log-out 1.svg"
            width={27}
            height={27}
            alt="icon_profile"
          />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
