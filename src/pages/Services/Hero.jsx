import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="
        relative min-h-[90vh] flex items-center overflow-hidden
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url('/s-hero.jpg')" }}
    >
      {/* ===== Soft White Overlay (for readability) ===== */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

      {/* ===== Side Teal Frame Glow ===== */}
      <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-[#1F8A8A]/15 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-[#1F8A8A]/15 to-transparent pointer-events-none" />

      {/* ===== Subtle Grid Texture ===== */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#1F8A8A"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT CONTENT ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl"
          >
            <p className="text-sm tracking-[0.25em] text-[#1F8A8A] font-semibold uppercase mb-6">
              Capabilities
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
              Engineering Digital{" "}
              <span className="italic font-serif bg-gradient-to-r from-[#1F8A8A] via-[#0f766e] to-[#22c55e] bg-clip-text text-transparent">
                Systems
              </span>
              <br />
              That Scale With You
            </h1>

            <p className="mt-8 text-lg text-slate-700 leading-relaxed max-w-xl">
              From product engineering to cloud architecture and digital growth,
              we build resilient, scalable systems designed for long-term impact.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="
                  bg-[#1F8A8A] text-white font-semibold
                  px-8 py-4 rounded-full
                  flex items-center justify-center gap-3
                  hover:shadow-lg hover:shadow-[#1F8A8A]/30
                  transition-all duration-300
                "
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
