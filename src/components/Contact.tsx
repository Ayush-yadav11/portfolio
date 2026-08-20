import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import {
  Sparkle,
  SquiggleUnderline,
  EnvelopeDoodle,
  ArrowRightDoodle,
  HeartDoodle,
} from '../illustrations/Doodles';
import DoodleField from './DoodleField';

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.17.69-3.84-1.53-3.84-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.53-.29-5.2-1.27-5.2-5.65 0-1.25.44-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.39-2.68 5.36-5.22 5.64.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="1" y="8" width="4.2" height="14" />
      <circle cx="3.1" cy="3" r="2.6" />
      <path d="M9 8h4.2v2.1h.06c.58-1.04 2-2.14 4.12-2.14 4.4 0 5.22 2.77 5.22 6.38V22h-4.4v-6.86c0-1.64-.03-3.74-2.34-3.74-2.35 0-2.71 1.77-2.71 3.62V22H9V8Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-6 py-24 text-paper md:px-10">
      {/* chalk doodles on the dark board */}
      <DoodleField count={12} pool="sky" onlyColor="#FFF9EF" className="opacity-60" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <EnvelopeDoodle
            className="floaty mx-auto h-16 w-16"
            color="#FFF9EF"
            style={{ '--rot': '-6deg', '--dur': '5s' } as CSSProperties}
          />

          <p className="mt-6 font-display text-2xl font-semibold text-[#FF9166]">
            psst… get in touch
          </p>
          <h2 className="relative mt-3 inline-block font-display text-6xl font-bold leading-[0.95] sm:text-7xl">
            Let&apos;s build something
            <br />
            that{' '}
            <span className="relative inline-block">
              works.
              <SquiggleUnderline color="#FF9166" className="absolute -bottom-2 left-0 h-3.5 w-full" />
            </span>
            <Sparkle className="absolute -right-9 -top-3 h-7 w-7" />
          </h2>
          <p className="mx-auto mt-7 max-w-md font-body text-xl leading-relaxed text-paper/70">
            Open to AI/ML roles, freelance builds, and interesting problems. Usually
            replies within a day.
          </p>

          <a
            href="mailto:aayush123yadav@gmail.com"
            className="sketch-a group mt-10 inline-flex items-center gap-3 bg-accent px-8 py-4 font-display text-3xl font-semibold text-ink shadow-[4px_4px_0_0_rgba(255,249,239,0.85)] transition-all hover:-translate-y-1 hover:rotate-[-1deg]"
          >
            aayush123yadav@gmail.com
            <ArrowRightDoodle className="h-6 w-12 transition-transform group-hover:translate-x-1.5" />
          </a>

          <a
            href="tel:+918305545893"
            className="mt-4 block font-body text-lg text-paper/70 underline decoration-dashed underline-offset-4 transition-colors hover:text-paper"
          >
            +91 83055 45893
          </a>

          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href="https://github.com/Ayush-yadav11"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="sketch-c flex h-12 w-12 items-center justify-center text-paper/60 transition-all hover:rotate-[-4deg] hover:text-paper"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ayushyadav2611/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="sketch-c flex h-12 w-12 items-center justify-center text-paper/60 transition-all hover:rotate-[4deg] hover:text-paper"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-dashed border-paper/25 pt-8 sm:flex-row">
        <p className="font-body text-lg text-paper/50">Ayush Yadav — AI/ML Engineer</p>
        <p className="flex items-center gap-2 font-body text-lg text-paper/50">
          built with lots of coffee
          <HeartDoodle className="h-4 w-4" color="#FF9166" />
          and even more doodles — Indore, IN
        </p>
      </div>
    </section>
  );
}
