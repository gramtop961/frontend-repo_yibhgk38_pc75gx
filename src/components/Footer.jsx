import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 bg-neutral-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-white font-medium">Let’s build something immersive.</p>
            <p className="text-white/70 text-sm">Monish — crafting interactive, performant web experiences.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </motion.div>
        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Monish. All rights reserved.</p>
      </div>
    </footer>
  );
}
