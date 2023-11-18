import styles from "@/app/page.module.css";
import Link from "next/link";
export default function HomeHero() {
  return (
    <section className="flex flex-col justify-center items-center h-screen min-h-full relative z-10 mx-5 sm:mx-10 md:mx-20">
      <div>
        <h1 className="text-center 2xl:text-9xl xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl mb-2 md:pb-5 ">
          Daniel Zyrick Gayao
        </h1>
      </div>
      <div className="flex flex-col text-center items-center 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl">
        <span className="font-extralight">Junior Front-End Web Developer</span>
        <span className="font-extralight">Based in Philippines</span>
      </div>
      <div className={styles.bgRadial}></div>
      <div className="flex flex-col">
        <div className="absolute bottom-4 sm:bottom-7 left-0">
          <div className="w-12 md:w-24 lg:w-40 xl:w-48 2xl:w-60 h-auto">
            <span className="md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extralight">
              Portfolio 2023
            </span>
          </div>
        </div>
        <div className="flex flex-col absolute bottom-4 sm:bottom-7 right-0 font-light text-md sm:text-lg lg:text-xl">
          <Link
            className="hover:underline decoration-1 underline-offset-8"
            href="https://instagram.com/dzyrick2"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            className="hover:underline decoration-1 underline-offset-8"
            href="https://www.facebook.com/daniel.zyrick?mibextid=LQQJ4d"
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            className="hover:underline decoration-1 underline-offset-8"
            href="mailto:daniel.gayao7@gmail.com"
          >
            Email
          </Link>
          <Link
            className="hover:underline decoration-1 underline-offset-8"
            href="https://www.linkedin.com/in/daniel-gayao-9611a2207/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
