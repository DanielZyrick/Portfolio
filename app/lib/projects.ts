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
  // Optional extras for a fuller case study.
  repo?: string;
  writeup?: string;
  video?: string;
  gallery?: { src: string; alt: string; caption: string }[];
  decisions?: { title: string; body: string }[];
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
    repo: "https://github.com/DanielZyrick/Compound",
    writeup: "https://github.com/DanielZyrick/Compound/blob/main/docs/WRITEUP.md",
    gallery: [
      {
        src: "compound/learn.jpg",
        alt: "The Learn page with a track in progress and three recommended tracks",
        caption: "Recommended tracks, each with a reason, based on what you do and want to learn.",
      },
      {
        src: "compound/goal.jpg",
        alt: "A goal page with its status, adjusted dates and savings",
        caption: "A goal that's slipping: the remaining dates move to fit, using buffer days.",
      },
      {
        src: "compound/contact.jpg",
        alt: "A contact page with a follow-up date, notes and touchpoints",
        caption: "Contacts for networking, with touchpoints and follow-ups that show on Today.",
      },
      {
        src: "compound/schedule.jpg",
        alt: "The Schedule page showing the next seven days of calendar events",
        caption: "The week ahead from Google Calendar, read-only and never stored.",
      },
      {
        src: "compound/money.jpg",
        alt: "The Money page with a budget summary and spending by category",
        caption: "Monthly budgets per category, with what's left and whether you're on pace.",
      },
    ],
    decisions: [
      {
        title: "AI output is untrusted input",
        body: "Every Claude call runs on the server. Each response must be JSON that passes a schema, or it's retried once and then shown as a clear error. Generated lessons are cached so they're never paid for twice, every call counts toward a daily limit, and model names come from environment variables.",
      },
      {
        title: "Goal schedules are pure functions",
        body: "Status, adjusted dates and buffer use are worked out from the plan and the steps you've ticked, never stored, so they can't drift out of sync. A unit test caught a real flaw: pace came from the current deadline, so extending it didn't help. Measuring against the original plan fixed it.",
      },
      {
        title: "A calendar without storing anyone's calendar",
        body: "Google Calendar connects read-only through OAuth and plain fetch. A single-use state cookie protects the flow, tokens are encrypted with AES-256-GCM, and events are fetched when you look, so the database never holds anyone's events.",
      },
      {
        title: "Migrations before code",
        body: "Development runs on a separate database. The migration runner prints which host it's about to touch, end-to-end tests refuse to run against production, and every migration reaches production before the code that needs it.",
      },
    ],
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
