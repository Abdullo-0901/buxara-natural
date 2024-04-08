import { Burger, Flex, Group, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Language from "../language/language";
import classes from "./headr.menu.module.css";

const links = [
  { link: "/", label: "navlink1", id: 1 },
  {
    link: "/collection",
    label: "navlink2",
    id: 2,
  },
  { link: "/about", label: "navlink3", id: 3 },

  {
    link: "/contact",
    label: "navlink5",
    id: 5,
  },
];

export function HeaderMenu() {
  const [t] = useTranslation();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    return (
      <Menu
        key={link.label}
        trigger="hover"
        transitionProps={{ exitDuration: 0 }}
        withinPortal
      >
        <Menu.Target>
          <Flex>
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
    <header className={classes.header}>
      <div className="max-w-[1450px] p-[0_8px] m-[0_auto]">
        <div className={classes.inner}>
          <Group gap={"sm"} visibleFrom="sm">
            <Link to="/" className="mr-4">
              <img src="/logo.png" className="h-[36px]" alt="" />
            </Link>
            {items}
          </Group>

          <Language />
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </div>
    </header>
  );
}
