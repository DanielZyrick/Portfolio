"use client";
import Image from "next/image";
import ScrollTriggerSlide from "../components/About/ScrollTriggerSlide";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Cursor from "../components/Cursor/Cursor";

export default function About() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <section className="max-w-[1920px] w-full max-h-[940px] m-auto">
        <div className="pt-14 relative mx-5 sm:mx-10 md:mx-20 h-[940px]">
          <div className="pt-10 w-full h-full" id="top">
            <div className="flex flex-col items-center relative h-full gap-y-10 sm:gap-y-20">
              <h2 className="text-4xl sm:text-6xl w-full lg:w-1/3 md:absolute left-0 top-0">
                ABOUT ME
              </h2>
              <p className="text-2xl md:text-4xl w-full md:w-3/5 md:absolute md:left-1/4 md:top-1/4 lg:left-1/4 2xl:top-[20%] z-10">
                My name is Daniel Zyrick Gayao, though. I work as a front-end
                developer and web designer from the Philippines. My passion is
                building beautiful, adaptable, and user-friendly websites.
              </p>
              <Image
                src="/1.jpg"
                width="0"
                height="0"
                sizes="100vw"
                style={{ height: "auto" }}
                className="w-3/5 sm:w-1/3 md:w-1/4 lg:w-1/5 md:absolute right-0 md:bottom-10 z-0"
                alt="Daniel Image"
                placeholder="blur"
                blurDataURL={"/1.jpg"}
              />
            </div>
          </div>
        </div>
      </section>
      <ScrollTriggerSlide />
      <Services />
      <Contact />
      <Footer />
      <Cursor />
    </>
  );
}
