import { NavLink } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { ArrowRight, Terminal, Layers, Cpu } from "lucide-react";

const Home = () => {
  return (
    <PageTransition>
      <div className="relative flex min-h-[80vh] flex-col justify-center items-center px-4 overflow-hidden text-white">
        
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance & full-time roles
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-4xl z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
            Building Digital Products <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              That Scale & Inspire.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Hi, I'm <span className="text-white font-medium">Aditya Goel</span>. A Frontend Engineer & UI Designer crafting high-performance, pixel-perfect web experiences.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 z-10 mb-16 w-full justify-center items-center">
          <NavLink
          
            to="projects"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-xl hover:bg-neutral-200 transition-all duration-200 shadow-lg shadow-white/5 w-full sm:w-auto justify-center"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NavLink>
          <NavLink
            to="contact"
            className="flex items-center justify-center px-6 py-3 text-sm font-medium border rounded-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
          >
            Let's Talk
          </NavLink>
        </div>

        {/* Tech Stack Bar */}
        <div className="z-10 border-t border-white/5 pt-8 w-full max-w-5xl text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-6">
            Core Tech Stack & Expertise
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400 text-sm">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Terminal className="w-4 h-4 text-indigo-400" /> <span>React / Next.js</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Layers className="w-4 h-4 text-purple-400" /> <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Cpu className="w-4 h-4 text-pink-400" /> <span>TypeScript</span>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default Home;