// A fading ink trail that follows the pointer, like sketching on the page itself,
// plus a tiny star-burst when clicking empty space. Desktop pointers only.

import { useEffect, useRef } from 'react';

const INK = '26, 26, 26';
const LIFETIME = 650;
const MAX_POINTS = 90;

const burstColors = ['#FF5A36', '#F7C948', '#4A7BD9', '#3E9B57', '#EE8FB4', '#9B7ED9', '#1A1A1A'];

const burstShapes = [
  '<path d="M8 1l1.8 4.6L14.5 6l-3.6 3 1.2 4.8L8 11.2 3.9 13.8 5.1 9 1.5 6l4.7-.4z"/>',
  '<path d="M8 1.5c.4 3.4 2 5 5.5 6.2C10 8.9 8.4 10.5 8 13.9 7.6 10.5 6 8.9 2.5 7.7 6 6.5 7.6 4.9 8 1.5z"/>',
  '<path d="M8 14S1.5 9.6.7 5.9C.1 3.3 1.9 1 4.4 1 6.1 1 7.6 2 8 3.7 8.4 2 9.9 1 11.6 1c2.5 0 4.3 2.3 3.7 4.9C14.5 9.6 8 14 8 14z"/>',
];

function spawnBurst(x: number, y: number) {
  const layer = document.createElement('div');
  layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:80;';
  document.body.appendChild(layer);

  const n = 5 + Math.floor(Math.random() * 3);
  for (let i = 0; i < n; i++) {
    const el = document.createElement('div');
    const size = 8 + Math.random() * 9;
    const shape = burstShapes[Math.floor(Math.random() * burstShapes.length)];
    const color = burstColors[Math.floor(Math.random() * burstColors.length)];
    el.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 16 16" fill="${color}">${shape}</svg>`;
    el.style.cssText = `position:absolute;left:${x - size / 2}px;top:${y - size / 2}px;will-change:transform,opacity;`;

    const angle = Math.random() * Math.PI * 2;
    const dist = 26 + Math.random() * 34;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist - 14;
    const spin = (Math.random() - 0.5) * 300;

    el.animate(
      [
        { transform: 'translate(0,0) rotate(0deg) scale(1)', opacity: 1 },
        { transform: `translate(${dx}px,${dy + 18}px) rotate(${spin}deg) scale(0.25)`, opacity: 0 },
      ],
      { duration: 520 + Math.random() * 260, easing: 'cubic-bezier(.16,.8,.4,1)' },
    ).onfinish = () => el.remove();

    layer.appendChild(el);
  }
  setTimeout(() => layer.remove(), 900);
}

export default function PenTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const points: { x: number; y: number; t: number }[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onMove = (e: PointerEvent) => {
      points.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (points.length > MAX_POINTS) points.shift();
    };

    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, input, textarea, select, label, [role="button"]')) return;
      spawnBurst(e.clientX, e.clientY);
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const now = performance.now();
      while (points.length && now - points[0].t > LIFETIME) points.shift();
      ctx.clearRect(0, 0, w, h);
      if (points.length < 2) return;

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 2.6;

      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const age = (now - p1.t) / LIFETIME; // 0 fresh → 1 gone
        const alpha = 0.55 * (1 - age);
        if (alpha <= 0.01) continue;

        const mx = (p0.x + p1.x) / 2;
        const my = (p0.y + p1.y) / 2;
        ctx.strokeStyle = `rgba(${INK}, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.quadraticCurveTo(p0.x, p0.y, mx, my);
        ctx.stroke();
      }
      // close the curve up to the freshest point
      const last = points[points.length - 1];
      const prev = points[points.length - 2];
      ctx.beginPath();
      ctx.moveTo((prev.x + last.x) / 2, (prev.y + last.y) / 2);
      ctx.lineTo(last.x, last.y);
      ctx.stroke();
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[75] hidden md:block" aria-hidden="true" />;
}
