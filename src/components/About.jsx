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

          className="
          bg-blue-950/50
          backdrop-blur-lg
          border
          border-blue-400/30
          rounded-3xl
          p-10
          shadow-xl
          hover:shadow-blue-500/30
          transition
          "
        >


          <h2 className="text-4xl font-bold text-center mb-8 text-blue-200">
            About Me
          </h2>


          <p className="text-gray-200 text-lg leading-9 text-center">

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


            <div className="bg-blue-900/40 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-300">
                10+
              </h3>
              <p className="text-gray-300">
                Years Experience
              </p>
            </div>


            <div className="bg-blue-900/40 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-300">
                55
              </h3>
              <p className="text-gray-300">
                Retail Branches
              </p>
            </div>


            <div className="bg-blue-900/40 rounded-xl p-5 text-center">
              <h3 className="text-3xl font-bold text-blue-300">
                10+
              </h3>
              <p className="text-gray-300">
                Dashboards
              </p>
            </div>


          </div>


          <div className="
          mt-10
          bg-blue-900/40
          border
          border-blue-400/20
          rounded-2xl
          p-8
          flex
          flex-col
          md:flex-row
          items-center
          gap-6
          "
          >

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">
                🚀 Career Launch Camp
              </h3>
              <p className="text-gray-300 leading-7">
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
              className="
              shrink-0
              bg-blue-600
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:bg-blue-700
              transition
              whitespace-nowrap
              "
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