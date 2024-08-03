"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { menuList } from "@/utils/sidebarMenue";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { TOKEN } from "@/utils/token";
import { useCookies } from "@/hooks/useCookies";
import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "../custom/link";
import MenuIcon from "@/assets/icons/MenuIcon";

const Dashboard = ({ open, setOpen }: any) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { removeCookie } = useCookies();
  const router = useRouter();
  const pathname = usePathname();
  const [userDetails, setUserDetails] = useLocalStorage<any>(TOKEN.EMAIL);

  const handleMenuItemClick = (e: any, item: any, index: number) => {
    if (item.subItems && userDetails?.role === "Agent") {
      e.stopPropagation()
      e.preventDefault()
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex(null);
      router.push(item.href);
    }
  };

  const handleLogout = () => {
    removeCookie(TOKEN.ACCESS);
    setUserDetails(null);
    router.push("/");
  };

  return (
    <div className={`flex flex-col md:static fixed top-0 left-0 h-full text-[whitesmoke] bg-[#3D3066] h-screen sm:w-[40%] lg:w-[35%] xl:w-[24%] w-[300px] z-[1000] duration-700 ${open ? "translate-x-0" : "md:translate-x-0 translate-x-[-100%]" }`}>
      <div className="flex items-center pl-6 pt-6 h-[10%]">
        <button className="p-2 md:hidden" onClick={() => setOpen(!open)}><MenuIcon /></button>
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
          {menuList.map((item: any, index: number) => (
            <li key={index}>
              <Link
                className={`flex items-center justify-between list-none p-[15px] w-full mb-[10px] rounded-[8px] relative text-[#FFFFFF80] transition-[0.3s] ease-in-out ${
                  pathname.indexOf(item.href) !== -1 ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
                } hover:bg-[#FFFFFF1A] hover:text-[whitesmoke] cursor-pointer`}
                href={item.href}
              >
                <div className="flex gap-4">
                  <span>{item.logo}</span>
                  <span>{item.name}</span>
                </div>
                {(item.subItems && userDetails?.role === "Agent") && (
                  <button className="flex items-center justify-end w-8 transition-transform duration-300" onClick={(e) => handleMenuItemClick(e, item, index)}>
                    {activeIndex === index ? (
                      <KeyboardArrowDownRoundedIcon sx={{ fontSize: 27 }} />
                    ) : (
                      <KeyboardArrowRightRoundedIcon sx={{ fontSize: 27 }} />
                    )}
                  </button>
                )}
              </Link>
              {activeIndex === index && item.subItems && userDetails?.role === "Agent" && (
                <ul className="">
                  {item.subItems.map((subItem: any, subIndex: number) => (
                    <Link
                      key={subIndex}
                      className={`block p-[10px] text-[#FFFFFF80] hover:text-[whitesmoke] rounded-[8px] cursor-pointer ${
                        pathname === subItem.href ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
                      }`}
                      href={subItem.href}
                    >
                      {subItem.Name}
                    </Link>
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