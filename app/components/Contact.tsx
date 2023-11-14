import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
export default function Contact() {
  return (
    <section className="my-20 w-full relative">
      <div className="px-5 sm:px-10 md:px-20 w-full overflow-hidden ">
        <div className="text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-bold text-white dark:text-[#121212] font-outline-2 dark:font-outline-2-dark whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          <span>
            LET'S WORK TOGETHER - LET'S WORK TOGETHER - LET'S WORK TOGETHER -
          </span>
        </div>
      </div>
      <div className="mx-5 py-10 lg:pt-20 sm:mt-0 sm:mx-10 md:mx-20">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light w-full sm:w-2/3 lg:w-1/3">
          Are you ready to take on the excitement?
        </h3>
      </div>
      <div className="flex max-[450px]:flex-col flex-row items-center justify-between mb-16 mx-5 sm:mx-10 md:mx-20 gap-y-5">
        <div className="flex flex-col items-center min-[450px]:items-start lg:flex-row max-[450px]:text-sm text-lg sm:text-xl lg:text-2xl gap-5 lg:gap-10 sm:pt-0">
          <Link
            href="mailto:daniel.gayao7@gmail.com"
            className="flex w-fit justify-center items-center h-14 rounded-full outline outline-1 px-5"
          >
            daniel.gayao7@gmail.com
          </Link>
          <Link
            href="tel:+639062173558"
            className="flex w-fit justify-center items-center h-14 rounded-full outline outline-1 px-5"
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
        <div className="border-t border-black w-full absolute z-0"></div>
        <Link
          href="/contact#top"
          className="flex justify-center items-center w-36 h-36 lg:w-48 lg:h-48 rounded-full text-md lg:text-lg z-10 bg-[#121212] dark:bg-white text-white dark:text-black font-medium"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
