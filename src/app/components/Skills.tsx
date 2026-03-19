"use client";
import React from "react";
import { motion } from "framer-motion";
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

const SkillItem = ({ title, icon, index }: SkillItemType & { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut" as const, delay: index * 0.05 }}
      className="border border-warmTan/35 p-3 rounded-xl bg-surface flex flex-col justify-center items-center gap-2 hover:border-terracotta hover:bg-charcoal/50 transition-all duration-200 cursor-default"
    >
      <div className="text-sage">{icon}</div>
      <h3 className="text-sm lg:text-base font-semibold tracking-wide text-textPrimary">{title}</h3>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="pb-16">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="font-heading text-textPrimary font-bold mb-10"
        >
          Skills
        </motion.h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 lg:mx-4">
        {skillsItems.map((item, index) => (
          <SkillItem key={item.title} title={item.title} icon={item.icon} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
