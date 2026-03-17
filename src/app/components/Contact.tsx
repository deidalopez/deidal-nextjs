import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const linkedinLink = "https://www.linkedin.com/in/deidalopez/";
const githubLink = "https://github.com/deidalopez";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-accent mx-auto md:px-8 py-8 px-8 flex justify-between flex-wrap"
    >
      <div>
        <h4 className="text-xl font-bold text-textPrimary my-2">
          Get in touch!
        </h4>
        <p className="text-textPrimary mb-4 max-w-md">
          I&apos;m looking for new opportunities and would love to hear from
          you!
        </p>
        <a
          href="mailto:deida.tech@gmail.com"
          className="text-textPrimary underline hover:opacity-70"
        >
          Shoot me an email
        </a>
      </div>
      <div className="socials flex flex-row gap-5 self-end">
        <Link href={githubLink}>
          <FaGithub className="w-10 h-10" />
        </Link>
        <Link href={linkedinLink}>
          <FaLinkedin href="linkedin.com" className="w-10 h-10" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
