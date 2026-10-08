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
    color: "#111111",
    type: "client",
    role: "Feature development & bug fixes",
    period: "May 2024 – September 2026",
    description:
      "Real estate platform built with a 3-person remote team for a US client (DBM Grow).",
    highlights: [
      "Shipped features and fixed production bugs in sprint-based development.",
      "Wrote tests, handled QA, and troubleshot environment issues.",
      "Part of a three-person team maintaining three real estate platforms for DBM Grow.",
    ],
    tech: ["Next.js", "TypeScript", "Express", "Kysely", "MySQL"],
  },
  {
    slug: "highestprice",
    label: "HighestPrice",
    href: "https://highestprice.com/",
    color: "#FFFFFF",
    type: "client",
    role: "Frontend lead, backend co-developer",
    period: "May 2024 – September 2026",
    description:
      "Real estate platform built with a 3-person remote team for a US client (DBM Grow).",
    highlights: [
      "Built the full frontend and co-developed the backend.",
      "Executed a legacy v1 to v2 architecture migration to improve scalability and performance.",
      "Part of a three-person team maintaining three real estate platforms for DBM Grow.",
    ],
    tech: ["Next.js", "TypeScript", "Express", "Kysely", "MySQL"],
  },
  {
    slug: "homeuptick",
    label: "HomeUptick",
    href: "https://www.homeuptick.com/",
    color: "#111111",
    type: "client",
    role: "Feature development & bug fixes",
    period: "May 2024 – September 2026",
    description:
      "Real estate platform built with a 3-person remote team for a US client (DBM Grow).",
    highlights: [
      "Shipped features and fixed production bugs in sprint-based development.",
      "Wrote tests, handled QA, and troubleshot environment issues.",
      "Part of a three-person team maintaining three real estate platforms for DBM Grow.",
    ],
    tech: ["Next.js", "TypeScript", "Express", "Kysely", "MySQL"],
  },
];

export const allProjects: Project[] = [...personalProjects, ...clientProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
