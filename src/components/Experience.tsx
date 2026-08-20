import { motion } from 'framer-motion';
import {
  ArrowAnnotation,
  Coffee,
  SquiggleUnderline,
  StarDoodle,
  ArrowRightDoodle,
} from '../illustrations/Doodles';
import DoodleField from './DoodleField';

const roles = [
  {
    date: 'May 2026 — Present',
    role: 'Freelancer · AI/ML Engineer',
    org: 'Independent',
    note: 'Building practical AI/ML solutions for clients, from data analysis and automation to LLM, RAG, and computer vision systems.',
  },
  {
    date: 'Jan 2026 — Apr 2026',
    role: 'AI Intern · CrewAI / LLM',
    org: 'CrowdWisdomTrading',
    note: 'Designed multi-agent AI pipelines that reduced manual research time by 40%. Engineered RAG and LLM orchestration for automated research and signal validation across 3+ use cases.',
  },
  {
    date: 'Jul 2025 — Dec 2025',
    role: 'Jr. Technical Consultant Intern',
    org: 'HOSHO DIGITAL',
    note: 'Engineered Power Apps and .NET data pipelines, cutting manual reporting by 30% and process time by 25%. Built Power BI dashboards for 2+ business units and delivered solutions for 3 client accounts.',
  },
  {
    date: '2022 — 2026',
    role: 'B.Tech, Electronics & Telecommunication',
    org: 'Madhav Institute of Technology & Science, Gwalior',
    note: 'B.Tech in Electronics & Telecommunication. Where the ML rabbit hole started.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:px-10">
      <DoodleField count={7} pool="all" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="font-display text-2xl font-semibold text-accent">the timeline</p>
        <h2 className="mt-2 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
          Field notes so far
        </h2>
        <SquiggleUnderline className="mt-1 h-3.5 w-56" />

        {/* margin scribble */}
        <div className="absolute -right-2 top-44 hidden rotate-6 items-center gap-1 xl:flex">
          <span className="font-display text-2xl text-ink/40">the plot thickens</span>
          <ArrowRightDoodle className="h-4 w-9 opacity-40" />
        </div>

        <div className="relative mt-14 pl-10 sm:pl-14">
          {/* hand-drawn squiggle spine */}
          <svg
            viewBox="0 0 24 240"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute left-0 top-0 h-full w-6 overflow-visible"
          >
            <path
              d="M12 0 Q20 12 12 24 T12 48 T12 72 T12 96 T12 120 T12 144 T12 168 T12 192 T12 216 T12 240"
              fill="none"
              stroke="var(--color-ink)"
              strokeOpacity={0.4}
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="5 7"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-14 last:pb-0"
            >
              <StarDoodle
                className="absolute -left-[31px] top-0 h-9 w-9 bg-paper sm:-left-[47px]"
                color="var(--color-accent)"
              />
              <p className="relative inline-block font-display text-3xl font-semibold text-accent">
                {r.date}
                <SquiggleUnderline className="absolute -bottom-1 left-0 h-2 w-full" />
              </p>
              <h3 className="mt-2.5 font-display text-3xl font-bold leading-tight text-ink">{r.role}</h3>
              <p className="mt-1 font-body text-lg text-ink/70">{r.org}</p>
              <p className="mt-2 max-w-md font-body text-lg leading-relaxed text-ink/60">{r.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 pl-10 sm:pl-14">
          <ArrowAnnotation className="h-10 w-10 -rotate-90 opacity-70" />
          <Coffee className="h-11 w-11" />
          <span className="font-display text-2xl text-ink/60">still brewing the next one…</span>
        </div>
      </div>
    </section>
  );
}
