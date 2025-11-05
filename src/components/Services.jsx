import { Code, Shield, Gamepad2, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Card = ({ icon: Icon, title, points, accent = 'cyan' }) => (
  <motion.div
    variants={card}
    className="group relative overflow-hidden rounded-2xl bg-white/60 p-6 ring-1 ring-slate-200 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl dark:bg-white/5 dark:ring-white/10"
  >
    <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${accent === 'cyan' ? 'bg-cyan-500/10' : accent === 'violet' ? 'bg-violet-500/10' : 'bg-emerald-500/10'} blur-2xl`} />
    <div className="relative mb-4 flex items-center gap-3">
      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent === 'cyan' ? 'bg-cyan-500/10 text-cyan-400' : accent === 'violet' ? 'bg-violet-500/10 text-violet-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <ul className="relative grid grid-cols-1 gap-2 text-slate-700 dark:text-slate-300">
      {points.map((p) => (
        <li key={p}>• {p}</li>
      ))}
    </ul>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="relative z-0 bg-slate-50 py-20 dark:bg-slate-950/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_20%_0%,rgba(34,211,238,0.10)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Services</h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              End-to-end solutions: from designing interfaces to securing infrastructure.
            </p>
          </div>
          <a href="#contact" className="rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-400">Start a project</a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          <Card
            icon={Code}
            title="Web Development"
            points={[
              'Full‑stack Apps',
              'Responsive UI/UX',
              'API Integration',
              'Performance Tuning',
            ]}
            accent="emerald"
          />
          <Card
            icon={Gamepad2}
            title="Game Development"
            points={[
              'Unity 2D/3D',
              'Gameplay Systems',
              'Level Design',
              'Rapid Prototyping',
            ]}
            accent="violet"
          />
          <Card
            icon={Shield}
            title="Security Services"
            points={[
              'Penetration Testing',
              'Security Audits',
              'Vulnerability Assessment',
              'Threat Modeling',
            ]}
            accent="cyan"
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/40 p-4 backdrop-blur dark:bg-white/5">
            <span className="font-semibold text-slate-900 dark:text-white">Process</span>
            <p className="mt-1">Discovery → Design → Build → Test → Secure → Launch</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/40 p-4 backdrop-blur dark:bg-white/5">
            <span className="font-semibold text-slate-900 dark:text-white">Guarantee</span>
            <p className="mt-1">Clean code, clear communication, on-time delivery.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/40 p-4 backdrop-blur dark:bg-white/5">
            <span className="font-semibold text-slate-900 dark:text-white">Stack</span>
            <p className="mt-1">React, Node, MongoDB, Unity, CI/CD, Cloud</p>
          </div>
        </div>
      </div>
    </section>
  );
}
