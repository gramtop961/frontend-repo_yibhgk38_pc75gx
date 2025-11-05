import { motion } from 'framer-motion';

const services = [
  {
    title: 'Interactive Frontends',
    desc: 'Modern UIs with motion, 3D, and accessibility baked in.'
  },
  {
    title: 'Backend APIs',
    desc: 'Reliable, scalable APIs with FastAPI, Node, and databases.'
  },
  {
    title: 'Full-Stack Delivery',
    desc: 'From design to deployment, CI/CD, and monitoring.'
  }
];

export default function Services() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Services
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors"
            >
              <h3 className="text-lg font-medium">{card.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{card.desc}</p>
              <div className="mt-4 inline-flex rounded-md border border-white/10 bg-black/60 px-3 py-1.5 text-xs text-white/80">
                Learn more
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
