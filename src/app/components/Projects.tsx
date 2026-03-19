"use client";
import React from "react";
import Image from "next/image";
// import { FaChevronRight } from "react-icons/fa";
import config from "../../../next.config";

type ProjectType = {
  alt: string;
  name: string;
  image: string;
  description: string;
  techStack?: string[];
  link?: string;
};

const projects: ProjectType[] = [
  {
    name: "Hearth Companion App",
    image: `${config.basePath}/images/Hearth/HearthCompanionOverview.gif`,
    alt: "Hearth Companion App homescreen image",
    description:
      "Hearth Companion App: Companion app to the Hearth Display, a centralized touchscreen that makes family organization easier. Sync Calendars, create and customize Routines, use AI Hearth Helper, manage Stars and Rewards, and Meal Plan.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Tanstack Query",
      "Axios",
      "Zustand",
      "React Navigation",
      "Reanimated",
      "Firebase",
      "Python",
    ],
    link: "https://apps.apple.com/us/app/hearth-companion-app/id6498717775",
  },
  {
    name: "Hearth Display",
    image: `${config.basePath}/images/Hearth/HearthDisplay.png`,
    alt: "Hearth Display",
    description:
      "Hearth Display replaces traditional methods like whiteboards, wall calendars, chore charts with this smart display. With features like shared Calendars, Meal planning, Lists and to-dos, Routines, and Stars & Rewards.",
    techStack: [
      "React Native",
      "TypeScript",
      "Tanstack Query",
      "Axios",
      "Zustand",
      "React Navigation",
      "Reanimated",
      "Lottie",
    ],
    link: "https://hearthdisplay.com/pages/features",
  },

  {
    name: "Care/of",
    image: `${config.basePath}/images/Careof/CO_gif.gif`,
    // image: `${config.basePath}/images/Careof/CO_track.PNG`,
    alt: "Care/of app homescreen image",
    description:
      "Care/of: Healthy Habits Tracker app that rewards users for taking their vitamins and tracking their healthy habits. Also allows for users to edit their upcoming orders, shows insights about how tracking their habits has affected their goals (energy, focus, sleep, etc.), and allows users to make one time purchases in app.",
    techStack: [
      "React Native",
      "JavaScript",
      "Jest",
      // "Stripe",
      "GraphQL",
      "Redux",
    ],
  },
  {
    name: "West Tenth",
    image: `${config.basePath}/images/WestTenth/W10_home.PNG`,
    alt: "West Tenth app homescreen image",
    description:
      "West Tenth: Marketplace, app with Seller and Buyer modes that allows Buyers to find small businesses that provide a multitude of services and products. Seller mode allows sellers to update their storefronts, manage orders, and message potential buyers.",
    techStack: [
      "React Native",
      "TypeScript",
      "Jest",
      "Detox",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
    ],
  },
  {
    name: "Care/of: Sleep",
    image: `${config.basePath}/images/Ashwa/Ashwa_intro.gif`,
    alt: "Care/of: Sleep app homescreen image",
    description:
      "The Care/of: Sleep app integrated the Apple Health Kit to track users' sleep data and provide insights on how their sleep habits have been affected by taking their Ashwagandha supplements.",
    techStack: ["React Native", "JavaScript"],
  },
];

const Card = ({ project }: { project: ProjectType }) => (
  <div className="w-40">
    <Image
      className="rounded-lg"
      src={project.image}
      alt={project.alt}
      width={180}
      height={400}
    />
  </div>
);

const Project = ({ project, featured }: { project: ProjectType; featured?: boolean }) => {
  return (
    <div className={`relative bg-charcoal rounded-2xl flex flex-row mb-8 lg:mb-10 p-7 lg:p-9 shadow-lg border border-warmTan/25 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden ${featured ? "border-t-4 border-t-terracotta" : ""}`}>
      <div className="hidden sm:block p-3 flex-shrink-0">{Card({ project })}</div>
      <div className="pl-5 flex flex-col justify-between">
        <div>
          <h3 className="font-heading text-cream text-xl sm:text-2xl lg:text-3xl font-semibold pb-2">
            {project.name}
          </h3>
          <p className="text-cream/75 text-base sm:text-lg pb-3 leading-relaxed">{project.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack?.map((tech, index) => (
              <span
                key={index}
                className="text-xs border border-warmTan/40 text-sage px-2 py-1 rounded-md tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-terracotta hover:text-burntOrange transition-colors duration-200 hover:underline"
            >
              View more →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pb-16">
      <h2 className="font-heading text-textPrimary font-bold mb-10">
        Projects
      </h2>
      <div className="lg:mx-4">
        {projects.map((project, index) => (
          <Project key={index} project={project} featured={index === 0} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
