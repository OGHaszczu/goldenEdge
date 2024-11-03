"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Strona główna",
    path: "/",
  },
  {
    name: "Usługi",
    path: "/uslugi",
  },
  {
    name: "Informacje",
    path: "/informacje",
  },
  {
    name: "Praca",
    path: "/praca",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-yellow border-b-2 border-yellow"
            } capitalize font-medium hover:text-yellow transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
