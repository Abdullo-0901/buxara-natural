import { NavLink, Outlet } from "react-router-dom";
import { HeaderMenu, links } from "../components/Header/headers";
import { useTranslation } from "react-i18next";
import { Button, Flex, Input, Menu } from "@mantine/core";

const Layout = () => {
  const { t } = useTranslation();

  const items = links.map((link) => {
    return (
      <Menu
        key={link.label}
        trigger="hover"
        transitionProps={{ exitDuration: 0 }}
        withinPortal
      >
        <Menu.Target>
          <Flex direction={"column"}>
            <NavLink
              to={link.link}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "black" : "gray",
                };
              }}
            >
              {t(link.label)}
            </NavLink>
          </Flex>
        </Menu.Target>
      </Menu>
    );
  });

  return (
    <div>
      <HeaderMenu />
      <div className="max-w-[1450px] overflow-hidden p-[0_8px] m-[0_auto] mt-2">
        <Outlet />
      </div>
      <footer className="grid grid-cols-7 items-start max-w-[1450px] overflow-hidden p-[0_8px] m-[0_auto] mt-5">
        <div className="flex col-span-2 flex-col w-[310px] gap-y-3">
          <img className="w-[350px]" src="/logo.png" alt="" />
          <h1>{t("newscard1aboout")}</h1>
        </div>
        <div className="flex flex-col ">
          {" "}
          <h1 className="font-bold mb-3 text-black">Menu</h1>
          {items}
        </div>
        <div className="flex  flex-col gap-y-1">
          <p className="font-bold mb-3">Contacts</p>
          <span>Bukhara, st.Alpomysh 80.</span>
          <span> Bnpuz@bk.ru</span>
          <span>bnp_fabrik </span>
          <span> info@bnpfabric.com</span>
          <span> +998 93 383 75 85 </span>
          <span>+998 93 960 78 00</span>
        </div>
        <div className="flex flex-col col-span-3 pl-10">
          <p className="font-bold mb-3">Subscribe to our email</p>
          <div className="shadow-lg p-[15px_10px] rounded-3xl relative">
            <Input placeholder="Enter You Email" type="email" />
            <div className="absolute right-5 top-3">
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
