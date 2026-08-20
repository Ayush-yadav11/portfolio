// Hand-drawn single-stroke ink illustrations.
// Consistent ~2px rounded stroke, minimal fill, occasional accent-color highlight.
// Every doodle accepts `className`, `color` (stroke color) and `style`.

import type { CSSProperties } from 'react';

export type P = { className?: string; color?: string; style?: CSSProperties };

const S = (color = 'var(--color-ink)', w = 2) => ({
  fill: 'none' as const,
  stroke: color,
  strokeWidth: w,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

const stroke = S(undefined, 2.4);

/* ------------------------------------------------------------------ */
/*  Feature illustrations (original set)                               */
/* ------------------------------------------------------------------ */

export function HeroFigure({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 440" className={className} aria-hidden="true">
      {/* desk */}
      <path d="M50 382 H370" {...stroke} />
      <path d="M82 382 V420" {...stroke} />
      <path d="M338 382 V420" {...stroke} />

      {/* laptop base */}
      <path d="M158 368 L262 368 L274 382 L146 382 Z" {...stroke} />
      {/* laptop screen */}
      <rect x="168" y="298" width="84" height="70" rx="4" {...stroke} />
      <path d="M182 316 h56" stroke="var(--color-accent)" strokeWidth={2.6} strokeLinecap="round" />
      <path d="M182 330 h40" {...stroke} strokeWidth={2} />
      <path d="M182 344 h48" {...stroke} strokeWidth={2} />

      {/* torso / shoulders, sitting behind laptop */}
      <path d="M172 298 Q168 258 196 250 L224 250 Q252 258 248 298 Z" {...stroke} />

      {/* arms resting toward keyboard */}
      <path d="M180 262 Q158 300 160 372" {...stroke} />
      <path d="M240 262 Q262 300 260 372" {...stroke} />

      {/* neck + head */}
      <path d="M198 250 V236 h24 v14" {...stroke} strokeWidth={2} />
      <circle cx="210" cy="205" r="32" {...stroke} />

      {/* bun + hair */}
      <circle cx="210" cy="166" r="11" {...stroke} />
      <path d="M180 200 Q174 178 190 168 Q192 186 180 200 Z" {...stroke} strokeWidth={2} />
      <path d="M240 200 Q246 178 230 168 Q228 186 240 200 Z" {...stroke} strokeWidth={2} />

      {/* face */}
      <path d="M198 208 q3 4 6 0" {...stroke} strokeWidth={2} />
      <path d="M216 208 q3 4 6 0" {...stroke} strokeWidth={2} />
      <path d="M200 220 q10 7 20 0" {...stroke} strokeWidth={2} />

      {/* thought bubble */}
      <circle cx="322" cy="150" r="6" {...stroke} strokeWidth={2} />
      <circle cx="335" cy="132" r="4.5" {...stroke} strokeWidth={2} />
      <path d="M292 100 Q288 74 318 72 Q332 60 352 72 Q376 72 376 96 Q376 116 352 118 L334 118 L322 130 L325 116 Q292 114 292 100 Z" {...stroke} />
      <path d="M310 92 h48" stroke="var(--color-accent)" strokeWidth={3} strokeLinecap="round" />
      <path d="M310 102 h30" stroke="var(--color-accent)" strokeWidth={3} strokeLinecap="round" />

      {/* plant, bottom-left, away from desk legs */}
      <rect x="34" y="392" width="34" height="26" rx="3" {...stroke} strokeWidth={2} />
      <path d="M51 392 Q34 358 51 328 Q68 358 51 392" {...stroke} strokeWidth={2} />
      <path d="M51 392 Q66 366 44 342" stroke="var(--color-accent)" strokeWidth={2} strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function IconRAG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="18" y="14" width="42" height="54" rx="4" {...stroke} />
      <path d="M28 28 h22 M28 38 h22 M28 48 h14" {...stroke} strokeWidth={2} />
      <circle cx="68" cy="62" r="18" {...stroke} />
      <path d="M81 75 L94 88" stroke="var(--color-accent)" strokeWidth={3.2} strokeLinecap="round" />
    </svg>
  );
}

export function IconVision({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="12" y="26" width="76" height="52" rx="6" {...stroke} />
      <path d="M12 40 h76" {...stroke} strokeWidth={2} />
      <circle cx="50" cy="58" r="14" {...stroke} />
      <circle cx="50" cy="58" r="4" fill="var(--color-accent)" stroke="none" />
      <rect x="30" y="10" width="10" height="12" rx="2" {...stroke} />
      <rect x="60" y="10" width="10" height="12" rx="2" {...stroke} />
      <path d="M68 62 h16 v10 h-16 Z" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
    </svg>
  );
}

export function IconHeart({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 82 C20 60 12 40 26 26 C36 16 50 20 50 34 C50 20 64 16 74 26 C88 40 80 60 50 82 Z" {...stroke} />
      <path d="M20 52 h14 l6 -14 l8 24 l6 -16 l4 8 h18" stroke="var(--color-accent)" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconRobot({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="26" y="34" width="48" height="40" rx="10" {...stroke} />
      <circle cx="42" cy="54" r="5" fill="var(--color-accent)" stroke="none" />
      <circle cx="58" cy="54" r="5" fill="var(--color-accent)" stroke="none" />
      <path d="M40 66 h20" {...stroke} strokeWidth={2} />
      <path d="M50 34 V20" {...stroke} strokeWidth={2} />
      <circle cx="50" cy="14" r="6" {...stroke} />
      <path d="M26 48 h-8 M74 48 h8" {...stroke} strokeWidth={2} />
      <path d="M34 74 v10 M66 74 v10" {...stroke} strokeWidth={2} />
    </svg>
  );
}

export function IconChat({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} aria-hidden="true">
      <path d="M10 10 h80 a6 6 0 0 1 6 6 v24 a6 6 0 0 1 -6 6 h-52 l-14 12 v-12 h-14 a6 6 0 0 1 -6 -6 v-24 a6 6 0 0 1 6 -6 Z" {...stroke} />
      <path d="M26 28 h48" stroke="var(--color-accent)" strokeWidth={2.6} strokeLinecap="round" />
      <path d="M26 38 h28" {...stroke} strokeWidth={2} />
    </svg>
  );
}

export function SquiggleUnderline({ className = '', color }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M2 12 Q30 2 55 12 T110 11 T165 10 T198 13"
        fill="none"
        stroke={color ?? 'var(--color-accent)'}
        strokeWidth={3.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CircleAnnotation({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 90" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M110 6 C40 2 8 26 10 46 C12 68 46 84 112 84 C176 84 210 66 210 44 C210 22 176 6 132 8"
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowAnnotation({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" className={className} aria-hidden="true">
      <path d="M10 8 Q60 6 78 44" fill="none" stroke="var(--color-accent)" strokeWidth={2.6} strokeLinecap="round" />
      <path d="M64 34 L80 46 L66 56" fill="none" stroke="var(--color-accent)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="var(--color-accent)" />
    </svg>
  );
}

export function PlantDoodle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} aria-hidden="true">
      <path d="M30 95 h20 l-3 -16 h-14 Z" {...stroke} />
      <path d="M40 79 Q20 55 34 30 Q40 55 40 79" {...stroke} />
      <path d="M40 79 Q60 50 48 22" {...stroke} />
      <path d="M40 60 Q30 45 40 30 Q50 45 40 60" stroke="var(--color-accent)" strokeWidth={2} fill="none" />
    </svg>
  );
}

export function Coffee({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <path d="M18 30 h38 v26 a19 19 0 0 1 -19 19 a19 19 0 0 1 -19 -19 Z" {...stroke} />
      <path d="M56 36 q16 -2 16 12 q0 14 -16 12" {...stroke} />
      <path d="M26 20 q4 -8 0 -14 M38 20 q4 -8 0 -14 M50 20 q4 -8 0 -14" stroke="var(--color-accent)" strokeWidth={2} strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Doodle library — small scattered hand-drawn bits (24×24 default)   */
/* ------------------------------------------------------------------ */

export function StarDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 3l2.5 6.1 6.5.6-5 4.4 1.6 6.4-5.6-3.6-5.6 3.6 1.6-6.4-5-4.4 6.5-.6z" {...s} />
      <path d="M12.9 4.6l2 4.9 5 .5" {...S(color, 1.3)} opacity={0.55} />
    </svg>
  );
}

export function SparkleDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 3c.5 4.4 2.7 6.6 7.5 8.2-4.8 1.6-7 3.8-7.5 8.2-.5-4.4-2.7-6.6-7.5-8.2C9.3 9.6 11.5 7.4 12 3z" {...s} />
      <path d="M18.8 3.2v2.6M17.5 4.5h2.6M5.6 18.2v2.6M4.3 19.5h2.6" {...S(color, 1.6)} />
    </svg>
  );
}

export function PlusSparkle({ className = '', color, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 4v16M4 12h16" {...S(color)} />
      <path d="M6.5 6.5l2 2M17.5 6.5l-2 2M6.5 17.5l2-2M17.5 17.5l-2-2" {...S(color, 1.5)} opacity={0.6} />
    </svg>
  );
}

export function SpiralDoodle({ className = '', color, style }: P) {
  return (
    <svg viewBox="0 0 28 28" className={className} style={style} aria-hidden="true">
      <path d="M14 14a2 2 0 0 1 2 2 4 4 0 0 1-4 4 6.5 6.5 0 0 1-6.5-6.5A9 9 0 0 1 14.5 4.5 12 12 0 0 1 26 13" {...S(color)} />
    </svg>
  );
}

export function SunDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" {...s} />
      <path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.2 5.2l1.8 1.8M17 17l1.8 1.8M18.8 5.2L17 7M7 17l-1.8 1.8" {...S(color, 1.8)} />
    </svg>
  );
}

export function CloudDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M7 17.5a3.8 3.8 0 0 1-.5-7.57A5.2 5.2 0 0 1 16.6 8.9 4.1 4.1 0 0 1 16.9 17.5z" {...s} />
      <path d="M6 20.5h8.5" {...S(color, 1.7)} opacity={0.6} />
    </svg>
  );
}

export function MoonDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M19.8 14.2A8.3 8.3 0 0 1 9.8 4.3 8.4 8.4 0 1 0 19.8 14.2z" {...s} />
      <path d="M17.5 3.5v2M16.5 4.5h2M20.8 9v2M19.8 10h2" {...S(color, 1.5)} />
    </svg>
  );
}

export function PlanetDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="5.2" {...s} />
      <ellipse cx="12" cy="13" rx="9.5" ry="3" transform="rotate(-16 12 13)" {...S(color, 1.8)} />
      <path d="M19 3.8v2.4M17.8 5h2.4" {...S(color, 1.5)} />
    </svg>
  );
}

export function RocketDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 2.6c2.6 2.2 3.8 5.2 3.8 8.2 0 1.7-.4 3.2-1 4.4H9.2c-.6-1.2-1-2.7-1-4.4 0-3 1.2-6 3.8-8.2z" {...s} />
      <circle cx="12" cy="8.8" r="1.7" {...S(color, 1.8)} />
      <path d="M9.3 13.6c-1.8.7-3 2.1-3.5 4.3 1.7-.4 2.9-1.1 3.8-2.3M14.7 13.6c1.8.7 3 2.1 3.5 4.3-1.7-.4-2.9-1.1-3.8-2.3" {...S(color, 1.8)} />
      <path d="M12 17.6c.9.9.8 2.3 0 3.4-.8-1.1-.9-2.5 0-3.4z" {...s} />
    </svg>
  );
}

export function LightbulbDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 3.4c3.3 0 5.7 2.5 5.7 5.4 0 2-1 3.5-2.2 4.7-.6.6-1 1.3-1.1 2H9.6c-.1-.7-.5-1.4-1.1-2C7.3 12.3 6.3 10.8 6.3 8.8c0-2.9 2.4-5.4 5.7-5.4z" {...s} />
      <path d="M9.7 17.9h4.6M10.3 19.9h3.4M11 21.7h2" {...S(color, 1.8)} />
      <path d="M4.1 8.8H2.4M21.6 8.8h-1.7M5.7 3.4l1.1 1.1M18.3 3.4l-1.1 1.1" {...S(color, 1.7)} />
    </svg>
  );
}

export function CatDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 28 28" className={className} style={style} aria-hidden="true">
      <path d="M14 7.5c4.6 0 7.4 3 7.4 6.7 0 3.8-3 6.3-7.4 6.3s-7.4-2.5-7.4-6.3c0-3.7 2.8-6.7 7.4-6.7z" {...s} />
      <path d="M8.6 9.5L7 4.6l4.6 2.2M19.4 9.5L21 4.6l-4.6 2.2" {...s} />
      <circle cx="11" cy="14" r="1" fill={color ?? 'var(--color-ink)'} stroke="none" />
      <circle cx="17" cy="14" r="1" fill={color ?? 'var(--color-ink)'} stroke="none" />
      <path d="M13.2 16.2h1.6L14 17.3z" {...S(color, 1.4)} />
      <path d="M14 17.3c-.5.9-1.6 1-2.2.3M14 17.3c.5.9 1.6 1 2.2.3" {...S(color, 1.4)} />
      <path d="M4.5 13.5l3.4.7M4.8 15.9l3.3-.2M23.5 13.5l-3.4.7M23.2 15.9l-3.3-.2" {...S(color, 1.4)} />
    </svg>
  );
}

export function GlassesDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <circle cx="6.6" cy="13.5" r="3.9" {...s} />
      <circle cx="17.4" cy="13.5" r="3.9" {...s} />
      <path d="M10.5 13c.9-.9 2.1-.9 3 0" {...S(color, 1.8)} />
      <path d="M2.8 12.3L1.4 9.8M21.2 12.3l1.4-2.5" {...S(color, 1.8)} />
    </svg>
  );
}

export function PaperPlaneDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 40 30" className={className} style={style} aria-hidden="true">
      <path d="M4 24L36 5 24 27l-4.5-8.5L4 24z" {...s} />
      <path d="M36 5 19.5 18.5" {...S(color, 1.6)} />
      <path d="M2 28q4-2.5 8-1.5t7 4" {...S(color, 1.6)} strokeDasharray="2 4" />
    </svg>
  );
}

export function HeartDoodle({ className = '', color, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M12 20.3S4 15.4 2.6 10.5C1.7 7.3 3.7 4.3 6.8 4.3c2 0 3.9 1.2 5.2 3.3 1.3-2.1 3.2-3.3 5.2-3.3 3.1 0 5.1 3 4.2 6.2C20 15.4 12 20.3 12 20.3z"
        {...S(color)}
      />
    </svg>
  );
}

export function BoltDoodle({ className = '', color, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M13.2 2.4L5.2 13.6h5.4L9.3 21.6l8.2-11.4h-5.4z" {...S(color)} />
      <path d="M19 4.5v2M18 5.5h2" {...S(color, 1.5)} />
    </svg>
  );
}

export function MusicNoteDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <circle cx="6.8" cy="18" r="2.4" {...s} />
      <circle cx="17.2" cy="15.8" r="2.4" {...s} />
      <path d="M9.2 18V5.6L19.6 3.4v12.4" {...s} />
      <path d="M9.2 5.6L19.6 3.4" {...S(color, 1.6)} />
    </svg>
  );
}

export function EnvelopeDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M3.2 5.4h17.6v13.2H3.2z" {...s} />
      <path d="M3.6 6.2l8.4 6.6 8.4-6.6" {...S(color, 1.8)} />
    </svg>
  );
}

export function PencilDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M4.5 19.5l1-3.9L16.9 4.2a2.2 2.2 0 0 1 3.1 3.1L8.6 18.7l-4.1.8z" {...s} />
      <path d="M16 5.1l3 3" {...S(color, 1.6)} />
    </svg>
  );
}

export function BookDoodle({ className = '', color, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 6.2C10 4.8 7.6 4.2 4.2 4.2v13.6c3.4 0 5.8.6 7.8 2 2-1.4 4.4-2 7.8-2V4.2c-3.4 0-5.8.6-7.8 2z" {...S(color)} />
      <path d="M12 6.2v13.6" {...S(color, 1.7)} />
    </svg>
  );
}

export function CameraDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M3.4 8.2h4.4l2-2.6h4.4l2 2.6h4.4v10.8H3.4z" {...s} />
      <circle cx="12" cy="13.4" r="3.4" {...S(color, 1.8)} />
      <circle cx="12" cy="13.4" r="1.3" {...S(color, 1.4)} />
      <circle cx="17.6" cy="10.6" r="0.7" fill={color ?? 'var(--color-ink)'} stroke="none" />
    </svg>
  );
}

export function GamepadDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M7.2 8.4h9.6a4.7 4.7 0 0 1 4.6 5.6l-.7 3.7a2.6 2.6 0 0 1-4.8.9l-1.3-2H9.4l-1.3 2a2.6 2.6 0 0 1-4.8-.9l-.7-3.7a4.7 4.7 0 0 1 4.6-5.6z" {...s} />
      <path d="M7.6 11v3M6.1 12.5h3" {...S(color, 1.7)} />
      <circle cx="15.8" cy="11.4" r="0.8" fill={color ?? 'var(--color-ink)'} stroke="none" />
      <circle cx="18.2" cy="13.4" r="0.8" fill={color ?? 'var(--color-ink)'} stroke="none" />
    </svg>
  );
}

export function HeadphonesDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M4 14.2v-1.1a8 8 0 0 1 16 0v1.1" {...s} />
      <path d="M6.9 10.8h1v7.2h-1a3 3 0 0 1-3-3v-1.2a3 3 0 0 1 3-3z" {...s} />
      <path d="M17.1 10.8h-1v7.2h1a3 3 0 0 0 3-3v-1.2a3 3 0 0 0-3-3z" {...s} />
    </svg>
  );
}

export function PizzaDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M12 21.4L4.6 6.4C9.2 4 14.8 4 19.4 6.4L12 21.4z" {...s} />
      <path d="M4.2 5.4c5 2.8 10.6 2.8 15.6 0" {...S(color, 1.7)} />
      <circle cx="11" cy="9.5" r="1.15" {...S(color, 1.4)} />
      <circle cx="14.2" cy="11.2" r="1.15" {...S(color, 1.4)} />
      <circle cx="10.3" cy="13.8" r="1.15" {...S(color, 1.4)} />
    </svg>
  );
}

export function DonutDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="7.4" {...s} />
      <circle cx="12" cy="12" r="2.7" {...S(color, 1.7)} />
      <path d="M7.6 8.8l1.4-.7M12.4 6.4l1.4.6M15.6 8.2l1.2 1M8.4 13l1.3.8M13.6 14.6l1.4-.5M10.4 16.4l1.2.7" {...S(color, 1.5)} />
    </svg>
  );
}

export function FlowerDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <path key={a} d="M12 9.6c-1.6-2.2-.9-5 0-5.8.9.8 1.6 3.6 0 5.8z" transform={`rotate(${a} 12 12)`} {...S(color, 1.8)} />
      ))}
      <circle cx="12" cy="12" r="1.9" {...s} />
    </svg>
  );
}

export function GlobeDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="8.4" {...s} />
      <ellipse cx="12" cy="12" rx="3.6" ry="8.4" {...S(color, 1.6)} />
      <path d="M3.6 12h16.8M5.4 8.2c4.2 1.6 8.9 1.6 13.2 0M5.4 15.8c4.2-1.6 8.9-1.6 13.2 0" {...S(color, 1.5)} />
    </svg>
  );
}

export function CodeDoodle({ className = '', color, style }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path d="M8.6 7.2L4.2 12l4.4 4.8M15.4 7.2l4.4 4.8-4.4 4.8M13.2 4.4l-2.4 15.2" {...S(color)} />
    </svg>
  );
}

export function SpeechBubbleDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 28 24" className={className} style={style} aria-hidden="true">
      <path d="M4 5h20a2.4 2.4 0 0 1 2.4 2.4v9.2a2.4 2.4 0 0 1-2.4 2.4H13.6L8 25v-6H4a2.4 2.4 0 0 1-2.4-2.4V7.4A2.4 2.4 0 0 1 4 5z" {...s} />
      <path d="M9 11h10M9 15.4h6" {...S(color, 1.7)} />
    </svg>
  );
}

export function TargetDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" {...s} />
      <circle cx="12" cy="12" r="4.6" {...S(color, 1.7)} />
      <circle cx="12" cy="12" r="1.1" fill={color ?? 'var(--color-ink)'} stroke="none" />
      <path d="M21 3.1l-6 6M21 3.1l-3.1-.2M21 3.1l-.2 3.1" {...S(color, 1.6)} />
    </svg>
  );
}

export function ArrowDownDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 18 38" className={className} style={style} aria-hidden="true">
      <path d="M8.5 3C5 10 13 13 9 20c-2 3.5-2 7-.5 10.5" {...s} />
      <path d="M3.8 26.4L8.6 33.5 13.8 27" {...s} />
    </svg>
  );
}

export function ArrowRightDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 38 18" className={className} style={style} aria-hidden="true">
      <path d="M3 9c7-6 13 6 20 0 3-2.6 7-3.4 11-2" {...s} />
      <path d="M28.6 2.8L35 7.4l-6.2 4.8" {...s} />
    </svg>
  );
}

export function ArrowLeftDoodle({ className = '', color, style }: P) {
  const s = S(color);
  return (
    <svg viewBox="0 0 38 18" className={className} style={style} aria-hidden="true">
      <path d="M35 9c-7-6-13 6-20 0-3-2.6-7-3.4-11-2" {...s} />
      <path d="M9.4 2.8L3 7.4l6.2 4.8" {...s} />
    </svg>
  );
}

export function ZigzagDoodle({ className = '', color, style }: P) {
  return (
    <svg viewBox="0 0 100 12" className={className} style={style} aria-hidden="true" preserveAspectRatio="none">
      <path d="M2 9l8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6 8-6 8 6" {...S(color, 2.2)} />
    </svg>
  );
}
