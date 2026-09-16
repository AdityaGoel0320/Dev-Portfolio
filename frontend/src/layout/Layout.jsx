import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/Navbar";
import FloatingRadialMenu from "../components/FloatingRadialMenu";
import Footer from "../components/Footer";

const pageVariants = {
  initial: {
    x: -200,
    y: 200,
    rotate: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
  },
  exit: {
    x: 200,
    y: -200,
    rotate: 20,
    opacity: 0,
  },
};

const pageTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

const Layout = () => {
  const location = useLocation();

  return (
    <>

    <div className="min-h-screen flex flex-col bg-[#030712] text-white overflow-hidden antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Structural Background Grid Lines (SaaS Hallmark) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header Sticky Container */}
      <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#030712]/70 backdrop-blur-md px-4 sm:px-8 lg:px-16 transition-all">
        <Navbar />
      </header>

      {/* Main Viewport Grid/Wrapper */}
      <main className="flex-1 flex flex-col relative w-full px-4 sm:px-8 lg:px-16 py-4 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="w-full flex-1 flex flex-col"
          >
            <div key={location.pathname} className="w-full flex-1 flex flex-col">
              <Outlet />
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Divider Lines */}
      {/* <div className="w-full border-t border-white/[0.04] px-4 sm:px-8 lg:px-16 py-6">
        <Footer />
      </div> */}

      {/* Floating Interactive Layer */}
      <div className="fixed bottom-6 right-6 z-50">
        <FloatingRadialMenu />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Layout;