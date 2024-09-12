"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { menuList, AdminMenuList } from "@/utils/sidebarMenue";
import { TOKEN } from "@/utils/token";
import { useCookies } from "@/hooks/useCookies";
import useLocalStorage from "@/hooks/useLocalStorage";
import Link from "../custom/link";
import { useOutsideClick } from "@/helpers/useClickOutside";
import Close from "@/assets/icons/close";
import SideBarLink from "./sidebarLink";
import SideBarDropdown from "./sideBarDropdown";

const Dashboard = ({ open, setOpen }: any) => {
  const { removeCookie } = useCookies();
  const router = useRouter();
  const pathname = usePathname();
  const [userDetails, setUserDetails] = useLocalStorage<any>(TOKEN.EMAIL);

  const handleLogout = () => {
    removeCookie(TOKEN.ACCESS);
    setUserDetails(null);
    router.push("/");
  };

  const sidebarRef = useOutsideClick(setOpen, false);
  // const currMenue = userDetails?.role !== "Admin" ? menuList : AdminMenuList;
  const currMenue = AdminMenuList
  
  return (
    <div
      ref={sidebarRef}
      className={`flex flex-col md:static fixed top-0 left-0 h-full text-[whitesmoke] bg-[#3D3066] h-screen sm:w-[35%] lg:w-[30%] xl:w-[20%] w-[300px] z-[1000] duration-700 ${
        open ? "translate-x-0" : "md:translate-x-0 translate-x-[-100%]"
      }`}
    >
      <div className="flex items-center pl-6 pt-6 h-[10%]">
        <button className="p-2 md:hidden" onClick={() => setOpen(!open)}>
          <Close />
        </button>
        <span>
          <Image
            src="/images/hubstackLogo.svg"
            alt="hub_stack_logo"
            width={180}
            height={180}
          />
        </span>
      </div>
      <div className="p-6 flex gap-1 flex-col flex-1 overflow-auto">
        {currMenue.map((item: any, index: number) => {
          if (item.name === "Services" && userDetails?.role === "Agent")
            return <SideBarDropdown key={index} item={item} />;
          else return <SideBarLink key={index} item={item} />;
        })}
      </div>
      <div className="p-5 border-t-[2px] border-[#E7E7E733]">
        <Link
          href="/account/profile"
          className={`flex gap-4 items-center w-full p-4 rounded-lg hover:bg-[#FFFFFF1A] text-[#FFFFFF80] hover:text-[whitesmoke] cursor-pointer ${
            pathname.includes("/account/profile")
              ? "bg-[#FFFFFF1A] text-[whitesmoke]"
              : ""
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
        <button
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
        </button>
      </div>
    </div>
  );
};

export default Dashboard;