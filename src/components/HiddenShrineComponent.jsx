import React from "react";
import { motion } from "framer-motion";
import shrineImage1 from "../assets/HiddenShrineImg1.png";
import shrineImage2 from "../assets/HiddenShrineImg2.png";
import shrineImage3 from "../assets/HiddenShrineImg3.png";
import shrineImage4 from "../assets/HiddenShrineImg4.png";
import shrineImage5 from "../assets/HiddenShrineImg5.png";
import shrineImage6 from "../assets/HiddenShrineImg6.png"; // new image for the right side
import shrineImage7 from "../assets/HiddenShrineImg7.png"; // new image for the right side

const images = [
  { src: shrineImage1, alt: "The Hidden Shrine project" },
  { src: shrineImage2, alt: "The Hidden Shrine project" },
  {
    src: shrineImage3,
    alt: "The Hidden Shrine project",
    description:
      "High Fidelity View for specified and customizable itineraries",
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
      {/* First three images */}
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full max-w-5xl mb-4 flex flex-col items-start"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full object-cover"
          />
          {image.description && (
            <p className="mt-2 text-left text-sm md:text-base text-gray-700">
              <span className="font-bold">Detail:</span>{" "}
              <span className="text-gray-400 font-poppins">
                {image.description}
              </span>
            </p>
          )}
        </div>
      ))}

      {/* Main header section */}
      <h2 className="text-green-900 lg:text-5xl text-3xl md:text-3xl mt-12 mb-8 leading-tight text-left max-w-3xl">
        CLEARING THE FOG: REVOLUTIONIZING UX IN THE HIDDEN SHRINE
      </h2>

      {/* Box with image overlap */}
      <div className="w-full relative max-w-5xl">
        <div className="bg-green-50 p-8 md:p-12 border-opacity-[50%] rounded-lg border-[3.5px] border-gray-300">
          <p className="text-gray-400 font-poppins lg:mb-[10px] sm:mb-[30px] text-base md:text-lg">
            Within The Hidden Shrine, the interface is meticulously designed to
            cater to the needs of explorers and aficionados navigating through
            the rich array of content. From capturing articles to immersive
            experiences, the platform ensures seamless exploration and discovery
            of Japan's cultural heritage. Here's the structure of the basic
            interface:
          </p>
          <div className="pt-24 md:pt-32 lg:pt-40"></div>
        </div>
        <div className="absolute top-[75%] md:top-[50%] lg:top-[50%] left-1/2 -translate-x-1/2 sm:w-[100%] w-[100%] md:w-[90%] lg:w-[95%] shadow-xl rounded-lg overflow-hidden">
          <img
            src={shrineImage4}
            alt="Hidden Shrine UI Prototype Overlap"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="h-64 md:h-80 lg:h-96 mt-[30px] lg:mb-[50px]"></div>

      {/* Empathize section */}
      <div className="text-center">
        <p className="font-poppins decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
          First Part
        </p>

        <h2 className="text-sky-200 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
          EMPATHIZE
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-5xl text-left">
          <h3 className="text-xl md:text-3xl leading-tight uppercase font-bold text-green-900 md:w-1/3">
            Capturing the Essence: Exploring User Experience with the Hidden
            Shrine
          </h3>
          <p className="text-gray-400 font-poppins text-base md:text-lg md:w-2/3">
            Embarking on our journey to understand the heartbeat of The Hidden
            Shrine enthusiasts, we immersed ourselves in interviews, surveys,
            and the intricate paths of user workflows and journeys. Our quest
            was to unearth the passions and pain points shaping their
            exploration of yokai, festivals, and Japanese culture. Join us as we
            unravel the tapestry of user needs, guiding The Hidden Shrine toward
            a realm of enhanced experiences.
          </p>
        </div>

        <div className="text-center mt-10 lg:mt-20">
          <h2 className="text-sky-200 lg:text-5xl font-thin text-3xl md:text-4xl mb-4">
            CORE RESEARCH
          </h2>
          <p className="text-gray-400 font-poppins text-base md:text-lg max-w-3xl mx-auto">
            To ensure our research captures a broad spectrum of perspectives,
            we've implemented a meticulous participant recruitment process.
            Utilizing a screening survey, we've identified individuals whose
            backgrounds and experiences align with our research objectives.
            Leveraging various channels, from personal networks to online
            platforms, we've engaged a diverse pool of participants, ensuring
            our insights reflect the rich tapestry of user needs within the
            Hidden Shrine community. After empathizing with our users, we
            synthesize insights to define the core problems and opportunities.
            This stage ensures that every design decision is anchored in a deep
            understanding of user needs, paving the way for meaningful solutions
            in The Hidden Shrine.
          </p>
        </div>

        {/* Two images below */}
        <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
          <img
            src={shrineImage5}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
          <img
            src={shrineImage6}
            alt="Hidden Shrine Research Visualization"
            className="w-full mt-4 object-cover"
          />
        </div>

        {/* ✅ New section: Text on left, image on right */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
          {/* Left: Heading & Paragraph */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl uppercase text-sky-200 md:text-3xl font-bold mb-4">
              Harnessing User Understanding for The Hidden Shrine
            </h3>
            <p className="text-gray-400 font-poppins text-base md:text-lg">
              In the journey of designing The Hidden Shrine, crafting personas and empathy maps holds paramount importance. These tools allow us to delve deep into the minds and hearts of our potential users, understanding their desires, frustrations, and aspirations when it comes to cultural travel. By weaving together personas and empathy maps, we illuminate pathways to create a platform that not only meets but exceeds the expectations of our diverse audience, ensuring each user's journey is rich, meaningful, and unforgettable.
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={shrineImage7}
              alt="User journey visualization"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HiddenShrineComponent;

