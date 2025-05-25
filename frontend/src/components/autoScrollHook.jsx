import { motion, useMotionValue, useAnimationFrame } from "motion/react";
import { useRef } from "react";

export const AutoScrollBanner = () => {
  const content =
    "From idea to interaction, I shape how it works and how it feels.";
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const speed = 0.5; // adjust speed here
  const isHovering = useRef(false);

  useAnimationFrame(() => {
    if (!isHovering.current) {
      x.set(x.get() - speed); // move left
      const container = containerRef.current;
      if (container) {
        const totalWidth = container.scrollWidth / 2;
        if (Math.abs(x.get()) >= totalWidth) {
          x.set(0); // reset loop
        }
      }
    }
  });

  const handleMouseEnter = () => {
    isHovering.current = true;
  };

  const handleMouseLeave = () => {
    isHovering.current = false;
  };

  return (
    <div className="w-full overflow-hidden bg-[#626F47] text-1xl text-white">
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex whitespace-nowrap cursor-default"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Duplicate the content twice for seamless loop */}
        {[...Array(2)].flatMap((_, i) =>
          [...Array(100)].map((_, j) => (
            <div key={`${i}-${j}`} className="px-10">
              {content}
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};
