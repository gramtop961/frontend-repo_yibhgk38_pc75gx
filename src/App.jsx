import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Simple top nav */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <a href="#hero" className="text-lg font-semibold tracking-tight">Monish</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#skills" className="text-white/80 hover:text-white">Skills</a>
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#contact" className="rounded-lg bg-emerald-500 px-3 py-1.5 text-slate-900 hover:bg-emerald-400">Contact</a>
          </nav>
        </div>
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
