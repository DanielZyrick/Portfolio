"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import { useState, type FormEvent } from "react";
import Cursor from "../components/Cursor/Cursor";
import useLocomotiveScroll from "../lib/useLocomotiveScroll";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  useLocomotiveScroll();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <section className="max-w-[1920px] w-full py-14 relative h-fit px-5 sm:px-10 md:px-20 m-auto">
        <div className="pt-10">
          <div className="flex flex-col lg:flex-row justify-between ">
            <h1 className="text-4xl sm:text-6xl lg:w-1/3 xl:w-1/2 ">
              CONTACT ME
            </h1>
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
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  daniel.gayao7@gmail.com
                </Link>
                <Link
                  href="tel:+639460027467"
                  className="hover:underline decoration-1 underline-offset-8"
                >
                  +63 946 002 7467
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
              </address>
            </div>
          </div>
          <div className="w-full md:w-2/4">
            <form
              onSubmit={handleSubmit}
              className="gap-y-10 flex flex-col justify-center items-center"
            >
              <input
                name="name"
                className="w-full h-20 indent-5 py-3 text-2xl border-b-2 border-black dark:border-white bg-white dark:bg-[#121212] placeholder:text-2xl font-light focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
                type="text"
                placeholder="Your name"
                autoComplete="given-name"
                required
                disabled={status === "submitting"}
              />
              <input
                name="email"
                className="w-full h-20 indent-5 py-3 text-2xl border-b-2 border-black dark:border-white bg-white dark:bg-[#121212] placeholder:text-2xl font-light focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
                disabled={status === "submitting"}
              />
              <textarea
                name="message"
                className="w-full h-32 indent-5 py-3 text-2xl border-b-2 border-black dark:border-white bg-white dark:bg-[#121212] placeholder:text-2xl font-light focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
                rows={4}
                placeholder="Your message"
                autoComplete="off"
                required
                disabled={status === "submitting"}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-36 h-36 text-xl rounded-full bg-bkg dark:bg-white text-white dark:text-black hover:bg-zinc-700 dark:hover:bg-zinc-300 disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Send"}
              </button>
              {status === "success" && (
                <p className="text-lg text-green-600 dark:text-green-400">
                  Thanks! Your message has been sent — I'll get back to you
                  soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-lg text-red-600 dark:text-red-400">
                  Something went wrong sending your message. Try emailing me
                  directly at daniel.gayao7@gmail.com instead.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <Cursor />
    </main>
  );
}
