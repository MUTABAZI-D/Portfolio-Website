"use client";
import { AchievementsSection } from "@/components/AchievementsSection";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="container mx-auto py-4 px-12 mt-32 md:mt-24">
      <HeroSection />
      <AchievementsSection />
    </div>
  );
}
