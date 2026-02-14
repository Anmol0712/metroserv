import { motion } from "framer-motion";
import Typewriter from "../../components/ui/Typewriter";

const ConfidenceStrip = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        {/* TYPEWRITER LINE */}
        <h3 className="text-2xl md:text-3xl font-semibold text-teal-700 min-h-[2.5rem]">
          <Typewriter
            texts={[
              "Built for clarity. Designed for growth.",
              "Technology that stays simple as you scale.",
              "Thoughtful systems. Reliable outcomes.",
              "Digital foundations built for the long term.",
            ]}
          />
        </h3>

        {/* Accent line */}
        <div className="mt-8 w-24 h-[3px] mx-auto rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-lime-400" />

        {/* SUPPORTING COPY (STATIC, CALM) */}
        <p className="mt-6 text-xl italic font-serif font-bold text-slate-600 max-w-3xl mx-auto">
          We focus on creating digital solutions that are easy to use,
          easy to maintain, and thoughtfully engineered to support
          long-term business growth.
        </p>
      </motion.div>
    </section>
  );
};

export default ConfidenceStrip;
