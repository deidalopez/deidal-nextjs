import React from "react";
import Link from "next/link";
import config from "../../../next.config";

const ActionButtons = () => (
  <div className="flex flex-wrap gap-y-3 gap-x-4 mt-6">
    <Link
      href="/#contact"
      className="px-8 py-3 rounded-full bg-terracotta text-cream font-semibold shadow-md hover:bg-burntOrange hover:-translate-y-0.5 transition-all duration-200"
    >
      Contact Me
    </Link>
    <a
      href={`${config.basePath}/DeidaLopezResume2026.pdf`}
      className="px-8 py-3 rounded-full bg-transparent border-2 border-cream/70 text-cream font-semibold hover:bg-warmTan/20 hover:-translate-y-0.5 transition-all duration-200"
    >
      View Resume
    </a>
  </div>
);

const AboutAndButtons = () => (
  <div className="col-span-5 mt-6">
    <p className="text-textPrimary/80 mb-2 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl">
      Software Engineer with expertise developing performant mobile applications
      for iOS and Android devices with React Native.
    </p>
    <ActionButtons />
  </div>
);

const NameAndSubtitle = () => {
  return (
    <div className="w-full">
      <h1 className="font-heading text-textPrimary mb-3">
        Deida Lopez
      </h1>
      <p className="text-sage text-lg sm:text-xl md:text-2xl font-sans tracking-wide">
        Software Engineer, React Native | React
      </p>
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
