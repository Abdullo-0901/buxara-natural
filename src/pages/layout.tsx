import { Link, NavLink, Outlet } from "react-router-dom";
import { HeaderMenu, links } from "../components/Header/headers";
import { useTranslation } from "react-i18next";
import { Button, Flex, Input, Menu } from "@mantine/core";
import { toast } from "react-toastify";
import { useState } from "react";

const Layout = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState<string>("");

  document.title = "Home";

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

  const sendMessage = async () => {
    // useEffect(() => {
    //   Aos.init();
    // }, []);

    const token = "7014941655:AAGccnh01y1JkW9E3ggcwSlg5NwoaEKQdL8";
    const chatId = "5923880668"; // The chat ID of the user or group you want to send the message to
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `Email: ${message}`,
        }),
      });

      if (response.ok) {
        setMessage("");
        toast.success(t("alertMessage"));
      } else {
        toast.error(await response.text());
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <HeaderMenu />
      <div className="max-w-[1450px] overflow-hidden  p-[0_8px] m-[0_auto] mt-2">
        <Outlet />
      </div>
      <footer className="grid sm:grid-cols-1 sm3:grid-cols-2   gap-9 md3:grid-cols-7 items-start max-w-[1450px] overflow-hidden p-[0_8px] m-[0_auto] mt-16">
        <Link
          to={"/"}
          className="flex sm:col-span-1 md3:col-span-2 flex-col w-[310px] gap-y-3"
        >
          <img className="sm:w-[150px]  md:w-[350px]" src="/logo.png" alt="" />
          <h1>{t("newscard1aboout")}</h1>
        </Link>
        <div className="flex flex-col sm:hidden md3:flex ">
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
        <div className="flex flex-col sm:hidden md3:flex col-span-3 pl-10">
          <p className="font-bold mb-3">Subscribe to our email</p>
          <div className="shadow-lg shadw shadow-red-500  p-[15px_10px] pr-[129px] rounded-3xl relative">
            <form action="">
              <Input
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter You Email"
                required
                value={message}
                type="email"
              />
              <div className="absolute right-5 top-[16px]">
                <Button
                  disabled={!message.includes("@")}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault(), sendMessage();
                  }}
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </footer>
      <div className="flex flex-col sm:flex md3:hidden col-span-3 ">
        <p className="font-bold mb-3">Subscribe to our email</p>
        <div className="shadow-lg shadw shadow-red-500  p-[15px_10px] pr-[129px] rounded-3xl relative">
          <form action="">
            <Input
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter You Email"
              required
              value={message}
              type="email"
            />
            <div className="absolute right-5 top-[16px]">
              <Button
                disabled={!message.includes("@")}
                type="submit"
                onClick={(e) => {
                  e.preventDefault(), sendMessage();
                }}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Layout;
