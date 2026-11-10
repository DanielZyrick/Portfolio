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
  // Extra live sites, for an entry that covers more than one product.
  moreLinks?: { label: string; href: string }[];
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
      "Built AI features on the Claude API, server-side only and personalised from a short profile: every response must pass a schema, generated content is cached, calls count toward a daily limit, and a demo mode runs the whole app without an API key.",
      "Designed a goal engine of pure functions that works out on track, behind or at risk and moves the remaining dates when you slip, alongside read-only Google Calendar sync with encrypted tokens and budgets stored in integer cents.",
      "Shipped in 50+ small commits with 279 unit tests and 28 end-to-end flows on desktop and phone, with every migration run on production before the code that needs it.",
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
    repo: "https://github.com/DanielZyrick/Locomote",
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
    repo: "https://github.com/DanielZyrick/Inked2600",
  },
];

export const clientProjects: Project[] = [
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
    ],
    tech: ["Next.js", "TypeScript", "Express", "Kysely", "MySQL"],
  },
  {
    slug: "cash-offers",
    label: "Cash Offers",
    href: "https://app.cashoffers.pro/",
    src: "cash-offers.jpg",
    color: "#111111",
    type: "client",
    role: "Full-stack developer — feature development, bug fixes, legacy migration",
    period: "May 2024 – September 2026",
    description:
      "Real estate offer-orchestration platform built with a 4-person remote team for a US client (DBM Grow), white-labeled across several real estate brands. The most substantial of the platforms I worked on — 1,500+ commits spanning a legacy PHP backend, a modern TypeScript/Express rewrite, and the Next.js agent dashboard.",
    highlights: [
      "Migrated the dashboard's data-fetching from server-rendered PHP endpoints to a modern client-side/static-first Next.js architecture, page by page across properties, teams, users, buy boxes, billing, and offers, without a big-bang rewrite.",
      "Built an agent commission calculator from scratch — configurable commission templates, retroactive fee recalculation, and a reconciliation system to audit and backfill historically miscalculated commissions.",
      "Shipped a compensation calculator, billing-visibility controls for corporate-paid accounts, and mobile layout fixes across the dashboard.",
      "Fixed production incidents including non-idempotent webhook handling and broken subscription lookups.",
    ],
    tech: ["Next.js", "TypeScript", "Express", "Kysely", "MySQL"],
    decisions: [
      {
        title: "Migrating rendering strategy without breaking production",
        body: "The dashboard's PHP-era endpoints were converted to client-side/static Next.js data-fetching one page at a time — properties, then teams, then users, then billing — instead of a single rewrite. Each page shipped and was verified independently, so a regression was isolated to one page instead of the whole dashboard.",
      },
      {
        title: "Commission data integrity over cleverness",
        body: "Commission calculations touch real money, so the fee-tagging logic had to be auditable, not just correct. Built a reconciliation system that could fall back to raw tagged fees when a commission snapshot was missing, backfill historical records, and dry-run a recompute before applying it — so a bug in the calculator could be caught and fixed retroactively instead of silently mispaying agents.",
      },
      {
        title: "Legacy PHP and modern TypeScript, side by side",
        body: "Rather than block feature work on a full backend rewrite, the legacy PHP API (api-v1) stayed live for endpoints not yet migrated while new work landed on a TypeScript/Express/Kysely backend (api-v2), tracked endpoint-by-endpoint against a migration list until v1 could be fully deprecated.",
      },
    ],
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
      "Lead-capture and client-digest platform for real estate agents, built with a 4-person remote team for a US client (DBM Grow) — a separate product line from Cash Offers, with its own Next.js/Supabase stack.",
    highlights: [
      "Shipped features and fixed production bugs in sprint-based development.",
      "Wrote tests, handled QA, and troubleshot environment issues.",
    ],
    tech: ["Next.js", "Supabase", "PostgreSQL", "Stripe", "React Query"],
  },
];

export const allProjects: Project[] = [...personalProjects, ...clientProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
