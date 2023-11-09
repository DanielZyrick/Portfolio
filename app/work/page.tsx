import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function page() {
  const workItems = [
    { label: "Inked2600", href: "/about" },
    { label: "Emp", href: "/work" },
    { label: "Rig-out", href: "/contact" },
    { label: "Locomote", href: "/contact" },
  ];
  return (
    <>
      <section className="pt-32 px-20 relative">
        <div className="w-2/4 pb-20">
          <h2 className="text-7xl font-light">
            Here is a small sampling of my top website.{" "}
          </h2>
        </div>
        <div className="py-20">
          {workItems.map((items, i) => (
            <Link href={items.href} key={i}>
              <div
                className={`flex items-center justify-between border-b border-gray-900 py-10 
              ${i === 0 ? "border-t" : ""}`}
              >
                <h5 className="text-7xl">{items.label}</h5>
                <FiArrowUpRight size={40} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
