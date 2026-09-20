import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { data } from "../data/experience";

// =========================================================================
// CENTRAL EXPERIENCE DATA MATRIX (JSON SCHEMA)
// Easily scale up your profile! Add company logos, full addresses, and tags.
// =========================================================================
const EXPERIENCE_DATA_MATRIX = data ;

const Experience = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredExperiences = EXPERIENCE_DATA_MATRIX.filter((exp) => {
    if (filter === "all") return true;
    return exp.type === filter;
  });

  return (
    <PageTransition>
      <section className="w-full max-w-5xl mx-auto px-4 py-6 relative">

        {/* Dynamic Background Adaptive Spotlight (Changes glow based on hovered element) */}
        <div
          className="absolute top-1/4 right-10 w-[500px] h-[500px] blur-[160px] rounded-full pointer-events-none transition-all duration-700 ease-out -z-10"
          style={{
            backgroundColor: hoveredCard ? hoveredCard.glowColor : "rgba(99,102,241,0.03)"
          }}
        />

        {/* --- Top Header Deck --- */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-md font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-300 mb-5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Experience
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            Professional Experience & <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Deployment History.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-400 font-light">
            A meticulous ledger of core deployments and infrastructure optimization. Filter components by operation type to evaluate individual codebase contributions.
          </p>
        </div>

        {/* --- Navigation Filter Command Deck --- */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-white/[0.06]">
          {[
            { id: "all", label: "All", count: EXPERIENCE_DATA_MATRIX.length },
            { id: "job", label: "Full-Time Roles", count: EXPERIENCE_DATA_MATRIX.filter(e => e.type === "job").length },
            { id: "internship", label: "Internships", count: EXPERIENCE_DATA_MATRIX.filter(e => e.type === "internship").length },
            // { id: "event", label: "Hackathons", count: EXPERIENCE_DATA_MATRIX.filter(e => e.type === "event").length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono border transition-all duration-200 flex items-center gap-2 focus:outline-none ${filter === tab.id
                  ? "bg-white text-black border-white shadow-xl"
                  : "bg-white/[0.01] border-white/[0.05] text-neutral-400 hover:text-white hover:border-white/10"
                }`}
            >
              {tab.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${filter === tab.id ? "bg-neutral-200 text-black" : "bg-white/5 text-neutral-500"
                }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* --- Timeline Grid Array Container --- */}
        {/* --- Experience Timeline Stepper --- */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-[1px] bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent pointer-events-none" />

          <AnimatePresence mode="popLayout">
            <div className="space-y-12">
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setHoveredCard(exp)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative pl-14 sm:pl-20"
                >
                  {/* Step Number */}
                  <div
                    className={`absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-md font-bold text-sm shadow-lg transition-all duration-300
              ${hoveredCard?.id === exp.id
                        ? `${exp.bgAccent} ${exp.borderAccent} ${exp.textAccent}`
                        : "bg-neutral-900/80 border-white/10 text-indigo-400"
                      }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Card */}
                  <div className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] shadow-2xl shadow-black/20">
                    <div
                      className={`grid grid-cols-1 ${exp.type === "job"
                          ? "md:grid-cols-[140px_1fr]"
                          : "md:grid-cols-1"
                        }`}
                    >
                      {/* Company Logo / Image */}
                      {/* Company Logo (Only for Full-Time Role) */}
                      {exp.type === "job" && (
                        <div className="flex items-center justify-center md:border-r border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent p-8 md:w-[140px]">
                          <div className="w-20 h-20 rounded-2xl bg-white border border-white/10 p-3 shadow-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                            <img
                              src={exp.companyLogo}
                              alt={exp.company}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          {/* Duration + Type */}
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span
                              className={`rounded-lg px-2.5 py-1 text-xs font-semibold tracking-wide border ${exp.bgAccent} ${exp.borderAccent} ${exp.textAccent}`}
                            >
                              {exp.duration}
                            </span>

                            <span className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-neutral-300 uppercase">
                              {exp.type}
                            </span>
                          </div>

                          {/* Role */}
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                            {exp.role}
                          </h3>

                          {/* Company */}
                          <p className="mt-1 text-sm font-medium text-purple-400 uppercase tracking-wider">
                            {exp.company}
                          </p>

                          {/* Location */}
                          <div className="flex items-center gap-2 mt-3 text-xs text-neutral-500">
                            <i className="fas fa-location-dot" />
                            <span>{exp.address}</span>
                          </div>

                          {/* Description */}
                          <p className="mt-5 text-sm sm:text-base leading-relaxed text-neutral-400">
                            {exp.description}
                          </p>

                          {/* Contributions */}
                          <div className="mt-6">
                            <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 font-semibold">
                              Key Contributions
                            </h4>

                            <ul className="space-y-3">
                              {exp.bullets.map((bullet, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-neutral-300"
                                >
                                  <div
                                    className={`mt-2 h-2 w-2 rounded-full ${exp.bgAccent}`}
                                  />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mt-8 pt-6 border-t border-white/[0.06]">
                          <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 font-semibold">
                            Technologies Used
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {exp.skillsLearned.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 hover:border-indigo-400/40 hover:text-white transition-all"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Empty State */}
              {filteredExperiences.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="ml-14 rounded-2xl border border-dashed border-white/10 p-10 text-center"
                >
                  <p className="text-neutral-500 text-sm">
                    No experience found for this category.
                  </p>
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </div>

      </section>
    </PageTransition>
  );
};

export default Experience;