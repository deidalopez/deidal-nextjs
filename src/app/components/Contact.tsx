"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const linkedinLink = "https://www.linkedin.com/in/deidalopez/";
const githubLink = "https://github.com/deidalopez";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-forestGreen border-t border-warmTan/25 mx-auto md:px-8 py-10 px-8 flex justify-between flex-wrap gap-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
      >
        <h4 className="font-heading text-xl font-semibold text-cream mb-2">
          Get in touch!
        </h4>
        <p className="text-cream/70 mb-4 max-w-md">
          I&apos;m looking for new opportunities and would love to hear from
          you!
        </p>
        <a
          href="mailto:deida.tech@gmail.com"
          className="text-terracotta hover:text-burntOrange transition-colors duration-200 hover:underline"
        >
          Shoot me an email →
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" as const, delay: 0.15 }}
        className="socials flex flex-row gap-5 self-end"
      >
        <Link href={githubLink} className="text-cream/60 hover:text-terracotta transition-colors duration-200">
          <FaGithub className="w-9 h-9" />
        </Link>
        <Link href={linkedinLink} className="text-cream/60 hover:text-terracotta transition-colors duration-200">
          <FaLinkedin className="w-9 h-9" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Contact;
