"use client";
import LoadingPage from "@/app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  { metric: "Projects", value: "10", postfix: "+" },
  { prefix: "~", metric: "Users", value: "10" },
  { metric: "Awards", value: "2" },
  { metric: "Years", value: "2" },
];

export const AchievementsSection = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="py-8 px-4 sm:py-10 xl:px-16">
        <div className="md:border border-[#33353F] rounded-md py-4 px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 1,
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
};
