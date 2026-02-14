import { motion } from "framer-motion";

const points = [
  {
    title: "Clarity Before Execution",
    desc: "Every engagement begins with clear thinking — so decisions are intentional, not reactive.",
  },
  {
    title: "Built for Real Teams",
    desc: "Our process adapts to how your team actually works, not rigid frameworks.",
  },
  {
    title: "Scalable by Design",
    desc: "What we build today continues to perform as your business grows tomorrow.",
  },
];

const WhyApproachWorks = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* CENTER HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
            Why This Approach Works
          </h2>

          <div className="mt-6 mx-auto w-20 h-[3px] rounded-full
                          bg-gradient-to-r from-teal-500 via-blue-500 to-lime-400" />
        </motion.div>

        {/* POINTS */}
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Teal glow dot */}
              <div className="w-3 h-3 rounded-full bg-teal-500
                              shadow-[0_0_18px_rgba(20,184,166,0.6)]" />

              {/* Divider */}
              <div className="mt-4 h-px w-full bg-slate-200" />

              <h3 className="mt-6 text-xl font-semibold text-teal-600">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600 font-medium leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyApproachWorks;
