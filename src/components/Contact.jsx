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
          heading-hover
          text-4xl
          font-bold
          text-center
          mb-10
          text-blue-200
          ">
            Get In Touch
          </h2>



          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:sameh.sabry656@gmail.com"
              className="flex items-center gap-2 text-gray-200 hover:text-white text-lg transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-blue-300">
                <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13zm2.2.3 7.3 6.1a.75.75 0 0 0 .96 0l7.3-6.1a1 1 0 0 0-.71-.3H4.9a1 1 0 0 0-.7.3zM20 7.4l-6.87 5.73a2.75 2.75 0 0 1-3.52 0L2.74 7.4a1 1 0 0 0-.04.24v10.86c0 .28.22.5.5.5h17.6c.28 0 .5-.22.5-.5V7.64c0-.08-.01-.16-.04-.24z"/>
              </svg>
              <span className="text-blue-300">Email</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.linkedin.com/in/sameh-el-hosary-"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-white text-lg transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-blue-300">
                <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>
              </svg>
              <span className="text-blue-300">LinkedIn</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://github.com/SamehElhosary0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-white text-lg transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-blue-300">
                <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.51-3.5-.7-3.72-1.34-.13-.34-.68-1.34-1.16-1.62-.4-.22-.96-.75-.01-.77.88-.01 1.51.82 1.72 1.16 1.01 1.72 2.62 1.23 3.26.94.1-.74.4-1.23.72-1.52-2.5-.29-5.13-1.28-5.13-5.66 0-1.25.44-2.28 1.16-3.08-.12-.29-.5-1.46.11-3.04 0 0 .95-.31 3.11 1.18a10.6 10.6 0 0 1 5.66 0c2.16-1.49 3.11-1.18 3.11-1.18.61 1.58.23 2.75.11 3.04.72.8 1.16 1.82 1.16 3.08 0 4.39-2.64 5.37-5.15 5.65.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .27.18.6.69.49A10.21 10.21 0 0 0 22 12.2C22 6.58 17.52 2 12 2z"/>
              </svg>
              <span className="text-blue-300">GitHub</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/201003120969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-200 hover:text-white text-lg transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-blue-300">
                <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.646.86 5.09 2.316 7.07L4.6 29l7.13-1.87A11.93 11.93 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm.001 21.75c-1.94 0-3.75-.52-5.31-1.42l-.38-.22-4.22 1.11 1.13-4.11-.25-.42A9.7 9.7 0 0 1 5.75 15c0-5.65 4.6-10.25 10.25-10.25S26.25 9.35 26.25 15 21.65 24.75 16.002 24.75zm5.6-7.6c-.31-.16-1.83-.9-2.12-1-.28-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.2-.18.21-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.53-.91-.81-1.53-1.81-1.71-2.12-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.02-.55-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.55.08-.84.39-.28.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.23 3.4 5.4 4.77.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.83-.75 2.09-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.36z"/>
              </svg>
              <span className="text-blue-300">WhatsApp</span>
            </motion.a>

          </div>


        </motion.div>


      </div>

    </section>
  )
}

export default Contact;
