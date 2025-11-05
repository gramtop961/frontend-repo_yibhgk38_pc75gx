import { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';

function App() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white scroll-smooth">
      {/* Top nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#hero" className="text-lg font-semibold tracking-tight" onClick={close}>Monish</a>

          {/* Desktop nav */}
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#skills" className="text-white/80 hover:text-white">Skills</a>
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#contact" className="rounded-lg bg-emerald-500 px-3 py-1.5 text-slate-900 hover:bg-emerald-400">Contact</a>
          </nav>

          {/* Mobile toggle */}
          <button aria-label="Toggle menu" className="sm:hidden" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="sm:hidden">
            <nav className="mx-3 mb-3 overflow-hidden rounded-xl border border-white/10 bg-slate-900/95 p-2">
              <a href="#skills" onClick={close} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/5">Skills</a>
              <a href="#services" onClick={close} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/5">Services</a>
              <a href="#about" onClick={close} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/5">About</a>
              <a href="#contact" onClick={close} className="block rounded-lg bg-emerald-500/90 px-3 py-2 text-slate-900 hover:bg-emerald-400">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <Skills />
        <Services />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
