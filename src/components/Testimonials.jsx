import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    name: 'Ava Kim',
    quote:
      'Bolt eliminates our manual busywork. We ship faster and make fewer mistakes.',
  },
  {
    name: 'Noah Patel',
    quote: 'The automations are insanely fast. Our onboarding went from hours to minutes.',
  },
  {
    name: 'Lena Garcia',
    quote: 'Clean, elegant, and powerful. The team collaboration features are perfect.',
  },
];

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full bg-[#0b0f14] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
          Loved by fast-moving teams
        </h2>
        <div className="mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 text-[#0b0f14] shadow-[0_0_20px_rgba(34,211,238,.6)]">
                  <span className="text-sm font-semibold">
                    {initials(items[index].name)}
                  </span>
                </div>
                <p className="mx-auto max-w-2xl text-lg text-slate-200">
                  “{items[index].quote}”
                </p>
                <p className="mt-3 text-sm text-cyan-300">{items[index].name}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 w-6 rounded-full transition ${
                    index === i ? 'bg-cyan-400' : 'bg-white/15 hover:bg-white/30'
                  }`}
                />)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
