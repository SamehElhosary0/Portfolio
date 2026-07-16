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

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sameh El-Hosary
          </h1>


          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-blue-300 mb-6"
          >
            Data Analyst | Business Intelligence Analyst
          </motion.h2>


          <p className="text-gray-200 text-lg leading-8">
            Planning Specialist with over 10 years of experience in
            retail operations, inventory planning, and data-driven
            decision making. Skilled in Power BI, Excel, SQL,
            Power Query, and Data Analytics.
          </p>


          <div className="flex gap-4 mt-8 justify-center md:justify-start">


            <motion.a
              whileHover={{ scale: 1.08 }}
              href="#projects"
              className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View Projects
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.08 }}
              href="#contact"
              className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Contact Me
            </motion.a>


            <motion.a
              whileHover={{ scale: 1.08 }}
              href="/Sameh_El_Hosary_CV.pdf"
              download
              className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Download CV
            </motion.a>


          </div>

        </motion.div>



        {/* Profile Image */}
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
            className="w-72 h-72 rounded-full bg-blue-500/20 border-4 border-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/40 overflow-hidden"
          >

            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />

          </motion.div>

        </motion.div>


      </div>

    </section>
  );
}

export default Hero;