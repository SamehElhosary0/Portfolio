import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";
import NetworkBackground from "./components/NetworkBackground";


function App() {


  const charts = [
    {type:"bar", top:"5%", left:"3%"},
    {type:"line", top:"8%", left:"25%"},
    {type:"pie", top:"10%", left:"75%"},
    {type:"kpi", top:"15%", left:"50%"},

    {type:"table", top:"22%", left:"8%"},
    {type:"bar", top:"25%", left:"35%"},
    {type:"line", top:"28%", left:"65%"},
    {type:"pie", top:"30%", left:"85%"},

    {type:"kpi", top:"35%", left:"20%"},
    {type:"table", top:"38%", left:"50%"},
    {type:"bar", top:"40%", left:"75%"},

    {type:"line", top:"45%", left:"5%"},
    {type:"pie", top:"48%", left:"35%"},
    {type:"kpi", top:"50%", left:"70%"},

    {type:"table", top:"55%", left:"15%"},
    {type:"bar", top:"58%", left:"45%"},
    {type:"line", top:"60%", left:"80%"},

    {type:"pie", top:"65%", left:"5%"},
    {type:"kpi", top:"68%", left:"30%"},
    {type:"table", top:"70%", left:"60%"},

    {type:"bar", top:"75%", left:"85%"},
    {type:"line", top:"78%", left:"20%"},
    {type:"pie", top:"80%", left:"50%"},

    {type:"kpi", top:"85%", left:"10%"},
    {type:"table", top:"88%", left:"40%"},
    {type:"bar", top:"90%", left:"75%"},

    {type:"dot", top:"12%", left:"15%"},
    {type:"dot", top:"18%", left:"90%"},
    {type:"dot", top:"32%", left:"60%"},
    {type:"dot", top:"42%", left:"25%"},
    {type:"dot", top:"52%", left:"90%"},
    {type:"dot", top:"72%", left:"35%"},
    {type:"dot", top:"82%", left:"70%"},

    {type:"bar", top:"18%", left:"70%"},
    {type:"line", top:"33%", left:"10%"},
    {type:"pie", top:"44%", left:"55%"},
    {type:"kpi", top:"62%", left:"15%"},
    {type:"table", top:"76%", left:"55%"},
  ];



  return (

    <div
      className="
      min-h-screen
      text-white
      relative
      overflow-hidden
      "
    >

      {/* Animated Network Background (matches profile photo style) */}
      <NetworkBackground />

      {/* Animated Glows & Floating Particles */}
      <Background />

      {/* Dashboard Background */}

      <div className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
      ">


        <div
          className="
          absolute
          inset-0
          opacity-[0.06]
          bg-[linear-gradient(#60a5fa_1px,transparent_1px),linear-gradient(90deg,#60a5fa_1px,transparent_1px)]
          bg-[size:45px_45px]
          "
        />



        {charts.map((item,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              scale:.7
            }}

            animate={{
              opacity:.18,
              scale:1
            }}

            transition={{
              duration:1,
              delay:index*.03
            }}

            style={{
              top:item.top,
              left:item.left
            }}

            className="
            absolute
            w-28
            h-20
            "
          >


            {item.type==="bar" && (

              <div className="flex items-end gap-2 h-full">

                <span className="w-3 h-10 bg-blue-400 rounded"></span>
                <span className="w-3 h-16 bg-cyan-400 rounded"></span>
                <span className="w-3 h-12 bg-blue-300 rounded"></span>
                <span className="w-3 h-14 bg-blue-500 rounded"></span>

              </div>

            )}



            {item.type==="line" && (

              <svg viewBox="0 0 120 70" className="w-full h-full">

                <polyline
                  points="5,60 30,35 60,50 90,15 115,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-cyan-400"
                />

              </svg>

            )}



            {item.type==="pie" && (

              <div
                className="
                w-16
                h-16
                rounded-full
                bg-gradient-to-tr
                from-blue-500
                via-cyan-400
                to-transparent
                border
                border-blue-300
                "
              />

            )}



            {item.type==="kpi" && (

              <div
                className="
                w-28
                h-14
                rounded-xl
                bg-blue-500/20
                border
                border-blue-300
                "
              />

            )}



            {item.type==="table" && (

              <div
                className="
                w-28
                h-16
                rounded-lg
                border
                border-blue-300
                bg-blue-900/30
                p-2
                "
              >

                <div className="h-1 bg-blue-300 mb-2 rounded"></div>
                <div className="h-1 bg-blue-300/50 mb-2 rounded"></div>
                <div className="h-1 bg-blue-300/30 rounded"></div>

              </div>

            )}



            {item.type==="dot" && (

              <div
                className="
                w-4
                h-4
                rounded-full
                bg-cyan-400
                shadow-lg
                shadow-cyan-400
                "
              />

            )}



          </motion.div>

        ))}


      </div>





      <div className="relative z-10">

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

      </div>


    </div>

  );
}


export default App;