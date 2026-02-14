import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import React from "react";

const ParallaxMedia = React.memo(({ src, alt }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Reduced parallax intensity for better performance
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative overflow-hidden rounded-[28px] shadow-lg will-change-transform"
    >
      <img
        src={src}
        alt={alt}
        className="w-full object-cover select-none"
        draggable={false}
        loading="lazy"
      />
    </motion.div>
  );
});

ParallaxMedia.displayName = 'ParallaxMedia';

export default ParallaxMedia;
