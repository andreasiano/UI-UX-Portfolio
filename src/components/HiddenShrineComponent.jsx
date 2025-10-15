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
import shrineImage11 from "../assets/HiddenShrineImg11.png"; // new image for the right side
import shrineImage12 from "../assets/HiddenShrineImg12.png"; // new image for the right side
import shrineImage13 from "../assets/HiddenShrineImg13.png"; // new image for the right side
import shrineImage14 from "../assets/HiddenShrineImg14.png"; // new image for the right side
import shrineImage15 from "../assets/HiddenShrineImg15.png"; // new image for the right side
import shrineImage16 from "../assets/HiddenShrinePorcoDio.png"; // new image for the right side

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
              <span className="font-bold">Detail: </span>
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
          <div className="pt-0 md:pt-10 lg:pt-40"></div>
        </div>

        {/* Overlay — only show on large screens */}
        <div className="hidden lg:block absolute top-[50%] left-1/2 -translate-x-1/2 w-[95%] shadow-xl rounded-lg overflow-hidden">
          <img
            src={shrineImage4}
            alt="Hidden Shrine UI Prototype Overlap"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="hidden lg:block h-96 mt-[30px] lg:mb-[50px]"></div>

      {/* Empathize section */}
      <p className="font-poppins mt-[30px] decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
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
          Shrine enthusiasts, we immersed ourselves in interviews, surveys, and
          the intricate paths of user workflows and journeys. Our quest was to
          unearth the passions and pain points shaping their exploration of
          yokai, festivals, and Japanese culture. Join us as we unravel the
          tapestry of user needs, guiding The Hidden Shrine toward a realm of
          enhanced experiences.
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
          platforms, we've engaged a diverse pool of participants, ensuring our
          insights reflect the rich tapestry of user needs within the Hidden
          Shrine community. After empathizing with our users, we synthesize
          insights to define the core problems and opportunities. This stage
          ensures that every design decision is anchored in a deep understanding
          of user needs, paving the way for meaningful solutions in The Hidden
          Shrine.
        </p>
      </div>
      {/* Two images below */}
      <div className="w-full max-w-5xl mt-4 flex flex-col items-center">
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
            In the journey of designing The Hidden Shrine, crafting personas and
            empathy maps holds paramount importance. These tools allow us to
            delve deep into the minds and hearts of our potential users,
            understanding their desires, frustrations, and aspirations when it
            comes to cultural travel. By weaving together personas and empathy
            maps, we illuminate pathways to create a platform that not only
            meets but exceeds the expectations of our diverse audience, ensuring
            each user's journey is rich, meaningful, and unforgettable.
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
          future of The Hidden Shrine. Through a variety of brainstorming
          sessions, collaborative workshops, and creative exercises, we explored
          different perspectives, challenged assumptions, and generated a
          multitude of ideas to address the needs and desires of our audience.
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
      <p className="text-gray-400 text-center font-poppins text-base md:text-lg max-w-3xl mx-auto">
        In the Define phase, we created a Value Proposition Canvas to precisely
        define the value that The Hidden Shrine offers to its target audience. This
        tool allows us to clearly articulate the benefits and features of our
        platform and understand how they address the needs and desires of our
        users. By filling out the canvas, we identify the key elements of our
        value proposition, including the unique features that set us apart from
        competitors, the specific customer segments we are targeting, and the
        pain points and gains that our users experience. This process enables us
        to align our product development efforts with the needs of our audience
        and ensures that Kitsune's Veil delivers compelling value that resonates
        with our users, ultimately driving engagement and satisfaction with our
        platform.
      </p>
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-green-900 lg:text-5xl font-thin uppercase text-3xl md:text-4xl mb-4">
          Clara's Frustration with Inaccessible Japanese Folklore Resources
        </h2>
        <p className="text-gray-400 mb-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
          We started by crafting a problem statement based on insights gathered
          from Clara's perspective and experiences. Clara expressed frustration
          with the lack of reliable information on Japanese folklore and
          cultural experiences, highlighting a need for a comprehensive platform
          that offers accurate and engaging content.
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
      <p className="text-gray-400 text-center mb-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
        Using the Value Proposition Canvas by Strategizer has been instrumental
        in clarifying and refining the value proposition of The Hidden Shrine.
        By systematically analyzing the customer segments, their pain points,
        and the gains they seek, we were able to gain deep insights into the
        needs and desires of our target audience, such as enthusiasts like Clara
        interested in Japanese folklore. This allowed us to tailor our
        platform's features and content to effectively address these needs,
        ensuring that The Hidden Shrine offers compelling value and resonates with
        its intended users. Additionally, the canvas facilitated collaboration
        and alignment within our team, enabling us to focus our efforts on
        developing a platform that truly meets the expectations of our audience.
      </p>
      <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
        <img
          src={shrineImage10}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />
      </div>
      <p className="font-poppins decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
        Fourth Part
      </p>
      <h2 className="text-sky-200 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
        PROTOTYPE
      </h2>
      <p className="text-gray-400 text-center font-poppins text-base mb-10 md:text-lg max-w-3xl mx-auto">
        During the prototyping phase, we have focused on translating our design
        concepts and ideas into tangible representations that users can interact
        with and provide feedback on. This involved creating low-fidelity
        wireframes to outline the basic structure and layout of the application,
        allowing us to iterate rapidly and refine our design concepts.
        Additionally, we developed a workflow for the application to map out the
        user's journey and identify key touchpoints and interactions. By
        prototyping our designs, we were able to test and validate our
        assumptions, gather valuable insights from users, and make informed
        decisions to enhance the user experience.
      </p>
      <div className="bg-green-950 p-8 md:p-12 border-opacity-[50%] rounded-lg border-[3.5px] border-gray-300">
        <h2 className="text-teal-50 uppercase lg:text-5xl font-thin text-3xl md:text-4xl mb-4">
          The Value of Low-Fidelity Wireframes in Prototyping
        </h2>
        <p className="text-gray-200 font-poppins lg:mb-[10px] sm:mb-[30px] text-base md:text-lg">
          In the prototype phase of developing The Hidden Shrine, creating
          low-fidelity wireframes has been crucial for several reasons. Firstly,
          low-fi wireframes serve as a blueprint for the application's user
          interface, providing a visual representation of the layout, structure,
          and functionality of each screen. This allows our team to quickly
          iterate and refine the design before investing time and resources into
          higher-fidelity prototypes. We’ll consider the itinerary view in this
          case and its workflow!
        </p>
      </div>
      <div className="w-full max-w-5xl flex flex-col items-center mt-4">
        {/* First Image */}
        <img
          src={shrineImage11}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />

        {/* First text grid */}
        <div className="w-full font-poppins max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left text-gray-400">
            <p>
              <span className="font-bold text-xl text-slate-600 mb-10">1.</span>
              When the user clicks on the "Explore Itinerary" button, they are
              seamlessly directed to the itinerary section of Kitsune's Veil.
              This action initiates a smooth transition within the application,
              instantly transporting the user to a curated collection of
              captivating travel experiences. In the itinerary section, users
              can delve into a diverse range of destinations, each offering
              unique insights into Japanese folklore, myths, festivals, and
              cultural traditions.
            </p>
          </div>
          <div className="text-left text-gray-400 mb-10">
            <p>
              <span className="font-bold text-xl text-slate-600 mb-10">2.</span>
              In this view, users can effortlessly browse and select from a
              variety of featured itineraries, each offering a unique
              exploration of Japan's rich cultural tapestry. Alongside
              captivating descriptions and stunning imagery, users can easily
              access essential details such as the itinerary's price, region,
              and duration. This comprehensive information empowers users to
              make informed decisions and choose the itinerary that best suits
              their interests, budget, and timeframe.
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="w-full max-w-5xl flex flex-col items-center mt-4">
          <img
            src={shrineImage12}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>

        {/* Second text grid */}
        <div className="w-full font-poppins max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left text-gray-400">
            <p>
              <span className="font-bold text-xl text-slate-600">3.</span> In
              the alternative view, users have the flexibility to refine their
              exploration by applying various filters tailored to their specific
              interests. These filters encompass a wide spectrum of thematic
              experiences, allowing users to customize their journey according
              to their preferences. Options include sacred hikes, which lead
              adventurers on spiritual pilgrimages to revered shrines and
              temples nestled amidst breathtaking natural landscapes.
            </p>
          </div>
          <div className="text-left text-gray-400">
            <p>
              <span className="font-bold text-xl text-slate-600">4.</span> In
              this view, users can effortlessly browse and select from a variety
              of featured itineraries, each offering a unique exploration of
              Japan's rich cultural tapestry. Alongside captivating descriptions
              and stunning imagery, users can easily access essential details
              such as the itinerary's price, region, and duration. This
              comprehensive information empowers users to make informed
              decisions and choose the itinerary that best suits their
              interests, budget, and timeframe.
            </p>
          </div>
        </div>

        {/* Third Image */}
        <div className="w-full max-w-5xl flex flex-col items-center mt-4">
          <img
            src={shrineImage16}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>

        {/* Third text grid: Points 5 and 6 */}
        <div className="w-full font-poppins max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left text-gray-400">
            <p>
              <span className="font-bold text-xl text-slate-600">5.</span> In
              the detailed view showcased within the rectangular display, users
              will encounter a wealth of information pertaining to the selected
              hike, enhancing their understanding and enabling informed
              decision-making. Within this comprehensive display, users can
              expect to find essential details such as the trip level, providing
              insights into the hike's difficulty and suitability for various
              skill levels.
            </p>
          </div>
          <div className="text-left text-gray-400">
            <p>
              <span className="font-bold text-xl text-slate-600">6.</span> In
              the alternate description, users will encounter a comprehensive
              breakdown of the amenities and offerings available during their
              hiking adventure. This detailed overview includes essential
              provisions such as breakfast, ensuring that users are
              well-equipped to start their day with nourishment and energy.
            </p>
          </div>
        </div>
        <div className="bg-green-950 mt-10 p-8 md:p-12 border-opacity-[50%] rounded-lg border-[3.5px] border-gray-300">
          <h2 className="text-teal-50 uppercase lg:text-5xl font-thin text-3xl md:text-4xl mb-4">
            Role of High-Fidelity Wireframes in Crafting The Hidden Shrine
          </h2>
          <p className="text-gray-200 font-poppins lg:mb-[10px] sm:mb-[30px] text-base md:text-lg">
            In the earlier stages of wireframing for the itinerary view of The
            Hidden Shrine, we focused on creating low-fidelity wireframes to
            establish the foundational layout and structure. These wireframes
            provided a basic outline of the screen's components, including the
            placement of key elements such as navigation bars, content sections,
            and interaction buttons. As we transitioned to high-fidelity
            wireframes, we introduced additional details to enhance the visual
            representation of the itinerary view. This included incorporating
            different icons for various categories, such as sacred hikes,
            cultural routes, yokai spots, and mountain temples. These icons
            serve as visual cues to users, helping them quickly identify and
            differentiate between different types of itineraries. By refining
            the design with high-fidelity wireframes and adding these visual
            elements, we aim to create a more engaging and intuitive user
            experience for exploring The Hidden Shrine
          </p>
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center mt-4">
          <img
            src={shrineImage13}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center mt-4">
          <img
            src={shrineImage14}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>
        <p className="font-poppins mt-10 decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
          Fifth Part
        </p>
        <h2 className="text-sky-200 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
          HIGH FIDELITY
        </h2>
        <p className="text-gray-400 text-center font-poppins text-base mb-10 md:text-lg max-w-3xl mx-auto">
          During the prototyping phase, we have focused on translating our
          design concepts and ideas into tangible representations that users can
          interact with and provide feedback on. This involved creating
          low-fidelity wireframes to outline the basic structure and layout of
          the application, allowing us to iterate rapidly and refine our design
          concepts. Additionally, we developed a workflow for the application to
          map out the user's journey and identify key touchpoints and
          interactions. By prototyping our designs, we were able to test and
          validate our assumptions, gather valuable insights from users, and
          make informed decisions to enhance the user experience.
        </p>
        <div className="w-full max-w-5xl flex flex-col items-center">
          <img
            src={shrineImage15}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>
        {/* 🌿 End of Case Study Message */}
        <div className="text-center mt-20 mb-10">
          <h2 className="text-xl md:text-2xl font-poppins text-gray-800 mb-4">
            🌸 You’ve reached the end of my case study!
          </h2>
          <p className="text-gray-500 font-poppins text-base md:text-lg max-w-2xl mx-auto mb-6 px-4">
            Thank you so much for taking the time to explore this journey with
            me. I hope you enjoyed diving into the story behind{" "}
            <strong>The Hidden Shrine</strong> 🏯✨
          </p>

          <div className="mt-6 mb-6">
            <a
              href="https://www.figma.com/design/K6fpi5nE9pmCCJ1qjWzi0V/The-Hidden-Shrine?node-id=0-1&t=fwGNomJSxNQ4AwsJ-1"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-700 text-slate-700 bg-white px-6 py-3 rounded-full text-sm font-semibold duration-700 transition hover:bg-slate-700 hover:text-white"
            >
              🌿 View the Prototype on Figma
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HiddenShrineComponent;
