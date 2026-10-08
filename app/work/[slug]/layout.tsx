import type { Metadata } from "next";
import { allProjects, getProjectBySlug } from "@/app/lib/projects";

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.label} — Daniel Zyrick Gayao`,
    description: project.description,
    openGraph: {
      title: project.label,
      description: project.description,
    },
  };
}

export default function WorkSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
