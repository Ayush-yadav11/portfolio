// Scatter of floating background doodles — the "doodled all over the margins" layer.
// Place inside any `relative` section; it stays behind content and never intercepts clicks.

import { useMemo } from 'react';
import type { CSSProperties, FC } from 'react';
import type { P } from '../illustrations/Doodles';
import {
  StarDoodle,
  SparkleDoodle,
  PlusSparkle,
  SpiralDoodle,
  SunDoodle,
  CloudDoodle,
  MoonDoodle,
  PlanetDoodle,
  RocketDoodle,
  LightbulbDoodle,
  CatDoodle,
  GlassesDoodle,
  PaperPlaneDoodle,
  HeartDoodle,
  BoltDoodle,
  MusicNoteDoodle,
  EnvelopeDoodle,
  PencilDoodle,
  BookDoodle,
  CameraDoodle,
  GamepadDoodle,
  HeadphonesDoodle,
  PizzaDoodle,
  DonutDoodle,
  FlowerDoodle,
  GlobeDoodle,
  CodeDoodle,
  SpeechBubbleDoodle,
} from '../illustrations/Doodles';

type DoodleComp = FC<P>;

const skyPool: DoodleComp[] = [
  SunDoodle, CloudDoodle, MoonDoodle, PlanetDoodle, StarDoodle,
  SparkleDoodle, PlusSparkle, PaperPlaneDoodle, HeartDoodle, MusicNoteDoodle,
];

const techPool: DoodleComp[] = [
  CodeDoodle, LightbulbDoodle, RocketDoodle, BookDoodle, CameraDoodle,
  GamepadDoodle, HeadphonesDoodle, GlobeDoodle, PencilDoodle, EnvelopeDoodle,
  SpeechBubbleDoodle, CatDoodle, GlassesDoodle, BoltDoodle,
];

const snackPool: DoodleComp[] = [
  PizzaDoodle, DonutDoodle, Coffee0, FlowerDoodle, SpiralDoodle, CatDoodle,
];

function Coffee0({ className, color, style }: P) {
  // local alias to avoid circular-ish import churn; same drawing as Coffee
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      <path
        d="M5 8h11v6a4.5 4.5 0 0 1-9 0V8zM16 9.5h1.5a2 2 0 0 1 0 4H16M8.5 5.5c-.8-.8.8-1.7 0-2.5M12.5 5.5c-.8-.8.8-1.7 0-2.5"
        fill="none"
        stroke={color ?? 'var(--color-ink)'}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const mixedPool: DoodleComp[] = [...skyPool, ...techPool, ...snackPool];

const pools: Record<string, DoodleComp[]> = {
  sky: skyPool,
  tech: techPool,
  snack: snackPool,
  all: mixedPool,
};

const inkColors = [
  'var(--color-ink)',
  'var(--color-ink)',
  'var(--color-ink)',
  'var(--color-accent)',
  'var(--color-marker-yellow)',
  'var(--color-marker-blue)',
  'var(--color-marker-green)',
  'var(--color-marker-pink)',
  'var(--color-marker-purple)',
];

type FieldProps = {
  count?: number;
  pool?: keyof typeof pools | string;
  className?: string;
  /** restrict colors to a single value, e.g. chalk on dark sections */
  onlyColor?: string;
  /** opacity range multiplier */
  faint?: boolean;
};

export default function DoodleField({ count = 10, pool = 'all', className = '', onlyColor, faint = false }: FieldProps) {
  const items = useMemo(() => {
    const list = pools[pool] ?? mixedPool;
    return Array.from({ length: count }, () => {
      const Comp = list[Math.floor(Math.random() * list.length)];
      const color = onlyColor ?? inkColors[Math.floor(Math.random() * inkColors.length)];
      const isColorful = color !== 'var(--color-ink)';
      return {
        Comp,
        style: {
          left: `${Math.random() * 96}%`,
          top: `${Math.random() * 94}%`,
          width: `${18 + Math.random() * 30}px`,
          '--rot': `${Math.floor(Math.random() * 360)}deg`,
          '--dur': `${4 + Math.random() * 4}s`,
          '--delay': `${-Math.random() * 4}s`,
          opacity: faint
            ? 0.08 + Math.random() * 0.12
            : isColorful
              ? 0.3 + Math.random() * 0.25
              : 0.12 + Math.random() * 0.2,
        } as CSSProperties,
      };
    });
  }, [count, pool, onlyColor, faint]);

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}>
      {items.map(({ Comp, style }, i) => (
        <Comp key={i} className="floaty absolute" style={style} />
      ))}
    </div>
  );
}
