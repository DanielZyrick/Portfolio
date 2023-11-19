"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor/Cursor";

export default function Work() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  const workItems = [
    { label: "Inked2600", href: "https://inked2600.vercel.app/" },
    { label: "Emp", href: "/work" },
    { label: "Rig-out", href: "/contact" },
    { label: "Locomote", href: "/contact" },
  ];
  return (
    <>
      <section className="relative pt-24 mx-5 sm:mx-10 md:mx-20">
        <div className="w-full min-[500px]:w-3/4 sm:w-2/3 lg:w-2/4 pb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light">
            Here is a small sampling of my top website.{" "}
          </h2>
        </div>
        <div className="py-20">
          {workItems.map((items, i) => (
            <Link href={items.href} key={i} target="_blank">
              <div
                className={`flex items-center justify-between border-b border-gray-900 py-10 
              ${i === 0 ? "border-t" : ""}`}
              >
                <h5 className="text-3xl sm:text-5xl lg:text-7xl">
                  {items.label}
                </h5>
                <FiArrowUpRight size={40} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
      {/* <Cursor /> */}
    </>
  );
}
