import { motion } from "framer-motion";
import eltyImg1 from "../assets/EltyImg1.png";
import eltyImg2 from "../assets/EltyImg2.png";
import eltyImg3 from "../assets/EltyImg3.png";
import eltyImg4 from "../assets/EltyImg4.png";
import eltyImg5 from "../assets/EltyImg5.png";
import eltyImg6 from "../assets/EltyImg6.png";
import eltyImg7 from "../assets/EltyImg7.png";

const HiddenShrineComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5 }}
      id="home"
      className="flex flex-col items-center mt-4 mb-4 md:px-0"
    >
      <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
        <img
          src={eltyImg1}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />
      </div>

      {/* Main header section */}

      {/* Empathize section */}
      <p className="font-poppins mt-[10px] decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
        First Part
      </p>
      <h2 className="text-teal-400  lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
        DISCOVER
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-5xl text-left">
        <h3 className="text-xl md:text-3xl leading-tight uppercase font-bold text-blue-700 md:w-1/3">
          Research Phase: Understanding the Needs of General Practitioners
        </h3>
        <p className="text-gray-400 font-poppins text-base md:text-lg md:w-2/3">
          To design an effective and truly valuable dashboard, I carried out an
          in-depth research phase through surveys and direct interviews with
          general practitioners. This process provided valuable insights into
          their daily workflows, key challenges, and personal preferences for
          managing their tasks.
        </p>
      </div>
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-blue-700 lg:text-5xl font-thin text-3xl md:text-4xl mb-4">
          CORE RESEARCH
        </h2>
        <p className="text-gray-400 font-poppins mb-10 lg:mb-10 text-base md:text-lg max-w-3xl mx-auto">
          Through the surveys, I gathered quantitative data that highlighted the
          most common and recurring needs, while the interviews provided
          qualitative insights, allowing me to explore specific aspects such as
          the desire for customization, the difficulties with current management
          systems, and the importance of having a clear and immediate overview
          of the workday. These findings formed the foundation for designing a
          tailored dashboard aimed at simplifying and optimizing doctors’
          workflows. Below are some of these interactions
        </p>
      </div>
      {/* Two images below */}
      <div className="w-full max-w-5xl mt-4 flex flex-col items-center">
        <img
          src={eltyImg2}
          alt="Elty Interviews"
          className="w-full object-cover"
        />
      </div>
      {/* ✅ New section: Text on left, image on right */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 mt-12 mb-20 lg:mb-20">
        {/* Left: Heading & Paragraph */}
        <div className="md:w-1/2 text-left">
          <h3 className="text-2xl uppercase text-teal-400 md:text-3xl font-bold mb-4">
            Insights from the Needs of General Practitioners
          </h3>
          <p className="text-gray-400 font-poppins text-base md:text-lg">
            The Empathy Map highlights several crucial aspects of a general
            practitioner’s workday. Overload and stress are recurring themes:
            the doctor often feels overwhelmed and struggles with insufficient
            time to complete all tasks. There is a clear need for tool
            customization, with a demand for flexible solutions that adapt to
            daily workflows and individual priorities. Despite these challenges,
            the doctor remains focused on patients, consistently striving to
            provide high-quality care while avoiding mistakes or delays.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={eltyImg3}
            alt="User journey visualization"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
      <p className="font-poppins decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
        Second Part
      </p>
      <h2 className="text-teal-400 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
        DEFINE
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-5xl text-left">
        <h3 className="text-xl md:text-3xl leading-tight uppercase font-bold text-blue-700 md:w-1/3">
          Definition Phase: Identifying Solutions for General Practitioners
        </h3>
        <p className="text-gray-400 font-poppins text-base md:text-lg md:w-2/3">
          After understanding the specific needs of general practitioners
          through surveys and interviews, the next step is to define the key
          features and functionalities of the dashboard, directly addressing the
          identified issues. The solution could include drag-and-drop cards,
          allowing doctors to easily customize the order and display of
          information. The goal is to design a dashboard that not only meets
          practical needs but also enhances the efficiency and well-being of the
          doctor.
        </p>
      </div>
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-blue-700 uppercase lg:text-5xl font-thin text-3xl md:text-4xl mb-4">
          Dashboard Personalization
        </h2>
        <p className="text-gray-400 mb-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
          In this context, creating a user story is essential to ensure that the
          designed solution specifically addresses the needs expressed by
          doctors during interviews and surveys. Doctors highlighted the
          difficulty of managing a fragmented and overloaded workflow, as well
          as the need for a dashboard that is flexible and easy to customize.
          The user story helps focus on the requirement for personalization and
          information organization so that the doctor can prioritize tasks
          according to their unique routine.
        </p>
      </div>
      {/* Two images below */}
      <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
        <img
          src={eltyImg4}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />
      </div>

      <p className="text-gray-400 text-center mb-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
        The Value Proposition Canvas highlights how a well-designed dashboard
        can address the main challenges faced by general practitioners,
        providing practical solutions and improving daily workflow management.
        Customization, visual clarity, and organizational efficiency are key
        strengths in meeting the specific needs identified during the research
        phase.
      </p>
      <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
        <img
          src={eltyImg5}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />
      </div>
      <p className="font-poppins decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
        Third Part
      </p>
      <h2 className="text-teal-400 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
        DEVELOP
      </h2>
      <p className="text-gray-400 text-center font-poppins text-base mb-10 md:text-lg max-w-3xl mx-auto">
        During the prototyping phase, we tried to leverage the various insights
        from general practitioners as much as possible. Firstly, emphasis was
        placed on the need for personalization of the management software. The
        drag-and-drop card method is certainly the most functional one. Even
        though this might seem not entirely intuitive for a target group of
        doctors between 50 and 65 years old, as already confirmed in the value
        proposition. Therefore, in the pain relievers section, an introductory
        tutorial before user sign-up was considered. This would allow even the
        less 'tech-savvy' users to customize their dashboard with default
        layouts. The drag-and-drop system would, of course, be explained with a
        tutorial. Due to time constraints, this is clearly an idea that I was
        unable to implement and which I would like to discuss with the
        developers, also to determine its feasibility.
      </p>
      <div className="w-full max-w-5xl flex flex-col items-center mt-4">
        {/* First Image */}
        <img
          src={eltyImg6}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />

        {/* First text grid */}
        <div className="w-full font-poppins max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left text-gray-400">
            <p>
              <span className="font-bold text-xl text-slate-600 mb-10">1.</span>
              This section collects the urgent activities and tasks to be
              completed today. Here, the doctor can see the patients to visit,
              urgent requests, and activities that must be done immediately. The
              third, empty card allows the user to move the other cards
              underneath it to prioritize them, or vice-versa.
            </p>
          </div>
          <div className="text-left text-gray-400 mb-10">
            <p>
              <span className="font-bold text-xl text-slate-600 mb-10">2.</span>
              In the second section, we find prescriptions, the agenda, and
              various recipes instead. Here too, if the general practitioner
              decides to prioritize certain tasks, they can easily drag one of
              these cards into the 'Priorities' section. This prototype was
              conceived as a virtual representation of a truly customizable
              agenda.
            </p>
          </div>
        </div>

        {/* Second text grid */}
        <div className="w-full font-poppins max-w-5xl mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left text-gray-400">
            <p>
              <span className="font-bold text-xl text-slate-600">3.</span> In
              the third section, the general practitioner has the day's
              appointments and patient monitoring prominently displayed. The
              tendency would be to show the first three appointments of the day
              for every day of the week. In the card alongside, a
              click-to-action link refers to the monitoring and follow-up
              section.
            </p>
          </div>
          <div className="text-left text-gray-400">
            <p>
              <span className="font-bold text-xl text-slate-600">4.</span> This
              is the doctor's account section where they can change their photo
              and some personal information. In addition to a brief summary of
              their agenda, we find a list of recently seen patients with their
              diagnoses. Finally, the last card contains a necessary link for
              the user to get any assistance.
            </p>
          </div>
        </div>

        {/* Third Image */}

        <p className="font-poppins mt-20 decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
          Fifth Part
        </p>
        <h2 className="text-teal-400 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
          HIGH FIDELITY
        </h2>
        <div className="w-full max-w-5xl flex flex-col items-center">
          <img
            src={eltyImg7}
            alt="Hidden Shrine Research Visualization"
            className="w-full object-cover"
          />
        </div>
        {/* 🌿 End of Case Study Message */}
        <div className="text-center mt-20 mb-10">
          <h2 className="text-xl md:text-2xl font-poppins text-gray-800 mb-4">
            🩺 Case Study Concluded: Analysis of the Medical Management System
          </h2>
          <p className="text-gray-500 font-poppins text-base md:text-lg max-w-2xl mx-auto mb-6 px-4">
            Thank you for taking the time to analyze the challenges and proposed
            solutions for the General Practitioners' user interface. I hope the
            deep dive into the prototype was helpful. Check back soon for new
            updates! 💡🏥
          </p>

          <div className="mt-6 font-poppins mb-6">
            <a
              href="https://www.figma.com/design/yBFRg58Wn3xrZIvqIKzQUS/Elty-Dashboard?node-id=0-1&p=f&t=TlIDmFETrOG9aoAh-0"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-700 text-slate-700 bg-white px-6 py-3 rounded-full text-sm font-semibold duration-700 transition hover:bg-slate-700 hover:text-white"
            >
              📋 View the Prototype on Figma
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HiddenShrineComponent;
