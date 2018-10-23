// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";

import Graphql from "../views/Graphql/Graphql";
import AdminPage from "../views/AdminPage/AdminPage";
import ExpertPage from "../views/ExpertPage/ExpertPage";
import ObjectCheckListPage from "../views/ObjectCheckListPage/ObjectCheckListPage";
import OutsidePetitionPage from "../views/OutsidePetitionPage/OutsidePetitionPage";
import InsidePetitionPage from "../views/InsidePetitionPage/InsidePetitionPage";

const dashboardRoutes = [
  {
    path: "/admin-page",
    sidebarName: "Admin page",
    navbarName: "Admin page",
    icon: "content_paste",
    component: AdminPage
  },
  {
    path: "/expert-page",
    sidebarName: "Expert page",
    navbarName: "Expert page",
    icon: "content_paste",
    component: ExpertPage
  },
  {
    path: "/object-check-list-page",
    sidebarName: "Object CheckList Page",
    navbarName: "Object CheckList Page",
    icon: "content_paste",
    component: ObjectCheckListPage
  },
  {
    path: "/outside-petitions-page",
    sidebarName: "Outside Petitions Page",
    navbarName: "Outside Petitions Page",
    icon: "content_paste",
    component: OutsidePetitionPage
  },
  {
    path: "/inside-petitions-page",
    sidebarName: "Inside Petitions Page",
    navbarName: "Inside Petitions Page",
    icon: "content_paste",
    component: InsidePetitionPage
  },
  {
    path: "/graphql",
    sidebarName: "Graphql builder",
    navbarName: "Graphql builder",
    icon: "content_paste",
    component: Graphql
  },
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
