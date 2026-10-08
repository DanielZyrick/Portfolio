import React from "react";

export default function Services() {
  return (
    <section className="max-w-[1920px] w-full px-5 sm:px-10 md:px-20 lg:py-24 m-auto">
      <div className="mb-10">
        <h2 className="text-4xl font-medium">
          Things i can do to help you
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 xl:gap-x-12 2xl:p">
        <div>
          <div className="flex items-end gap-5 border-b border-gray-900 w-fit pr-5 pb-1 mb-3">
            <span>01</span>
            <h3 className="text-3xl max-[260px]:text-lg">Frontend Development</h3>
          </div>
          <p className="text-lg">
            I build responsive, animated interfaces with React, Next.js,
            Tailwind CSS, and GSAP/Framer Motion — focused on performance and
            a polished user experience.
          </p>
        </div>
        <div>
          <div className="flex items-end gap-5 border-b border-gray-900 w-fit pr-5 pb-1 mb-3">
            <span>02</span>
            <h3 className="text-3xl max-[260px]:text-sm">Backend & APIs</h3>
          </div>
          <p>
            I build and maintain REST APIs and server logic with Node.js and
            Express, with SQL and NoSQL databases like MySQL, PostgreSQL, and
            MongoDB.
          </p>
        </div>
        <div>
          <div className="flex items-end gap-5 border-b border-gray-900 w-fit pr-5 pb-1 mb-3">
            <span className="">03</span>
            <h3 className="text-3xl max-[260px]:text-sm ">Full-Stack Delivery</h3>
          </div>
          <p className="text-lg">
            From feature development to bug fixes, testing, and deployment on
            Vercel — I ship and maintain production software end to end,
            using AI tools like Claude Code to move faster without cutting
            corners.
          </p>
        </div>
      </div>
    </section>
  );
}
