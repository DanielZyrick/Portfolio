import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Daniel Zyrick Gayao is a full-stack developer based in Baguio, Philippines, with 2+ years of remote experience building real estate web platforms with Next.js, TypeScript, Express, and SQL.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
