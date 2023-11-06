import React from "react";

export default function Services() {
  return (
    <section className="py-20 w-full px-20">
      <div className="mb-10">
        <h3 className="text-4xl font-extralight">
          Things i can do to help you
        </h3>
      </div>
      <div className="flex gap-x-32">
        <div className="w-1/3">
          <div className="flex items-end gap-5 border-b border-gray-900 w-2/4 pb-1 mb-3">
            <span className="font-extralight">01</span>
            <h4 className="text-3xl font-extralight">Designing</h4>
          </div>
          <p>
            I provide strong and user-friendly digital designs and have a
            demonstrated record of designing websites. A solid brand image
            serves as a foundation of any successful website.
          </p>
        </div>
        <div className="w-1/3">
          <div className="flex items-end gap-5 border-b border-gray-900 w-2/4 pb-1 mb-3">
            <span className="font-extralight">02</span>
            <h4 className="text-3xl font-extralight">Development</h4>
          </div>
          <p>
            I develop adaptable, visually appealing websites from beginning to
            end. UI implementation, Animation, and Server Action are my main
            areas of interest. I use Next js for development.
          </p>
        </div>
        <div className="w-1/3">
          <div className="flex items-end gap-5 border-b border-gray-900 w-2/4 pb-1 mb-3">
            <span className="font-extralight">03</span>
            <h4 className="text-3xl font-extralight">Deployment</h4>
          </div>
          <p>
            It's my ability to create a website from start to finish that sets
            me apart. My strong sense of design combined with my development
            abilities allow me to produce amazing projects.
          </p>
        </div>
      </div>
    </section>
  );
}
