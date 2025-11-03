import { useEffect, useRef, useState } from 'react';
import { Sun, Moon, Twitter, Github, Linkedin } from 'lucide-react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Testimonials from './components/Testimonials.jsx';

export default function App() {
  const [dark, setDark] = useState(true);
  const pricingRef = useRef(null);

  useEffect(() => {
    // Apply dark mode class at the document level for Tailwind
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const handleGetStarted = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={`min-h-screen w-full ${dark ? 'dark' : ''} bg-[#0b0f14] text-white`}> 
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#0b0f14]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,.6)]" />
            <span className="text-lg font-semibold tracking-tight">Bolt</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
          </nav>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:text-white"
          >
            {dark ? (
              <Sun className="h-4 w-4 text-cyan-300" />
            ) : (
              <Moon className="h-4 w-4 text-cyan-300" />
            )}
            <span className="hidden sm:inline-block">{dark ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </header>

      <main>
        <Hero onGetStarted={handleGetStarted} />
        <Features />
        <div ref={pricingRef} id="pricing">
          <Pricing />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </main>

      <footer className="border-t border-white/5 bg-[#080c11] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-[0_0_20px_rgba(34,211,238,.6)]" />
            <span className="text-sm text-slate-300">© {new Date().getFullYear()} Bolt, Inc.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="Twitter" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-cyan-400/40 hover:text-white">
              <Twitter className="h-4 w-4" />
            </a>
            <a aria-label="GitHub" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-cyan-400/40 hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a aria-label="LinkedIn" href="#" className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-cyan-400/40 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
