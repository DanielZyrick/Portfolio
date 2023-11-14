import React from "react";

export default function Services() {
  return (
    <section className="mx-5 sm:mx-10 md:mx-20 lg:my-40">
      <div className="mb-10">
        <span className="text-4xl font-medium">
          Things i can do to help you
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 xl:gap-x-12 2xl:p">
        <div>
          <div className="flex items-end gap-5 border-b border-gray-900 w-fit pr-5 pb-1 mb-3">
            <span>01</span>
            <h4 className="text-3xl max-[260px]:text-lg">Designing</h4>
          </div>
          <p className="text-lg">
            I provide strong and user-friendly digital designs and have a
            demonstrated record of designing websites. A solid brand image
            serves as a foundation of any successful website.
          </p>
        </div>
        <div>
          <div className="flex items-end gap-5 border-b border-gray-900 w-fit pr-5 pb-1 mb-3">
            <span>02</span>
            <h4 className="text-3xl max-[260px]:text-sm">Development</h4>
          </div>
          <p>
            I develop adaptable, visually appealing websites from beginning to
            end. UI implementation, Animation, and Server Action are my main
            areas of interest. I use Next js for development.
          </p>
        </div>
        <div>
          <div className="flex items-end gap-5 border-b border-gray-900 w-fit pr-5 pb-1 mb-3">
            <span className="">03</span>
            <h4 className="text-3xl max-[260px]:text-sm ">Deployment</h4>
          </div>
          <p className="text-lg">
            It's my ability to create a website from start to finish that sets
            me apart. My strong sense of design combined with my development
            abilities allow me to produce amazing projects.
          </p>
        </div>
      </div>
    </section>
  );
}
