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
      title: "Jumia Performance Dashboard",
      image: "/projects/jumia-dashboard.png",
      description:
        "Comprehensive e-commerce analytics dashboard tracking sales, profitability, regional performance, and monthly trends to support business decisions.",
      tools: "Power BI | DAX | Power Query | Star Schema",
      dashboard: "#",
      github: "https://github.com/SamehElhosary0/Jumia-Performance-Dashboard",
    },
    {
      title: "Bosta Supply Chain Intelligence Dashboard",
      image: "/projects/bosta-dashboard.png",
      description:
        "Power BI dashboard analyzing ~1M shipment orders for an Egyptian logistics company, covering fees, costs, carrier performance, and regional trends.",
      tools: "Power BI | DAX | Power Query | Python (Data Cleaning)",
      dashboard: "#",
      github: "https://github.com/SamehElhosary0/Bosta-Supply-Chain-Dashboard",
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
      github: "https://github.com/SamehElhosary0/retail-sales-profitability-dashboard",
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
          className="backdrop-blur-lg border rounded-3xl p-10 shadow-xl"
          style={{
            background: "var(--bg-secondary, #0b1a3d)",
            opacity: 0.4,
            borderColor: "var(--border-color, rgba(163,230,53,0.2))",
          }}
        >
                    <h2
            className="text-4xl font-bold text-center mb-12"
            style={{ color: "var(--text-secondary, #e2e8f0)" }}
          >
            <span className="heading-hover">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="backdrop-blur-lg border rounded-xl overflow-hidden shadow-lg transition"
                style={{
                  background: "var(--bg-card, #111827)",
                  opacity: 0.7,
                  borderColor: "var(--border-color, rgba(163,230,53,0.2))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px var(--accent-bg, rgba(163,230,53,0.1))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--accent-light, #BEF264)" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="mb-4 leading-7"
                    style={{ color: "var(--text-secondary, #e2e8f0)" }}
                  >
                    {project.description}
                  </p>

                  <p
                    className="font-semibold mb-5"
                    style={{ color: "var(--accent-light, #BEF264)" }}
                  >
                    {project.tools}
                  </p>

                  <div className="flex gap-3">
                    {project.dashboard && project.dashboard !== "#" && (
                      <a
                        href={project.dashboard}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg transition"
                        style={{
                          background: "var(--accent-dark, #65A30D)",
                          color: "var(--bg-primary, #08122f)",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "var(--accent, #A3E635)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "var(--accent-dark, #65A30D)";
                        }}
                      >
                        Dashboard
                      </a>
                    )}

                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg transition"
                        style={{
                          border: "1px solid var(--accent, #A3E635)",
                          color: "var(--accent, #A3E635)",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "var(--accent-dark, #65A30D)";
                          e.target.style.color = "var(--bg-primary, #08122f)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "transparent";
                          e.target.style.color = "var(--accent, #A3E635)";
                        }}
                      >
                        GitHub
                      </a>
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
