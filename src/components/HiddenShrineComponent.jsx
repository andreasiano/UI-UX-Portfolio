import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import shrineImage1 from "../assets/HiddenShrineImg1.png"; // <-- replace with your own image
import shrineImage2 from "../assets/HiddenShrineImg2.png";
import shrineImage3 from "../assets/HiddenShrineImg3.png";

const AboutHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      id="home"
      
    >
      <img
        src={shrineImage1}
        alt="The Hidden Shrine project"
        className="mt-4 mb-4"
      />
      <img
        src={shrineImage2}
        alt="The Hidden Shrine project"
        className="mt-4 mb-4"
      />
      <img
        src={shrineImage3}
        alt="The Hidden Shrine project"
        className="mt-4 mb-4"
      />
    </motion.div>
  );
};

export default AboutHero;
