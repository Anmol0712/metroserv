import { motion } from "framer-motion";
import { Globe, Laptop, Zap, Leaf } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    desc: "Deep dive into your business ecosystem.",
    icon: Globe,
  },
  {
    id: "02",
    title: "Design",
    desc: "User-first architectures and interfaces.",
    icon: Laptop,
  },
  {
    id: "03",
    title: "Build",
    desc: "Robust engineering with agile precision.",
    icon: Zap,
  },
  {
    id: "04",
    title: "Scale",
    desc: "Optimized growth and long-term support.",
    icon: Leaf,
  },
];

const cardMotion = {
  rest: { y: 0, boxShadow: "0 20px 40px rgba(15,23,42,0.08)" },
  hover: { y: -6, boxShadow: "0 28px 50px rgba(15,23,42,0.12), 0 0 30px -8px rgba(13,148,136,0.1)" },
};

export default function DeliveryModels() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-emerald-50/60 via-white to-white overflow-hidden">
      
      {/* soft background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-200/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700">
            Our Delivery Model
          </h2>
          <div className="mt-5 mx-auto w-20 h-[3px] rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-400" />
        </motion.div>

        {/* Flow line (desktop only) */}
        <div className="hidden lg:block absolute top-[52%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-700/60 to-transparent" />

        {/* Cards — fixed min-height to avoid footer layout shift on hover */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="min-h-[280px]"
              >
                <motion.div
                  variants={cardMotion}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative h-full min-h-[260px] rounded-[28px] bg-white p-8"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-semibold shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
