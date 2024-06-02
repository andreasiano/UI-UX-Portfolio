import React from "react";
import styles from "../style";
import portrait from "../assets/elsa-noblet-5KD5PmZEfcg-unsplash.jpg";
import circleImage from "../assets/myImage.webp"; // Assuming you have a circular image to use
import { motion } from "framer-motion";
import { FaUncharted } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      id="home"
      className={`flex md:flex-row xxs:gap-8 lg:gap-20 flex-col ${styles.paddingY}`}
    >
      <div className={`lg:w-2/3 ${styles.flexStart} flex-col`}>
        <div className="flex">
          <div className="w-10 mb-5 h-10 flex border-2 border-white rounded-full overflow-hidden mr-3">
            <img
              src={circleImage}
              alt="Circle"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-white font-poppins opacity-50 font-extralight mt-2">
            Hey, I am Andrea!
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex items-center">
            <h1 className="text-white text-[50px] leading-[50px] lg:leading-[48px] font-regular sm:w-[400px] lg:w-[400px]">
              I<span className="text-gradient-azure"> Build</span> and{" "}
              <span className="text-gradient-pink">Design</span> Digital
              Products that people love!
            </h1>
          </div>
        </div>
        <p
          className={`${styles.paragraph} font-light opacity-50 text-white max-w-[480px] sm:text-2xl xxs:text-xl lg:text-[15px] mt-5`}
        >
          With three years of hands-on experience as a UI UX Designer, my passion lies in crafting intuitive user interfaces and seamless user experiences that elevate applications to new heights of user-friendliness. I thrive on the dynamic interplay between UI/UX design principles and cutting-edge development techniques, driven by a relentless pursuit of innovation and excellence.
        </p>
        <div className="lg:flex mt-5">
          <div className="flex xxs:mb-5 items-center">
            <div className="rounded-full border-2 border-white flex items-center justify-center mr-4">
              <FaUncharted className="text-white mx-1.5 my-1.5 text-xl" />
            </div>
            <p className="text-white text-sm">
              Passionate about digital painting and 3D art
            </p>
          </div>
          <div className="flex xxs:mb-5 items-center">
            <div className="rounded-full border-2 border-white flex items-center justify-center mr-4">
              <FaCode className="text-white my-1.5 mx-1.5 text-xl" />
            </div>
            <p className="text-white text-sm">
              Coding enthusiast (ReactJs, NextJs, Python)
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div
        className={`flex-2 flex ${styles.flexCenter} md:my-0 xxs:mb-6  relative`}
      >
        {/* Image Container with Frame Outside */}
        <div className="relative overflow-hidden rounded-xl w-full lg:w-auto">
          {/* Image */}
          <img
            src={portrait}
            alt="portrait"
            className="w-full h-full rounded-xl object-cover"
          />
          {/* Pseudo-elements for Frame Outside using Tailwind CSS */}
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-sky-200 z-20 rounded-xl pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
