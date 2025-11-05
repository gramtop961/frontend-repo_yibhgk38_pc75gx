import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div>
          <p className="text-lg font-semibold">Monish • Ethical Hacker & Developer</p>
          <p className="text-sm text-white/70">Available for freelance and collaborations.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/GINGKA-HAGANE-1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-3 py-2"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl px-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Monish. All Rights Reserved.
      </div>
    </footer>
  );
}
