import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex items-center justify-center
        bg-gradient-to-br
        from-slate-50 via-white to-teal-50/20
        overflow-hidden
        pt-5 pb-16
      "
    >
      {/* Enhanced background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#0f766e 0.8px, transparent 0.8px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-indigo-500/3" />

      {/* Animated abstract grid layer */}
      <div className="absolute inset-0 opacity-[0.02] overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aboutGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <rect width="120" height="120" fill="none" stroke="#0f766e" strokeWidth="0.3" opacity="0.2"/>
              <circle cx="60" cy="60" r="1.5" fill="#0f766e" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
      </div>
        
        {/* Floating geometric elements */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
          }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal-600/12 to-blue-600/08 blur-[180px]"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.03, 0.07, 0.03],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: 8,
          }}
          className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/10 to-purple-600/06 blur-[200px]"
        />

      <div className="relative max-w-7xl mx-auto px-6 w-full text-center">

        {/* Eyebrow — subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="
            inline-flex items-center
            px-5 py-2 rounded-full
            border border-teal-700/80
            text-sm font-semibold tracking-wide
            text-teal-700
            bg-white/90 backdrop-blur
          "
        >
          <motion.span
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
            className="text-lg"
          >
            ✦&nbsp;
          </motion.span>
          ENGINEERING EXCELLENCE
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="
            mt-8
            font-extrabold
            tracking-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-slate-900
          "
        >
          We Are{" "}
          <span className="text-teal-700 tracking-tight italic font-serif font-bold">
            METROSERV
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="
            mt-6 max-w-3xl mx-auto
            text-base sm:text-lg md:text-xl
            text-slate-700 leading-relaxed
          "
        >
          A global digital transformation partner helping enterprises
          navigate the future through technology, design, and strategy.
        </motion.p>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="
            mt-8 mx-auto
            w-24 h-[3px] rounded-full
            bg-gradient-to-r
            from-teal-600 via-blue-600 to-lime-500
          "
        />

        {/* Horizontal Motion Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 relative overflow-hidden py-2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: [0.25, 0.1, 0.25, 1],
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[
              "Engineering Excellence",
              "Scalable Systems", 
              "Product Thinking",
              "Secure by Design",
              "Built for Growth",
              "Engineering Excellence",
              "Scalable Systems",
              "Product Thinking",
              "Secure by Design",
              "Built for Growth",
            ].map((phrase, index) => (
              <span
                key={index}
                className="inline-block px-8 text-sm md:text-base font-medium text-teal-700/50 hover:text-teal-700/90 transition-all duration-500 ease-[0.25, 0.1, 0.25, 1] tracking-[0.05em] uppercase hover:font-semibold"
              >
                {phrase}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 tracking-wider"
        >
          <div className="flex items-center gap-6">
            <span className="text-slate-600">Engineering Excellence</span>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-slate-600">Agile Delivery</span>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-slate-600">Long-Term Thinking</span>
          </div>
        </motion.div>

        {/* Stat Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            "End-to-End Engineering",
            "Product-First Thinking", 
            "Long-Term Partnerships"
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="
                px-6 py-3 rounded-full
                border border-teal-700/20
                bg-white/60 backdrop-blur-sm
                text-sm font-medium text-slate-700
                hover:border-teal-700/40
                hover:bg-white/80
                transition-all duration-500 ease-[0.25, 0.1, 0.25, 1]
              "
            >
              {stat}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
