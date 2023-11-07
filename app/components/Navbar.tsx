"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div className="flex justify-between space-x-6 h-14 items-center mb-5 px-20 absolute w-full z-20">
      <Link href="/" className="text-2xl">
        DG
      </Link>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li className="text-xl font-light" key={item.href}>
            <Link
              href={item.href}
              className={classNames({
                "underline underline-offset-8": item.href === pathname,
                "hover:underline underline-offset-8": item.href !== pathname,
                // "hover:text-zinc-900 transition-colors": true,
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
