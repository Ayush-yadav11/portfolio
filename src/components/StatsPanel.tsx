import { motion } from 'framer-motion';
import { TargetDoodle, RocketDoodle, LightbulbDoodle, BoltDoodle } from '../illustrations/Doodles';

const stats = [
  {
    value: '95.5%',
    label: 'Peak model accuracy',
    note: 'MIT-BIH arrhythmia set',
    bg: 'bg-note-yellow',
    rot: 'rotate-[-2deg]',
    hoverRot: 'hover:rotate-0',
    Icon: TargetDoodle,
    iconColor: 'var(--color-accent)',
  },
  {
    value: '5',
    label: 'Featured projects',
    note: 'LLM, vision, healthcare, data, .NET',
    bg: 'bg-note-pink',
    rot: 'rotate-[1.5deg]',
    hoverRot: 'hover:rotate-0',
    Icon: RocketDoodle,
    iconColor: 'var(--color-ink)',
  },
  {
    value: '95%+',
    label: 'Player ID recovery after occlusion',
    note: 'YOLOv11 + DeepSORT',
    bg: 'bg-note-blue',
    rot: 'rotate-[-1.5deg]',
    hoverRot: 'hover:rotate-0',
    Icon: LightbulbDoodle,
    iconColor: 'var(--color-ink)',
  },
  {
    value: '10k+',
    label: 'API requests handled per day',
    note: 'MemberRewardsApi · .NET 8',
    bg: 'bg-note-green',
    rot: 'rotate-[2deg]',
    hoverRot: 'hover:rotate-0',
    Icon: BoltDoodle,
    iconColor: 'var(--color-ink)',
  },
];

export default function StatsPanel() {
  return (
    <section className="relative px-6 pb-14 pt-10 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24, rotate: i % 2 ? 4 : -4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.09 }}
            className={`sticky-note relative p-6 pt-8 transition-transform duration-300 ${s.bg} ${s.rot} ${s.hoverRot}`}
          >
            <span className="tape -top-3 left-1/2 w-20 -translate-x-1/2" aria-hidden="true" />
            <s.Icon className="absolute right-4 top-4 h-7 w-7 opacity-80" color={s.iconColor} />
            <p className="font-display text-5xl font-bold leading-none text-ink">{s.value}</p>
            <p className="mt-3 font-body text-lg leading-snug text-ink/85">{s.label}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink/45">{s.note}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-center font-display text-2xl text-ink/45">
        * numbers don&apos;t lie — I doodled them myself
      </p>
    </section>
  );
}
