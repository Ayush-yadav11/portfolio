// A slow-scrolling strip of doodles between sections — like a decorated page border.

import type { FC } from 'react';
import type { P } from '../illustrations/Doodles';
import {
  StarDoodle,
  SparkleDoodle,
  SunDoodle,
  CloudDoodle,
  MoonDoodle,
  PlanetDoodle,
  RocketDoodle,
  LightbulbDoodle,
  CatDoodle,
  PaperPlaneDoodle,
  HeartDoodle,
  BoltDoodle,
  MusicNoteDoodle,
  EnvelopeDoodle,
  PencilDoodle,
  BookDoodle,
  CameraDoodle,
  HeadphonesDoodle,
  PizzaDoodle,
  DonutDoodle,
  FlowerDoodle,
  GlobeDoodle,
  CodeDoodle,
  ZigzagDoodle,
} from '../illustrations/Doodles';

type Item = { Comp: FC<P>; size: string; color?: string; rot: number };

const strip: Item[] = [
  { Comp: RocketDoodle, size: 'h-7 w-7', color: 'var(--color-accent)', rot: -12 },
  { Comp: StarDoodle, size: 'h-5 w-5', color: 'var(--color-marker-yellow)', rot: 8 },
  { Comp: CatDoodle, size: 'h-8 w-8', rot: 4 },
  { Comp: MusicNoteDoodle, size: 'h-6 w-6', color: 'var(--color-marker-purple)', rot: -6 },
  { Comp: PlanetDoodle, size: 'h-7 w-7', color: 'var(--color-marker-blue)', rot: -8 },
  { Comp: HeartDoodle, size: 'h-5 w-5', color: 'var(--color-marker-pink)', rot: 10 },
  { Comp: CoffeeStrip, size: 'h-6 w-6', color: 'var(--color-marker-green)', rot: -5 },
  { Comp: PaperPlaneDoodle, size: 'h-7 w-7', rot: 6 },
  { Comp: BoltDoodle, size: 'h-6 w-6', color: 'var(--color-marker-yellow)', rot: -10 },
  { Comp: DonutDoodle, size: 'h-6 w-6', color: 'var(--color-marker-pink)', rot: 5 },
  { Comp: SunDoodle, size: 'h-6 w-6', color: 'var(--color-marker-yellow)', rot: -6 },
  { Comp: CodeDoodle, size: 'h-6 w-6', color: 'var(--color-marker-blue)', rot: 8 },
  { Comp: FlowerDoodle, size: 'h-6 w-6', color: 'var(--color-marker-green)', rot: -4 },
  { Comp: SparkleDoodle, size: 'h-5 w-5', color: 'var(--color-accent)', rot: 0 },
  { Comp: CameraDoodle, size: 'h-6 w-6', rot: -8 },
  { Comp: PizzaDoodle, size: 'h-6 w-6', color: 'var(--color-accent)', rot: 7 },
  { Comp: MoonDoodle, size: 'h-6 w-6', color: 'var(--color-marker-purple)', rot: -7 },
  { Comp: BookDoodle, size: 'h-6 w-6', color: 'var(--color-marker-blue)', rot: 5 },
  { Comp: HeadphonesDoodle, size: 'h-6 w-6', rot: -5 },
  { Comp: EnvelopeDoodle, size: 'h-6 w-6', color: 'var(--color-marker-green)', rot: 9 },
  { Comp: PencilDoodle, size: 'h-6 w-6', rot: -14 },
  { Comp: GlobeDoodle, size: 'h-6 w-6', color: 'var(--color-marker-blue)', rot: 6 },
  { Comp: CloudDoodle, size: 'h-6 w-6', rot: -4 },
  { Comp: LightbulbDoodle, size: 'h-6 w-6', color: 'var(--color-marker-yellow)', rot: 8 },
];

function CoffeeStrip({ className, color, style }: P) {
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

export default function DoodleDivider({ reverse = false, className = '' }: { reverse?: boolean; className?: string }) {
  const Group = () => (
    <>
      {strip.map(({ Comp, size, color, rot }, i) => (
        <Comp key={i} className={size} color={color} style={{ transform: `rotate(${rot}deg)` }} />
      ))}
      <ZigzagDoodle className="h-3 w-24 shrink-0 opacity-60" />
    </>
  );

  return (
    <div
      aria-hidden="true"
      className={`marquee ${reverse ? 'marquee-reverse' : ''} border-y-2 border-dashed border-ink/30 py-4 ${className}`}
    >
      <div className="marquee-track">
        <Group />
        <Group />
      </div>
    </div>
  );
}
