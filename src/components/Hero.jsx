import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="heading-hover text-5xl md:text-6xl font-bold mb-6">
            Sameh El-Hosary
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="heading-hover text-2xl md:text-3xl mb-6"
            style={{ color: "var(--accent-light, #BEF264)" }}
          >
            Data Analyst | Business Intelligence Analyst
          </motion.h2>

          <p className="text-lg leading-8" style={{ color: "var(--text-secondary, #e2e8f0)" }}>
            Planning Specialist with over 10 years of experience in
            retail operations, inventory planning, and data-driven
            decision making. Skilled in Power BI, Excel, SQL,
            Power Query, and Data Analytics.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.08 }}
              href="#projects"
              className="px-6 py-3 rounded-lg font-semibold transition"
              style={{
                background: "var(--accent-dark, #65A30D)",
                color: "var(--bg-primary, #08122f)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "var(--accent, #A3E635)";
                e.target.style.color = "var(--bg-primary, #08122f)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "var(--accent-dark, #65A30D)";
                e.target.style.color = "var(--bg-primary, #08122f)";
              }}
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="#contact"
              className="px-6 py-3 rounded-lg transition"
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
              Contact Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.08 }}
              href="/Sameh_El_Hosary_CV.pdf"
              download
              className="px-6 py-3 rounded-lg transition"
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
              Download CV
            </motion.a>
          </div>
        </motion.div>

        {/* Profile Image - blends with background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative overflow-hidden"
            style={{
              width: "288px",
              height: "288px",
              borderRadius: "20px",
            }}
          >
            {/* Image with mask to blend edges into background */}
            <img
              src={profile}
              alt="Sameh El-Hosary"
              className="w-full h-full object-cover"
              style={{
                filter: "brightness(1.05) contrast(1.02)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 85%)",
                maskImage: "radial-gradient(ellipse at center, black 55%, transparent 85%)",
              }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
