import { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleLink = (e) => {
      const target = e.target;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        const el = document.querySelector(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setMenuOpen(false);
        }
      }
    };
    document.addEventListener('click', handleLink);
    return () => document.removeEventListener('click', handleLink);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#hero" className="font-semibold tracking-tight">Monish</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/10 hover:bg-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur">
            <div className="px-4 py-3 flex flex-col gap-2 text-sm">
              <a href="#skills" className="py-2">Skills</a>
              <a href="#services" className="py-2">Services</a>
              <a href="#about" className="py-2">About</a>
              <a href="#contact" className="py-2">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Sections */}
      <main>
        <section id="hero" className="pt-16">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact" className="pb-10">
          <Footer />
        </section>
      </main>
    </div>
  );
}
