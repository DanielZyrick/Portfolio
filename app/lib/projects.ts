export type Project = {
  slug: string;
  label: string;
  href: string;
  src?: string;
  color: string;
  type: "personal" | "client";
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  tech: string[];
};

export const personalProjects: Project[] = [
  {
    slug: "compound",
    label: "Compound",
    href: "https://compound-nine-chi.vercel.app/",
    src: "compound.jpg",
    color: "#FFFFFF",
    type: "personal",
    role: "Solo developer: design, build, testing, deployment",
    period: "October 2026 – present",
    description:
      "Web app for getting 1% better every day: habits, AI learning tracks, goals that adjust when you fall behind, contacts, Google Calendar and money, all on one Today page.",
    highlights: [
      "Built AI features on the Claude API, server-side only: every response must pass a schema, generated content is cached, calls are logged with a daily limit, and a demo mode runs the whole app without an API key.",
      "Designed a goal engine of pure functions that works out on track, behind or at risk and moves the remaining dates when you slip, with buffer days before each deadline.",
      "Connected Google Calendar read-only with OAuth and plain fetch: tokens encrypted with AES-256-GCM, events fetched live and never stored, placed on the right day in any timezone.",
      "Personalised every AI feature from a short profile, which Claude can fill in from a resume PDF that is never stored.",
      "Stored money in integer cents, with monthly budgets per category, pace tracking and savings toward goals.",
      "Shipped in 50+ small commits with 279 unit tests and 28 end-to-end flows on desktop and phone, and migrations always run on production before the code that needs them.",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Kysely", "Auth.js", "Claude API", "Tailwind", "Vitest", "Playwright"],
  },
  {
    slug: "locomote",
    label: "Locomote",
    href: "https://locomote.vercel.app/",
    src: "locomote.jpg",
    color: "#111111",
    type: "personal",
    role: "Solo developer",
    description:
      "Web app that streamlines booking bus tickets for travelers.",
    highlights: [
      "Built the full booking flow — seat selection, trip search, and reservation — as a solo project.",
      "Used Prisma + MongoDB for data modeling and NextAuth.js for authentication.",
      "Styled with Tailwind CSS and React Query for data fetching and cache management.",
    ],
    tech: ["Next.js", "Tailwind", "React Query", "Prisma", "MongoDB", "NextAuth.js"],
  },
  {
    slug: "inked2600",
    label: "Inked2600",
    href: "https://inked2600.vercel.app/",
    src: "inked2600.jpg",
    color: "#FFFFFF",
    type: "personal",
    role: "Solo developer",
    description:
      "Modern static site showcasing the artistry and services of a tattoo studio.",
    highlights: [
      "Designed and built a static marketing site to showcase a tattoo studio's work and services.",
      "Used GSAP for scroll-based and interaction animations.",
      "Built with Vite and Sass for a fast, lightweight static build.",
    ],
    tech: ["React", "Vite", "Sass", "TypeScript", "GSAP"],
  },
];

export const clientProjects: Project[] = [
  {
    slug: "cash-offers",
    label: "Cash Offers",
    href: "https://app.cashoffers.pro/",
    src: "cash-offers.jpg",
    color: "#111111",
    type: "client",
    role: "Feature development & bug fixes",
    period: "May 2024 – September 2026",
    description:
      "Real estate platform built with a 4-person remote team for a US client (DBM Grow).",
    highlights: [
      "Shipped features and fixed production bugs in sprint-based development.",
      "Wrote tests, handled QA, and troubleshot environment issues.",
      "Part of a four-person team maintaining three real estate platforms for DBM Grow.",
    ],
    tech: ["Next.js", "TypeScript", "Express", "Kysely", "MySQL"],
  },
  {
    slug: "highestprice",
    label: "HighestPrice",
    href: "https://highestprice.com/",
    src: "highestprice.jpg",
    color: "#FFFFFF",
    type: "client",
    role: "Frontend lead, backend co-developer",
    period: "May 2024 – September 2026",
    description:
      "Real estate platform built with a 4-person remote team for a US client (DBM Grow).",
    highlights: [
      "Built the full frontend and co-developed the backend.",
      "Executed a legacy v1 to v2 architecture migration to improve scalability and performance.",
      "Part of a four-person team maintaining three real estate platforms for DBM Grow.",
    ],
    tech: ["Next.js", "TypeScript", "Express", "Kysely", "MySQL"],
  },
  {
    slug: "homeuptick",
    label: "HomeUptick",
    href: "https://www.homeuptick.com/",
    src: "homeuptick.jpg",
    color: "#111111",
    type: "client",
    role: "Feature development & bug fixes",
    period: "May 2024 – September 2026",
    description:
      "Real estate platform built with a 4-person remote team for a US client (DBM Grow).",
    highlights: [
      "Shipped features and fixed production bugs in sprint-based development.",
      "Wrote tests, handled QA, and troubleshot environment issues.",
      "Part of a four-person team maintaining three real estate platforms for DBM Grow.",
    ],
    tech: ["Next.js", "TypeScript", "Express", "Kysely", "MySQL"],
  },
];

export const allProjects: Project[] = [...personalProjects, ...clientProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
