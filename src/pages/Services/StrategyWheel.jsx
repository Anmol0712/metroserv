import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Lightbulb,
  Users,
  Settings,
  ShieldCheck,
  Rocket,
  BarChart3,
} from "lucide-react";

const segments = [
  {
    title: "Strategy & Discovery",
    icon: Lightbulb,
    description:
      "We define roadmap, positioning, and business strategy aligned with measurable impact.",
  },
  {
    title: "UX & Design",
    icon: Users,
    description:
      "Human-centered interfaces focused on clarity, usability, and conversion.",
  },
  {
    title: "Engineering",
    icon: Settings,
    description:
      "Scalable architecture and robust systems engineered for performance.",
  },
  {
    title: "Security & Cloud",
    icon: ShieldCheck,
    description:
      "Enterprise-grade cloud infrastructure and security best practices.",
  },
  {
    title: "Growth Enablement",
    icon: Rocket,
    description:
      "Growth frameworks and experimentation systems to scale faster.",
  },
  {
    title: "Analytics & Insights",
    icon: BarChart3,
    description:
      "Data-driven intelligence powering better decisions and clarity.",
  },
];

export default function StrategyWheel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(null);

  // Responsive sizing based on viewport
  const getResponsiveSize = () => {
    if (typeof window === 'undefined') return { size: 520, nodeSize: 120 };
    const width = window.innerWidth;
    if (width < 640) return { size: 320, nodeSize: 80 };
    if (width < 768) return { size: 400, nodeSize: 100 };
    if (width < 1024) return { size: 460, nodeSize: 110 };
    return { size: 520, nodeSize: 120 };
  };

  const [dimensions, setDimensions] = useState(getResponsiveSize);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getResponsiveSize());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { size, nodeSize } = dimensions;
  const centerDiameter =
    size < 640 ? 160 :
    size < 768 ? 192 :
    size < 1024 ? 224 :
    256;

  const nodeRadius = centerDiameter / 2 + nodeSize / 2 + 70;



  const segmentAngle = 360 / segments.length;

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-br from-white via-white to-teal-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-black text-teal-700"
        >
          Our Delivery Framework
        </motion.h2>

        <div
          className="relative mt-16 sm:mt-20 md:mt-24 mx-auto isolate flex justify-center">
          <div className="relative mx-auto"
          style={{ width: `${size}px`, height: `${size}px` }}
          >
        
          {/* Service Nodes */}
          <div className="absolute inset-0 z-30">
            {segments.map((segment, index) => {
              const Icon = segment.icon;

              const angleRad = ((index * segmentAngle - 90)* Math.PI) / 180;

                const x = Math.cos(angleRad) * nodeRadius;
                const y = Math.sin(angleRad) * nodeRadius;


              return (
                <motion.div
                  key={segment.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="absolute"
                  style={{
                    left: `calc(39% + ${x}px)`,
                    top: `calc(40% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="flex flex-col items-center cursor-pointer">

                    {/* Circular Indicator */}
                    <div className="relative">
                      {active === index && (
                        <motion.svg
                          className="absolute -inset-3"
                          viewBox="0 0 100 100"
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#0f766e"
                            strokeWidth="4"
                            strokeDasharray="40 15"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      )}

                      <motion.div
                        animate={
                          active === index
                            ? { scale: 1.15 }
                            : { scale: 1 }
                        }
                        className={`
                          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
                          backdrop-blur-xl border border-white/40 shadow-xl
                          transition-colors duration-300 relative
                          ${
                            active === index
                              ? "bg-teal-600 text-white"
                              : "bg-white/90 text-teal-600"
                          }
                        `}
                      >
                        <Icon size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      </motion.div>
                    </div>

                    <p
                      className={`
                        mt-2 sm:mt-3 text-xs font-medium w-20 sm:w-24 md:w-28 text-center transition-colors leading-tight
                        ${
                          active === index
                            ? "text-teal-700"
                            : "text-slate-600"
                        }
                      `}
                    >
                      {segment.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Core */}
          <div
            className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 -translate-x-1/2 -translate-y-1/2 
            rounded-full bg-gradient-to-br from-teal-600 to-teal-800 
            flex items-center justify-center shadow-2xl z-20 px-6 sm:px-8"
          >
            <div className="text-center">
              {active === null ? (
                <>
                  <span className="text-white font-bold text-lg sm:text-xl md:text-2xl block leading-tight">
                    Core System
                  </span>
                  <div className="h-px w-10 sm:w-12 md:w-14 bg-teal-400/50 mx-auto my-2 sm:my-3" />
                  <span className="text-teal-100 text-xs sm:text-sm md:text-base uppercase tracking-widest">
                    Framework
                  </span>
                </>
              ) : (
                <>
                  <motion.h3
                    key={segments[active].title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-white font-semibold text-base sm:text-lg md:text-xl"
                  >
                    {segments[active].title}
                  </motion.h3>

                  <motion.p
                    key={segments[active].description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-teal-100 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 leading-relaxed"
                  >
                    {segments[active].description}
                  </motion.p>
                </>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
