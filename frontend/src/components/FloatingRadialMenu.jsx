import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Home", icon: "fas fa-home", route: "/" },
  { title: "About me", icon: "fas fa-user", route: "/about" },
  { title: "Skills", icon: "fas fa-code", route: "/skills" },
  { title: "Projects", icon: "fas fa-folder-open", route: "/projects" },
  { title: "Experience", icon: "fas fa-briefcase", route: "/experience" },
  { title: "Resume", icon: "fas fa-file-alt", route: "/resume" },
  { title: "Contact", icon: "fas fa-envelope", route: "/contact" },
];

const FloatingRadialMenu = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const radius = 140; // Perfect spatial gap to keep layout readable without clipping screen edges

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleNavigate = (route) => {
    navigate(route);
    setOpen(false);
    setSearch("");
  };

  return (
    <>
      {/* Premium Backdrop Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[998] bg-[#030712]/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpen(false);
              setSearch("");
            }}
          />
        )}
      </AnimatePresence>

      {/* Main Trigger Anchor Control */}
      <div className="fixed right-8 bottom-[50vh] translate-y-1/2 z-[9999]">
        
        {/* Radial Generated Cluster Elements */}
        {open && filteredItems.map((item, index) => {
          const total = filteredItems.length;

          // =========================================================================
          // TRUE 180-DEGREE SEMI-CIRCLE ARC PROJECTION (LEFT-FACING CHASSIS)
          // 90 degrees = Pointing straight up, 270 degrees = Pointing straight down
          // =========================================================================
          const startAngle = 90;
          const endAngle = 270;

          const angle =
            total === 1
              ? 180
              : startAngle + (index * (endAngle - startAngle)) / (total - 1);

          const rad = (angle * Math.PI) / 180;

          // Cartesian positioning coordinates shifting clean relative vectors out to the left
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          const active = location.pathname === item.route;

          return (
            <motion.button
              key={item.route}
              onClick={() => handleNavigate(item.route)}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
              animate={{
                x: x,
                y: y,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0.3,
              }}
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 26,
                delay: index * 0.015,
              }}
              whileHover={{ scale: 1.1 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none flex flex-col items-center gap-1 w-20"
            >
              {/* Permanent Contextual Label */}
              <span className={`text-[9px] font-mono font-medium tracking-wider uppercase transition-colors duration-300 text-center select-none ${
                active ? "text-indigo-400 font-bold" : "text-neutral-400"
              }`}>
                {item.title}
              </span>

              {/* Icon Container Node */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 border backdrop-blur-xl ${
                  active
                    ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    : "bg-neutral-900/90 text-neutral-400 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                <i className={`${item.icon} text-xs`} />
              </div>
            </motion.button>
          );
        })}

        {/* Ambient Under-Glow Halo */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1.5 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute inset-0 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Main Floating Neon Action Switcher */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.92 }}
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 600, damping: 25 }}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center justify-center shadow-[0_8px_32px_rgba(99,102,241,0.3)] border border-white/20 focus:outline-none z-50"
        >
          <i className="fas fa-plus text-base" />
        </motion.button>
        
      </div>
    </>
  );
};

export default FloatingRadialMenu;