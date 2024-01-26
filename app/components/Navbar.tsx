"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import ToggleIcon from "./ToggleIcon";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="max-w-[1920px] w-full m-auto">
      <div className="flex justify-between h-14 items-center absolute z-20 sm:px-10 md:px-20 px-5 max-w-[1920px] w-full">
        <Link href="/" className="text-2xl">
          DG
        </Link>
        <div className="block md:hidden z-10" aria-label="HamburgerMenu">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={24}
            duration={0.0}
            aria-label="HamburgerMenu"
          />
        </div>
        {isOpen && (
          <div className="fixed md:hidden top-0 w-full h-screen z-0 bg-[#FFF] dark:bg-[#121212] px-0 animate-[reveal_.5s_ease-in-out] m-[-1.25rem] sm:m-[-2.25rem]">
            <div className="flex flex-col justify-center items-center h-full gap-y-10 text-5xl ">
              <div className="pb-5">
                <ToggleIcon />
              </div>
              <div>
                <Link
                  href="/"
                  className="hover:underline decoration-1 underline-offset-[16px]"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  className="hover:underline decoration-1 underline-offset-[16px]"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  href="/work"
                  className="hover:underline decoration-1 underline-offset-[16px]"
                  onClick={() => setOpen(false)}
                >
                  Work
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="hover:underline decoration-1 underline-offset-[16px]"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center items-center space-x-10 hidden md:flex">
          <ul className="space-x-6  md:flex">
            {navItems.map((item, i) => (
              <li className="text-lg font-light" key={i}>
                <Link
                  href={item.href}
                  className={classNames({
                    "underline underline-offset-8": item.href === pathname,
                    "hover:underline underline-offset-8":
                      item.href !== pathname,
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
      </div>
    </header>
  );
}

export default Navbar;
