import { RiDashboardLine } from "react-icons/ri";
import { MdAccountBalanceWallet, MdPeopleOutline } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { HiOutlineAdjustments } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

export const SideNavListData1 = [
  {
    title: "Dashboard",
    icon: <RiDashboardLine />,
    path: "/",
  },
  {
    title: "Balances",
    icon: <MdAccountBalanceWallet />,
    path: "/balances",
  },
  {
    title: "Customers",
    icon: <MdPeopleOutline />,
    path: "/customers",
  },
  {
    title: "Analytics",
    icon: <DiGoogleAnalytics />,
    path: "/analytics",
  },
];

export const SideNavListData2 = [
  {
    title: "Settings",
    icon: <HiOutlineAdjustments className="transform rotate-90" />,
    path: "/settings",
  },
  {
    title: "Team",
    icon: <AiOutlineStar />,
    path: "/team",
  },
  {
    title: "Contact",
    icon: <FiPhone />,
    path: "/contact",
  },
  {
    title: "Logout",
    icon: <IoIosLogOut />,
    path: "/logout",
  },
];
