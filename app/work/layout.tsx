import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A sampling of projects built by Daniel Zyrick Gayao — personal projects and client work for DBM Grow's real estate platforms, built with Next.js, TypeScript, and more.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
