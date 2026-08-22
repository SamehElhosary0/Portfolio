import { motion } from "framer-motion";

function Skills() {
  const skills = [
    {
      title: "Power BI",
      icon: "📊",
      description:
        "Creating interactive dashboards, KPIs, DAX measures, and data models."
    },
    {
      title: "Excel",
      icon: "📈",
      description:
        "Advanced Excel, Pivot Tables, Power Query, and data analysis."
    },
    {
      title: "SQL",
      icon: "🗄️",
      description:
        "Data extraction, querying databases, and business analysis."
    },
    {
      title: "Python",
      icon: "🐍",
      description:
        "Data analysis using Pandas, NumPy, and data visualization."
    },
    {
      title: "Power Query",
      icon: "⚙️",
      description:
        "ETL processes, data cleaning, and transformation."
    },
    {
      title: "DAX",
      icon: "🧮",
      description:
        "Building measures, calculations, and business KPIs."
    }
  ];

  return (
    <section id="skills" className="py-20">
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
            <span className="heading-hover">Technical Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -10 }}
                viewport={{ once: true }}
                className="border rounded-2xl p-6 shadow-lg transition"
                style={{
                  background: "var(--bg-card, #111827)",
                  opacity: 0.5,
                  borderColor: "var(--border-color, rgba(163,230,53,0.2))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 40px var(--accent-bg, rgba(163,230,53,0.1))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="text-4xl mb-4">
                  {skill.icon}
                </div>

                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "var(--accent-light, #BEF264)" }}
                >
                  {skill.title}
                </h3>

                <p style={{ color: "var(--text-secondary, #e2e8f0)" }}>
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
