import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <section className="flex flex-col 2xl:flex-row justify-center items-center px-36 mt-36 mb-20 mx-20">
      <div className="w-2/5">
        <Image
          src="/1.jpg"
          width={500}
          height={750}
          alt="Daniel Image"
          className="rounded-3xl"
          priority={true}
        />
      </div>
      <div className="pl-24 w-3/5">
        <p className="2xl:text-3xl mb-10">
          In this age of technology, it's my goal to help brands in become
          distinctive. We'll establish the new standard for excellence to one
          another. Unexpected and constantly at the forefront of things.
        </p>
        <div className="flex items-center">
          <p className="w-1/2 mr-10">
            I enjoy within the field of web development because of my love for
            design, coding, and interaction.
          </p>
          <div>
            <Link
              href="/about"
              className="text-white text-xl 2xl:w-40 2xl:h-40 rounded-full bg-gray-950 flex justify-center items-center"
            >
              About me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
