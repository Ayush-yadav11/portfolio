import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import {
  HeroFigure,
  CircleAnnotation,
  ArrowAnnotation,
  ArrowDownDoodle,
  ArrowRightDoodle,
  StarDoodle,
  SparkleDoodle,
  MusicNoteDoodle,
  HeartDoodle,
  PencilDoodle,
  PaperPlaneDoodle,
} from '../illustrations/Doodles';
import DoodleField from './DoodleField';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-14 md:px-10 md:pt-20">
      <DoodleField count={14} pool="sky" />

      {/* paper plane flight path */}
      <svg
        viewBox="0 0 380 140"
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[10%] hidden w-[380px] lg:block"
      >
        <path
          d="M8 120 C 90 10, 230 150, 340 55"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeDasharray="1 11"
          className="dash-march"
          opacity={0.45}
        />
      </svg>
      <PaperPlaneDoodle
        className="floaty absolute right-[5%] top-[13%] hidden w-14 -rotate-12 lg:block"
        style={{ '--rot': '-12deg', '--dur': '6s' } as CSSProperties}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.5 }}
            className="sticky-note relative mb-8 inline-block bg-note-yellow px-5 py-1.5 font-display text-2xl font-semibold text-ink"
          >
            <span className="tape -left-4 -top-3 w-16 -rotate-12" aria-hidden="true" />
            <StarDoodle className="mr-1.5 inline-block h-5 w-5 align-[-3px]" color="var(--color-accent)" />
            AI/ML engineer &amp; data scientist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-[3.4rem] font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-[5.2rem]"
          >
            Systems that <span className="hl hl-yellow">see</span>,{' '}
            <span className="hl hl-blue">read</span> &amp;{' '}
            <span className="relative inline-block">
              <span className="hl hl-pink">decide.</span>
              <CircleAnnotation className="absolute -left-4 -top-2 h-[calc(100%+1rem)] w-[calc(100%+2rem)] opacity-80" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-lg font-body text-xl leading-relaxed text-ink/70"
          >
            I design and ship practical AI systems, from multi-agent LLM workflows and
            RAG pipelines to real-time computer vision and production data products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <a
              href="#work"
              className="sketch-a group inline-flex items-center gap-2.5 bg-ink px-7 py-3.5 font-display text-2xl font-semibold text-paper shadow-[4px_4px_0_0_var(--color-marker-yellow)] transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
            >
              See my work
              <ArrowRightDoodle className="h-5 w-10 transition-transform group-hover:translate-x-1" color="var(--color-paper)" />
            </a>
            <a
              href="#contact"
              className="sketch-b wiggle-hover inline-flex items-center gap-2.5 bg-transparent px-7 py-3.5 font-display text-2xl font-semibold text-ink transition-colors hover:bg-note-yellow"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-11 flex flex-wrap items-center gap-3 font-body text-lg text-ink/60"
          >
            <PencilDoodle className="h-5 w-5" />
            <span>MITS Gwalior &apos;22–&apos;26</span>
            <StarDoodle className="h-4 w-4" color="var(--color-marker-yellow)" />
            <span>Indore, India</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 1.5 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="sketch-a grid-paper relative bg-[#fffdf4] p-6 pt-9">
            <span className="tape -top-3 left-1/2 w-24 -translate-x-1/2 -rotate-2" aria-hidden="true" />
            <HeroFigure className="self-draw mx-auto w-[82%]" />

            <div className="mt-2 flex items-center justify-center gap-2">
              <ArrowAnnotation className="h-9 w-9 -rotate-[140deg]" />
              <span className="font-display text-2xl text-ink/60">fig. 01 — me &amp; my models</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="sticky-note absolute -left-6 -top-6 rotate-[-5deg] bg-note-pink px-4 py-2 font-display text-2xl font-semibold text-ink"
          >
            Hello
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            className="sticky-note absolute -bottom-5 -right-4 rotate-[3deg] bg-note-blue px-4 py-2 font-display text-2xl font-semibold text-ink"
          >
            My Name is Ayush
          </motion.div>

          <StarDoodle
            className="floaty absolute -right-7 top-10 h-9 w-9"
            color="var(--color-marker-yellow)"
            style={{ '--rot': '15deg', '--dur': '4.5s' } as CSSProperties}
          />
          <MusicNoteDoodle
            className="floaty absolute -left-8 bottom-16 h-8 w-8"
            color="var(--color-marker-purple)"
            style={{ '--rot': '-10deg', '--dur': '5.5s' } as CSSProperties}
          />
          <HeartDoodle
            className="floaty absolute -top-8 left-16 h-6 w-6"
            color="var(--color-marker-pink)"
            style={{ '--rot': '8deg', '--dur': '5s' } as CSSProperties}
          />
          <SparkleDoodle
            className="floaty absolute -bottom-7 left-6 h-6 w-6"
            color="var(--color-marker-blue)"
            style={{ '--rot': '0deg', '--dur': '4s' } as CSSProperties}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="relative z-10 mx-auto mt-16 hidden w-fit flex-col items-center gap-1 md:flex"
      >
        <span className="font-display text-2xl text-ink/55">scroll for the good stuff</span>
        <ArrowDownDoodle className="bounce-soft h-9 w-9" color="var(--color-accent)" />
      </motion.div>
    </section>
  );
}
