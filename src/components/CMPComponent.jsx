import { motion } from "framer-motion";
import CMPImg1 from "../assets/CMPImg1.png";
import CMPImg2 from "../assets/CMPImg2.png";
import CMPImg3 from "../assets/CMPImg3.png";
import CMPImg4 from "../assets/CMPImg4.png";
import CMPImg5 from "../assets/CMPImg5.png";

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
          src={CMPImg1}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />
      </div>
      <p className="font-poppins lg:mt-[10px] decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
        First Part
      </p>
      <h2 className="text-orange-400 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
        HOME
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-5xl text-left">
        <h3 className="text-xl md:text-3xl leading-tight uppercase font-bold text-slate-600 md:w-1/3">
          Improving Clarity, Visual Hierarchy, and Cloud Financial Transparency
        </h3>
        <p className="text-gray-400 font-poppins text-base md:text-lg md:w-2/3">
          The previous version had poor information hierarchy and visual design.
          My work created a more intuitive user experience by restructuring the
          key data. This involved prominently displaying Monthly Costs (with a
          last-month comparison), clearly showing counts for Resources,
          Deployments, and Policies, and adding a central Finances section with
          a bar chart to track weekly spending across all resource types.
        </p>
      </div>
      {/* Two images below */}
      <div className="w-full mt-[50px] max-w-5xl flex flex-col items-center">
        <img
          src={CMPImg2}
          alt="Elty Interviews"
          className="w-full object-cover"
        />
      </div>
      {/* ✅ New section: Text on left, image on right */}
      <p className="font-poppins mt-[50px] decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
        Second Part
      </p>
      <h2 className="text-orange-400 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
        DISCOVERY
      </h2>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 max-w-5xl text-left">
        <h3 className="text-xl md:text-3xl leading-tight uppercase font-bold text-slate-600 md:w-1/3">
          Analysis of the Discovery View: A Centralized, Filterable Cloud
          Inventory
        </h3>
        <p className="text-gray-400 font-poppins text-base md:text-lg md:w-2/3">
          The Discovery view is the primary interface for asset visibility and
          detailed inventory management within the cloud environment. It
          features a highly functional, sortable table designed to present
          critical data clearly and concisely. The table columns display
          essential metadata, including the Resource name, the originating Cloud
          provider (AWS, Azure, GCP, or Oracle), the resource Category (e.g.,
          Network, Storage, Serverless), and the Date discovered.
        </p>
      </div>
      <div className="text-center mt-10 lg:mt-20">
        <h2 className="text-slate-600 uppercase lg:text-5xl font-thin text-3xl md:text-4xl mb-4">
          Enhancing User Efficiency
        </h2>
        <p className="text-gray-400 mb-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
          The Discovery view is the primary interface for asset visibility and
          detailed inventory management within the cloud environment. It
          features a highly functional, sortable table designed to present
          critical data clearly and concisely. The table columns display
          essential metadata, including the Resource name, the originating Cloud
          provider (AWS, Azure, GCP, or Oracle), the resource Category (e.g.,
          Network, Storage, Serverless), and the Date discovered.
        </p>
      </div>
      {/* Two images below */}
      <div className="w-full max-w-5xl mt-4 mb-12 flex flex-col items-center">
        <img
          src={CMPImg3}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />
      </div>
      <p className="font-poppins decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
        Third Part
      </p>
      <h2 className="text-orange-400 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
        CUSTOMIZING
      </h2>
      <div className="flex mb-[50px] flex-col md:flex-row items-start md:items-center gap-8 max-w-5xl text-left">
        <h3 className="text-xl md:text-3xl leading-tight uppercase font-bold text-slate-600 md:w-1/3">
          Custom Resource Classification: The Manage Rules Workflow
        </h3>
        <p className="text-gray-400 font-poppins text-base md:text-lg md:w-2/3">
          This new functionality provides users with advanced control over how
          discovered cloud resources are categorized and tracked. Accessible via
          the "Manage Rules" button in the Discovery view, the workflow allows
          users to define custom logic for resource classification. The initial
          "Manage Rules" modal presents a list of existing rules (such as "Name
          Pattern Rule"), which can be edited or deleted.
        </p>
      </div>
      <div className="w-full max-w-5xl flex flex-col items-center mt-4">
        {/* First Image */}
        <img
          src={CMPImg4}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />
      </div>
      <p className="text-gray-400 text-center mt-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
        From this management view, users can initiate the creation of a new
        rule, selecting from various rule types like Name Pattern, Tag Match, or
        Add Manually. The rule creation modal is highly intuitive, requiring
        users to define a rule name, a specific Condition (e.g., if the name
        contains a certain pattern), and a description. Crucially, the process
        includes a "Preview Matches" feature, which instantly validates the
        custom rule by showing which resources in the current inventory will be
        affected, ensuring accuracy and user confidence before the rule is
        finalized and applied.
      </p>
      <p className="font-poppins mt-[50px] decoration-gray-300 text-gray-500 decoration-opacity-50 underline">
        Fourth Part
      </p>
      <h2 className="text-orange-400 lg:text-6xl text-5xl md:text-3xl mt-4 mb-8 leading-tight">
        EXPLORING
      </h2>
      <div className="flex mb-[50px] flex-col md:flex-row items-start md:items-center gap-8 max-w-5xl text-left">
        <h3 className="text-xl md:text-3xl leading-tight uppercase font-bold text-slate-600 md:w-1/3">
          Drill-Down Workflow: Accessing the Resource Properties Explorer
        </h3>
        <p className="text-gray-400 font-poppins text-base md:text-lg md:w-2/3">
          This detailed view is structured to provide an immediate,
          comprehensive overview of the selected resource. The top section,
          "Overview," summarizes key metadata, including the Resource Name, the
          Date Discovered, and the Resource Type
        </p>
      </div>
      <div className="w-full max-w-5xl flex flex-col items-center mt-4">
        {/* First Image */}
        <img
          src={CMPImg5}
          alt="Hidden Shrine Research Visualization"
          className="w-full object-cover"
        />
      </div>
      <p className="text-gray-400 text-center mt-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
        <p className="text-gray-400 text-center mt-10 lg:mb-10 font-poppins text-base md:text-lg max-w-3xl mx-auto">
          Below this, the "Connections and Links" section highlights specific
          provider context, showing the Azure card, the Provider Link, and the
          Provisioned Link. The core utility of the screen is presented in the
          tabbed area, where the default view, "Properties explorer," exposes
          the raw configuration data for the resource in a clear JSON format.
          This workflow is critical for power users and administrators who need
          to go beyond surface-level metrics to inspect the deep, underlying
          configuration and history of any specific cloud asset.
        </p>
      </p>
      {/* 🌿 End of Case Study Message */}
      <div className="text-center mt-20 mb-10">
    <h2 className="text-xl md:text-2xl font-poppins text-gray-800 mb-4">
        ✅ Case Study Concluded: Analysis of the Multi-Cloud Management Portal
    </h2>
    <p className="text-gray-500 font-poppins text-base md:text-lg max-w-2xl mx-auto mb-6 px-4">
        Thank you for reviewing the significant UI/UX improvements made to the portal's main dashboard. Inside the linked Figma file, you can also explore the full Design System used to build this new experience and review a fully interactive prototype.💡💰
    </p>

    <div className="mt-6 font-poppins mb-6">
        <a
            href="https://www.figma.com/design/eBYM5OwjGNaexDWKBcsAFx/WelkinReply?node-id=0-1&p=f&t=sos7hv0EuulEopsj-0"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-slate-700 text-slate-700 bg-white px-6 py-3 rounded-full text-sm font-semibold duration-700 transition hover:bg-slate-700 hover:text-white"
        >
            📋 View the Prototype on Figma
        </a>
    </div>
</div>
    </motion.div>
  );
};

export default HiddenShrineComponent;
