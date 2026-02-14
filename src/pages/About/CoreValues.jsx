import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Target, ShieldCheck } from "lucide-react";

const values = [
  {
    title: "Collaboration",
    desc: "We work as an extension of your team, valuing transparency, trust, and shared success.",
    icon: Users,
  },
  {
    title: "Innovation",
    desc: "We continuously explore better ideas, technologies, and approaches to create impact.",
    icon: Rocket,
  },
  {
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in engineering, design, and delivery.",
    icon: Target,
  },
  {
    title: "Integrity",
    desc: "We operate with honesty, accountability, and respect in everything we do.",
    icon: ShieldCheck,
  },
];

export default function CoreValues() {
  const [active, setActive] = useState(null);

  return (
    <section className="w-full bg-white px-4 py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 text-center text-4xl font-extrabold text-teal-600">
          Core Values
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isActive = active === index;

            return (
              <div
                key={value.title}
                className="relative h-[260px] cursor-pointer perspective"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() =>
                  setActive(isActive ? null : index)
                }
              >
                <motion.div
                  animate={{ rotateY: isActive ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-full w-full rounded-3xl"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* FRONT */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white shadow-lg"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100">
                      <Icon className="h-9 w-9 text-slate-700" />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {value.title}
                    </h3>
                  </div>

                  {/* BACK */}
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-3xl bg-teal-600 p-6 text-center text-white shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <p className="text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
