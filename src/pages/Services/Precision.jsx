import { Layers, ShieldCheck, Zap, Settings } from "lucide-react";

const points = [
  {
    title: "Scalable Architecture",
    icon: Layers,
    desc: "Systems designed to grow with your business without rework.",
  },
  {
    title: "Secure by Design",
    icon: ShieldCheck,
    desc: "Security-first engineering practices across every layer.",
  },
  {
    title: "High Performance",
    icon: Zap,
    desc: "Optimized for speed, reliability, and real-world usage.",
  },
  {
    title: "Engineering Discipline",
    icon: Settings,
    desc: "Clean code, tested systems, and long-term maintainability.",
  },
];

export default function Precision() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 lg:grid-cols-2 items-center">

        {/* Left content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-500 leading-tight">
            Engineered with <br /> Precision.
          </h2>

          <p className="mt-6 text-slate-300 max-w-xl leading-relaxed">
            Our technology choices are intentional — focused on scalability,
            security, and performance. We build systems that last, not shortcuts
            that break.
          </p>

          <div className="mt-8 h-[3px] w-24 rounded-full bg-gradient-to-r from-teal-400 to-blue-500" />
        </div>

        {/* Right cards */}
        <div className="grid grid-cols-2 gap-6">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="
                  group rounded-2xl border border-white/10
                  bg-white/5 p-6
                  backdrop-blur
                  transition-all duration-300 ease-out
                  hover:bg-white/10
                  hover:-translate-y-1
                "
              >
                <Icon className="h-8 w-8 text-teal-400 mb-4 transition group-hover:scale-110" />

                <h4 className="text-white font-semibold">
                  {p.title}
                </h4>

                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
