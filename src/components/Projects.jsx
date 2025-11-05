import { motion } from 'framer-motion';
import { Rocket, Code2, Layers } from 'lucide-react';

const projects = [
  {
    icon: Rocket,
    title: 'Realtime 3D Showcase',
    desc: 'A performant 3D product explorer with multi-axis interactions and smooth camera transitions.',
  },
  {
    icon: Code2,
    title: 'Design System + Motion',
    desc: 'Component library with micro-interactions and accessibility baked in.',
  },
  {
    icon: Layers,
    title: 'Full‑stack Graph Platform',
    desc: 'Event-driven backend and responsive dashboard with granular permissions.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Selected Projects
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 hover:border-white/20 transition"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                <p.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
