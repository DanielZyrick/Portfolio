"use client";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor/Cursor";
import { personalProjects, clientProjects, type Project } from "../lib/projects";
import useLocomotiveScroll from "../lib/useLocomotiveScroll";

function ProjectRow({ item, i }: { item: Project; i: number }) {
  return (
    <Link href={`/work/${item.slug}`}>
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-900 py-10 transition-all duration-200 ease-linear delay-100 hover:opacity-50
      ${i === 0 ? "border-t" : ""}`}
      >
        <div>
          <h3 className="text-3xl sm:text-5xl lg:text-7xl">{item.label}</h3>
          <p className="mt-3 max-w-xl text-base sm:text-lg font-light">
            {item.description}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm font-light opacity-70">
            {item.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-current px-3 py-1"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <FiArrowUpRight size={40} className="shrink-0" />
      </div>
    </Link>
  );
}

export default function Work() {
  useLocomotiveScroll();

  return (
    <main>
      <section
        className="max-w-[1920px] w-full relative pt-24 px-5 sm:px-10 md:px-20 m-auto"
        id="top"
      >
        <div className="w-full min-[500px]:w-3/4 sm:w-2/3 lg:w-2/4 pb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light">
            Here is a small sampling of my top website.{" "}
          </h1>
        </div>

        <div className="pb-10">
          <h2 className="text-2xl sm:text-3xl font-medium">My Projects</h2>
          <p className="mt-2 text-base sm:text-lg font-light opacity-70">
            Projects that I worked on.
          </p>
        </div>
        <div className="pb-20">
          {personalProjects.map((item, i) => (
            <ProjectRow item={item} i={i} key={item.label} />
          ))}
        </div>

        <div className="pb-10">
          <h2 className="text-2xl sm:text-3xl font-medium">Client Work</h2>
          <p className="mt-2 text-base sm:text-lg font-light opacity-70">
            Built remotely as part of a 4-person development team for DBM
            Grow's real estate platforms.
          </p>
        </div>
        <div className="pb-20">
          {clientProjects.map((item, i) => (
            <ProjectRow item={item} i={i} key={item.label} />
          ))}
        </div>
      </section>
      <Contact />
      <Footer />
      <Cursor />
    </main>
  );
}
