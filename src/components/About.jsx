import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-lg border rounded-3xl p-10 shadow-xl"
          style={{
            background: "var(--bg-secondary, #0b1a3d)",
            borderColor: "var(--border-color, rgba(163,230,53,0.2))",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 20px 40px var(--accent-bg, rgba(163,230,53,0.1))";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
          }}
        >
                    <h2
            className="text-4xl font-bold text-center mb-8"
            style={{ color: "var(--text-primary, #ffffff)" }}
          >
            <span className="heading-hover">About Me</span>
          </h2>

          <p
            className="text-lg leading-9 text-center"
            style={{ color: "var(--text-secondary, #e2e8f0)" }}
          >
            I am a Planning Specialist with over 10 years of experience
            in retail operations, inventory planning, and business analysis.

            <br /><br />

            I have strong experience in transforming business data into
            meaningful insights using Power BI, Excel, SQL, Power Query,
            and Data Analytics techniques.

            <br /><br />

            My goal is to leverage data-driven solutions to improve
            decision making, optimize operations, and support business growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "var(--bg-card, #111827)" }}
            >
              <h3 className="text-3xl font-bold" style={{ color: "var(--accent, #A3E635)" }}>
                10+
              </h3>
              <p style={{ color: "var(--text-muted, #94a3b8)" }}>
                Years Experience
              </p>
            </div>

            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "var(--bg-card, #111827)" }}
            >
              <h3 className="text-3xl font-bold" style={{ color: "var(--accent, #A3E635)" }}>
                55
              </h3>
              <p style={{ color: "var(--text-muted, #94a3b8)" }}>
                Retail Branches
              </p>
            </div>

            <div
              className="rounded-xl p-5 text-center"
              style={{ background: "var(--bg-card, #111827)" }}
            >
              <h3 className="text-3xl font-bold" style={{ color: "var(--accent, #A3E635)" }}>
                10+
              </h3>
              <p style={{ color: "var(--text-muted, #94a3b8)" }}>
                Dashboards
              </p>
            </div>
          </div>

          <div
            className="mt-10 border rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
            style={{
              background: "var(--bg-card, #111827)",
              borderColor: "var(--border-color, rgba(163,230,53,0.2))",
            }}
          >
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--accent, #A3E635)" }}>
                🚀 Career Launch Camp
              </h3>
              <p className="leading-7" style={{ color: "var(--text-secondary, #e2e8f0)" }}>
                An intensive professional development program covering personal
                branding, LinkedIn optimization, CV writing, and soft skills —
                completed under the guidance of Eng. Hisham Fenidi.
                <br /><br />
                I learned a lot from this camp — lessons that go beyond theory
                and genuinely help me both in my professional career and in my
                personal growth.
              </p>
            </div>

            <a
              href="/CareerLaunchCamp.pptx"
              download
              className="shrink-0 px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
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
              Download Presentation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
