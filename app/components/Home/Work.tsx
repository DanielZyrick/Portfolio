import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import WorkCursor from "../Cursor/WorkCursor";
import { allProjects } from "@/app/lib/projects";

export default function Work() {
  const [modal, setModal] = useState({ active: false, i: 0 });
  return (
    <>
      <section
        className="p-5 sm:p-10 md:p-20 mt-24 lg:mt-0 relative max-w-[1920px] w-full overflow-hidden m-auto"
        id="work-container"
      >
        <div>
          <h2 className="font-medium">Site that i worked on.</h2>
        </div>
        <div className="pt-5 transition-all duration-200 ease-linear delay-100">
          {allProjects.map((items, i) => (
            <Link href={`/work/${items.slug}`} key={i}>
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
                <h3 className="text-5xl sm:text-5xl lg:text-7xl max-[260px]:text-2xl transition-all duration-200 ease-linear delay-100">
                  {items.label}
                </h3>
                <FiArrowUpRight size={40} />
              </div>
            </Link>
          ))}
          <div className="flex justify-center pt-16 ">
            <Link
              href={"/work"}
              className="flex items-center justify-center w-56 h-20 rounded-full text-lg bg-bkg dark:bg-white text-white dark:text-black font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300"
            >
              Explore more
            </Link>
          </div>
        </div>
        <WorkCursor modal={modal} workItems={allProjects} />
      </section>
    </>
  );
}
