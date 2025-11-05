import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-900 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_0%,rgba(16,185,129,0.10)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <h3 className="text-2xl font-semibold">Let’s build something great</h3>
          <p className="mt-2 text-white/70">Prefer keeping it simple? Connect with me on GitHub.</p>

          <a
            href="https://github.com/GINGKA-HAGANE-1"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-900 shadow/50 shadow-emerald-500/10 transition hover:shadow-lg hover:shadow-emerald-400/20"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </motion.div>
      </div>
      <div className="relative mx-auto mt-8 max-w-6xl px-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Monish. All Rights Reserved.
      </div>
    </footer>
  );
}
