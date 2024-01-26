"use client";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import gsap from "gsap";

export default function Contact() {
  const textOne = useRef(null);
  const textTwo = useRef(null);
  let xPerc = 0;
  let way = -1;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    gsap.set(textTwo.current, {
      left: textTwo.current.getBoundingClientRect().width,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    requestAnimationFrame(animation); // eslint-disable-line
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let animation; // eslint-disable-line

  // eslint-disable-next-line react-hooks/exhaustive-deps

  if (typeof window !== "undefined") {
    window.onload = animation = () => {
      if (xPerc < -100) {
        xPerc = 0;
      }
      if (xPerc > 0) {
        xPerc = -100;
      }
      if (textOne.current && textTwo.current) {
        gsap.set(textOne.current, { xPercent: xPerc });
        gsap.set(textTwo.current, { xPercent: xPerc });
      }

      xPerc += 0.05 * way;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (textOne.current) {
        requestAnimationFrame(animation);
      }
    };
  }

  return (
    <section className="my-20 w-full relative max-w-[1920px] m-auto">
      <div className="w-full overflow-hidden ">
        <div className="overflow-hidden w-full h-[3rem] sm:h-[5rem] lg:h-[6rem] xl:h-[8rem] relative text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-bold text-white dark:text-[#121212] font-outline-2 dark:font-outline-2-dark whitespace-nowrap">
          <span
            ref={textOne}
            className="pr-5 absolute left-0 whitespace-nowrap"
          >
            LET'S WORK TOGETHER - LET'S WORK TOGETHER -
          </span>
          <span
            ref={textTwo}
            id="contactSecondTextWidth"
            className="pr-5 absolute whitespace-nowrap"
          >
            LET'S WORK TOGETHER - LET'S WORK TOGETHER -
          </span>
        </div>
      </div>
      <div className="mx-5 py-10 lg:pt-20 sm:mt-0 sm:mx-10 md:mx-20 ">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light w-full sm:w-2/3 lg:w-1/3">
          Are you ready to take on the excitement?
        </h3>
      </div>
      <div className="flex max-[450px]:flex-col flex-row items-center justify-between mb-16 mx-5 sm:mx-10 md:mx-20 gap-y-5">
        <div className="flex flex-col items-center min-[450px]:items-start lg:flex-row max-[450px]:text-sm text-lg sm:text-xl lg:text-2xl gap-5 lg:gap-10 sm:pt-0">
          <Link
            href="mailto:daniel.gayao7@gmail.com"
            className="flex w-fit justify-center items-center h-14 rounded-full outline outline-1 px-5 hover:bg-zinc-700 hover:text-white"
          >
            daniel.gayao7@gmail.com
          </Link>
          <Link
            href="tel:+639062173558"
            className="flex w-fit justify-center items-center h-14 rounded-full outline outline-1 px-5 hover:bg-zinc-700 hover:text-white"
          >
            +63906 217 3558
          </Link>
        </div>
        <div className="flex gap-1.5 max-[450px]:mt-5">
          <Link
            href="https://www.linkedin.com/in/daniel-gayao-9611a2207/"
            target="_blank"
            aria-label="Linkedin"
          >
            <BsLinkedin size={25} />
          </Link>
          <Link
            href="https://instagram.com/dzyrick2"
            target="_blank"
            aria-label="Instagram"
          >
            <AiFillInstagram size={25} />
          </Link>
          <Link
            href="https://www.facebook.com/daniel.zyrick?mibextid=LQQJ4d"
            target="_blank"
            aria-label="Facebook"
          >
            <BsFacebook size={25} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center relative mb-10 mx-5 sm:mx-10 lg:mx-20">
        <div className="border-t border-black dark:border-white w-full absolute z-0"></div>
        <Link
          href="/contact#top"
          className="flex justify-center items-center w-36 h-36 lg:w-48 lg:h-48 rounded-full text-md lg:text-lg z-10 bg-[#121212] dark:bg-white text-white dark:text-black font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
