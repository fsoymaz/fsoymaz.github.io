"use client";

import { useEffect, useRef } from "react";

type ThreeBgProps = {
  className?: string;
  dotColor?: string;
  bgOpacity?: number;
  density?: number; // points per 10k px^2
  speed?: number; // rotation speed
};

export function ThreeBg({
  className,
  dotColor = "rgba(100, 100, 255, 0.9)",
  bgOpacity = 0.25,
  density = 0.12,
  speed = 0.0006,
}: ThreeBgProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.scale(dpr, dpr);

    // Scene config
    const radius = Math.min(width, height) * 0.38;
    const numPoints = Math.max(120, Math.floor((width * height) / (10000 / density)));
    const points: Array<{ x: number; y: number; z: number } > = [];

    // Golden spiral distribution on sphere for uniformity
    const PHI = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y from 1 to -1
      const r = Math.sqrt(1 - y * y);
      const theta = PHI * i;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      points.push({ x, y, z });
    }

    let t = 0;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function render() {
      ctx.clearRect(0, 0, width, height);

      // background glow
      ctx.save();
      const grad = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, radius * 1.2);
      grad.addColorStop(0, `rgba(99,102,241,${bgOpacity})`); // indigo-500
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // rotation
      if (!prefersReduced) t += speed * Math.max(1, (width + height) / 1200);
      const sinY = Math.sin(t);
      const cosY = Math.cos(t);
      const sinX = Math.sin(t * 0.7);
      const cosX = Math.cos(t * 0.7);

      // draw points
      ctx.fillStyle = dotColor;
      for (const p of points) {
        // rotate around Y then X
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // project
        const fov = radius * 1.4;
        const scale = fov / (fov - z2 * radius);
        const x = width / 2 + x1 * radius * scale;
        const y = height / 2 + y2 * radius * scale;
        const size = Math.max(1, 2.2 * scale);

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    }

    function onResize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    }

    rafRef.current = requestAnimationFrame(render);
    window.addEventListener("resize", onResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [density, speed, dotColor, bgOpacity]);

  return (
    <div className={className} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}


