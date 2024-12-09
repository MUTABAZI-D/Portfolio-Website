"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import { TabContent } from "./TabContent";
import { motion } from "framer-motion";
import LoadingPage from "@/app/loading";

const tabs = [
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
];

export const AboutSection = () => {
  const varirants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };
  const [activeTab, setActiveTab] = useState("skills");
  return (
    <motion.section
      className="text-white mt-14 md:mt-0"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:grid md:grid-cols-2 items-center gap-8 py-8 px-4 xl:gap-16 sm:py-16  sm:px-16">
        <Suspense fallback={<LoadingPage />}>
          {" "}
          <div className="flex justify-center items-center md:h-[535px]">
            <Image
              src={"/images/codes.jpg"}
              width={500}
              height={500}
              alt="workshop-image"
              className="object-contain"
            />
          </div>
        </Suspense>
        <div className="mt-12 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a full stack developer with a passion for creating interactive
            and responsive web applications. I have experience working with
            Javascript, React, Redux, Next.js, Typescript, Tailwind CSS, HTML,
            CSS, and Git. I am a quick learner and I am always looking to expand
            my knowledge and skill set. I am a team player and I am excited to
            work with others to create amazing applications.
          </p>

          <div className="flex flex-row mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`mr-3 font-semibold  text-[#ADB7BE] ${
                  tab.id === activeTab ? "" : "hover:text-white"
                }`}
              >
                {tab.label}
                <motion.div
                  variants={varirants}
                  initial="default"
                  animate={tab.id === activeTab ? "active" : "default"}
                  className="h-1 mt-2 mr-3 bg-purple-500"
                />
              </button>
            ))}
          </div>

          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </motion.section>
  );
};
