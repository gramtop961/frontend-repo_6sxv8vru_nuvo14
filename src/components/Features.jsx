import { motion } from 'framer-motion';
import { Zap, Bot, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Automation at Core',
    desc: 'Trigger, chain, and schedule actions across your stack with millisecond precision.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Workflows',
    desc: 'Use intelligent steps to classify, transform, and route data automatically.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Spaces, approvals, and role-based access to keep teams aligned and secure.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#0b0f14] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Built for speed, crafted for teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-slate-300"
        >
          Everything you need to automate the busywork and focus on what matters.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-cyan-500/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.25)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-2 text-slate-300">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
