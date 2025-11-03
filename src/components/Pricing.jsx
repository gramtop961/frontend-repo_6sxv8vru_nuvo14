import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    features: ['1 Project', 'Basic Automations', 'Community Support'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    features: ['Unlimited Projects', 'Advanced Workflows', 'Team Spaces', 'Priority Support'],
    cta: 'Go Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: ['SAML/SSO', 'Custom SLAs', 'Dedicated Success', 'Security Review'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#080c11] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Simple, transparent pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-center text-slate-300"
        >
          Start free, scale as your automation needs grow.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl ${
                t.highlight
                  ? 'border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,.25)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {t.highlight && (
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/20 to-transparent" />
              )}
              <div className="relative">
                <h3 className="text-lg font-medium">{t.name}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-semibold">{t.price}</span>
                  <span className="mb-1 text-slate-400">{t.period}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.8)]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-medium transition ${
                  t.highlight
                    ? 'bg-cyan-400 text-[#080c11] hover:brightness-110'
                    : 'border border-white/10 bg-white/5 text-white hover:border-cyan-400/40'
                }`}>
                  {t.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
