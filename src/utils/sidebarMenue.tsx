import Image from "next/image";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WalletIcon from "@/assets/icons/WalletIcon";
import ServicesIcon from "@/assets/icons/ServicesIcon";

export const adminMenu = [
  {
    name: "Dashboard",
    logo: <GridViewOutlinedIcon sx={{ fontSize: 27 }} />,
    subItems: [
      { name: "Overview", href: "/Dashboard/overview" },
      { name: "Reports", href: "/Dashboard/reports" },
    ],
    href: "/dashboard",
  },
  {
    name: "Wallet",
    logo: (
      <Image src="/images/dollar-bag-1.svg" width={27} height={27} alt="logo" />
    ),
    href: "/account/wallet",
  },
  {
    name: "Services",
    logo: (
      <Image src="/images/service 1.svg" width={27} height={27} alt="logo" />
    ),
    href: "/account/services",
  },
];

export const individualMenu = [
  {
    name: "Dashboard",
    logo: <GridViewOutlinedIcon sx={{ fontSize: 27 }} />,
    subItems: [
      { name: "Overview", href: "/Dashboard/overview" },
      { name: "Reports", href: "/Dashboard/reports" },
    ],
    href: "/dashboard",
  },
  {
    name: "Wallet",
    logo: (
      <Image src="/images/dollar-bag-1.svg" width={27} height={27} alt="logo" />
    ),
    href: "/account/wallet",
  },
  {
    name: "Services",
    logo: (
      <Image src="/images/service 1.svg" width={27} height={27} alt="logo" style={{color:"red"}}/>
    ),
    DropdownMenue: [
      { Name: "NIN Services", href: "" },
      { Name: "Bill Payment Subscription", href: "" },
      { Name: "Subscription", href: "" },
    ],
    href: "/account/services",
  },
];
