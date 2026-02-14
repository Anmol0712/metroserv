import { motion } from "framer-motion";

const metrics = [
  { label: "Speed", value: "↑", sub: "Faster delivery" },
  { label: "Cost", value: "↓", sub: "Optimized spend" },
  { label: "Conversion", value: "↑", sub: "Higher impact" },
  { label: "Uptime", value: "99.9%", sub: "Reliability" },
];

export default function CaseProof() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Subtle gradient strip background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-50/80 via-slate-50 to-teal-50/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          How We Delivered Results
        </h2>
        <p className="text-center text-slate-600 text-lg mb-14">
          Proof of execution — real outcomes, not promises.
        </p>

        {/* Horizontal strip — metrics */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-teal-600">
                {m.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-800 uppercase tracking-wider">
                {m.label}
              </div>
              <div className="mt-0.5 text-sm text-slate-600">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
