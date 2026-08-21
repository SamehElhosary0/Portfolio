// src/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { themes } from "./themes";

const ThemeContext = createContext();

// Full length of a theme cycle, in seconds.
const CYCLE_SECONDS = 30;
// How many seconds before the cycle ends the crossfade into the next
// theme should start. Must match the transition duration set on the
// "* { transition: ... }" rule and the body/.animated-bg backgrounds
// in index.css, or the fade will finish early/late instead of landing
// exactly on 0.
const TRANSITION_LEAD_SECONDS = 5;

export function ThemeProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(CYCLE_SECONDS);

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

    // Single 1-second tick drives both the visible countdown and the
    // theme swap. Using one interval instead of two independent ones
    // (a 30s theme-switch timer + a 1s countdown timer) also avoids the
    // two timers slowly drifting out of sync with each other over time.
    const tick = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;

        // Kick off the crossfade into the next theme before the cycle
        // actually ends, so the color shift completes right as the
        // countdown hits 0 instead of swapping instantly.
        if (next === TRANSITION_LEAD_SECONDS) {
          setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % themes.length;
            applyTheme(nextIndex);
            return nextIndex;
          });
        }

        return next <= 0 ? CYCLE_SECONDS : next;
      });
    }, 1000);

    return () => clearInterval(tick);
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
