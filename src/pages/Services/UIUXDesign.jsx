import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ParallaxMedia from "../../components/ui/ParallaxMedia";
import UIUXHero from "../../assets/uiux-design.jpeg";
import { ROUTES } from "../../routes/route";

const capabilities = [
  {
    title: "User Research & Personas",
    description:
      "Deep user research and persona development to align product decisions with real user needs.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Interactive prototypes that validate ideas before full-scale development.",
  },
  {
    title: "Design Systems",
    description:
      "Scalable design systems that ensure consistency across products and teams.",
  },
  {
    title: "Interaction Design",
    description:
      "Thoughtful micro-interactions that enhance usability and delight users.",
  },
  {
    title: "Usability Testing",
    description:
      "Data-backed usability testing to refine flows and improve engagement.",
  },
  {
    title: "Design Thinking",
    description:
      "Human-centered design thinking workshops to solve complex product challenges.",
  },
];

export default function UIUXDesign() {
  const ref = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yDeco = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isContentInView = useInView(contentRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        ref={ref}
        className="relative bg-gradient-to-br from-slate-50 via-white to-teal-50/20 px-6 py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-white to-slate-50/80" />

        <motion.div
          style={{ y: yDeco }}
          className="pointer-events-none absolute -top-40 left-1/3 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-br from-teal-200/25 to-blue-200/20 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/50">

                <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
                  UI / UX Design
                </span>

                <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                  Intuitive experiences
                  <br />
                  <span className="text-teal-600">that truly connect</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-slate-600">
                  We design human-centered digital products that blend usability,
                  clarity, and aesthetic excellence.
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
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-1">
                <ParallaxMedia src={UIUXHero} alt="UI/UX Design" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section
        ref={contentRef}
        className="relative bg-gradient-to-b from-white to-slate-50 px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Design <span className="text-teal-600">Capabilities</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <FlipCard
                key={item.title}
                item={item}
                index={index}
                isInView={isContentInView}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= FLIP CARD ================= */

function FlipCard({ item, index, isInView }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative h-52 cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl bg-white/70 backdrop-blur-sm border border-teal-700/10 shadow-md flex items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-teal-600 mb-3 mx-auto"
            />
            <h3 className="text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-lg flex items-center justify-center p-6"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <p className="text-sm leading-relaxed text-center">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
