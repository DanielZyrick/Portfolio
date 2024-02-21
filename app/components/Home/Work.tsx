import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import WorkCursor from "../Cursor/WorkCursor";

const workItems = [
  {
    label: "Inked2600",
    href: "https://inked2600.vercel.app/",
    src: "inked2600.jpg",
    color: "#FFFFFF",
  },
  { label: "Emp", href: "/", src: "HilagaStudio.jpg", color: "#111111" },
  { label: "Rig-out", href: "/", src: "Fi.jpg", color: "#FFFFFF" },
  { label: "Locomote", href: "/", src: "HilagaStudio.jpg", color: "#111111" },
];

export default function Work() {
  const [modal, setModal] = useState({ active: false, i: 0 });
  return (
    <>
      <section
        className="p-5 sm:p-10 md:p-20 mt-24 lg:mt-0 relative max-w-[1920px] w-full overflow-hidden m-auto"
        id="work-container"
      >
        <div>
          <h4 className="font-medium">Site that i created.</h4>
        </div>
        <div className="pt-5 transition-all duration-200 ease-linear delay-100">
          {workItems.map((items, i) => (
            <Link href={items.href} target="_blank" key={i}>
              <div
                onMouseEnter={() => {
                  setModal({ active: true, i });
                }}
                onMouseLeave={() => {
                  setModal({ active: false, i });
                }}
                className={`flex items-center justify-between border-b border-gray-900 py-10 transition-all duration-200 ease-linear delay-100 hover:opacity-50
              ${i === 0 ? "border-t" : ""}`}
              >
                <h5 className="text-5xl sm:text-5xl lg:text-7xl max-[260px]:text-2xl transition-all duration-200 ease-linear delay-100">
                  {items.label}
                </h5>
                <FiArrowUpRight size={40} />
              </div>
            </Link>
          ))}
          <div className="flex justify-center pt-16 ">
            <button className="w-56 h-20 rounded-full text-lg bg-bkg dark:bg-white text-white dark:text-black font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300">
              <Link href={"/work#top"}>Explore more</Link>
            </button>
          </div>
        </div>
        <WorkCursor modal={modal} workItems={workItems} />
      </section>
    </>
  );
}
