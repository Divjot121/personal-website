import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/DivjotSingh.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap p-8">
        {/* Left side content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-16">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-14 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl transition duration-700 ease-in-out relative after:absolute after:left-0 after:bottom-0 after:top-20 after:w-full after:h-[2px] after:bg-violet-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100"
            >
              Divjot Singh
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl  font-normal text-justify tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <div className="px-2">
              <a
                href="https://drive.google.com/drive/u/0/folders/14IqyWbmy8-ZPESJSnGxH_FVMXpNzVvZk"
                target="_blank"
              >
                <motion.button
                  variants={container(1.5)}
                  initial="hidden"
                  animate="visible"
                  className="rounded-lg border my-2 px-6 py-3 border-blue-900 bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-800 text-white shadow-lg hover:from-purple-600 hover:to-pink-600 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  My Achievements
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full lg:w-1/2 lg:p-3">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Divjot Singh"
              className="max-w-xs lg:max-w-md h-auto rounded-2xl  cursor-pointer  hover:scale-110"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
