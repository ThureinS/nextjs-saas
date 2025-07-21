'use client'

import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItem = [
  { name: "Home", path: "/" },
  { name: "Companions", path: "/companions" },
  { name: "My Journey", path: "/my-journey" },
];

const NavItem = () => {
  const pathName = usePathname();

  return (
    <nav className="flex items-center gap-4">
      {navItem.map((item) => (
        <Link href={item.path} key={item.name} className={cn(pathName === item.path && 'text-primary font-bold ')}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavItem;
