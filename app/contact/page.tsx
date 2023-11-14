"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <section className="py-14 relative h-fit mx-5 sm:mx-10 md:mx-20">
        <div className="pt-10">
          <div className="flex flex-col lg:flex-row justify-between ">
            <h2 className="text-4xl sm:text-6xl lg:w-1/3 xl:w-1/2 ">
              CONTACT ME
            </h2>
            <p className="text-2xl lg:text-4xl lg:w-2/3 xl:w-2/4 pt-20">
              I am always up for fresh connections and interesting discussions.
              The details listed below can be used to get in touch with me. I am
              happy to hear from you. If you would like to talk about exciting
              projects, new collaboration opportunities, or just to share ideas
              about front-end development, don't hesitate to get in touch.
            </p>
          </div>
        </div>
        <div className="flex gap-y-20 flex-col md:flex-row max-xl:justify-between pt-20">
          <div className="flex max-[450px]:flex-col md:flex-col w-full md:w-1/3 gap-x-20">
            <div className="mb-10">
              <p className="text-2xl mb-3">Contact Details</p>
              <address className="flex flex-col text-xl font-extralight gap-y-1">
                <Link
                  href="mailto:daniel.gayao7@gmail.com"
                  target="_blank"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  daniel.gayao7@gmail.com
                </Link>
                <Link
                  href="tel:+639062173558"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  +63906 217 3558
                </Link>
              </address>
            </div>
            <div>
              <p className="text-2xl mb-3">Socials</p>
              <address className="flex flex-col text-xl font-extralight gap-y-1">
                <Link
                  href="https://instagram.com/dzyrick2"
                  target="_blank"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com/daniel.zyrick?mibextid=LQQJ4d"
                  target="_blank"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.linkedin.com/in/daniel-gayao-9611a2207/"
                  target="_blank"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  LinkedIn
                </Link>
              </address>
            </div>
          </div>
          <div className="w-full md:w-2/4">
            <form
              action=""
              className="gap-y-10 flex flex-col justify-center items-center"
            >
              <input
                className="w-full h-20 indent-5 py-3 text-2xl border-b border-black dark:border-white bg-white dark:bg-[#121212] placeholder:text-2xl font-light focus:outline-none"
                type="text"
                placeholder="Your name"
                required
              />
              <input
                className="w-full h-20 indent-5 py-3 text-2xl border-b border-black dark:border-white bg-white dark:bg-[#121212] placeholder:text-2xl font-light focus:outline-none"
                type="email"
                placeholder="Email"
                required
              />
              <textarea
                className="w-full h-20 indent-5 py-3 text-2xl border-b border-black dark:border-white bg-white dark:bg-[#121212] placeholder:text-2xl font-light focus:outline-none"
                rows={1}
                required
                placeholder="Your message"
              />
              <button className="w-36 h-36 text-xl rounded-full bg-bkg dark:bg-white text-white dark:text-black">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
