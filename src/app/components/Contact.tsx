"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const linkedinLink = "https://www.linkedin.com/in/deida-lopez/";
const githubLink = "https://github.com/deidalopez";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

type EmailProps = {
  emailSubmitted: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const EmailComponent = ({ emailSubmitted, handleSubmit }: EmailProps) => {
  return emailSubmitted ? (
    <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
  ) : (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-white block mb-2 text-sm font-medium"
        >
          Your email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="name@gmail.com"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-white block text-sm mb-2 font-medium"
        >
          Subject
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Reaching out from your website!"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Let's talk about..."
        />
      </div>
      <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send Message
      </button>
    </form>
  );
};

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: FormData = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    const JSONdata = JSON.stringify(data);
    // console.log(JSONdata);
    // const endpoint = "/api/send";

    // const options: RequestInit = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSONdata,
    // };

    // const response = await fetch(endpoint, options);
    // // const resData = await response.json();

    // if (response.status === 200) {
    //   console.log("Message sent");
    //   setEmailSubmitted(true);
    // }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 gap-4">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Get in touch!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m looking for new opportunities and would love to hear from
          you!
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to add me on LinkedIn! Add a note to let me know you found
          me on my website :-)
        </p>
        <div className="socials flex flex-row gap-10 pt-2">
          <Link href={githubLink}>
            <FaGithub className="w-10 h-10" />
          </Link>
          <Link href={linkedinLink}>
            <FaLinkedin href="linkedin.com" className="w-10 h-10" />
          </Link>
        </div>
        {/* <EmailComponent
          emailSubmitted={emailSubmitted}
          handleSubmit={handleSubmit}
        /> */}
      </div>
    </section>
  );
};

export default Contact;
