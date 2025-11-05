import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative w-full min-h-[90vh] sm:min-h-[92vh] lg:min-h-[94vh] overflow-hidden">
      {/* 3D Background (Cover) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="size-1.5 rounded-full bg-emerald-400" /> Open to opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Monish — immersive web experiences
            </h1>
            <p className="text-white/80 max-w-xl">
              Full‑stack engineer crafting modern web apps with delightful interactions, interactive 3D visuals, and robust, scalable architectures.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90">
                Explore Services
              </a>
              <a href="#skills" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10">
                View Skills
              </a>
            </div>
          </motion.div>

          {/* Mini Terminal Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full flex items-center justify-center"
          >
            <div
              className="w-full max-w-xl rounded-xl border border-white/10 bg-black/60 backdrop-blur shadow-2xl overflow-hidden"
            >
              {/* Title Bar with centered path */}
              <div className="grid grid-cols-3 items-center px-3 py-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-500" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="text-center text-xs text-white/70 font-mono tabular-nums truncate">
                  /bin/monish
                </div>
                <div />
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 md:p-6 font-mono text-[12px] sm:text-[13px] leading-relaxed text-white/90 bg-gradient-to-b from-white/5 to-transparent">
                <div className="rounded-md bg-black/40 border border-white/10 p-3 sm:p-4 overflow-auto max-h-72">
                  <div className="space-y-2 whitespace-pre-wrap break-words">
                    <div className="flex gap-2">
                      <span className="text-emerald-400">monish@portfolio</span>
                      <span className="text-white/60">~</span>
                      <span className="text-white/60">$</span>
                      <span>cat profile.txt</span>
                    </div>
                    <p>
                      Full-stack developer focused on interactive UIs, performant backends, and clean DX.
                    </p>
                    <div className="flex gap-2">
                      <span className="text-white/60">$</span>
                      <span>skills --list</span>
                    </div>
                    <p className="text-white/80">
                      React, TypeScript, Spline/Three, Tailwind, FastAPI, Node, MongoDB
                    </p>
                    <div className="flex gap-2 items-start">
                      <span className="text-white/60">$</span>
                      <span className="block">deploy --target=production --zero-downtime</span>
                    </div>
                    <p className="text-emerald-400">✔ Deployed successfully</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
