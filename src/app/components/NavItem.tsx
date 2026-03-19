import React from "react";
import Link from "next/link";
const NavItem = ({
  href,
  title,
  closeNavBar,
}: {
  href: any;
  title: String;
  closeNavBar?: () => void;
}) => {
  return (
    <Link
      onClick={closeNavBar}
      href={href}
      className="nav-link block py-2 pl-3 pr-4 text-cream sm:text-base rounded md:p-0 relative transition-colors duration-200 hover:text-warmTan"
    >
      {title}
    </Link>
  );
};

export default NavItem;
