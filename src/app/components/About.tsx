import React from "react";
import ProfilePhoto from "./ProfilePhoto";

const About = () => {
  return (
    <section id="about" className="text-textPrimary pb-10">
      <div className="flex flex-row flex-wrap gap-4">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-textPrimary font-bold  mb-10 ">
            About Me
          </h2>
          <div>
            <p className="md:text-lg lg:text-2xl leading-relaxed my-4">
              Hey there! My name is Deida (&lsquo;day-da&rsquo;) and I am a{" "}
              <span className="font-bold md:text-lg lg:text-2xl">
                Mobile & Frontend developer
              </span>{" "}
              who loves to create intuitive, delightful, user-centric
              applications. I&apos;ve built multiple apps with startups that
              users love to use!
              <br />
              <br /> I have experience as a Full Stack Developer, having
              worked extensively with React, Node.js, GraphQL, Python, and PostgreSQL.
              <br />
              <br /> I&apos;m all about writing clean, well-documented code, and
              tracking metrics that matter, ensuring that the results we achieve
              are as meaningful as they are impactful.
            </p>
          </div>
        </div>
        <div className="md:block hidden">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
};

export default About;
