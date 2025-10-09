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
      <div
        className={`flex-2 flex ${styles.flexCenter} md:my-20 xxs:mb-10 relative`}
      >
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
              in <span className="text-gradient-teal">UI/UX Design</span> & 3D
              Art
            </h1>
          </div>
        </div>

        <p
          className={`${styles.paragraph} font-light opacity-50 text-slate-700 max-w-[480px] sm:text-2xl xxs:text-xl lg:text-[15px] mt-5`}
        >
          My career
          has taken me from Ireland to Italy, working with ecommerce platforms,
          ST Microelectronics, and Nexi Digital. I’ve worked on projects
          spanning WordPress, Elementor Pro, Wix, CSS, and React, blending
          design with development to deliver seamless results.
          <br className="mb-20" />
          <br />
          On the UI/UX side, my work involves conducting{" "}
          <strong>user interviews</strong>, creating <strong>journey maps</strong>, running{" "}
          <strong>conversion rate optimization (CRO) surveys</strong>, and
          producing <strong>case studies</strong> that guide product strategy.
          My goal is to ensure that every design decision is backed by research
          and real user insights, creating experiences that are intuitive and
          engaging. In addition, if you are interested I recently dived deep into 3d art, You can explore some of my works on{" "}
          <a
            href="https://www.artstation.com/toadmaster90"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gradient-pink hover:text-teal-900 transition"
          >
            my ArtStation profile
          </a>.
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

