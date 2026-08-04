// PageTransition.jsx

import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -300,
    y: 300,
    rotate: -30,
    opacity: 0,
    scale: 0.8,
  },

  animate: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
  },

  exit: {
    x: 300,
    y: -300,
    rotate: 30,
    opacity: 0,
    scale: 0.8,
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;