import { motion } from 'framer-motion';

const skills = [
  'React & Vite',
  'Three/Spline 3D',
  'Framer Motion',
  'Tailwind CSS',
  'FastAPI & Python',
  'MongoDB',
  'Edge Deployments',
  'Design Systems',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Skills & Tools
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/90"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
