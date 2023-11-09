import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
export default function Contact() {
  return (
    <section className="my-10 w-full">
      <div className="mb-20 overflow-hidden">
        <h5 className="text-9xl font-bold text-white font-outline-2 whitespace-nowrap">
          LET'S WORK TOGETHER - LET'S WORK TOGETHER
        </h5>
      </div>
      <div className="px-20">
        <h3 className="text-5xl font-light w-1/3 mb-16">
          Are you ready to take on the excitement?
        </h3>
      </div>
      <div className="flex flex-col 2xl:flex-row items-center justify-between mb-10 px-20">
        <div className="flex flex-col 2xl:flex-row text-2xl gap-10">
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
        <div className="flex gap-1.5">
          <Link
            href="https://www.linkedin.com/in/daniel-gayao-9611a2207/"
            target="_blank"
          >
            <BsLinkedin size={25} />
          </Link>
          <Link href="https://instagram.com/dzyrick2" target="_blank">
            <AiFillInstagram size={25} />
          </Link>
          <Link
            href="https://www.facebook.com/daniel.zyrick?mibextid=LQQJ4d"
            target="_blank"
          >
            <BsFacebook size={25} />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center relative mx-20 mb-10">
        <div className="border-t border-black w-full absolute z-0"></div>
        <Link
          href="/contact"
          className="flex justify-center items-center w-56 h-20 rounded-full bg-gray-900 text-white text-lg z-10"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
