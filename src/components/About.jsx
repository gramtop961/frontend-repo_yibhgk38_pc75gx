import { motion } from 'framer-motion';
import { Shield, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-0 bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_0%,rgba(99,102,241,0.10)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">My Background</h2>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
              I began my journey in technology at a young age, driven by curiosity for how the digital world works.
              Over the years I built a solid foundation across front‑end, back‑end, and game development while nurturing a
              deep interest in security and ethical hacking.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/60 p-4 backdrop-blur dark:bg-white/5">
                <div className="mb-2 flex items-center gap-2 text-emerald-400"><Shield className="h-4 w-4" /> Security‑minded</div>
                <p className="text-sm text-slate-700 dark:text-slate-300">Proactive about threat modeling, auditing, and resilient architectures.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/60 p-4 backdrop-blur dark:bg-white/5">
                <div className="mb-2 flex items-center gap-2 text-violet-400"><Rocket className="h-4 w-4" /> Product‑focused</div>
                <p className="text-sm text-slate-700 dark:text-slate-300">Obsessed with performance, UX polish, and measurable outcomes.</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-2xl"
          >
            <div className="text-sm text-white/70">Snapshot</div>
            <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { k: 'Projects', v: '20+' },
                { k: 'Pentests', v: '100+' },
                { k: 'Game Demos', v: '10+' },
                { k: 'Stack', v: 'React/Node' },
                { k: 'DB', v: 'Mongo/MySQL' },
                { k: 'Focus', v: 'Security' },
              ].map((s) => (
                <div key={s.k} className="rounded-lg bg-white/5 p-3 text-center ring-1 ring-white/10">
                  <div className="text-lg font-semibold">{s.v}</div>
                  <div className="text-xs text-white/70">{s.k}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-white/80">
              Currently exploring advanced WebGL and shader‑based visuals integrated with secure back‑end practices.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
