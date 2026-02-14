// src/components/about/ConfidenceStrip.jsx
import { motion } from "framer-motion";
import Typewriter from "../../components/ui/Typewriter";

const AboutDivider = () => {
  return (
    <section className="bg-slate-100 py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-8xl mx-auto px-6 text-center"
      >
        <p className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug">
          We believe meaningful digital products are built at the intersection of{" "}
          <span className="font-bold text-teal-700">
            <Typewriter
              texts={["clarity", "engineering", "long-term thinking"]}
              typingSpeed={90}
              deletingSpeed={45}
              delay={1400}
            />
          </span>
          .
        </p>
      </motion.div>
    </section>
  );
};

export default AboutDivider;
