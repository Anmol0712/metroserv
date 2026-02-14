import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-slate-50 py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-teal-700"
        >
          Let’s Build What Matters
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-lg font-semibold text-slate-600 max-w-2xl mx-auto"
        >
          Whether you’re starting with an idea or scaling an existing product,
          METROSERV helps you move forward with clarity and confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/contact"
            className="bg-teal-600 text-white font-semibold
                       px-10 py-4 rounded-full
                       flex items-center gap-2
                       shadow-lg shadow-teal-600/25
                       transition-all duration-300
                       hover:scale-[1.04] hover:shadow-teal-600/40"
          >
            Book Strategy Call <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
