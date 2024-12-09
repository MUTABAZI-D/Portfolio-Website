import { AboutSection } from "@/components/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about MUTABAZI, a passionate web developer specializing in building modern and dynamic web applications.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-4 px-12 mt-12 md:mt-24 text-white">
      <AboutSection />
    </div>
  );
}
