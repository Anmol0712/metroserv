import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

const cardHover = {
  rest: { y: 0, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)" },
  hover: { y: -6, boxShadow: "0 35px 60px -15px rgba(0,0,0,0.25), 0 0 40px -10px rgba(20,184,166,0.15)" },
};

export default function MissionVisionCard() {
  return (
    <section className="relative w-full px-6 py-20 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        {/* Mission — fixed min-height to avoid layout shift */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          className="
            relative overflow-hidden
            min-h-[320px]
            rounded-[36px]
            bg-gradient-to-br from-emerald-600 to-teal-600
            p-12 text-white
            shadow-2xl
            transition-shadow duration-300
          "
        >
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-white/5" />

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
            <Target className="h-7 w-7" />
          </div>

          <h3 className="mb-4 text-3xl font-bold">Our Mission</h3>
          <p className="max-w-md text-lg leading-relaxed text-white/90">
            To empower brands with innovative, future-ready digital 
            solutions that blend creativity with technology, 
            enabling sustainable growth and global competitiveness.
          </p>
        </motion.div>

        {/* Vision — fixed min-height */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          className="
            relative overflow-hidden
            min-h-[320px]
            rounded-[36px]
            bg-gradient-to-br from-slate-900 to-slate-800
            p-12 text-white
            shadow-2xl
            transition-shadow duration-300
          "
        >
          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-white/3" />

          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
            <Lightbulb className="h-7 w-7" />
          </div>

          <h3 className="mb-4 text-3xl font-bold">Our Vision</h3>
          <p className="max-w-md text-lg leading-relaxed text-white/80">
            To be the most trusted global partner for engineering digital
            brilliance, recognized for our commitment to quality and
            future-ready thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
