import React from "react";
import styles from "../style";
import portrait from "../assets/MyImage.jpg";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      id="home"
      className={`flex md:flex-row xxs:gap-8 lg:gap-20 flex-col ${styles.paddingY}`}
    >
      {/* Image Section */}
      <div className={`flex-2 flex ${styles.flexCenter} md:my-20  relative`}>
        <div className="relative overflow-hidden rounded-xl w-full lg:w-auto">
          <img
            src={portrait}
            alt="portrait"
            className="w-full h-[500px] lg:h-[650px] object-cover rounded-xl"
          />
          {/* Frame */}
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-slate-500 z-20 rounded-xl pointer-events-none"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className={`lg:w-2/3 ${styles.flexStart} flex-col`}>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex items-center">
            <h1 className="text-slate-700 text-[50px] leading-[50px] lg:leading-[48px] font-regular sm:w-[400px] lg:w-[400px]">
              From <span className="text-gradient-teal">Ireland</span> to{" "}
              <span className="text-gradient-orange">Italy</span> — My Journey
              with <span className="text-gradient-teal">UI/UX Design</span>& User Surveys
            </h1>
          </div>
        </div>

        <p
          className={`${styles.paragraph} font-light opacity-50 text-slate-700 max-w-[480px] sm:text-2xl xxs:text-xl lg:text-[15px] mt-5`}
        >
          My journey in digital design has taken me from Ireland to Italy,
          collaborating with ecommerce brands, ST Microelectronics, and Nexi
          Digital. I specialize in crafting seamless user experiences through{" "}
          <strong>user interviews</strong>,<strong>journey maps</strong>,{" "}
          <strong>conversion rate optimization (CRO) surveys</strong>, and
          detailed <strong>case studies</strong> that inform product strategy.
        </p>

        <p className="mt-4 font-light opacity-50 text-slate-700 max-w-[480px] sm:text-2xl xxs:text-xl lg:text-[15px]">
          On the technical side, I bring designs to life with WordPress,
          Elementor Pro, Wix, CSS, and React, ensuring that the products I
          create are not only visually compelling but fully functional.
        </p>

        <p className="mt-4 font-light opacity-50 text-slate-700 max-w-[480px] sm:text-2xl xxs:text-xl lg:text-[15px]">
          My passion for visual storytelling extends to 3D art and interior
          design. I’ve completed a professional course in 3D modeling with Maya,
          and you can explore some of my work on{" "}
          <a
            href="https://www.artstation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gradient-pink hover:text-pink-400 transition"
          >
            my ArtStation profile
          </a>
          .
        </p>

        <div className="mt-6 mb-6">
          <a
            href="/UIUXCV.pdf"
            download
            className="border-2 border-slate-700 text-slate-700 bg-white px-6 py-3 rounded-full text-sm font-semibold duration-700 transition hover:bg-slate-700 hover:text-white"
          >
            Download My CV
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutHero;
