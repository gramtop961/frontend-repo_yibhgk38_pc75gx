import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, X } from 'lucide-react';

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/10 to-neutral-950/60" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80%_50%_at_50%_10%,rgba(255,255,255,0.12),rgba(0,0,0,0)_60%),radial-gradient(60%_40%_at_50%_100%,rgba(0,0,0,0.5),rgba(0,0,0,0))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              Immersive web experiences
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
              Monish — immersive web experiences
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl">
              Full‑stack engineering with 3D interfaces, fluid motion, and robust architectures. Crafted for performance and delight.
            </p>

            {/* Highly discoverable 3D trigger */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full bg-white text-neutral-950 px-5 py-2.5 text-sm font-medium shadow-lg shadow-amber-500/20 ring-amber-400/30 hover:shadow-amber-400/40 focus:outline-none focus-visible:ring-2 transition"
                aria-haspopup="dialog"
                aria-expanded={open}
              >
                <Play className="h-4 w-4" />
                Try the interactive card
              </button>
              <span className="text-sm text-white/70">
                Hint: it reacts to your pointer
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Spotlight pulsing cue near bottom to make the interaction easy to find */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.div
          className="pointer-events-none h-10 w-10 rounded-full bg-white/40 blur-xl"
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.15, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Modal focus view for instant wow */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="relative w-[92vw] max-w-5xl h-[70vh] rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Interactive 3D Card"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-full bg-white/90 text-neutral-900 h-9 w-9 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute inset-0">
                <Spline
                  scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
