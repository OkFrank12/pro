import { Outlet } from "react-router-dom";
import DashboardHeader from "../alternate/DashboardHeader";

const Layout = () => {
  return (
    <div>
      <DashboardHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
