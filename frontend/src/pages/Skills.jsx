import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import data from "../data/skills";

// ==========================================
// CENTRAL CONFIGURATION MATRIX (JSON SCHEMA)
// Optimized for modern ATS algorithms and semantic SEO.
// ==========================================
const SKILLS_DATA_MATRIX = data;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(SKILLS_DATA_MATRIX[0]);

  return (
    <PageTransition>
      <section className="w-full max-w-6xl mx-auto px-4 py-6 relative">
        
        {/* Deep Field Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[150px] rounded-full pointer-events-none" />

        {/* --- Header Architecture --- */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-md font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-300 mb-5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Skills
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            Technical Matrix & <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Production Implementations.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-400 font-light">
            An overview of my engineering capabilities and architectural philosophies. Select a specialized layer control deck to trace its core codebase mechanisms, runtime logic, and real production impact metrics.
          </p>
        </div>

        {/* --- Studio Two-Column Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start">
          
          {/* LEFT COLUMN: Deck Control Buttons */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-semibold tracking-widest text-neutral-500 uppercase block mb-1">
              Select Execution Environment
            </span>

            {SKILLS_DATA_MATRIX.map((category) => {
              const isSelected = activeCategory?.id === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left relative rounded-xl border transition-all duration-300 p-5 flex flex-col gap-3 overflow-hidden ${
                    isSelected 
                      ? "bg-white/[0.03] border-white/20 shadow-xl" 
                      : "bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.02] hover:border-white/10"
                  }`}
                  style={{
                    boxShadow: isSelected ? `0 10px 30px ${category.glowColor}` : "none"
                  }}
                >
                  {/* Backdrop Glow Accent */}
                  <div className={`absolute -inset-px bg-gradient-to-r ${category.accent} opacity-0 ${isSelected ? 'opacity-100' : ''} transition-opacity duration-500 blur-md pointer-events-none -z-10`} />

                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-base ${category.textAccent}`}>
                        <i className={category.icon} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {category.title}
                        </h3>
                        <p className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase mt-0.5">
                          {category.badge}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      animate={{ x: isSelected ? 3 : 0 }}
                      className={`text-xs ${category.textAccent}`}
                    >
                      <i className="fas fa-chevron-right" />
                    </motion.div>
                  </div>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed pl-1">
                    {category.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Terminal Deep-Dive Panel */}
          <div className="relative w-full min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900/90 to-[#050811]/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Code System Frame Header */}
             

                  {/* Technology Logo Grid Row */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-3">
                      Core Technology Stack Modules
                    </span>
                    <div className="flex justify-start items-center flex-wrap gap-3">
                      {activeCategory.logos.map((logo, lIdx) => (
                        <div key={lIdx} className="flex items-center gap-2.5 p-2.5 px-4 border rounded-lg  border-white/[0.04] bg-white/[0.01] hover:border-white/10 transition-all duration-200">
                          <div className="w-7 h-7 rounded bg-neutral-950 flex items-center justify-center text-sm border border-white/5">
                            <i className={logo.class} />
                          </div>
                          <span className="text-xs font-medium text-neutral-300 tracking-tight truncate">{logo.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architectural Narrative Deep Dive */}
                  <div className="mb-8">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                      Engineering Approach & Competency Description
                    </span>
                    <p className="text-sm leading-relaxed text-neutral-300 font-light">
                      {activeCategory.deepDive}
                    </p>
                  </div>

                  {/* Applied Project Instance Block */}
                  <div className="pt-6 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-3">
                      Applied Production Instance Showcase
                    </span>

                    {activeCategory.projects.map((proj, pIdx) => (
                      <div key={pIdx} className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-white/[0.02] border border-white/[0.05] p-3 rounded-lg">
                          <h4 className="text-sm font-bold text-white tracking-tight">
                            {proj.name}
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 border border-white/10 text-neutral-400 self-start sm:self-auto">
                            {proj.tech}
                          </span>
                        </div>

                        <p className="text-xs text-neutral-400 leading-relaxed font-light pl-1">
                          {proj.description}
                        </p>

                        {/* Bulleted Architecture Points detailing production-level decisions */}
                        <div className="pl-1 space-y-2">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">Key Engineering Implementations:</span>
                          <ul className="space-y-2 text-xs text-neutral-400 font-light">
                            {proj.architecturePoints.map((point, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-2.5">
                                <i className={`fas fa-code-merge mt-0.5 text-[10px] ${activeCategory.textAccent}`} />
                                <span className="leading-normal">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Production Metrics Row */}
                        <div className="mt-4 flex items-center gap-2.5 text-xs text-emerald-400 font-mono bg-emerald-500/[0.03] border border-emerald-500/10 rounded-lg p-3">
                          <i className="fas fa-chart-line text-sm" />
                          <div className="leading-tight">
                            <span className="text-[9px] uppercase text-neutral-500 block font-sans tracking-wide mb-0.5">Quantifiable Codebase Optimization Impact:</span>
                            <span className="font-semibold">{proj.metric}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

          
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </section>
    </PageTransition>
  );
};

export default Skills;