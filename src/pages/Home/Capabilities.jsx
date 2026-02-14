import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import digitalfoundation from "../../assets/capabilities/digital-foundation.jpeg";
import digitalgrowth from "../../assets/capabilities/digital-growth.jpeg";
import multiplatform from "../../assets/capabilities/multi-platform.jpeg";
import scalablesystem from "../../assets/capabilities/scalable-systems.jpeg";
import uxdesign from "../../assets/capabilities/ux-design.jpeg";
import { ROUTES } from "../../routes/route";

const capabilities = [
  {
    title: "Web Experiences",
    desc: "Clean, fast, and scalable websites that clearly communicate your value.",
    image: digitalfoundation,
    route: ROUTES.SERVICE_WEB,
  },
  {
    title: "Mobile Applications",
    desc: "User-friendly mobile apps designed for real-world business needs.",
    image: multiplatform,
    route: ROUTES.SERVICE_APP,
  },
  {
    title: "Cloud & Systems",
    desc: "Reliable digital infrastructure that grows with your business.",
    image: scalablesystem,
    route: ROUTES.SERVICE_CLOUD,
  },
  {
    title: "Design & UX",
    desc: "Thoughtful design that makes technology simple and intuitive.",
    image: uxdesign,
    route: ROUTES.SERVICE_UIUX,
  },
  {
    title: "Digital Growth",
    desc: "Smart digital strategies focused on long-term results, not trends.",
    image: digitalgrowth,
    route: ROUTES.SERVICE_MARKETING,
  },
];

const Capabilities = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-teal-700">
            How METROSERV Helps Businesses Grow
          </h2>
          <p className="mt-6 text-xl font-semibold text-slate-600">
            We partner long-term — designing and building digital systems that
            stay reliable today and adaptable tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* IMAGE PANEL */}
          <div className="relative h-[460px] rounded-3xl overflow-hidden bg-slate-100">
            <AnimatePresence mode="wait">
              <motion.img
                key={capabilities[active].image}
                src={capabilities[active].image}
                alt={capabilities[active].title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0.4, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-white text-sm uppercase tracking-widest opacity-80">
                {capabilities[active].title}
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="space-y-8">
            {capabilities.map((item, i) => (
              <motion.div
                key={item.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => navigate(item.route)}
                className="group cursor-pointer border-b border-slate-200 pb-6 hover:pb-8 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl font-medium transition-colors duration-300
                      ${active === i ? "text-teal-600" : "text-slate-900"}
                    `}
                  >
                    {item.title}
                  </h3>

                  <ArrowRight
                    size={18}
                    className={`transition-all duration-300
                      ${active === i
                        ? "opacity-100 translate-x-1 text-teal-600"
                        : "opacity-0 group-hover:opacity-60"}
                    `}
                  />
                </div>

                <p className="mt-2 text-slate-600 max-w-lg">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Capabilities;
