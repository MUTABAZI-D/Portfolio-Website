"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import EmailIcon from "../../public/icon-email-2.svg";
import { motion } from "framer-motion";

export const EmailSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        setIsSubmitting(false);
        console.error("Server Error:", errorData?.error || "Unknown error");
        return;
      }

      const resData = await response.json();
      if (resData.status === "success") {
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 3000);
        form.reset();
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-0 py-20 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m actively seeking new opportunities and would love to hear
          from you. Whether you have a project in mind, a question, or just want
          to say hello, feel free to reach out. I&apos;ll get back to you as
          soon as I can!
        </p>
        <div className="socials flex flex-row gap-2 items-center">
          <Link href={"https://github.com/MUTABAZI-D"}>
            <Image src={GithubIcon} alt="Github Icon" width={50} height={50} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mutabazi-dieudonne-74012833b/"}
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href={"mailto:mudonne18@gmail.com"}
            className="bg-white p-2 rounded"
          >
            <Image src={EmailIcon} alt="Email Icon" width={25} height={25} />
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0">
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div>
            {" "}
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium px-2"
            >
              Your email
            </label>
            <input
              className="p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full "
              type="email"
              name="email"
              id="email"
              required
              placeholder="jane@gmail.com"
            />
          </div>
          <div>
            {" "}
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium px-2"
            >
              Subject
            </label>
            <input
              className="p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full "
              type="subject"
              name="subject"
              id="subject"
              required
              placeholder="Just saying hi!"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium px-2"
            >
              Message
            </label>
            <textarea
              required
              name="message"
              id="message"
              className="p-2.5 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full "
              placeholder="Let's talk about..."
            />
          </div>
          <motion.button
            disabled={isSubmitting}
            whileTap={{ scale: 1.1 }}
            type="submit"
            className={`bg-purple-500 text-white font-medium py-2.5 px-5 rounded-lg w-full ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : " hover:bg-purple-600"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
          {emailSent && (
            <p className="text-center text-sm text-green-500">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
