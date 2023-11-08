import Image from "next/image";
import React from "react";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <section className="pt-14 relative w-full h-fit">
        <div className="px-20 pt-10">
          <div className=" relative flex h-90">
            <h2 className="text-6xl w-1/4 absolute left-0 top-0">ABOUT ME</h2>
            <p className="text-4xl w-3/5 absolute left-1/4 top-20 z-10">
              Daniel Zyrick Gayao is my name, though. I am a web designer and
              front-end developer based in the Philippines. Creating stunning,
              user-friendly, and flexible websites is my passion.
            </p>
            <Image
              src="/1.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "20%", height: "auto" }}
              className="absolute right-0 top-64 z-0"
              alt="Daniel Image"
              priority={true}
            />
          </div>
        </div>
        <div className="mb-20 px-20">
          <h5 className="text-5xl w-2/5 font-light">
            driven by the simple objective of helping companies change the way
            we live.
          </h5>
          <div className="w-full flex gap-20 pt-20">
            <Image
              src="/inked2600.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              alt="inked2600 Image"
              priority={true}
            />
            <Image
              src="/Hilaga Studio.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              alt="Hilaga Studio Image"
              priority={true}
            />
            <Image
              src="/Fi.jpg"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "30%", height: "auto" }}
              alt="Fi Image"
              priority={true}
            />
          </div>
        </div>
      </section>
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
