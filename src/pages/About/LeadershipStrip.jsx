import { motion } from "framer-motion";
import leaderImage from "../../assets/leadership.jpg"; 

export default function LeadershipStrip() {
  return (
    <section className="relative py-28 bg-slate-900 overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-400/10 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT: Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-emerald-400">
            Leadership & Direction
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Led by clarity.  
            <span className="block text-emerald-400">
              Driven by long-term thinking.
            </span>
          </h2>

          {/* Copy */}
          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
            METROSERV is guided by experienced leaders who believe exceptional
            digital products are built through discipline, accountability,
            and a relentless focus on outcomes — not trends.
          </p>

          {/* Accent */}
          <div className="mt-10 h-[3px] w-24 rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-lime-400" />
        </motion.div>

        {/* RIGHT: Leader Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Frame */}
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
            <img
              src={leaderImage}
              alt="METROSERV Leadership"
              className="w-full h-[420px] object-cover"
            />

            {/* Image overlay for premium tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          {/* Soft border glow */}
          <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
