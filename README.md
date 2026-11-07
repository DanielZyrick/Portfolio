# Daniel Zyrick Gayao: Portfolio

My personal portfolio site, with case studies of my personal projects and client work.

**Live:** https://danielzyrickportfolio.vercel.app

## Tech stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS 4** for styling, with `next-themes` for dark mode
- **GSAP**, **Framer Motion** and **Locomotive Scroll** for animation and smooth scrolling
- **Web3Forms** for the contact form, so no backend is needed
- **Vercel** for hosting, Analytics and Speed Insights

## Getting started

You need Node.js 20 or newer.

```bash
git clone https://github.com/DanielZyrick/Portfolio.git
cd Portfolio
npm install
cp .env.local.example .env.local   # then add your Web3Forms key
npm run dev
```

Open http://localhost:3000.

### Environment variables

| Name | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Access key for the contact form. Get one free at [web3forms.com](https://web3forms.com). Without it, the rest of the site still works. |

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
app/
  page.tsx            Home page
  about/              About page (bio, experience, services)
  work/               Work listing
  work/[slug]/        Case study page for each project
  contact/            Contact form
  components/         Shared UI (navbar, cursor, page transitions, sections)
  lib/projects.ts     All project data: edit this to add or change a case study
  lib/site.ts         Site name, URL and description used for SEO
public/               Screenshots, portrait and resume
```

### Adding a project

Add an entry to `personalProjects` or `clientProjects` in [`app/lib/projects.ts`](app/lib/projects.ts) and put its screenshot in `public/`. The work list, case study page and sitemap all read from that file. Optional fields (`repo`, `writeup`, `video`, `gallery`, `decisions`, `moreLinks`) add more sections to the case study.
