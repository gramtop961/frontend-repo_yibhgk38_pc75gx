import Spline from '@splinetool/react-spline';
import { Github, Shield, Rocket, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-900"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900"></div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 pb-20 sm:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-400" />
          <span className="text-sm text-white/80">Ethical Hacker • Full Stack • Game Dev</span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Hey, I'm <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Monish</span>
        </h1>
        <p className="max-w-2xl text-lg text-white/80">
          I'm a passionate tech enthusiast building secure, efficient and innovative
          experiences across Web, Full‑Stack and Game Development. I specialize in
          Ethical Hacking and Penetration Testing to keep products fast and safe.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://github.com/GINGKA-HAGANE-1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow/50 shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-400/20 transition"
          >
            <Github className="h-4 w-4" /> View GitHub
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/20 transition"
          >
            <Rocket className="h-4 w-4" /> Services
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 px-4 py-2 font-medium text-white hover:bg-emerald-400 transition"
          >
            <Terminal className="h-4 w-4" /> About
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'MySQL',
            'Unity', 'C#', 'PenTesting', 'Security Auditing', 'Vulnerability Assessment'
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle hacker hint: tiny terminal widget */}
      <div className="pointer-events-none absolute bottom-6 right-6 hidden w-[280px] rounded-xl border border-emerald-500/20 bg-black/40 p-4 font-mono text-[12px] text-emerald-300 backdrop-blur md:block">
        <div className="mb-2 flex items-center gap-1 text-emerald-400/80">
          <span className="h-2 w-2 rounded-full bg-emerald-500/70"></span>
          <span className="h-2 w-2 rounded-full bg-emerald-500/40"></span>
          <span className="h-2 w-2 rounded-full bg-emerald-500/20"></span>
          <span className="ml-2">/bin/monish</span>
        </div>
        <div>
          <span className="text-emerald-400">$</span> whoami
        </div>
        <div className="">monish@eth0</div>
        <div className="mt-1"><span className="text-emerald-400">$</span> nmap -sV localhost</div>
        <div className="opacity-80">8000 open  http-fastapi</div>
        <div className="opacity-80">3000 open  vite-react</div>
        <div className="mt-1"><span className="text-emerald-400">$</span> _<span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-400"></span></div>
      </div>
    </section>
  );
}
