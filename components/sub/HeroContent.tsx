"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import styles from "../../app/styles/styles.module.css"

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
      variants={slideInFromTop}
      className="Welcome-box py-2 md:py-4 px-2 md:px-4 border border-[#7042f88b] opacity-90"
    >
      <SparklesIcon className="text-[#b49bff] mr-2 md:mr-4 h-5 w-5" />
      <h1 className="Welcome-text text-xs md:text-base">
        IT Support L2/L3 developer
      </h1>
    </motion.div>


        <motion.div
  variants={slideInFromLeft(0.8)}
  className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[400px] w-auto h-auto"
>
  <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
    I am Zine Adjemi, IT support & fullstack Developer
  </div>
</motion.div>


        <motion.p
          variants={slideInFromLeft(0.9)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          As an L2/L3 Developer Support Agent at Airbus from July 2020 to May 2023, I spearheaded critical missions within the PLM/ELEC framework, focusing on data processing for the aircraft electrical harnesses.
          My responsibilities included managing various aspects such as model modification, user support, task automation, bug resolution, and software version migration.
          My expertise extends to the use of Agile Safe methodologies and various software applications, contributing to the success of projects at Airbus.
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(1)}
        className="w-full h-full flex justify-end items-center"
      >
       <Image
        src="/zinepc.webp"
        alt="zine"
        height={450}
        width={300}
        style={{ width: "auto", height: "auto" }}
        className="hidden md:block w-full h-auto object-contain"
      />

      </motion.div>
    </motion.div>
  );
};


export default HeroContent;
