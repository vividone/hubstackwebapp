import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DollarBagIcon from "@/assets/icons/DollarBagIcon";
import AgentsIcon from "@/assets/icons/AgentsIcon";
import ServiceIconDashboard from "@/assets/icons/ServiceIconDashboard";

export const adminMenu = [
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
      { Name: "NIN Services", href: "/services" },
      { Name: "Bill Payment Subscription", href: "/services/billpayment" },
      { Name: "Subscription", href: "/services/subscription" },
    ],
    href: "/account/services",
  },
];