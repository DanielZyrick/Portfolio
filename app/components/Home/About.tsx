import Image from "next/image";
import Link from "next/link";
import danielImage from "@/public/1.jpg";
export default function About() {
  return (
    <section className="flex flex-col sm:flex-row justify-center max-w-[1920px] w-full items-center px-5 sm:px-10 md:px-20 xl:px-56 pt-36 pb-36 m-auto">
      <div className="w-3/4 sm:w-1/3 xl:w-2/5">
        <Image
          src={danielImage}
          width={500}
          height={750}
          alt="Portrait of Daniel Zyrick Gayao"
          className=""
          priority={true}
          placeholder="blur"
        />
      </div>
      <div className="pt-10 sm:pt-0 lg:pt-10 sm:pl-12 lg:pt-0 lg:pl-24 w-full sm:w-2/3 xl:w-3/5">
        <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-5 lg:mb-10">
          I'm a full-stack developer with 2+ years of remote experience
          building and maintaining real estate web platforms for a US
          client — from shipping features to fixing production bugs and
          writing tests.
        </p>
        <div className="flex flex-col sm:flex-row items-center">
          <p className="w-full sm:w-1/2 mb-5 sm:mb-0 sm:mr-10">
            I like web development because it sits right at the intersection
            of design, logic, and problem solving.
          </p>
          <div>
            <Link
              href="/about#top"
              className="w-28 h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 text-md sm:text-md xl:text-xl rounded-full flex justify-center items-center bg-bkg dark:bg-white text-txt dark:text-black  font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300"
            >
              About me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
