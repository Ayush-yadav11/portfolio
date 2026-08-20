import { motion } from 'framer-motion';
import {
  IconRAG,
  IconVision,
  IconHeart,
  ArrowRightDoodle,
  SquiggleUnderline,
  StarDoodle,
} from '../illustrations/Doodles';
import DoodleField from './DoodleField';

const projects = [
  {
    icon: IconRAG,
    tag: 'LLM · Retrieval · Jan–Feb 2025',
    title: 'Query System (RAG-based Q&A)',
    description:
      'FastAPI semantic Q&A over uploaded documents, supporting 1k+ queries/day with low latency. A modular four-stage pipeline keeps embedding, semantic search, LLM inference, and synthesis independently upgradeable.',
    stack: ['FastAPI', 'LLMs', 'Embeddings'],
    repo: 'https://github.com/Ayush-yadav11/Interactive-Q-A-Chatbot-with-LangChain',
    rot: 'rotate-[-0.7deg]',
  },
  {
    icon: IconVision,
    tag: 'Computer Vision · Feb–Apr 2025',
    title: 'Player Re-Identification',
    description:
      'Real-time multi-object tracking that keeps identity on players across a broadcast feed. YOLOv11 detection and DeepSORT re-identification achieved 95%+ ID recovery after occlusion, reducing mismatches by 30%.',
    stack: ['YOLOv11', 'DeepSORT', 'OpenCV'],
    repo: 'https://github.com/Ayush-yadav11/Player-Re-Identification-System',
    rot: 'rotate-[0.6deg]',
  },
  {
    icon: IconHeart,
    tag: 'Healthcare ML · Jun–Aug 2024',
    title: 'Arrhythmia Beat Classification',
    description:
      'A classifier trained on 100k+ MIT-BIH ECG samples to flag irregular heartbeats, reaching 95.5% accuracy validated with precision, recall, and F1-score. Wavelet transforms produced noise-robust features.',
    stack: ['PyTorch', 'Signal Processing', 'MIT-BIH'],
    repo: 'https://github.com/Ayush-yadav11/Arrhythmia-Beat-Classification',
    rot: 'rotate-[-0.5deg]',
  },
  {
    icon: IconHeart,
    tag: 'Data Science · Jun–Jul 2024',
    title: 'Retail Sales Analysis',
    description:
      'Explored 50k+ retail transactions with Python and Jupyter to identify customer segments, sales trends, and seasonality, improving demand forecasting accuracy by 20%.',
    stack: ['Python', 'Pandas', 'Jupyter'],
    repo: 'https://github.com/Ayush-yadav11/Retail_Sales-Analysis',
    rot: 'rotate-[0.4deg]',
  },
  {
    icon: IconRAG,
    tag: '.NET · Backend · Mar–May 2025',
    title: 'MemberRewardsApi',
    description:
      'RESTful .NET 8 API for memberships, reward points, and coupon redemptions, handling 10k+ requests/day with secure CRUD operations, JWT authentication, and integration-ready endpoints.',
    stack: ['.NET 8', 'C#', 'JWT'],
    repo: 'https://github.com/Ayush-yadav11/MemberRewardsApi',
    rot: 'rotate-[-0.3deg]',
  },
];

export default function Projects() {
  return (
    <section id="work" className="grain-bg relative border-y-2 border-dashed border-ink/25 bg-paper-alt px-6 py-24 md:px-10">
      <DoodleField count={8} pool="tech" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="flex items-center gap-2 font-display text-2xl font-semibold text-accent">
          selected work
          <StarDoodle className="h-5 w-5" color="var(--color-accent)" />
        </p>
        <h2 className="mt-2 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
          Projects worth a second look
        </h2>
        <SquiggleUnderline className="mt-1 h-3.5 w-72" />

        <div className="mt-14 flex flex-col gap-9">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`sketch-b group relative grid gap-6 bg-[#fffdf4] p-7 pt-10 transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[7px_7px_0_0_var(--color-ink)] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-9 sm:pt-11 ${p.rot}`}
            >
              <span className="tape -top-3 left-10 w-24 -rotate-3" aria-hidden="true" />

              <div className="sketch-c flex h-24 w-24 shrink-0 items-center justify-center bg-accent-soft transition-transform duration-300 group-hover:-rotate-3">
                <p.icon className="h-14 w-14" />
              </div>

              <div>
                <span className="inline-block -rotate-1 font-display text-2xl font-semibold text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-0.5 font-display text-4xl font-bold leading-tight text-ink">{p.title}</h3>
                <p className="mt-2 max-w-xl font-body text-lg leading-relaxed text-ink/70">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="sketch-chip bg-paper px-3 py-0.5 font-mono text-xs text-ink">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title} repository on GitHub`}
                className="sketch-c inline-flex h-12 w-16 shrink-0 items-center justify-center text-ink transition-all hover:bg-accent hover:text-ink sm:h-14 sm:w-20"
              >
                <ArrowRightDoodle className="h-8 w-14 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </motion.article>
          ))}
        </div>

        <a
          href="https://github.com/Ayush-yadav11"
          target="_blank"
          rel="noreferrer"
          className="sketch-c group mx-auto mt-12 inline-flex items-center gap-3 bg-ink px-7 py-3.5 font-display text-2xl font-semibold text-paper shadow-[4px_4px_0_0_var(--color-marker-yellow)] transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
        >
          More projects on GitHub
          <ArrowRightDoodle className="h-5 w-10 transition-transform group-hover:translate-x-1" color="var(--color-paper)" />
        </a>
      </div>
    </section>
  );
}
