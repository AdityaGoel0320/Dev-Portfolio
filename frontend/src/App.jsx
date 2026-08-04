import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // If using Framer Motion

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import CustomCursor from "./components/CustomCursor";

function App() {
  // 1. Grab the current location object
  const location = useLocation();

  return (
    /* 2. Wrap Routes in AnimatePresence to handle exit animations */
    <AnimatePresence mode="wait">
      {/* 3. Pass location and set the key to the current pathname */}
      <div className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30 cursor-none select-none">
      <CustomCursor />
      <Routes location={location} key={location.pathname}>
        
        {/* Parent Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/admin" element={<Admin/>} />
        </Route>

      </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;