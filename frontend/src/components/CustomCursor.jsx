import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Raw mouse matrix coordinate points
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Physics spring mappings for the smooth lag-less trailing neon dot
  const springConfig = { stiffness: 450, damping: 25, mass: 0.35 };
  const trailingX = useSpring(cursorX, springConfig);
  const trailingY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable completely on mobile touch interfaces to conserve memory structures
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Scan layout for focus elements and apply listeners
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .group, iframe, video'
      );
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    addHoverListeners();
    const domObserver = new MutationObserver(addHoverListeners);
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      domObserver.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* =========================================================================
          1. RADICAL NEON CROSSHAIR STRUCTURE (ANCHORED EXACTLY ON CURSOR LOCATION)
          ========================================================================= */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999] flex items-center justify-center"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        {/* Horizontal Laser Line Axis */}
        <motion.div
          className="absolute bg-cyan-400"
          animate={{
            width: isClicked ? 4 : isHovered ? 40 : 20,
            height: isHovered ? 2 : 1.5,
            boxShadow: isHovered 
              ? "0 0 12px #22d3ee, 0 0 4px #22d3ee" 
              : "0 0 6px #22d3ee",
            backgroundColor: isClicked ? "#f43f5e" : isHovered ? "#ec4899" : "#22d3ee"
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />

        {/* Vertical Laser Line Axis */}
        <motion.div
          className="absolute bg-cyan-400"
          animate={{
            height: isClicked ? 4 : isHovered ? 40 : 20,
            width: isHovered ? 2 : 1.5,
            boxShadow: isHovered 
              ? "0 0 12px #22d3ee, 0 0 4px #22d3ee" 
              : "0 0 6px #22d3ee",
            backgroundColor: isClicked ? "#f43f5e" : isHovered ? "#ec4899" : "#22d3ee"
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.div>

      {/* =========================================================================
          2. THE ANIMATED HIGH-SPRING NEON SPARK (FLUIDLY TRAILING THE CROSSHAIR)
          ========================================================================= */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[999998] mix-blend-screen"
        style={{ x: trailingX, y: trailingY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: isClicked ? 6 : isHovered ? 3.5 : 1.5,
          backgroundColor: isClicked ? "#f43f5e" : isHovered ? "#d946ef" : "#a855f7",
          boxShadow: isClicked
            ? "0 0 25px #f43f5e, 0 0 10px #f43f5e"
            : isHovered
            ? "0 0 20px #d946ef, 0 0 8px #d946ef"
            : "0 0 10px #a855f7, 0 0 4px #a855f7"
        }}
        transition={{ type: "tween", duration: 0.05 }}
      />
    </>
  );
};

export default CustomCursor;