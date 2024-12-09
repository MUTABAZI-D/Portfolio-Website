import { ProjectsSection } from "@/components/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse through the projects by MUTABAZI, showcasing skills in React, Next.js, Redux, and other modern web technologies.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-4 px-12 mt-16 md:mt-24 text-white">
      <ProjectsSection />
    </div>
  );
}
