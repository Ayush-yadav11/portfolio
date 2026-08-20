// A pencil that draws a dashed crayon line across the top of the page as you scroll.

import { useEffect, useRef } from 'react';
import { PencilDoodle } from '../illustrations/Doodles';

export default function ScrollPencil() {
  const lineRef = useRef<HTMLDivElement>(null);
  const pencilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(doc.scrollTop / max, 1) : 0;
      const pct = `${p * 100}%`;
      if (lineRef.current) lineRef.current.style.width = pct;
      if (pencilRef.current) pencilRef.current.style.left = pct;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={lineRef}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[70] h-[3px] w-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, var(--color-ink) 0 12px, transparent 12px 17px)',
        }}
      />
      <div ref={pencilRef} aria-hidden="true" className="fixed left-0 top-0 z-[70] -translate-x-full -translate-y-0.5">
        <PencilDoodle className="h-7 w-7 rotate-[35deg]" />
      </div>
    </>
  );
}
