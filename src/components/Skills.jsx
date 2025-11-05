import { Code, Database, Gamepad2, Shield } from 'lucide-react';

const Group = ({ icon: Icon, title, items }) => (
  <div className="rounded-2xl bg-white/60 p-6 ring-1 ring-slate-200 backdrop-blur dark:bg-white/5 dark:ring-white/10">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="text-slate-600 dark:text-slate-300">• {item}</li>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="relative z-0 bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
            A versatile toolkit across web, game, and cybersecurity — focused on building fast,
            reliable, and secure products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Group
            icon={Code}
            title="Web Development"
            items={[
              'HTML5, CSS3, JavaScript',
              'React.js, Node.js',
              'Responsive Design',
              'API Integration',
            ]}
          />
          <Group
            icon={Database}
            title="Full Stack"
            items={['MongoDB', 'MySQL', 'Performance Optimization', 'Database Management']}
          />
          <Group
            icon={Gamepad2}
            title="Game Development"
            items={[
              'Unity Engine',
              'C# Programming',
              '2D/3D Development',
              'Game Design',
            ]}
          />
          <Group
            icon={Shield}
            title="Cybersecurity"
            items={[
              'Penetration Testing',
              'Network Security',
              'Security Auditing',
              'Vulnerability Assessment',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
