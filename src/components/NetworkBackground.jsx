import { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function lerpColor(hexA, hexB, t) {
  if (hexA === hexB) return hexB;
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  const r = Math.round(a.r + (b.r - a.r) * t);
  const g = Math.round(a.g + (b.g - a.g) * t);
  const bl = Math.round(a.b + (b.b - a.b) * t);
  return `rgb(${r}, ${g}, ${bl})`;
}

export default function NetworkBackground() {
  const canvasRef = useRef(null);
  const { currentIndex, prevIndex, fadeProgress, themes } = useTheme();

  const themeStateRef = useRef({ currentIndex, prevIndex, fadeProgress, themes });
  themeStateRef.current = { currentIndex, prevIndex, fadeProgress, themes };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height, dpr;
    let nodes = [];

    function blendedColors() {
      const { currentIndex, prevIndex, fadeProgress, themes } = themeStateRef.current;
      const from = themes[prevIndex];
      const to = themes[currentIndex];
      const t = fadeProgress;
      const pick = (key, fallback) => {
        const a = from[key] || fallback;
        const b = to[key] || fallback;
        return t >= 1 ? b : lerpColor(a, b, t);
      };
      return {
        bg1: pick("--bg-gradient-1", "#061225"),
        bg2: pick("--bg-gradient-2", "#0a1f3d"),
        bg3: pick("--bg-gradient-3", "#071a30"),
        chartCyan: pick("--chart-cyan", "#22d3ee"),
        chartBlue: pick("--chart-blue", "#60a5fa"),
        chartBlueLight: pick("--chart-blue-light", "#93c5fd"),
        accent: pick("--accent", "#A3E635"),
      };
    }

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((width * height) / 18000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
        colorSlot: Math.random() > 0.93 ? 3 : Math.floor(Math.random() * 3),
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      const { bg1, bg2, bg3, chartCyan, chartBlue, chartBlueLight, accent } = blendedColors();

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, bg1);
      grad.addColorStop(0.5, bg2);
      grad.addColorStop(1, bg3);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const maxDist = Math.min(160, width / 6);
      const rgbMatch = chartBlue.match(/\d+/g);
      const [lr, lg, lb] = rgbMatch ? rgbMatch.map(Number) : [56, 189, 248];

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.strokeStyle = `rgba(${lr}, ${lg}, ${lb}, ${0.16 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      const ACCENT_COLORS = [chartCyan, chartBlue, chartBlueLight, accent];
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = ACCENT_COLORS[n.colorSlot];
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
    />
  );
}