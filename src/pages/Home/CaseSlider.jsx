import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import React from "react";
import { useDeviceDetection, getAnimationConfig } from "../../utils/performance";

const SWIPE_THRESHOLD = 60;
const WHEEL_THRESHOLD = 40;

const CaseSlider = React.memo(() => {
  const [active, setActive] = useState(0);
  const deviceInfo = useDeviceDetection();
  const { isMobile, isLowEnd } = deviceInfo;
  const animationConfig = getAnimationConfig(deviceInfo);
  const startX = useRef(0);
  const dragging = useRef(false);
  const wheelLock = useRef(false);

  const slides = useMemo(() => [
    {
      title: "Digital Platforms & Web Experiences",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },
    {
      title: "Multi-Device & Mobile Experiences",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    },
    {
      title: "Scalable Cloud & Infrastructure",
      image: "https://flex.com/wp-content/uploads/2022/11/scalable-cloud-infrastructure-0.jpg",
    },
    {
      title: "Human-Centric Product Design",
      image: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg",
    },
    {
      title: "Digital Growth & Analytics",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    },
    {
      title: "End-to-End Digital Solutions",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    },
  ], []);

  /* ---------------- Detect mobile ---------------- */
  // Mobile detection is now handled by useDeviceDetection hook

  /* ---------------- Auto slide (calm) ---------------- */
  useEffect(() => {
    // Disable auto-slide on low-end devices or when reduced motion is preferred
    if (isLowEnd || animationConfig.disabled) return;
    
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, isLowEnd ? 8000 : 5200); // Slower on low-end devices

    return () => clearInterval(id);
  }, [slides.length, isLowEnd, animationConfig.disabled]);

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setActive((p) => (p - 1 + slides.length) % slides.length), [slides.length]);

  /* ---------------- Input handling ---------------- */
  const onTouchStart = useCallback((e) => (startX.current = e.touches[0].clientX), []);
  const onTouchEnd = useCallback((e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) diff > 0 ? next() : prev();
  }, [next, prev]);

  const onMouseDown = useCallback((e) => {
    dragging.current = true;
    startX.current = e.clientX;
  }, []);

  const onMouseUp = useCallback((e) => {
    if (!dragging.current) return;
    dragging.current = false;
    const diff = startX.current - e.clientX;
    if (Math.abs(diff) > SWIPE_THRESHOLD) diff > 0 ? next() : prev();
  }, [next, prev]);

  const onWheel = useCallback((e) => {
    if (wheelLock.current) return;

    const delta =
      Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    if (Math.abs(delta) > WHEEL_THRESHOLD) {
      delta > 0 ? next() : prev();
      wheelLock.current = true;
      setTimeout(() => (wheelLock.current = false), 800);
    }
  }, [next, prev]);
  

  /* ---------------- Position logic (NO shuffle) ---------------- */
  const relative = (i) => {
    const diff = i - active;
    const half = slides.length / 2;
    return diff > half
      ? diff - slides.length
      : diff < -half
      ? diff + slides.length
      : diff;
  };

  const cardStyle = useCallback((i) => {
    const r = relative(i);

    if (isMobile) {
      return r === 0
        ? "z-30 opacity-100 scale-100 translate-x-0 will-change-transform"
        : "opacity-0 scale-95 pointer-events-none";
    }

    if (r === 0)
      return "z-30 scale-100 opacity-100 translate-x-0 will-change-transform";

    if (r === 1)
      return "z-20 scale-[0.94] opacity-70 translate-x-[55%] will-change-transform";

    if (r === -1)
      return "z-20 scale-[0.94] opacity-70 -translate-x-[55%] will-change-transform";

    return "z-0 scale-[0.9] opacity-0";
  }, [isMobile, relative]);

  return (
    <section className="bg-slate-50 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2 className="text-6xl font-bold text-teal-700">
            What We Build
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Thoughtfully engineered digital solutions — built to last.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative h-[460px] flex items-center justify-center select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onWheel={onWheel}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className={`
                absolute w-[80%] md:w-[60%] h-full
                rounded-[28px] overflow-hidden
                transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                ${cardStyle(i)}
              `}
            >
              <img
                src={s.image}
                alt={s.title}
                draggable={false}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/5" />

              <div className="absolute bottom-6 left-6 bg-black/25 px-4 py-2 rounded-lg">
                <h3 className="text-white text-xl font-medium">
                  {s.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="mt-10 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${i === active
                  ? "w-8 bg-teal-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"}
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
});

CaseSlider.displayName = 'CaseSlider';

export default CaseSlider;
