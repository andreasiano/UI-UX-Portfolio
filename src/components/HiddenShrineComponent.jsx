import React from "react";
import { motion } from "framer-motion";
import shrineImage1 from "../assets/HiddenShrineImg1.png"; 
import shrineImage2 from "../assets/HiddenShrineImg2.png";
import shrineImage3 from "../assets/HiddenShrineImg3.png";
import shrineImage4 from "../assets/HiddenShrineImg4.png";



const images = [
  { src: shrineImage1, alt: "The Hidden Shrine project" },
  { src: shrineImage2, alt: "The Hidden Shrine project" },
  {
    src: shrineImage3,
    alt: "The Hidden Shrine project",
    description: "High Fidelity View for specified and customizable itineraries",
  },
];

const HiddenShrineComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      id="home"
      className="flex flex-col items-center mt-4 mb-4 md:px-0"
    >
      {/* This maps the first three images (shrineImage1, shrineImage2, shrineImage3) */}
      {images.map((image, index) => (
        <div key={index} className="w-full max-w-5xl mb-4 flex flex-col items-start">
          <img src={image.src} alt={image.alt} className="w-full object-cover" />
          {image.description && (
            <p className="mt-2 text-left text-sm md:text-base text-gray-700">
              <span className="font-bold">Detail:</span>{" "}
              <span className="text-gray-400">{image.description}</span>
            </p>
          )}
        </div>
      ))}

      {/* The main header (outside the box) */}
      <h2 className="text-green-950 lg:text-5xl text-3xl md:text-3xl mt-12 mb-8 leading-tight text-left max-w-3xl">
        CLEARING THE FOG: REVOLUTIONIZING UX IN THE HIDDEN SHRINE
      </h2>
      <div className="w-full relative max-w-5xl">
        <div
          className="bg-green-50 p-8 md:p-12 border-opacity-[50%] rounded-lg border-[3.5px] border-gray-300"
        >
          <p className="text-gray-400 lg:mb-[10px] sm:mb-[30px] text-base md:text-lg">
            Within The Hidden Shrine, the interface is meticulously designed to cater to the needs of explorers and
            aficionados navigating through the rich array of content. From capturing articles to immersive experiences, the
            platform ensures seamless exploration and discovery of Japan's cultural heritage. Here's the structure of the
            basic interface:
          </p>
          
          <div className="pt-24 md:pt-32 lg:pt-40"></div>
        </div>
        <div
          className="absolute top-[75%] md:top-[50%] lg:top-[50%] left-1/2 -translate-x-1/2 sm:w-[100%] w-[100%] md:w-[90%] lg:w-[95%] shadow-xl rounded-lg overflow-hidden"
        >
          <img
            src={shrineImage4}
            alt="Hidden Shrine UI Prototype Overlap"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="h-64 md:h-80 lg:h-96 lg: mt-[30px] lg:mb-[150px]"></div> 

    </motion.div>
  );
};

export default HiddenShrineComponent;





