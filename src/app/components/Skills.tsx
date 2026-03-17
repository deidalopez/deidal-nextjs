import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiReactquery,
  SiExpo,
  SiClaude,
} from "react-icons/si";

type SkillItemType = {
  title: string;
  icon?: React.JSX.Element;
};

const skillsItems: SkillItemType[] = [
  {
    title: "React Native",
    icon: <FaReact className="w-5 h-5" />,
  },
  {
    title: "React",
    icon: <FaReact className="w-5 h-5" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript className="w-5 h-5" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript className="w-5 h-5" />,
  },
  {
    title: "Tanstack Query",
    icon: <SiReactquery className="w-5 h-5" />,
  },
  {
    title: "Expo",
    icon: <SiExpo className="w-5 h-5" />,
  },
  {
    title: "Zustand",
  },
  {
    title: "Node.js",
    icon: <FaNodeJs className="w-5 h-5" />,
  },
  {
    title: "Express.js",
    icon: <SiExpress className="w-5 h-5" />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="w-5 h-5" />,
  },
  {
    title: "GraphQL",
    icon: <SiGraphql className="w-5 h-5" />,
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql className="w-5 h-5" />,
  },
  {
    title: "Claude Code",
    icon: <SiClaude className="w-5 h-5" />,
  },
];

const SkillItem = ({ title, icon }: SkillItemType) => {
  return (
    <div className="border p-2 rounded bg-accent flex flex-col justify-center items-center hover:scale-105 transition-transform duration-200">
      <div className="my-1">{icon}</div>
      <h3 className="sm:text-sm lg:text-lg font-bold tracking-wide">{title}</h3>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="pb-10">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">
          Skills
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 lg:mx-4">
        {skillsItems.map((item) => (
          <SkillItem key={item.title} title={item.title} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
