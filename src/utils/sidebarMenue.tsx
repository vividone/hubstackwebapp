import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DollarBagIcon from "@/assets/icons/DollarBagIcon";
import AgentsIcon from "@/assets/icons/AgentsIcon";
import ServiceIconDashboard from "@/assets/icons/ServiceIconDashboard";

export const superAgent = [
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
    logo: (
      <Image src="/images/services.svg" width={27} height={27} alt="logo" />
    ),
    href: "/account/services",
  },
  {
    name: "Agents",
    logo: <AgentsIcon />,
    href: "/account/Agents",
  },
];

export const individualMenu = [
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
      { Name: "NIN Services", href: "account/services" },
      { Name: "Bill Payment", href: "account/services/billpayment" },
      { Name: "Subscription", href: "account/services/subscription" },
    ],
    href: "/account/services",
  },
];