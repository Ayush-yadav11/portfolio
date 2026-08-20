import { motion } from 'framer-motion';
import { BookDoodle, SparkleDoodle, StarDoodle, SquiggleUnderline } from '../illustrations/Doodles';

const certifications = [
  'Google Data Analytics Specialization — Coursera',
  'Google Cloud: Prompt Design in Vertex AI',
  'Multimodality and Multimodal RAG — Google Cloud',
  'Gemini and Imagen — Google Cloud',
  'NPTEL Elite — Fuzzy Sets, Logic and Systems & Applications — IIT Kanpur, 2025',
];

const achievements = [
  'Finalist, Hacksagon 2025 — ABV IIITM Gwalior',
  'Google Developer Group Solution Challenge 2025 — AI healthcare access application',
  'Colosseum Breakout Hackathon — powered by the Solana Foundation',
];

export default function Credentials() {
  return (
    <section className="relative px-6 py-24 md:px-10">
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="flex items-center gap-2 font-display text-2xl font-semibold text-accent">
          receipts from the journey
          <SparkleDoodle className="h-5 w-5" color="var(--color-accent)" />
        </p>
        <h2 className="mt-2 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
          Beyond the build
        </h2>
        <SquiggleUnderline className="mt-1 h-3.5 w-56" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="sketch-b rotate-[-0.5deg] bg-note-yellow p-7 sm:p-9"
          >
            <div className="flex items-center gap-3">
              <BookDoodle className="h-9 w-9" color="var(--color-accent)" />
              <h3 className="font-display text-3xl font-bold text-ink">Certifications</h3>
            </div>
            <ul className="mt-6 space-y-3 font-body text-lg leading-relaxed text-ink/75">
              {certifications.map((item) => (
                <li key={item} className="flex gap-3">
                  <StarDoodle className="mt-1 h-4 w-4 shrink-0" color="var(--color-accent)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
            className="sketch-b rotate-[0.6deg] bg-note-blue p-7 sm:p-9"
          >
            <h3 className="font-display text-3xl font-bold text-ink">Achievements &amp; hackathons</h3>
            <ul className="mt-6 space-y-4 font-body text-lg leading-relaxed text-ink/75">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3">
                  <SparkleDoodle className="mt-1 h-5 w-5 shrink-0" color="var(--color-marker-blue)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-dashed border-ink/25 pt-5 font-display text-2xl text-ink/60">
              B.Tech, Electronics &amp; Telecommunication
              <br />
              MITS Gwalior · 2022–2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
