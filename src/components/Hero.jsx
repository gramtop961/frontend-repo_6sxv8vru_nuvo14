import { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onGetStarted }) {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] w-full overflow-hidden bg-[#0b0f14] text-white"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f14]/40 to-[#0b0f14]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0b0f14] to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-24 sm:pt-32 lg:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-5 inline-flex items-center rounded-full border border-cyan-500/20 bg-white/5 px-3 py-1 text-xs text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,.25)] backdrop-blur-xl"
        >
          Lightning-fast productivity platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,.35)]">
            Work. Fast. Smart. Bolt.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-2xl text-center text-base text-slate-300 sm:text-lg"
        >
          Automate workflows, synchronize teams, and move with precision. Bolt brings
          speed, clarity, and control to everything you do.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex gap-4"
        >
          <button
            onClick={onGetStarted}
            className="group relative inline-flex items-center justify-center rounded-xl bg-cyan-500/20 px-6 py-3 text-sm font-medium text-cyan-100 backdrop-blur-md transition hover:text-white focus:outline-none"
          >
            <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.35),transparent_60%)] opacity-90 blur-md" />
            <span className="absolute inset-0 -z-0 rounded-xl shadow-[0_0_30px_0_rgba(34,211,238,0.45)]" />
            <span className="relative z-10">Get Started</span>
          </button>
          <a
            href="#features"
            className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  );
}
