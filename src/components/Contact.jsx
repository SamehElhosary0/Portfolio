import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20">

      <div className="max-w-5xl mx-auto px-6">


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
          text-4xl
          font-bold
          text-center
          mb-10
          text-blue-200
          ">
            Get In Touch
          </h2>



          <div className="flex flex-col md:flex-row justify-center gap-8">


            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-gray-200 text-lg"
            >
              📧{" "}
              <a
                href="mailto:sameh.sabry656@gmail.com"
                className="text-blue-300 hover:text-white transition"
              >
                Email
              </a>
            </motion.p>



            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-gray-200 text-lg"
            >
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/sameh-el-hosary-024a2230b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition"
              >
                LinkedIn
              </a>
            </motion.p>



            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-gray-200 text-lg"
            >
              💻{" "}
              <a
                href="https://github.com/SamehElhosary0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition"
              >
                GitHub
              </a>
            </motion.p>


          </div>


        </motion.div>


      </div>

    </section>
  )
}

export default Contact;