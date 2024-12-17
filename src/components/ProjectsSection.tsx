"use client";
import { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectTag } from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "IMDb Clone",
    description:
      "A web application mimicking the functionality and design of IMDb.",
    image: "images/projects/IMDb-Clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MUTABAZI-D/IMDb-Clone",
    previewUrl: "https://imdb-clone-imdb.vercel.app/",
  },
  {
    id: 2,
    title: "Notes App",
    description:
      "A simple and intuitive web application for creating, managing, and organizing notes.",
    image: "images/projects/Notes-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MUTABAZI-D/react-typescript-notesApp",
    previewUrl: "https://notes-app-na.vercel.app/",
  },
  {
    id: 3,
    title: "Rock-Paper-Scissors Game",
    description:
      "An interactive web version of the classic Rock-Paper-Scissors game.",
    image: "images/projects/Rock-paper-scissors.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/MUTABAZI-D/rock-paper-scissors-game",
    previewUrl: "https://rock-paper-scissors-game-rps.vercel.app/",
  },
  {
    id: 4,
    title: "To-Do List App",
    description:
      "A practical and user-friendly web application for managing daily tasks.",
    image: "images/projects/Todo-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MUTABAZI-D/Todo-App",
    previewUrl: "https://todo-app-ta.vercel.app/",
  },
  {
    id: 5,
    title: "Food App",
    description:
      "An app for discovering food types and recipes with detailed cooking instructions.",
    image: "images/projects/Food-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MUTABAZI-D/Food-App",
    previewUrl: "https://food-app-fa.vercel.app/",
  },
  {
    id: 6,
    title: "Calculator App",
    description:
      "A basic calculator that supports essential arithmetic operations.",
    image: "images/projects/calculator-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/MUTABAZI-D/Calculator",
    previewUrl: "https://calculator-cal.vercel.app/",
  },
  {
    id: 7,
    title: "News App",
    description:
      "An app for browsing the latest news across multiple categories.",
    image: "images/projects/News-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MUTABAZI-D/News-App",
    previewUrl: "https://github.com/MUTABAZI-D/News-App",
  },
  {
    id: 8,
    title: "Fitness Tracker App",
    description: "An app to track workouts and monitor fitness progress.",
    image: "images/projects/Fitness-app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MUTABAZI-D/fitness-tracker-md",
    previewUrl: "https://github.com/MUTABAZI-D/fitness-tracker-md",
  },
];

export const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTag = (tag: string) => {
    setTag(tag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="mb-20 mt-14 md:mt-0">
      <h2 className="text-center text-white text-4xl font-bold mt-4 mb-4 md:mb-6">
        My Projects
      </h2>
      <div className="text-white flex items-center justify-center gap-2 py-6 ">
        <ProjectTag name="All" onClick={() => handleTag("All")} tag={tag} />
        <ProjectTag name="Web" onClick={() => handleTag("Web")} tag={tag} />
        <ProjectTag
          name="Mobile"
          onClick={() => handleTag("Mobile")}
          tag={tag}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {" "}
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: project.id * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              imageUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
