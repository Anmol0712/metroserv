import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/route";

import AppDev from "../../assets/app-development.jpeg";
import WebDev from "../../assets/website-development.jpeg";
import UIUX from "../../assets/uiux-design.jpeg";
import Cloud from "../../assets/cloud-automation.jpeg";
import Marketing from "../../assets/digital-marketing.jpeg";

const services = [
  {
    title: "App Development",
    desc:
      "High-performance applications crafted for scalability, reliability, and seamless user experience across devices.",
    image: AppDev,
    route: ROUTES.SERVICE_APP,
  },
  {
    title: "Website Development",
    desc:
      "Responsive websites engineered to feel intuitive and powerful on every screen — from mobile to desktop.",
    image: WebDev,
    route: ROUTES.SERVICE_WEB,
  },
  {
    title: "UI / UX Design",
    desc:
      "Thoughtfully designed interfaces that balance aesthetics, usability, and long-term product clarity.",
    image: UIUX,
    route: ROUTES.SERVICE_UIUX,
  },
  {
    title: "Cloud Automation",
    desc:
      "Secure, scalable cloud automation that streamlines operations and accelerates business growth.",
    image: Cloud,
    route: ROUTES.SERVICE_CLOUD,
  },
  {
    title: "Digital Marketing",
    desc:
      "Data-driven marketing strategies that amplify visibility, engagement, and measurable results.",
    image: Marketing,
    route: ROUTES.SERVICE_MARKETING,
  },
];

function ParallaxImage({ src, alt }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.03, 1]);

  return (
    <motion.div ref={ref} style={{ y, scale }}>
      <img
        src={src}
        alt={alt}
        draggable={false}
        className="w-full max-w-xl mx-auto rounded-[28px]"
      />
    </motion.div>
  );
}

export default function CardSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      {/* ===== Top Fade Blend (connects with hero) ===== */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      {/* ===== Bottom Fade ===== */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      {/* ===== Subtle Vignette Frame ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/[0.02] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/[0.02] to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 space-y-48 relative z-20">

        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8 }}
            className={`grid items-center gap-24 lg:grid-cols-2 ${
              i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
            }`}
          >
            {/* Image */}
            <div className={`${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
              <div className="relative rounded-[32px] overflow-hidden">
                <ParallaxImage src={service.image} alt={service.title} />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
                {service.title}
              </h3>

              <p className="mt-8 text-lg text-slate-600 leading-relaxed">
                {service.desc}
              </p>

              <Link
                to={service.route}
                className="group inline-flex items-center mt-8 text-teal-600 font-semibold"
              >
                Learn more
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            to={ROUTES.CONTACT}
            className="inline-flex items-center justify-center
                       rounded-full bg-slate-900 px-14 py-5
                       text-white text-sm font-semibold
                       transition-all duration-500
                       hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-600/30"
          >
            Start Your Project
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
