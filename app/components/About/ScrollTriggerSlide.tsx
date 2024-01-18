"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function ScrollTriggerSlide() {
  const imageContainerOne = useRef(null);
  const imageContainerTwo = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1; // eslint-disable-line

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: (e) => (direction = e.direction * -1), // eslint-disable-line
      },
      x: "0",
    });

    gsap.set(imageContainerTwo.current, {
      left: imageContainerTwo.current.getBoundingClientRect().width,
    });

    requestAnimationFrame(animate); // eslint-disable-line
  }, []);

  let animate;

  // eslint-disable-next-line react-hooks/exhaustive-deps

  if (typeof window !== "undefined") {
    window.onload = animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }
      if (imageContainerOne.current && imageContainerTwo.current) {
        gsap.set(imageContainerOne.current, { xPercent: xPercent });
        gsap.set(imageContainerTwo.current, { xPercent: xPercent });
      }

      xPercent += 0.02 * direction;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (imageContainerOne.current && imageContainerTwo.current) {
        requestAnimationFrame(animate);
      }
    };
  }
  return (
    <section className="max-w-[1920px] w-full max-h-[940px] m-auto">
      <div className="my-20">
        <div className="mx-5 sm:mx-10 md:mx-20 pb-5 sm:pb-10 lg:pb-20">
          <h5 className="text-3xl sm:text-4xl lg:text-5xl sm:w-2/3 lg:w-3/4 2xl:w-2/3">
            driven by the simple objective of helping companies change the way
            we live.
          </h5>
        </div>
        <div
          className="overflow-hidden h-[10rem] lg:h-[20rem] relative"
          ref={slider}
        >
          <div
            className="absolute top-0 left-0 w-full flex justify-around w-full nowrap object-cover"
            ref={imageContainerOne}
          >
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
              src="/HilagaStudio.jpg"
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
          <div
            className="absolute top-0 w-full flex justify-around nowrap object-cover"
            ref={imageContainerTwo}
          >
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
              src="/HilagaStudio.jpg"
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
      </div>
    </section>
  );
}
