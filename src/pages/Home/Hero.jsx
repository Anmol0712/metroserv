import { useEffect, useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import AnimatedLogo from "../../components/ui/AnimatedLogo";
import { useDeviceDetection, getAnimationConfig } from "../../utils/performance";

const loopWords = ["Think", "•", "Design", "•", "Build", "•", "Scale", "•", "Repeat"];

const Hero = React.memo(() => {
  const [current, setCurrent] = useState(0);
  const deviceInfo = useDeviceDetection();
  const { isMobile, isLowEnd, prefersReducedMotion } = deviceInfo;
  const animationConfig = getAnimationConfig(deviceInfo);
  
  const wallpapers = useMemo(() => [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
    "/hero6.jpg",
  ], []);

  useEffect(() => {
    // Disable background rotation on low-end devices or when reduced motion is preferred
    if (isLowEnd || prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % wallpapers.length);
    }, isLowEnd ? 10000 : 6000); // Slower on low-end devices

    return () => clearInterval(interval);
  }, [wallpapers.length, isLowEnd, prefersReducedMotion]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white" style={{ minHeight: 'calc(var(--vh, 1vh) * 92)' }}>

      {/* ===== Background Image Carousel ===== */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.28 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isLowEnd ? 0.8 : 1.4, ease: "easeInOut" }}
            className="absolute inset-0 bg-center bg-cover will-change-opacity"
            style={{ backgroundImage: `url(${wallpapers[current]})` }}
          />
        </AnimatePresence>
      </div>

      {/* ===== Light Overlay for Readability ===== */}
      <div className="absolute inset-0 bg-white/35 z-0" />

      {/* ===== Edge Glow Only (Sides) ===== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#1F8A8A]/20 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#1F8A8A]/20 to-transparent" />
      </div>

      {/* ===== Subtle Grid Pattern ===== */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#1F8A8A"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ===== Content ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">

        {/* Loop Text */}
        <div className="flex justify-center gap-3 flex-wrap mb-6">
          {loopWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: prefersReducedMotion ? 0 : i * (isLowEnd ? 0.1 : 0.15), 
                duration: isLowEnd ? 0.3 : 0.6, 
                ease: "easeOut" 
              }}
              className="text-base sm:text-lg font-medium text-slate-700 will-change-transform"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xs sm:text-sm uppercase tracking-[0.22em] text-slate-600 mb-6"
        >
          The Digital Growth Loop
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: "easeOut" }}
          className="font-black tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl will-change-transform"
        >
          <span className="text-[#1F8A8A] block">
            METROSERV
          </span>

          <span
            className="block italic font-serif mt-4 leading-[1.25]
                       bg-gradient-to-r
                       from-[#1F8A8A]
                       via-[#2563EB]
                       to-[#22C55E]
                       bg-clip-text
                       text-transparent"
          >
            Engineering Impact
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto px-4"
        >
          Turning digital ideas into scalable business outcomes —
          with clarity, precision, and confidence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center will-change-transform px-4"
        >
          <Link
            to="/services"
            className="bg-[#1F8A8A] text-white font-semibold
                       px-6 sm:px-8 py-3 sm:py-4 rounded-full
                       flex items-center justify-center gap-2 sm:gap-3
                       transition-transform duration-300 ease-out
                       hover:scale-[1.02] will-change-transform
                       hover:shadow-lg hover:shadow-[#1F8A8A]/25
                       text-sm sm:text-base w-full sm:w-auto"
          >
            Explore Now <ArrowRight size={20} />
          </Link>

          <Link
            to="/contact"
            className="font-semibold border border-slate-400
                       px-6 sm:px-8 py-3 sm:py-4 rounded-full
                       transition-all duration-300 ease-out
                       hover:bg-slate-100 hover:scale-[1.01] will-change-transform
                       text-sm sm:text-base w-full sm:w-auto"
          >
            Get in touch
          </Link>
        </motion.div>

      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
