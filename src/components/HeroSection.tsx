"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Suspense } from "react";
import LoadingPage from "@/app/loading";

export const HeroSection = () => {
  return (
    <section>
      <Suspense fallback={<LoadingPage />}>
        <div className="grid grid-cols-1 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-7 place-self-center text-center sm:text-left"
          >
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-4 font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={["Mutabazi", 1000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
              I am a passionate developer with a knack for crafting seamless
              digital experiences. Let&apos;s build something extraordinary
              together.
            </p>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white ">
                <Link href="/contact">Hire Me</Link>
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  mt-3 text-white">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  <a download={true} href="/Mutabazi_CV.pdf">
                    Download CV
                  </a>
                </span>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-5 place-self-center md:mt-4 md:mb-0 lg:mt-0 mt-12 mb-8"
          >
            <Image
              className="rounded-full"
              src={"/images/profile.jpeg"}
              alt="Profile-image"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </Suspense>
    </section>
  );
};
