import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ParallaxMedia from "../../components/ui/ParallaxMedia";
import AppHero from "../../assets/app-development.jpeg";
import { ROUTES } from "../../routes/route";

const capabilities = [
  {
    title: "Native iOS & Android",
    description:
      "Fully native mobile applications built for performance, reliability, and seamless UX.",
  },
  {
    title: "Cross-Platform React Native",
    description:
      "Cost-effective cross-platform apps with shared codebase and native-level performance.",
  },
  {
    title: "Progressive Web Apps",
    description:
      "App-like web experiences that work offline and perform smoothly across devices.",
  },
  {
    title: "App Store Optimization",
    description:
      "Strategic ASO practices to improve visibility and increase downloads.",
  },
  {
    title: "Performance Analytics",
    description:
      "Integrated analytics for tracking user behavior and improving engagement.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Backend architectures built to handle growth, scale, and future expansion.",
  },
];

export default function MobileApp() {
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
      {/* HERO SECTION */}
      <section
        ref={ref}
        className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/20 px-6 py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-white to-slate-50/80" />

        <motion.div
          style={{ y: yDeco }}
          className="pointer-events-none absolute -top-40 left-1/4 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-br from-teal-200/25 to-blue-200/20 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
              Mobile App Development
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
              Apps built for
              <br />
              <span className="text-teal-600">performance & scale</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Reliable, intuitive mobile applications engineered for
              iOS and Android ecosystems.
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-1">
              <ParallaxMedia src={AppHero} alt="App Development" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section
        ref={contentRef}
        className="relative bg-white px-6 py-24"
      >
        <div className="relative mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Mobile <span className="text-teal-600">Excellence</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

/* ---------------- FLIP CARD (FIXED 3D) ---------------- */

function FlipCard({ item, index, isContentInView }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      className="h-48 w-full perspective-[1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-white border border-teal-700/10 shadow-md flex items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <div className="w-2 h-2 rounded-full bg-teal-600 mb-3 mx-auto" />
            <h3 className="text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-md flex items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-sm leading-relaxed text-center">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
