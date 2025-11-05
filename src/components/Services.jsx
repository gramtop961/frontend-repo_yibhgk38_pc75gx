import { Code, Settings, Shield, Gamepad2 } from 'lucide-react';

const Card = ({ icon: Icon, title, points }) => (
  <div className="group rounded-2xl bg-white/60 p-6 ring-1 ring-slate-200 backdrop-blur transition hover:shadow-xl dark:bg-white/5 dark:ring-white/10">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <ul className="grid grid-cols-1 gap-2 text-slate-600 dark:text-slate-300">
      {points.map((p) => (
        <li key={p}>• {p}</li>
      ))}
    </ul>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="relative z-0 bg-slate-50 py-20 dark:bg-slate-950/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Services</h2>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              End-to-end solutions: from designing interfaces to securing infrastructure.
            </p>
          </div>
          <a href="#contact" className="rounded-lg bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-400">Start a project</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card
            icon={Code}
            title="Web Development"
            points={[
              'Full-stack Development',
              'Responsive Design',
              'API Integration',
              'Performance Optimization',
            ]}
          />
          <Card
            icon={Gamepad2}
            title="Game Development"
            points={[
              'Unity Game Development',
              '2D/3D Game Design',
              'Game Mechanics & Level Design',
              'Character Development',
            ]}
          />
          <Card
            icon={Shield}
            title="Security Services"
            points={[
              'Penetration Testing',
              'Security Auditing',
              'Vulnerability Assessment',
              'Security Consulting & Incident Response',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
