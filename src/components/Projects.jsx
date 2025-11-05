import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon UI Kit',
    tag: 'Frontend',
    desc: 'A motion-first component library with dark neon aesthetics and accessible patterns.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    link: 'https://github.com/'
  },
  {
    title: 'API Plaza',
    tag: 'Backend',
    desc: 'FastAPI microservices with rate limiting, OpenAPI docs, and JWT auth baked-in.',
    stack: ['FastAPI', 'Python', 'MongoDB'],
    link: 'https://github.com/'
  },
  {
    title: '3D Playground',
    tag: '3D',
    desc: 'Interactive Spline scenes integrated into React with smooth, GPU-friendly effects.',
    stack: ['Spline', 'React'],
    link: 'https://github.com/'
  },
];

export default function Projects() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
          >
            View all
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors"
            >
              <div className="text-xs text-white/60">{p.tag}</div>
              <h3 className="mt-1 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map(s => (
                  <span key={s} className="rounded-md border border-white/10 bg-black/50 px-2 py-1 text-[11px] text-white/70">{s}</span>
                ))}
              </div>
              <div className="mt-5 text-sm text-white/70 opacity-70 group-hover:opacity-100">Open ↗</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
