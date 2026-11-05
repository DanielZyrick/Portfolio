"use client";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiArrowLeft, FiGithub, FiPlay } from "react-icons/fi";
import { getProjectBySlug } from "@/app/lib/projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Cursor from "@/app/components/Cursor/Cursor";
import useLocomotiveScroll from "@/app/lib/useLocomotiveScroll";

const pillButton =
  "inline-flex items-center gap-2 w-fit rounded-full border border-black dark:border-white px-8 py-3 text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors";

export default function ProjectPage() {
  const params = useParams<{ slug: string }>();
  const project = getProjectBySlug(params.slug);

  useLocomotiveScroll();

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section
        className="max-w-[1920px] w-full relative pt-24 px-5 sm:px-10 md:px-20 m-auto"
        id="top"
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-lg hover:underline underline-offset-8 mb-10"
        >
          <FiArrowLeft /> Back to Work
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-gray-900">
          <div>
            <span className="text-sm uppercase tracking-widest opacity-60">
              {project.type === "personal" ? "Personal Project" : "Client Work"}
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mt-2">
              {project.label}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={project.href} target="_blank" className={pillButton}>
              Visit Live Site <FiArrowUpRight />
            </Link>
            {project.repo && (
              <Link href={project.repo} target="_blank" className={pillButton}>
                View Code <FiGithub />
              </Link>
            )}
            {project.video && (
              <Link href={project.video} target="_blank" className={pillButton}>
                Watch the Demo <FiPlay />
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">
          <div>
            <h2 className="text-sm uppercase tracking-widest opacity-60 mb-2">
              Role
            </h2>
            <p className="text-lg">{project.role}</p>
          </div>
          {project.period && (
            <div>
              <h2 className="text-sm uppercase tracking-widest opacity-60 mb-2">
                Period
              </h2>
              <p className="text-lg">{project.period}</p>
            </div>
          )}
          <div>
            <h2 className="text-sm uppercase tracking-widest opacity-60 mb-2">
              Tech Stack
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-current px-3 py-1 text-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.src ? (
          <div className="py-10">
            <Image
              src={`/${project.src}`}
              width={1600}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt={`${project.label} screenshot`}
              className="rounded-lg"
            />
          </div>
        ) : (
          <div
            className="my-10 h-64 sm:h-80 rounded-lg"
            style={{ backgroundColor: project.color }}
          />
        )}

        <div className="py-10 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-medium mb-5">Overview</h2>
          <p className="text-lg sm:text-xl font-light mb-8">
            {project.description}
          </p>
          <ul className="flex flex-col gap-y-3 text-base sm:text-lg font-light list-disc pl-5">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>

        {project.gallery && (
          <div className="py-10 border-t border-gray-900">
            <h2 className="text-2xl sm:text-3xl font-medium mb-8">A closer look</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">
              {project.gallery.map((shot, i, all) => (
                // An odd last image spans both columns, so the grid has no gap.
                <figure key={shot.src} className={i === all.length - 1 && all.length % 2 === 1 ? "lg:col-span-2" : undefined}>
                  <Image
                    src={`/${shot.src}`}
                    width={1440}
                    height={900}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    style={{ width: "100%", height: "auto" }}
                    alt={shot.alt}
                    className="rounded-lg"
                  />
                  <figcaption className="mt-4 text-base sm:text-lg font-light opacity-80">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {project.decisions && (
          <div className="py-10 border-t border-gray-900">
            <h2 className="text-2xl sm:text-3xl font-medium mb-8">Key decisions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-6xl">
              {project.decisions.map((d) => (
                <div key={d.title}>
                  <h3 className="text-lg sm:text-xl font-medium mb-2">{d.title}</h3>
                  <p className="text-base sm:text-lg font-light opacity-80">{d.body}</p>
                </div>
              ))}
            </div>
            {project.writeup && (
              <Link
                href={project.writeup}
                target="_blank"
                className="inline-flex items-center gap-2 mt-10 text-lg hover:underline underline-offset-8"
              >
                Read the full write-up <FiArrowUpRight />
              </Link>
            )}
          </div>
        )}
      </section>
      <Contact />
      <Footer />
      <Cursor />
    </main>
  );
}
