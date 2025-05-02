import { Outlet } from "react-router-dom";
import Menu from "./Menu";

const Layout = () => {
  return (
    <div className="relative">
      <Outlet />    {/* This renders Home, About, etc. */}
      <Menu />      {/* Always visible */}
    </div>
  );
};

export default Layout;
