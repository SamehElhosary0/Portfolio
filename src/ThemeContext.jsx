// src/ThemeContext.jsx
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { themes } from "./themes";

const ThemeContext = createContext();

// Full length of a theme cycle, in seconds.
const CYCLE_SECONDS = 30;
// How many seconds before the cycle ends the crossfade into the next
// theme should start.
const TRANSITION_LEAD_SECONDS = 5;
const TRANSITION_MS = TRANSITION_LEAD_SECONDS * 1000;

export function ThemeProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // The theme we're fading FROM. Only meaningful while fadeProgress < 1.
  const [prevIndex, setPrevIndex] = useState(0);
  // 0 -> 1 across the 5s crossfade window, then stays at 1 until the
  // next crossfade starts. The <canvas> background reads this directly
  // to interpolate its own colors, since CSS transitions can't animate
  // canvas pixels.
  const [fadeProgress, setFadeProgress] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(CYCLE_SECONDS);

  const fadeStartRef = useRef(null);

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

    applyTheme(currentIndex);

    const countdownTick = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;

        if (next === TRANSITION_LEAD_SECONDS) {
          setCurrentIndex((prevIdx) => {
            const nextIdx = (prevIdx + 1) % themes.length;
            setPrevIndex(prevIdx);
            fadeStartRef.current = performance.now();
            applyTheme(nextIdx);
            return nextIdx;
          });
        }

        return next <= 0 ? CYCLE_SECONDS : next;
      });
    }, 1000);

    let raf;
    const fadeTick = () => {
      if (fadeStartRef.current !== null) {
        const elapsed = performance.now() - fadeStartRef.current;
        if (elapsed >= TRANSITION_MS) {
          setFadeProgress(1);
          fadeStartRef.current = null;
        } else {
          setFadeProgress(elapsed / TRANSITION_MS);
        }
      }
      raf = requestAnimationFrame(fadeTick);
    };
    raf = requestAnimationFrame(fadeTick);

    return () => {
      clearInterval(countdownTick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{ currentIndex, prevIndex, fadeProgress, secondsLeft, themes }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}