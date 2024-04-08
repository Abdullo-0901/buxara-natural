import { Outlet } from "react-router-dom";
import { HeaderMenu } from "../components/Header/headers";

const Layout = () => {
  return (
    <div>
      <HeaderMenu />
      <div className="max-w-[1450px] overflow-hidden p-[0_8px] m-[0_auto] mt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
