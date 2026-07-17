import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Glow 1 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl left-10 top-20"
      />

      {/* Glow 2 */}
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-80 h-80 rounded-full bg-blue-500/10 blur-3xl right-20 bottom-20"
      />

      {/* Floating Dots */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating Bars */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i + 20}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scaleY: [1, 1.4, 1],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
          }}
          className="absolute flex gap-1"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
        >
          <div className="w-1 h-5 bg-blue-500/40 rounded"></div>
          <div className="w-1 h-8 bg-blue-400/40 rounded"></div>
          <div className="w-1 h-4 bg-cyan-400/40 rounded"></div>
        </motion.div>
      ))}
    </div>
  );
}