"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import config from "../../../next.config";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const ActionButtons = () => (
  <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-y-3 gap-x-4 mt-6">
    <Link
      href="/#contact"
      className="px-8 py-3 rounded-full bg-terracotta text-cream font-semibold shadow-md hover:bg-burntOrange hover:-translate-y-0.5 transition-all duration-200"
    >
      Contact Me
    </Link>
    <a
      href={`${config.basePath}/DeidaLopezResume2026.pdf`}
      className="px-8 py-3 rounded-full bg-transparent border-2 border-terracotta bg-cream text-terracotta font-semibold hover:bg-warmTan/20 hover:-translate-y-0.5 transition-all duration-200"
    >
      View Resume
    </a>
  </motion.div>
);

const AboutAndButtons = () => (
  <div className="col-span-5 mt-6">
    <motion.p {...fadeUp(0.3)} className="text-textPrimary/80 mb-2 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl">
      Software Engineer with expertise developing performant mobile applications
      for iOS and Android devices with React Native.
    </motion.p>
    <ActionButtons />
  </div>
);

const NameAndSubtitle = () => {
  return (
    <div className="w-full">
      <motion.h1 {...fadeUp(0)} className="font-heading text-textPrimary mb-3">
        Deida Lopez
      </motion.h1>
      <motion.p {...fadeUp(0.15)} className="text-sage text-lg sm:text-xl md:text-2xl font-sans tracking-wide">
        Software Engineer, React Native | React
      </motion.p>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20">
      <div className="relative w-full max-w-5xl">
        <NameAndSubtitle />
        <AboutAndButtons />
      </div>
    </section>
  );
};

export default HeroSection;
