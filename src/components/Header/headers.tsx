import { Burger, Flex, Group, Menu, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Language from "../language/language";
import classes from "./headr.menu.module.css";

const links = [
  { link: "/", label: "navlink1" },
  {
    link: "/collection",
    label: "navlink2",
  },
  { link: "/about", label: "navlink3" },
  { link: "/pricing", label: "Pricing" },
  {
    link: "/company",
    label: "navlink4",
  },
  {
    link: "/contact",
    label: "navlink5",
  },
];

export function HeaderMenu() {
  const [t] = useTranslation();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const items = links.map((link, index) => {
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
              className={classes.link}
              href={link.link}
              key={link.label}
              active={index === active}
              label={t(link.label)}
              onClick={() => setActive(index)}
            />
          </Flex>
        </Menu.Target>
      </Menu>
    );
  });

  return (
    <header className={classes.header}>
      <div className="max-w-[1450px] p-[0_8px] m-[0_auto]">
        <div className={classes.inner}>
          <Group gap={5} visibleFrom="sm">
            <Link to="/">
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
