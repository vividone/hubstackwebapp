import { usePathname } from "next/navigation";
import Link from "../custom/link";

export default function SideBarLink({ item }: any) {
    const pathname = usePathname();

    return (
        <Link
            className={`flex items-center justify-between list-none p-[15px] w-full mb-[10px] rounded-[8px] relative text-[#FFFFFF80] transition-[0.3s] ease-in-out ${
            pathname.indexOf(item.href) !== -1 ? "bg-[#FFFFFF1A] text-[whitesmoke]" : ""
            } hover:bg-[#FFFFFF1A] hover:text-[whitesmoke] cursor-pointer`}
            href={item.href}
        >
            <div className="flex gap-4">
                <span >{item.logo}</span>
                <span>{item.name}</span>
            </div>
        </Link>
    )
}

