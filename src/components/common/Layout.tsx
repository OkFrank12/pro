import { Outlet } from "react-router-dom";
import DashboardHeader from "../alternate/DashboardHeader";
import Footer from "../static/Footer";

const Layout = () => {
  return (
    <div>
      <DashboardHeader />
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
