"use client";
import Image from "next/image";
import Link from "next/link";
import danielImage from "@/public/1.jpg";
import ScrollTriggerSlide from "../components/About/ScrollTriggerSlide";
import Experience from "../components/About/Experience";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor/Cursor";
import useLocomotiveScroll from "../lib/useLocomotiveScroll";

export default function About() {
  useLocomotiveScroll();
  return (
    <main>
      <section className="max-w-[1920px] w-full max-h-[940px] h-screen m-auto">
        <div className="pt-14 relative mx-5 sm:mx-10 md:mx-20 h-full">
          <div className="pt-10 w-full h-full" id="top">
            <div className="flex flex-col items-center relative h-full gap-y-10 sm:gap-y-20">
              <h1 className="text-4xl sm:text-6xl w-full lg:w-1/3 md:absolute left-0 top-0">
                ABOUT ME
              </h1>
              <div className="w-full md:w-3/5 md:absolute md:left-1/4 md:top-1/4 lg:left-1/4 2xl:top-[20%] z-10 flex flex-col items-start gap-8">
                <p className="text-2xl md:text-4xl">
                  My name is Daniel Zyrick Gayao, a full-stack developer based
                  in Baguio, Philippines. I have 2+ years of remote experience
                  building and maintaining real estate web platforms for a US
                  client, working across the stack with Next.js, TypeScript,
                  Express, and SQL — from feature development and bug fixes to
                  testing and technical documentation. I use AI coding tools
                  like Claude Code in my daily workflow, and I'm currently
                  learning Python for AI engineering.
                </p>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="w-fit rounded-full border border-black dark:border-white px-8 py-3 text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  Download Resume
                </Link>
              </div>
              <Image
                src={danielImage}
                width={0}
                height={0}
                sizes="100vw"
                style={{ height: "auto" }}
                className="w-3/5 sm:w-1/3 md:w-1/4 lg:w-1/5 md:absolute right-0 md:bottom-10 z-0"
                alt="Portrait of Daniel Zyrick Gayao"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>
      <ScrollTriggerSlide />
      <Experience />
      <Services />
      <Contact />
      <Footer />
      <Cursor />
    </main>
  );
}
