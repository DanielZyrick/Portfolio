const experience = [
  {
    role: "Full-Stack Developer / Software Contractor",
    org: "DBM Grow — Remote (US Client)",
    period: "May 2024 – September 2026",
    bullets: [
      "Built the frontend and co-developed the backend of highestprice.com, one of three real estate web platforms maintained by a four-person development team (Next.js, TypeScript, Express, Kysely, MySQL).",
      "Executed a legacy v1 to v2 architecture migration to improve scalability and performance.",
      "Shipped features and fixed production bugs across all three sites in sprint-based development.",
      "Wrote tests, handled QA, troubleshot environment issues, and wrote scripts to automate developer workflows.",
    ],
  },
  {
    role: "Junior Front-End Developer",
    org: "NFINITE IT Solutions & Services Inc. — Baguio, PH",
    period: "January 2022 – May 2022",
    bullets: [
      "Created mockups, interactive prototypes, and built responsive websites adhering to web development best practices.",
      "Debugged errors, troubleshot technical issues, and performed routine performance optimizations.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-[1920px] w-full px-5 sm:px-10 md:px-20 lg:py-24 m-auto">
      <div className="mb-10">
        <h2 className="text-4xl font-medium">Experience</h2>
      </div>
      <div className="flex flex-col gap-y-14">
        {experience.map((item) => (
          <div key={item.role}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-gray-900 pb-3 mb-4">
              <div>
                <h3 className="text-2xl sm:text-3xl">{item.role}</h3>
                <p className="text-lg font-light opacity-70">{item.org}</p>
              </div>
              <span className="text-base font-light opacity-70 whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <ul className="flex flex-col gap-y-2 text-base sm:text-lg font-light list-disc pl-5">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
