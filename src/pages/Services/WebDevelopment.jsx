import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ParallaxMedia from "../../components/ui/ParallaxMedia";
import WebHero from "../../assets/website-development.jpeg";
import { ROUTES } from "../../routes/route";

const capabilities = [
  {
    title: "React & Next.js",
    description:
      "Modern frontend architecture built with performance, SEO, and scalability in mind.",
  },
  {
    title: "E-commerce Platforms",
    description:
      "High-converting online stores optimized for seamless checkout and user journeys.",
  },
  {
    title: "Progressive Web Apps",
    description:
      "App-like web experiences with offline capability and lightning-fast performance.",
  },
  {
    title: "Headless CMS",
    description:
      "Flexible content systems enabling omnichannel publishing and scalability.",
  },
  {
    title: "Performance Optimization",
    description:
      "Core Web Vitals optimization ensuring fast load times and smooth interactions.",
  },
  {
    title: "SEO & Accessibility",
    description:
      "Search-optimized and WCAG-compliant experiences built for reach and inclusivity.",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function WebDevelopment() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yDeco = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={ref}
        className="relative bg-gradient-to-br from-white via-slate-50 to-teal-50/20 px-6 py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-white to-slate-50/80" />

        <motion.div
          style={{ y: yDeco }}
          className="pointer-events-none absolute -top-40 left-1/4 h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-br from-teal-200/25 to-blue-200/20 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease }}
              className="relative"
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/50">

                <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
                  Web Development
                </span>

                <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                  Digital experiences
                  <br />
                  <span className="text-teal-600">built to scale</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-slate-600">
                  Modern, responsive web applications engineered for
                  performance and long-term growth.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to={ROUTES.SERVICES}
                    className="inline-flex items-center justify-center rounded-full border-2 border-teal-600 px-8 py-4 text-teal-600 font-semibold transition hover:bg-teal-50"
                  >
                    ← Back to Services
                  </Link>
                  <Link
                    to={ROUTES.CONTACT}
                    className="inline-flex items-center justify-center rounded-full bg-teal-600 px-8 py-4 text-white font-semibold shadow-lg transition hover:bg-teal-500"
                  >
                    Start Your Project
                  </Link>
                </div>

                {/* Results Strip */}
                <div className="mt-10 flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-slate-600">100+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500" />
                    <span className="text-slate-600">98% Satisfaction</span>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-1">
                <ParallaxMedia src={WebHero} alt="Web Development" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section
        ref={contentRef}
        className="relative bg-gradient-to-b from-white via-white to-slate-50/30 px-6 py-20 sm:py-24 overflow-hidden"
      >
        <div className="relative mx-auto max-w-7xl text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Web <span className="text-teal-600">Excellence</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <FlipCard
                key={item.title}
                item={item}
                index={index}
                isContentInView={isContentInView}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= FLIP CARD ================= */

function FlipCard({ item, index, isContentInView }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      className="relative h-48 cursor-pointer [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-full w-full rounded-2xl [transform-style:preserve-3d]"
      >
        {/* FRONT */}
        <div className="absolute inset-0 rounded-2xl bg-white/60 backdrop-blur-sm border border-teal-700/10 shadow-sm flex items-center justify-center p-6 [backface-visibility:hidden]">
          <div className="text-center">
            <div className="w-2 h-2 rounded-full bg-teal-600 mb-3 mx-auto" />
            <h3 className="text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-md flex items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm leading-relaxed text-center">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
