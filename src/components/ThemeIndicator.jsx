// src/components/ThemeIndicator.jsx
import { useTheme } from "../ThemeContext";
import { motion } from "framer-motion";

export default function ThemeIndicator() {
  const { currentIndex, secondsLeft, themes } = useTheme();
  const theme = themes[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-2 rounded-full"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Color dot */}
      <div
        className="w-3 h-3 rounded-full"
        style={{
          background: "var(--accent)",
          boxShadow: "0 0 8px var(--accent)",
        }}
      />

      {/* Theme name */}
      <span
        className="text-xs font-semibold hidden sm:block"
        style={{ color: "var(--text-primary)" }}
      >
        {theme.name}
      </span>

      {/* Countdown */}
      <div className="flex items-center gap-1">
        <svg className="w-3 h-3" style={{ color: "var(--text-muted)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          {secondsLeft}s
        </span>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1">
        {themes.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background: i === currentIndex ? "var(--accent)" : "var(--text-muted)",
              opacity: i === currentIndex ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
