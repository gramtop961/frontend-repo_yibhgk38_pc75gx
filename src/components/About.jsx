import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">About</h2>
          <p className="mt-4 text-white/80">
            Hi, I’m Monish — a developer who loves crafting immersive experiences and robust systems. I combine design sensibilities with engineering rigor to ship products users love.
          </p>
          <p className="mt-3 text-white/80">
            My toolkit blends React, motion, and 3D for the front, plus FastAPI and data stores for the back. I enjoy working end-to-end: from prototyping to production.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6"
        >
          <div className="aspect-[4/3] w-full rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-white/70">
            <span>Portfolio Preview Area</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
