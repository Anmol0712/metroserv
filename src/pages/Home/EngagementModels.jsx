import { motion } from "framer-motion";
import engagementclient from "../../assets/engagementclient.jpeg"

const models = [
  {
    title: "Project-Based Delivery",
    desc: "Ideal for clearly defined scopes and timelines. We take full ownership — from planning to launch.",
  },
  {
    title: "Dedicated Product Team",
    desc: "A long-term collaboration model where our team works as an extension of yours.",
  },
  {
    title: "Design & Discovery Sprints",
    desc: "Short, focused engagements to clarify ideas, validate direction, and reduce risk before building.",
  },
  {
    title: "Ongoing Support & Evolution",
    desc: "Continuous improvements, optimizations, and scaling as your business grows.",
  },
];

const EngagementModels = () => {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${engagementclient})`,
      }}
    >
            {/* FRAME + SHADOW LAYER */}
      <div
        className="absolute inset-0 bg-white/80"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.25), inset 0 0 120px rgba(0,0,0,0.25)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-teal-700 leading-tight">
            How We Work With You
          </h2>

            {/* Accent line */}
          <div className="mt-8 w-24 h-[3px] rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-lime-400" />

          <p className="mt-6 text-lg font-semibold text-slate-600">
            Flexible engagement models designed to align with your team,
            timelines, and long-term business goals.
          </p>

        </motion.div>

        {/* Models */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 max-w-5xl">
          {models.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="border-t border-teal-500 pt-8"
            >
              <h3 className="text-xl font-semibold text-teal-600">
                {item.title}
              </h3>
              <p className="mt-3 font-semibold text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngagementModels;
