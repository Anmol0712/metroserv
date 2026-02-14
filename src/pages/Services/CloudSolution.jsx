import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ParallaxMedia from "../../components/ui/ParallaxMedia";
import CloudHero from "../../assets/cloud-automation.jpeg";
import { ROUTES } from "../../routes/route";

const capabilities = [
  {
    title: "AWS & Azure Deployment",
    description:
      "Secure, scalable cloud deployments across AWS and Azure with optimized configurations.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Automated infrastructure provisioning using Terraform and modern IaC practices.",
  },
  {
    title: "CI/CD Pipelines",
    description:
      "Continuous integration and delivery pipelines ensuring rapid and reliable releases.",
  },
  {
    title: "Container Orchestration",
    description:
      "Kubernetes-based orchestration for scalable, containerized applications.",
  },
  {
    title: "Monitoring & Analytics",
    description:
      "Real-time monitoring, logging, and performance analytics across environments.",
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security architecture aligned with compliance standards.",
  },
];

export default function CloudSolution() {
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
        className="relative bg-gradient-to-br from-white via-slate-50 to-teal-50/20 px-6 py-24 sm:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-white to-slate-50/80" />

        <motion.div
          style={{ y: yDeco }}
          className="pointer-events-none absolute -top-40 right-1/3 h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-br from-teal-200/25 to-blue-200/20 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/50">
                <span className="inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
                  Cloud Automation
                </span>

                <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                  Scalable cloud
                  <br />
                  <span className="text-teal-600">infrastructure</span>
                </h1>

                <p className="mt-6 text-base sm:text-lg text-slate-600">
                  Automated cloud solutions that scale with your business
                  and optimize performance.
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm p-1">
                <ParallaxMedia src={CloudHero} alt="Cloud Automation" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section
        ref={contentRef}
        className="relative bg-gradient-to-b from-white via-white to-slate-50/30 px-6 py-20 sm:py-24 overflow-hidden"
      >
        <div className="relative mx-auto max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Cloud <span className="text-teal-600">Excellence</span>
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

/* ---------------- PERFECT 3D FLIP CARD ---------------- */

function FlipCard({ item, index, isContentInView }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isContentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      className="relative h-52"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
          }}
          className="rounded-2xl bg-white/60 backdrop-blur-sm border border-teal-700/10 shadow-sm flex items-center justify-center p-6"
        >
          <div className="text-center">
            <div className="w-2 h-2 rounded-full bg-teal-600 mb-3 mx-auto" />
            <h3 className="text-sm font-semibold text-slate-900 tracking-tight">
              {item.title}
            </h3>
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
          className="rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-md flex items-center justify-center p-6"
        >
          <p className="text-sm leading-relaxed text-center">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
