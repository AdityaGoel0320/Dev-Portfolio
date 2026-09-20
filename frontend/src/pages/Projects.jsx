import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import data from "../data/project";

// =========================================================================
// CENTRAL PROJECTS CONFIGURATION MATRIX (JSON SCHEMA)
// 20 high-level architectures with full color and advanced controllers
// =========================================================================
const PROJECTS_DATA_MATRIX = data;

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [activeVideoId, setActiveVideoId] = useState(null); // Global control: allows only ONE video to play at a time
  const [isPaused, setIsPaused] = useState(false);

  const videoRefs = useRef({}); // Stores instance references for runtime control mapping
  const containerRefs = useRef({}); // Used to safely trigger element viewport full-screen expansions

  const uniqueCategories = ["All", ...new Set(PROJECTS_DATA_MATRIX.map((p) => p.category))];

  const filteredProjects = PROJECTS_DATA_MATRIX.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  const handlePlayVideo = (id) => {
    // If another project video is active, safely pause it first
    if (activeVideoId && videoRefs.current[activeVideoId]) {
      videoRefs.current[activeVideoId].pause();
    }
    setActiveVideoId(id);
    setIsPaused(false);
    setTimeout(() => {
      if (videoRefs.current[id]) videoRefs.current[id].play().catch(() => {});
    }, 50);
  };

  const handleStopVideo = (id) => {
    if (videoRefs.current[id]) {
      videoRefs.current[id].pause();
      videoRefs.current[id].currentTime = 0;
    }
    if (activeVideoId === id) {
      setActiveVideoId(null);
      setIsPaused(false);
    }
  };

  const handleTogglePause = (id) => {
    if (!videoRefs.current[id]) return;
    if (isPaused) {
      videoRefs.current[id].play().catch(() => {});
      setIsPaused(false);
    } else {
      videoRefs.current[id].pause();
      setIsPaused(true);
    }
  };

  const handleTriggerFullScreen = (id) => {
    const el = containerRefs.current[id];
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  };

  return (
    <PageTransition>
      <section className="w-full max-w-7xl mx-auto px-4 py-6 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/[0.02] blur-[160px] rounded-full pointer-events-none -z-10" />

        {/* --- Header Deck --- */}
        <div className="mb-14">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-300 mb-5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Repository.Index.Initialized // {PROJECTS_DATA_MATRIX.length} Active Ecosystems
          </div> */}

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            Architected Works & <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Software Solutions.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-400 font-light">
            A 3-column micro-blueprint ledger displaying server infrastructure configurations, high-concurrency data handlers, and optimized frontend matrices.
          </p>
        </div>

        {/* --- Interactive Dynamic Filters --- */}
        <div className="flex flex-wrap items-center gap-1.5 mb-12 pb-5 border-b border-white/[0.06]">
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (activeVideoId) handleStopVideo(activeVideoId);
                setFilter(cat);
              }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium font-mono border transition-all duration-200 focus:outline-none ${
                filter === cat
                  ? "bg-white text-black border-white shadow-xl"
                  : "bg-white/[0.01] text-white border-white/10 hover:border-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- 3-COLUMN ENTERPRISE BLUEPRINT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isPlayingThisVideo = activeVideoId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="group rounded-xl border border-white/[0.05] bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-xl p-5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    {/* Viewport Screen Chassis with full reference bindings */}
                    <div 
                      ref={(el) => (containerRefs.current[project.id] = el)}
                      className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/5 bg-neutral-950 shadow-inner mb-4 flex flex-col"
                    >
                      <AnimatePresence mode="wait">
                        {!isPlayingThisVideo ? (
                          /* THUMBNAIL VIEW (RICH FULL COLOR LOOK) */
                          <motion.div 
                            key="thumb"
                            className="absolute inset-0 w-full h-full"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          >
                            <img 
                              src={project.thumbnail} 
                              alt={project.title} 
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.01]" 
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/10">
                              <button 
                                onClick={() => handlePlayVideo(project.id)}
                                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform border border-white/10 focus:outline-none"
                              >
                                <i className="fas fa-play text-[10px] ml-0.5" />
                              </button>
                            </div>
                          </motion.div>
                        ) : (
                          /* ADVANCED VIDEO CONTROLLER HUD INTERFACE */
                          <motion.div 
                            key="vid"
                            className="absolute inset-0 w-full h-full bg-black"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          >
                            <video 
                              ref={(el) => (videoRefs.current[project.id] = el)}
                              src={project.videoDemo} 
                              loop 
                              muted 
                              playsInline 
                              className="w-full h-full object-cover"
                            />
                            
                            {/* Overlay Controls Overlay HUD */}
                            <div className="absolute inset-x-2 top-2 flex items-center justify-between bg-neutral-900/90 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[8px] font-mono text-neutral-300 z-20">
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                EXEC_STREAM.SYS
                              </span>
                              <div className="flex items-center gap-2">
                                <button onClick={() => handleTogglePause(project.id)} className="hover:text-white focus:outline-none">
                                  <i className={`fas ${isPaused ? "fa-play" : "fa-pause"} text-[7px]`} /> {isPaused ? "RESUME" : "PAUSE"}
                                </button>
                                <button onClick={() => handleTriggerFullScreen(project.id)} className="hover:text-indigo-400 focus:outline-none text-neutral-400">
                                  <i className="fas fa-expand text-[7px]" /> MAX
                                </button>
                                <button onClick={() => handleStopVideo(project.id)} className="hover:text-rose-400 focus:outline-none text-neutral-500 font-bold">
                                  <i className="fas fa-stop text-[7px]" /> EXIT
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Meta Identifiers Context */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-indigo-300">
                          {project.category}
                        </span>
                        <span className="text-[8px] font-mono text-neutral-600">ID: // {project.id.slice(0, 6)}</span>
                      </div>

                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>

                      <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>

                      <ul className="space-y-1.5 pt-1 pl-0.5">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-neutral-400 font-light">
                            <i className="fas fa-code-commit mt-1 text-[8px] text-neutral-600 flex-shrink-0" />
                            <span className="line-clamp-2 leading-tight">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Operational Footer Assembly */}
                  <div className="mt-5 pt-4 border-t border-white/[0.04] space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-1.5 py-0.5 rounded bg-neutral-950 border border-white/[0.03] text-neutral-400 font-mono text-[9px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/[0.02] border border-emerald-500/10 rounded-lg p-2">
                      <i className="fas fa-chart-line text-xs" />
                      <span className="truncate tracking-tight">{project.metric}</span>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-white text-black py-1.5 text-[11px] font-semibold hover:bg-neutral-200 transition-all"
                        >
                          <i className="fas fa-external-link-alt text-[8px]" /> Live
                        </a>
                      )}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 py-1.5 text-[11px] font-semibold text-white transition-all"
                      >
                        <i className="fab fa-github text-xs" /> Codebase
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;