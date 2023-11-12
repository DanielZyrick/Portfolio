"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ToggleIcon from "./ToggleIcon";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav className="flex justify-between h-14 items-center px-5 sm:px-10 md:px-20 absolute w-full z-20 inline-flex">
      <Link href="/" className="text-2xl">
        DG
      </Link>
      <div className="block md:hidden">
        <RxHamburgerMenu size={24} />
      </div>
      <div className="flex justify-center items-center space-x-10 hidden md:flex">
        <ul className="space-x-6  md:flex">
          {navItems.map((item, i) => (
            <li className="text-xl font-light" key={i}>
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

        <ToggleIcon />
      </div>
    </nav>
  );
}

export default Navbar;
