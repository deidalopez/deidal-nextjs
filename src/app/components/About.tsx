import React from "react";
import ProfilePhoto from "./ProfilePhoto";

const About = () => {
  return (
    <section id="about" className="text-textPrimary pb-16">
      <div className="flex flex-row flex-wrap gap-10">
        <div className="flex-1 min-w-0">
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
        </div>
        <div className="md:block hidden flex-shrink-0">
          <div className="ring-2 ring-terracotta/40 ring-offset-4 ring-offset-bkg rounded-full">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
