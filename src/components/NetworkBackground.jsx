import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height, dpr;
    let nodes = [];

    function getAccentColors() {
      const root = getComputedStyle(document.documentElement);
      return [
        root.getPropertyValue("--chart-cyan").trim() || "#22d3ee",
        root.getPropertyValue("--chart-blue").trim() || "#60a5fa",
        root.getPropertyValue("--chart-blue-light").trim() || "#93c5fd",
        root.getPropertyValue("--accent").trim() || "#A3E635",
      ];
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

      const ACCENT_COLORS = getAccentColors();
      const count = Math.min(90, Math.floor((width * height) / 18000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
        color:
          Math.random() > 0.93
            ? ACCENT_COLORS[3]
            : ACCENT_COLORS[Math.floor(Math.random() * 3)],
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      const root = getComputedStyle(document.documentElement);
      const bg1 = root.getPropertyValue("--bg-gradient-1").trim() || "#061225";
      const bg2 = root.getPropertyValue("--bg-gradient-2").trim() || "#0a1f3d";
      const bg3 = root.getPropertyValue("--bg-gradient-3").trim() || "#071a30";
      const lineColor = root.getPropertyValue("--chart-blue").trim() || "#38bdf8";

      // background base gradient (matches profile photo tone)
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, bg1);
      grad.addColorStop(0.5, bg2);
      grad.addColorStop(1, bg3);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const maxDist = Math.min(160, width / 6);

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
            ctx.strokeStyle = lineColor.replace(")", `, ${0.16 * (1 - dist / maxDist)})`);
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
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
