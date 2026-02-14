import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ParallaxMedia from "../../components/ui/ParallaxMedia";
import DigitalHero from "../../assets/digital-marketing.jpeg";
import { ROUTES } from "../../routes/route";

const capabilities = [
  {
    title: "SEO & Content Strategy",
    description:
      "Search-optimized content strategies that improve visibility and long-term authority.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Platform-focused engagement strategies designed to grow audience and loyalty.",
  },
  {
    title: "PPC & Paid Ads",
    description:
      "High-converting ad campaigns optimized for ROI and performance tracking.",
  },
  {
    title: "Email Marketing",
    description:
      "Automated email journeys built for nurturing and retention.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Clear dashboards and actionable insights powered by data.",
  },
  {
    title: "Brand Strategy",
    description:
      "Positioning frameworks that differentiate and build long-term brand equity.",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function DigitalMarketing() {
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
          className="pointer-events-none absolute -top-40 left-1/4 h-[320px] w-[320px] rounded-full bg-gradient-to-br from-teal-200/25 to-blue-200/20 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease }}
              className="relative"
            >
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">

                <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
                  Digital Marketing
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
                  Growth-driven
                  <br />
                  <span className="text-teal-600">digital strategies</span>
                </h1>

                <p className="mt-6 text-lg text-slate-600">
                  Data-driven marketing campaigns that connect with your
                  audience and drive measurable, long-term results.
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
              transition={{ duration: 1, ease }}
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-1">
                <ParallaxMedia src={DigitalHero} alt="Digital Marketing" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section
        ref={contentRef}
        className="relative bg-gradient-to-b from-white to-slate-50/30 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Marketing <span className="text-teal-600">Excellence</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, index) => (
              <FlipCard
                key={item.title}
                item={item}
                index={index}
                inView={isContentInView}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


/* ================= PERFECT FLIP CARD ================= */

function FlipCard({ item, index, inView }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      className="relative h-52 cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >

        {/* FRONT */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 rounded-2xl bg-white/70 backdrop-blur-sm border border-teal-700/10 shadow-md flex items-center justify-center p-6"
        >
          <div className="text-center">
            <div className="w-2 h-2 rounded-full bg-teal-600 mb-4 mx-auto" />
            <h3 className="text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-xl flex items-center justify-center p-6"
        >
          <p className="text-sm text-center leading-relaxed">
            {item.description}
          </p>
        </div>

      </motion.div>
    </motion.div>
  );
}
