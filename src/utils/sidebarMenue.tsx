import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DollarBagIcon from "@/assets/icons/DollarBagIcon";
import ServiceIconDashboard from "@/assets/icons/ServiceIconDashboard";
import ReferralIcon from "@/assets/icons/Referral";
import BellIcon from "@/assets/icons/BellIcon";
import AgentIcon from "@/assets/icons/AgentIcon";
import Image from "next/image";
import TransactionIcon from "@/assets/icons/TransactionIcon";

export const menuList = [
  {
    name: "Dashboard",
    logo: <GridViewOutlinedIcon sx={{ fontSize: 27 }} />,
    href: "/dashboard",
  },
  {
    name: "Wallet",
    logo: <DollarBagIcon />,
    href: "/account/wallet",
  },
  {
    name: "Services",
    logo: <ServiceIconDashboard />,
    subItems: [
      { Name: "NIN Services", href: "/account/services/nin-services" },
      { Name: "Bill Payment", href: "/account/services/bill-payment" },
    ],
    href: "/account/services/bill-payment",
  },
  {
    name: "Referral",
    logo: <ReferralIcon />,
    href: "/account/referral",
  },
];

export const AdminMenuList = [
  {
    name: "Dashboard",
    logo: <GridViewOutlinedIcon sx={{ fontSize: 27 }} />,
    href: "/dashboard",
  },
  {
    name: "Agents ",
    logo: <AgentIcon />,
    href: "/admin/agent",
  },
  {
    name: "Customers",
    logo: (
      <Image alt="people" src={"/images/People.png"} height={20} width={20} />
    ),
    href: "/admin/customer",
  },
  {
    name: "Services",
    logo: <ServiceIconDashboard />,
    href: "/admin/services",
  },
  {
    name: "Transactions",
    logo: <TransactionIcon />,
    href: "/admin/transactions",
  },
  {
    name: "Referrals",
    logo: <ReferralIcon />,
    href: "/admin/referrals",
  },
  {
    name: "Platform ",
    logo: (
      <Image
        alt="people"
        src={"/images/Laptop Settings.png"}
        height={20}
        width={20}
      />
    ),
    href: "/admin/platform",
  },
  {
    name: "Notifications ",
    logo: <BellIcon />,
    href: "/admin/notification",
  },
];