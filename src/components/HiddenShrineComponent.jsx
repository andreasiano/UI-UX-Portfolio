import React from "react";
import { motion } from "framer-motion";
import shrineImage1 from "../assets/HiddenShrineImg1.png";
import shrineImage2 from "../assets/HiddenShrineImg2.png";
import shrineImage3 from "../assets/HiddenShrineImg3.png";
import shrineImage4 from "../assets/HiddenShrineImg4.png";
import shrineImage5 from "../assets/HiddenShrineImg5.png";
import shrineImage6 from "../assets/HiddenShrineImg6.png"; // new image for the right side
import shrineImage7 from "../assets/HiddenShrineImg7.png"; // new image for the right side
import shrineImage8 from "../assets/HiddenShrineImg8.png"; // new image for the right side
import shrineImage9 from "../assets/HiddenShrineImg9.png";
import shrineImage10 from "../assets/HiddenShrineImg10.png"; // new image for the right side

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
        <div className="bg-green-50 p-8 md:p-12 xs:mb-[20px] border-opacity-[50%] rounded-lg border-[3.5px] border-gray-300">
          <p className="text-gray-400 font-poppins lg:mb-[10px] sm:mb-[30px] text-base md:text-lg">
            Within The Hidden Shrine, the interface is meticulously designed to
            cater to the needs of explorers and aficionados navigating through
            the rich array of content. From capturing articles to immersive
            experiences, the platform ensures seamless exploration and discovery
            of Japan's cultural heritage. Here's the structure of the basic
            interface:
          </p>
           <div className="pt-8 md:pt-1 lg:pt-40"></div>
        </div>

        {/* 👇 Only visible on desktop */}
        <div className="hidden lg:block absolute top-[50%] left-1/2 -translate-x-1/2 w-[95%] shadow-xl rounded-lg overflow-hidden">
          <img
            src={shrineImage4}
            alt="Hidden Shrine UI Prototype Overlap"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Spacer only needed on desktop too */}
      <div className="hidden lg:block h-96 mt-[30px] lg:mb-[50px]"></div>

      {/* Empathize section */}
      <div className="text-center lg:mt-[100px]md:mt-[100px] xs:mt-0">
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
          <p className="text-gray-400 font-poppins mb-10 lg:mb-10 text-base md:text-lg max-w-3xl mx-auto">
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
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mt-12 mb-20 lg:mb-20">
          {/* Left: Heading & Paragraph */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl uppercase text-sky-200 md:text-3xl font-bold mb-4">
              Harnessing User Understanding for The Hidden Shrine
            </h3>
            <p className="text-gray-400 font-poppins text-base md:text-lg">
              In the journey of designing The Hidden Shrine, crafting personas
              and empathy maps holds paramount importance. These tools allow us
              to delve deep into the minds and hearts of our potential users,
              understanding their desires, frustrations, and aspirations when it
              comes to cultural travel. By weaving together personas and empathy
              maps, we illuminate pathways to create a platform that not only
              meets but exceeds the expectations of our diverse audience,
              ensuring each user's journey is rich, meaningful, and
              unforgettable.
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
        <p className="font-poppins decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
          Second Part
        </p>

        <h2 className="text-sky-200 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
          IDEATE
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-5xl text-left">
          <h3 className="text-xl md:text-3xl leading-tight uppercase font-bold text-green-900 md:w-1/3">
            Imagination Unleashed: Crafting the Future
          </h3>
          <p className="text-gray-400 font-poppins text-base md:text-lg md:w-2/3">
            Step into the realm of boundless creativity as we embark on the
            ideation phase. Through a fusion of diverse perspectives and
            innovative thinking, we sculpt visions that will shape the future of
            cultural exploration. Join us on this exhilarating journey where
            imagination knows no bounds, and every idea is a stepping stone
            towards realizing our digital sanctuary's full potential.
          </p>
        </div>

        <div className="text-center mt-10 lg:mt-20">
          <h2 className="text-sky-200 lg:text-5xl font-thin text-3xl md:text-4xl mb-4">
            EXPLORING DIFFERENT PERSPECTIVES
          </h2>
          <p className="text-gray-400 mb-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
            In the ideation phase, we embarked on a journey of exploration and
            creativity, seeking to uncover innovative solutions and shape the
            future of The Hidden Shrinel. Through a variety of brainstorming
            sessions, collaborative workshops, and creative exercises, we
            explored different perspectives, challenged assumptions, and
            generated a multitude of ideas to address the needs and desires of
            our audience.
          </p>
        </div>

        {/* Two images below */}
        <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
          <img
            src={shrineImage8}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>
        <p className="font-poppins decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
          Third Part
        </p>

        <h2 className="text-sky-200 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
          DEFINE
        </h2>
        <p className="text-gray-400 font-poppins text-base md:text-lg max-w-3xl mx-auto">
          In the Define phase, we created a Value Proposition Canvas to
          precisely define the value that Kitsune's Veil offers to its target
          audience. This tool allows us to clearly articulate the benefits and
          features of our platform and understand how they address the needs and
          desires of our users. By filling out the canvas, we identify the key
          elements of our value proposition, including the unique features that
          set us apart from competitors, the specific customer segments we are
          targeting, and the pain points and gains that our users experience.
          This process enables us to align our product development efforts with
          the needs of our audience and ensures that Kitsune's Veil delivers
          compelling value that resonates with our users, ultimately driving
          engagement and satisfaction with our platform.
        </p>

        <div className="text-center mt-10 lg:mt-20">
          <h2 className="text-green-900 lg:text-5xl font-thin uppercase text-3xl md:text-4xl mb-4">
            Clara's Frustration with Inaccessible Japanese Folklore Resources
          </h2>
          <p className="text-gray-400 mb-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
            We started by crafting a problem statement based on insights
            gathered from Clara's perspective and experiences. Clara expressed
            frustration with the lack of reliable information on Japanese
            folklore and cultural experiences, highlighting a need for a
            comprehensive platform that offers accurate and engaging content.
          </p>
        </div>

        {/* Two images below */}
        <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
          <img
            src={shrineImage9}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>
        <p className="text-gray-400 mb-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
          Using the Value Proposition Canvas by Strategizer has been
          instrumental in clarifying and refining the value proposition of The
          Hidden Shrine. By systematically analyzing the customer segments,
          their pain points, and the gains they seek, we were able to gain deep
          insights into the needs and desires of our target audience, such as
          enthusiasts like Clara interested in Japanese folklore. This allowed
          us to tailor our platform's features and content to effectively
          address these needs, ensuring that Kitsune's Veil offers compelling
          value and resonates with its intended users. Additionally, the canvas
          facilitated collaboration and alignment within our team, enabling us
          to focus our efforts on developing a platform that truly meets the
          expectations of our audience.
        </p>
        <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
          <img
            src={shrineImage10}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HiddenShrineComponent;
