import Nav from './components/Nav';
import Hero from './components/Hero';
import DoodleDivider from './components/DoodleDivider';
import StatsPanel from './components/StatsPanel';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import PenTrail from './components/PenTrail';
import ScrollPencil from './components/ScrollPencil';
import { ArrowDownDoodle, PencilDoodle, Coffee, HeartDoodle } from './illustrations/Doodles';

export default function App() {
  return (
    <div className="grain-bg min-h-screen bg-paper text-ink">
      <ScrollPencil />
      <Nav />
      <Hero />
      <DoodleDivider />
      <main>
        <StatsPanel />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <DoodleDivider reverse />

        <section id="resume" className="px-6 pb-28 md:px-10">
          <div className="sketch-b relative mx-auto max-w-7xl rotate-[-0.5deg] bg-note-yellow p-8 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-12">
            <span className="tape -top-3 left-14 w-24 -rotate-6" aria-hidden="true" />
            <span className="tape -bottom-3 right-14 w-24 rotate-3" aria-hidden="true" />

            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-start gap-5">
                <PencilDoodle className="mt-2 hidden h-10 w-10 shrink-0 sm:block" />
                <div>
                  <h2 className="font-display text-5xl font-bold leading-none text-ink">
                    Want the full breakdown?
                  </h2>
                  <p className="mt-3 max-w-lg font-body text-xl text-ink/70">
                    Download the complete rundown of roles, coursework, and project
                    details.
                  </p>
                </div>
              </div>
              <a
                href="/resume.pdf"
                download
                className="sketch-c group inline-flex items-center gap-3 bg-ink px-7 py-3.5 font-display text-2xl font-semibold text-paper transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-ink"
              >
                Download Resume
                <ArrowDownDoodle className="h-6 w-5 transition-transform group-hover:translate-y-1" color="var(--color-paper)" />
              </a>
            </div>

            <div className="pointer-events-none absolute bottom-3 right-4 flex items-center gap-2 opacity-50">
              <Coffee className="h-9 w-9" />
              <HeartDoodle className="h-5 w-5" color="var(--color-accent)" />
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <PenTrail />
    </div>
  );
}
