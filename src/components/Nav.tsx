import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { StarDoodle, SquiggleUnderline } from '../illustrations/Doodles';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="squiggle-b sticky top-0 z-50 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a href="#top" className="group flex items-center gap-2">
          <StarDoodle className="h-7 w-7 -rotate-12 transition-transform duration-300 group-hover:rotate-[200deg]" color="var(--color-accent)" />
          <span className="font-display text-3xl font-bold leading-none text-ink">
            Ayush Yadav
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-display text-2xl font-semibold text-ink transition-colors hover:text-accent"
            >
              {l.label}
              <SquiggleUnderline className="absolute -bottom-1.5 left-0 h-2 w-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </a>
          ))}
          <a
            href="#contact"
            className="sketch-c wiggle-hover bg-accent px-5 py-2 font-display text-xl font-semibold text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s talk!
          </a>
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-paper md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-5 pt-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-1.5 font-display text-2xl font-semibold text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="sketch-c mt-3 inline-block w-fit bg-accent px-5 py-2 font-display text-xl font-semibold text-ink"
              >
                Let&apos;s talk!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
