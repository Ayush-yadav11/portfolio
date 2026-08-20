import { motion } from 'framer-motion';
import type { FC } from 'react';
import type { P } from '../illustrations/Doodles';
import {
  CodeDoodle,
  LightbulbDoodle,
  BoltDoodle,
  IconRobot,
  SquiggleUnderline,
  SparkleDoodle,
} from '../illustrations/Doodles';
import DoodleField from './DoodleField';

const RobotWrap: FC<P> = ({ className }) => <IconRobot className={className} />;

const groups: {
  title: string;
  Icon: FC<P>;
  iconColor: string;
  rot: string;
  items: string[];
}[] = [
  {
    title: 'Languages & Core',
    Icon: CodeDoodle,
    iconColor: 'var(--color-marker-blue)',
    rot: 'rotate-[-0.8deg]',
    items: ['Python', 'SQL', 'C#', '.NET 8', 'FastAPI'],
  },
  {
    title: 'ML / DL',
    Icon: LightbulbDoodle,
    iconColor: 'var(--color-marker-yellow)',
    rot: 'rotate-[0.7deg]',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'OpenCV', 'YOLOv11', 'DeepSORT', 'SHAP', 'Optuna', 'MLflow'],
  },
  {
    title: 'LLM & Agents',
    Icon: RobotWrap,
    iconColor: 'var(--color-accent)',
    rot: 'rotate-[-0.6deg]',
    items: ['RAG', 'Vector Search', 'Prompt Engineering', 'LLM Orchestration', 'LangChain', 'CrewAI', 'Multimodal RAG', 'Embeddings'],
  },
  {
    title: 'Ops & Data',
    Icon: BoltDoodle,
    iconColor: 'var(--color-marker-green)',
    rot: 'rotate-[0.9deg]',
    items: ['Pandas', 'NumPy', 'Power BI', 'Microsoft Fabric', 'BigQuery', 'Streamlit', 'Docker', 'GCP', 'Airflow', 'Prefect', 'n8n', 'Git'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10">
      <DoodleField count={9} pool="tech" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-2 font-display text-2xl font-semibold text-accent">
              the toolbox
              <SparkleDoodle className="h-5 w-5" color="var(--color-accent)" />
            </p>
            <h2 className="mt-2 font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl">
              Sketchbook of tools
            </h2>
            <SquiggleUnderline className="mt-1 h-3.5 w-64" />
          </div>
          <p className="max-w-sm font-body text-xl leading-relaxed text-ink/65">
            What&apos;s usually open on my machine — from wrangling data to shipping
            the model that uses it.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`sketch-c bg-[#fffdf4] p-6 transition-all duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[5px_5px_0_0_var(--color-ink)] ${g.rot}`}
            >
              <div className="flex items-center gap-2.5">
                <g.Icon className="h-8 w-8 shrink-0" color={g.iconColor} />
                <h3 className="font-display text-2xl font-bold leading-tight text-ink">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="sketch-chip bg-paper px-3 py-1 font-body text-lg leading-tight text-ink transition-colors hover:bg-note-yellow"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 -rotate-1 font-display text-2xl text-ink/50">
          * every tool here is battle-tested on real deadlines
        </p>
      </div>
    </section>
  );
}
