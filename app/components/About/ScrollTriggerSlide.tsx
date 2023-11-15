"use client";
import Image from "next/image";

export default function ScrollTriggerSlide() {
  return (
    <section className="h-fit">
      <div className="my-20">
        <div className="mx-5 sm:mx-10 md:mx-20">
          <h5 className="text-3xl sm:text-4xl lg:text-5xl sm:w-2/3 lg:w-3/4 2xl:w-2/3">
            driven by the simple objective of helping companies change the way
            we live.
          </h5>
        </div>
        <div className="overflow-hidden w-full h-[10rem] lg:h-[20rem] relative gap-x-5">
          <div className="absolute top-0 left-0 w-full flex gap-x-5 sm:gap-x-10 lg:gap-x-20 pt-5 sm:pt-10 lg:pt-20 nowrap">
            <Image
              src="/inked2600.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "28%", height: "auto" }}
              alt="inked2600 Image"
              priority={true}
            />
            <Image
              src="/Hilaga Studio.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "28%", height: "auto" }}
              alt="Hilaga Studio Image"
              priority={true}
            />
            <Image
              src="/Fi.JPG"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "28%", height: "auto" }}
              alt="Fi Image"
              priority={true}
            />
          </div>
          <div className="absolute top-0 left-full w-full flex gap-x-5 sm:gap-x-10 lg:gap-x-20 pt-5 sm:pt-10 lg:pt-20 nowrap">
            <Image
              src="/inked2600.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "28%", height: "auto" }}
              alt="inked2600 Image"
              priority={true}
            />
            <Image
              src="/Hilaga Studio.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "28%", height: "auto" }}
              alt="Hilaga Studio Image"
              priority={true}
            />
            <Image
              src="/Fi.JPG"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "28%", height: "auto" }}
              alt="Fi Image"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
