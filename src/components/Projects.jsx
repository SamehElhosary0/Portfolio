import { motion } from "framer-motion";

const Projects = () => {

  const projects = [
  {
    title: "WE Telecom Dashboard",
    image: "/projects/we-dashboard.png",
    description:
      "WE Telecom dashboard analyzing business performance, customer insights, and important KPIs to support decision making.",
    tools: "Power BI | DAX | Power Query | Data Modeling",
    dashboard: "#",
    github: "https://github.com/SamehElhosary0/WE-Telecom-Executive-Dashboard.",
  },
  {
    title: "Amazon Sales Analysis Dashboard",
    image: "/projects/amazon-dashboard.png",
    description:
      "Amazon sales analysis dashboard providing insights about sales performance, product trends, and key business metrics.",
    tools: "Power BI | DAX | Power Query | Data Analysis",
    dashboard: "#",
    github: "https://github.com/SamehElhosary0/E-Commerce-Analytics-Dashboard-Amazon-",
  },
  {
    title: "HR Analytics Dashboard - Power BI",
    image: "/projects/hr-dashboard.png",
    description:
      "HR analytics dashboard providing insights about employees, attendance, departments performance, and workforce trends.",
    tools: "Power BI | DAX | Power Query",
    dashboard: "#",
    github: "https://github.com/SamehElhosary0/HR-Analytics-Dashboard",
  },
  {
    title: "Retail Sales Profitability Dashboard",
    image: "/projects/elaraby-dashboard-overview.png",
    description:
      "Interactive Power BI dashboard analyzing sales performance, profitability, product trends, and business insights to support data-driven decisions.",
    tools: "Power BI | DAX | Power Query | Data Analysis",
    dashboard: "#",
    github:
      "https://github.com/SamehElhosary0/retail-sales-profitability-dashboard",
  },
  {
    title: "Summary Sales Dashboard",
    image: "/projects/sales-dashboard.png",
    description:
      "4-page Power BI dashboard with bookmark-driven navigation, tracking sales, profit, and customer performance across regions and product categories.",
    tools: "Power BI | DAX | Power Query | Bookmarks",
    dashboard: "#",
    github: "https://github.com/SamehElhosary0/Summary-Sales-Dashboard",
  },
];


  return (
    <section id="projects" className="py-20">


      <div className="max-w-6xl mx-auto px-6">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}

          className="
          bg-blue-950/40
          backdrop-blur-lg
          border
          border-blue-400/30
          rounded-3xl
          p-10
          shadow-xl
          "
        >


          <h2 className="
          heading-hover
          text-4xl
          font-bold
          text-center
          mb-12
          text-blue-200
          ">
            Featured Projects
          </h2>



          <div className="grid md:grid-cols-3 gap-8">


            {projects.map((project, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 50
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}

                viewport={{
                  once: true
                }}

                whileHover={{
                  scale: 1.05,
                  y: -10
                }}

                className="
                bg-blue-900/50
                backdrop-blur-lg
                border
                border-blue-400/20
                rounded-xl
                overflow-hidden
                shadow-lg
                hover:shadow-blue-500/40
                transition
                "
              >


                {project.comingSoon ? (
                  <div className="w-full h-48 flex flex-col items-center justify-center gap-2 bg-blue-950/60">
                    <span className="text-3xl">📊</span>
                    <span className="text-blue-300 text-sm font-semibold tracking-wide">
                      Coming Soon
                    </span>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}



                <div className="p-6">


                  <h3 className="
                  text-xl
                  font-bold
                  mb-3
                  text-blue-300
                  ">
                    {project.title}
                  </h3>



                  <p className="
                  text-gray-200
                  mb-4
                  leading-7
                  ">
                    {project.description}
                  </p>



                  <p className="
                  text-blue-200
                  font-semibold
                  mb-5
                  ">
                    {project.tools}
                  </p>



                  <div className="flex gap-3">

                    {project.comingSoon ? (
                      <span
                        className="
                        border
                        border-blue-300/40
                        text-blue-300/70
                        px-4
                        py-2
                        rounded-lg
                        text-sm
                        cursor-default
                        select-none
                        "
                      >
                        Coming Soon
                      </span>
                    ) : (
                      <>
                        {project.dashboard && project.dashboard !== "#" && (
                          <a
                            href={project.dashboard}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            bg-blue-600
                            px-4
                            py-2
                            rounded-lg
                            hover:bg-blue-700
                            transition
                            "
                          >
                            Dashboard
                          </a>
                        )}

                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            border
                            border-blue-300
                            px-4
                            py-2
                            rounded-lg
                            hover:bg-blue-500
                            transition
                            "
                          >
                            GitHub
                          </a>
                        )}
                      </>
                    )}

                  </div>


                </div>


              </motion.div>

            ))}


          </div>


        </motion.div>


      </div>


    </section>
  );
};

export default Projects;