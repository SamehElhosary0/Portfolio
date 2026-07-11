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
          mb-12
          text-blue-200
          ">
            Technical Skills
          </h2>


          <div className="grid md:grid-cols-3 gap-8">


            {skills.map((skill, index) => (

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

                whileHover={{
                  scale: 1.08,
                  y: -10
                }}

                viewport={{
                  once: true
                }}

                className="
                bg-blue-900/50
                border
                border-blue-400/20
                rounded-2xl
                p-6
                shadow-lg
                hover:shadow-blue-500/40
                transition
                "
              >


                <div className="text-4xl mb-4">
                  {skill.icon}
                </div>


                <h3 className="
                text-2xl
                font-bold
                text-blue-300
                mb-3
                ">
                  {skill.title}
                </h3>


                <p className="text-gray-200 leading-7">
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