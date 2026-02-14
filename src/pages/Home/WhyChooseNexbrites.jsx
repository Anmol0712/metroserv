import { motion } from "framer-motion";

const reasons = [
  {
    title: "Clarity Over Complexity",
    desc: "We focus on solving the right problems first — simplifying decisions, architecture, and execution."
  },
  {
    title: "Built for Long-Term Growth",
    desc: "Our solutions are designed to scale gracefully as your business evolves, not just for today’s launch."
  },
  {
    title: "Engineering With Intent",
    desc: "Every technical choice is made with purpose — balancing performance, maintainability, and cost."
  },
  {
    title: "True Partnership Mindset",
    desc: "We work alongside your team, aligning with your goals, constraints, and timelines."
  }
];

const WhyChooseMETROSERV = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700 leading-tight">
            Why Choose METROSERV
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            We don’t just build software — we help businesses make confident,
            informed digital decisions that stand the test of time.
          </p>

          {/* Accent */}
          <div className="mt-8 w-24 h-[3px] rounded-full
                          bg-gradient-to-r from-teal-500 via-blue-500 to-lime-400" />
        </motion.div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              {/* Teal indicator */}
              <span
                className="absolute left-0 top-1.5
                           h-3 w-3 rounded-full
                           bg-teal-600 shadow-[0_0_0_6px_rgba(13,148,136,0.15)]"
              />

              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMETROSERV;
