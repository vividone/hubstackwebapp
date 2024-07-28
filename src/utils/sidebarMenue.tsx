import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DollarBagIcon from "@/assets/icons/DollarBagIcon";
import AgentsIcon from "@/assets/icons/AgentsIcon";
import ServiceIconDashboard from "@/assets/icons/ServiceIconDashboard";
import ReferralIcon from "@/assets/icons/Referral";

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
