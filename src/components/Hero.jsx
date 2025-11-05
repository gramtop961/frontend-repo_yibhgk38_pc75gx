import Spline from '@splinetool/react-spline';
import { Github, Shield, Rocket, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      {/* 3D Scene (full-bleed cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-900" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-900" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-28 pb-20 sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur"
        >
          <Shield className="h-4 w-4 text-emerald-400" />
          <span className="text-sm text-white/80">Ethical Hacker • Full Stack • Game Dev</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          Hey, I'm <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Monish</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          I build secure, performant, and innovative experiences across Web, Full‑Stack, and Game Development.
          With a focus on Ethical Hacking and Penetration Testing, I help keep products fast and safe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="https://github.com/GINGKA-HAGANE-1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-900 shadow/50 shadow-emerald-500/10 transition hover:shadow-lg hover:shadow-emerald-400/20"
          >
            <Github className="h-4 w-4" /> View GitHub
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 font-medium text-white transition hover:bg-white/20"
          >
            <Rocket className="h-4 w-4" /> Services
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 px-4 py-2 font-medium text-white transition hover:bg-emerald-400"
          >
            <Terminal className="h-4 w-4" /> About
          </a>
        </motion.div>

        {/* Skill chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-4 flex w-full flex-wrap gap-2"
        >
          {[
            'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'MySQL',
            'Unity', 'C#', 'PenTesting', 'Security Auditing', 'Vulnerability Assessment',
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white/5 px-3 py-1 text-sm text-white/80 ring-1 ring-white/10"
            >
              {chip}
            </span>
          ))}
        </motion.div>

        {/* Quick stats - subtle and responsive */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { k: 'Projects', v: '20+' },
            { k: 'Hack Simulations', v: '100+' },
            { k: 'Game Prototypes', v: '10+' },
            { k: 'Uptime', v: '99.9%' },
          ].map((s) => (
            <div key={s.k} className="rounded-xl bg-white/5 p-3 text-center ring-1 ring-white/10">
              <div className="text-xl font-semibold text-white">{s.v}</div>
              <div className="text-xs text-white/70">{s.k}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mini terminal widget with precise centering for "/bin/monish" */}
      <div className="pointer-events-none absolute bottom-6 right-6 hidden w-[320px] rounded-xl border border-emerald-500/20 bg-black/50 font-mono text-[12px] text-emerald-300 backdrop-blur md:block">
        {/* Title bar with grid so the path stays perfectly centered */}
        <div className="grid grid-cols-[auto_1fr_auto] items-center border-b border-emerald-400/10 px-3 py-2">
          <div className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/20" />
          </div>
          <div className="select-none text-center text-[11px] text-emerald-200/80 tabular-nums">/bin/monish</div>
          <div className="w-6" />
        </div>
        {/* Body content uses pre for perfect alignment */}
        <div className="px-3 py-2">
          <pre className="whitespace-pre leading-relaxed">$ whoami\nmonish@eth0\n\n$ nmap -sV localhost\n8000  open  http-fastapi\n3000  open  vite-react\n</pre>
          <div className="mt-1 h-4 w-2 animate-pulse bg-emerald-400" />
        </div>
      </div>
    </section>
  );
}
