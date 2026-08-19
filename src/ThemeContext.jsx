// src/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "./themes";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(30);

  useEffect(() => {
    const applyTheme = (index) => {
      const theme = themes[index];
      const root = document.documentElement;
      Object.entries(theme).forEach(([key, value]) => {
        if (key !== "name") {
          root.style.setProperty(key, value);
        }
      });
    };

    // Apply initial theme
    applyTheme(currentIndex);

    // Change theme every 30 seconds
    const themeInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % themes.length;
        applyTheme(next);
        return next;
      });
    }, 30000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 30 : prev - 1));
    }, 1000);

    return () => {
      clearInterval(themeInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ currentIndex, secondsLeft, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
