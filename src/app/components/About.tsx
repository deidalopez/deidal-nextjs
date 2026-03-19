"use client";
import React from "react";
import { motion } from "framer-motion";
import ProfilePhoto from "./ProfilePhoto";

const About = () => {
  return (
    <section id="about" className="text-textPrimary pb-16">
      <div className="flex flex-row flex-wrap gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex-1 min-w-0"
        >
          <h2 className="font-heading text-textPrimary font-bold mb-8">
            About Me
          </h2>
          <div className="space-y-5 text-textPrimary/85 text-lg leading-relaxed">
            <p>
              Hey there! My name is Deida (&lsquo;day-da&rsquo;) and I am a{" "}
              <span className="font-semibold text-textPrimary">
                Mobile & Frontend developer
              </span>{" "}
              who loves to create intuitive, delightful, user-centric
              applications. I&apos;ve built multiple apps with startups that
              users love to use!
            </p>
            <p>
              I have experience as a Full Stack Developer, having worked
              extensively with React, Node.js, GraphQL, Python, and PostgreSQL.
            </p>
            <p>
              I&apos;m all about writing clean, well-documented code, and
              tracking metrics that matter, ensuring that the results we achieve
              are as{" "}
              <span className="font-semibold text-textPrimary">
                meaningful as they are impactful.
              </span>
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.15 }}
          className="md:block hidden flex-shrink-0 relative"
        >
          {/* Spinning text ring */}
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          >
            <defs>
              <path
                id="orbit"
                d="M 50,50 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
              />
            </defs>
            <text
              style={{
                fontSize: "5.5px",
                fill: "#D4C4B0",
                opacity: 0.65,
                letterSpacing: "0.25em",
                fontFamily: "var(--font-outfit)",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              <textPath href="#orbit">
                · React Native · iOS · Android · React · TypeScript · Next.js · Full Stack ·
              </textPath>
            </text>
          </motion.svg>
          {/* Photo */}
          <div className="ring-2 ring-terracotta/40 ring-offset-4 ring-offset-bkg rounded-full">
            <ProfilePhoto />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
