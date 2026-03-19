import React from "react";
import NavItem from "./NavItem";

type MenuLink = {
  title: string;
  href: string;
};

const Menu = ({ links }: { links: MenuLink[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-forestGreen/95 border-t border-warmTan/20">
      {links.map((item, index) => (
        <li key={index}>
          <NavItem href={item.href} title={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
