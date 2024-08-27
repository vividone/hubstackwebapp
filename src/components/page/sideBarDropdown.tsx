import { usePathname } from "next/navigation";
import Link from "../custom/link";
import { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export default function SideBarDropdown({ item }: any) {
    const pathname = usePathname();
    const [activeIndex, setActiveIndex] = useState<boolean>(false);

    return (
        <div className="overflow-hidden">
                <button className={`flex items-center justify-between list-none p-[15px] w-full mb-[10px] rounded-[8px] relative text-[#FFFFFF80] transition-[0.3s] ease-in-out ${
                    pathname.indexOf(item.href) !== -1 ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
                } hover:bg-[#FFFFFF1A] hover:text-[whitesmoke] cursor-pointer`}
                onClick={() => setActiveIndex(!activeIndex)}>
                
                <div className="flex gap-4">
                    <span >{item.logo}</span>
                    <span>{item.name}</span>
                </div>
                <button className="flex items-center justify-end w-8 transition-transform duration-300">
                    {activeIndex ? (
                        <KeyboardArrowDownRoundedIcon sx={{ fontSize: 27 }} />
                    ) : (
                        <KeyboardArrowRightRoundedIcon sx={{ fontSize: 27 }} />
                    )}
                    </button>
                </button>
                <div className={`${activeIndex ? "block" : "hidden"}`}>
                    {
                        item.subItems?.map((subItem: any, subIndex: number) => (
                        <Link
                            key={subIndex}
                            className={`block p-[10px] text-[#FFFFFF80] hover:text-[whitesmoke] rounded-[8px] cursor-pointer ${
                            pathname === subItem.href ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
                            }`}
                            href={subItem.href}
                        >
                            {subItem.Name}
                        </Link>
                        ))
                    }
                </div>
            </div>
    )
}