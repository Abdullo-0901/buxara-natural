import { Menu, Group, Center, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./headr.menu.module.css";
import Language from "../language/language";

const links = [
  { link: "/about", label: "Features" },
  {
    link: "#1",
    label: "Learn",
    links: [
      { link: "/docs", label: "Documentation" },
      { link: "/resources", label: "Resources" },
      { link: "/community", label: "Community" },
      { link: "/blog", label: "Blog" },
    ],
  },
  { link: "/about", label: "About" },
  { link: "/pricing", label: "Pricing" },
  {
    link: "#2",
    label: "Support",
  },
];

export function HeaderMenu() {
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
          <a
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <Center>
              <span className={classes.linkLabel}>{link.label}</span>
            </Center>
          </a>
        </Menu.Target>
      </Menu>
    );
  });

  return (
    <header className={classes.header}>
      <div className="max-w-[1450px] p-[0_8px] m-[0_auto]">
        <div className={classes.inner}>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <select>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </div>
    </header>
  );
}
