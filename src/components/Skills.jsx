import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'Tailwind CSS', level: 'Advanced' },
  { name: 'Spline / Three.js', level: 'Intermediate' },
  { name: 'FastAPI', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
];

export default function Skills() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Skills
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{s.name}</span>
                <span className="text-xs text-white/60">{s.level}</span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full bg-white"
                  style={{ width: `${Math.min(95, 60 + i * 8)}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
