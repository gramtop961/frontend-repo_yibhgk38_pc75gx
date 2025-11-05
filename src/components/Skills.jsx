import { Code, Database, Gamepad2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Group = ({ icon: Icon, title, items, accent = 'emerald' }) => {
  const accentBg = {
    emerald: 'bg-emerald-500/10',
    cyan: 'bg-cyan-500/10',
    violet: 'bg-violet-500/10',
    amber: 'bg-amber-500/10'
  }[accent];
  const accentText = {
    emerald: 'text-emerald-400',
    cyan: 'text-cyan-400',
    violet: 'text-violet-400',
    amber: 'text-amber-400'
  }[accent];

  return (
    <motion.div
      variants={item}
      className="group relative overflow-hidden rounded-2xl bg-white/60 p-6 ring-1 ring-slate-200 backdrop-blur transition hover:shadow-2xl dark:bg-white/5 dark:ring-white/10"
    >
      <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${accentBg} blur-2xl`} />
      <div className="relative mb-4 flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accentBg} ${accentText}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="relative grid grid-cols-1 gap-2 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it} className="text-slate-700 dark:text-slate-300">• {it}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-0 bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_70%_0%,rgba(16,185,129,0.10)_0%,transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
            A versatile toolkit across web, full‑stack, game development and cybersecurity — built for speed and resilience.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <Group
            icon={Code}
            title="Web Development"
            items={[
              'HTML5, CSS3, JavaScript',
              'React.js, Node.js',
              'Responsive Design',
              'API Integration',
            ]}
            accent="emerald"
          />
          <Group
            icon={Database}
            title="Full Stack"
            items={["MongoDB", "MySQL", "Auth & Sessions", "Performance"]}
            accent="cyan"
          />
          <Group
            icon={Gamepad2}
            title="Game Development"
            items={["Unity", "C#", "Prototyping", "Level Design"]}
            accent="violet"
          />
          <Group
            icon={Shield}
            title="Cybersecurity"
            items={["PenTesting", "Auditing", "Threat Modeling", "VA/PT"]}
            accent="amber"
          />
        </motion.div>
      </div>
    </section>
  );
}
