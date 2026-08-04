import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

// =========================================================================
// CENTRAL EXPERIENCE DATA MATRIX (JSON SCHEMA)
// Easily scale up your profile! Add company logos, full addresses, and tags.
// =========================================================================
const EXPERIENCE_DATA_MATRIX = [
  {
    id: "fulltime",
    type: "job",
    role: "Full-Stack Software Engineer",
    company: "Current Corporate Organization", 
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=60", // Replace with actual logo URL or local path (e.g. /images/company.png)
    duration: "2025 - Present",
    address: "Plot No. 24, Phase-III, Okhla Industrial Area, New Delhi, Delhi 110020",
    icon: "fas fa-briefcase",
    themeColor: "indigo",
    textAccent: "text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    borderAccent: "border-indigo-500/20",
    glowColor: "rgba(99,102,241,0.15)",
    description: "Spearheading enterprise web platform lifecycles and highly reliable cloud infrastructure models within a fast-paced agile production environment.",
    bullets: [
      "Architecting distributed micro-frontend panels and scalable asynchronous server environments using Angular, React, and Node.js backend networks.",
      "Optimizing processing event pipelines to prevent main-thread visual lockups and ensure flawless rendering across varying bandwidth tiers.",
      "Structuring isolated test criteria and performance monitoring routines safeguarding core application workflows from data mutation bugs."
    ],
    skillsLearned: ["Angular", "Node.js", "System Design", "Asynchronous Programming", "Microservices"]
  },
  {
    id: "intern-4",
    type: "internship",
    role: "Backend & Cloud Engineer Intern",
    company: "Fintech Startup Systems",
    companyLogo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=80&auto=format&fit=crop&q=60",
    duration: "Late 2024",
    address: "Tech Hub Tower, Sector 62, Noida, Uttar Pradesh 201301",
    icon: "fas fa-laptop-code",
    themeColor: "purple",
    textAccent: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    borderAccent: "border-purple-500/20",
    glowColor: "rgba(168,85,247,0.15)",
    description: "Focused primarily on cloud infrastructure automation, fault-tolerant network topologies, and microservice error recovery channels.",
    bullets: [
      "Engineered clean serverless application model topologies routing live event streams straight into automated background compute threads.",
      "Configured programmatic dead-letter queues (DLQ) paired with automated failure alerts protecting upstream transaction flows from event drops.",
      "Authored strict security resource blueprints preventing cross-tenant permissions leakage across production S3 data buckets."
    ],
    skillsLearned: ["AWS Lambda", "AWS SAM", "Amazon SNS/SQS", "Cloud Security", "DevOps"]
  },
  {
    id: "intern-3",
    type: "internship",
    role: "Frontend Engineering Intern",
    company: "SaaS Product Studio",
    companyLogo: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=80&auto=format&fit=crop&q=60",
    duration: "Mid 2024",
    address: "DLF Cyber City, Phase 3, Sector 24, Gurugram, Haryana 122002",
    icon: "fas fa-code",
    themeColor: "amber",
    textAccent: "text-amber-400",
    bgAccent: "bg-amber-500/10",
    borderAccent: "border-amber-500/20",
    glowColor: "rgba(245,158,11,0.15)",
    description: "Deployed performance optimizations across customer-facing application spaces, ensuring fluid interactivity configurations.",
    bullets: [
      "Built multi-threaded client-side spreadsheet analysis tooling offloading intensive data operations safely into background Web Worker threads.",
      "Designed slick layout components utilizing utility-first styles guaranteeing flawless compatibility on mobile configurations.",
      "Connected REST architectural layers with internal state hooks to maintain ultra-fast state synchronization cycles."
    ],
    skillsLearned: ["React.js", "Tailwind CSS", "Web Workers", "UI/UX Design", "REST APIs"]
  },
  {
    id: "hackathon",
    type: "event",
    role: "Hackathon Finalist & OS Contributor",
    company: "Hacktoberfest & Major League Hacking",
    companyLogo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=80&auto=format&fit=crop&q=60",
    duration: "2022 - Present",
    address: "Maharaja Agrasen Institute of Technology Campus, Delhi, India",
    icon: "fas fa-trophy",
    themeColor: "rose",
    textAccent: "text-rose-400",
    bgAccent: "bg-rose-500/10",
    borderAccent: "border-rose-500/20",
    glowColor: "rgba(244,63,94,0.15)",
    description: "Competing heavily in intense collegiate building sprints while actively managing upstream feature proposals inside popular open-source repos.",
    bullets: [
      "Coordinated with multi-disciplinary engineering crews to blueprint and deploy working full-stack MVPs within narrow 36-hour timelines.",
      "Shipped multiple checked pull-requests to global code engines optimizing data processing modules during open Hacktoberfest runs.",
      "Acted as repository controller handling automated build environments, conflicts troubleshooting, and staging runs."
    ],
    skillsLearned: ["Git/GitHub", "Open Source", "Team Collaboration", "Rapid Prototyping", "Problem Solving"]
  }
];

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
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-300 mb-5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Vitals.Engineering.Logs
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
            { id: "all", label: "All Logs", count: EXPERIENCE_DATA_MATRIX.length },
            { id: "job", label: "Full-Time Roles", count: EXPERIENCE_DATA_MATRIX.filter(e => e.type === "job").length },
            { id: "internship", label: "Internships", count: EXPERIENCE_DATA_MATRIX.filter(e => e.type === "internship").length },
            { id: "event", label: "Hackathons", count: EXPERIENCE_DATA_MATRIX.filter(e => e.type === "event").length }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono border transition-all duration-200 flex items-center gap-2 focus:outline-none ${
                filter === tab.id
                  ? "bg-white text-black border-white shadow-xl"
                  : "bg-white/[0.01] border-white/[0.05] text-neutral-400 hover:text-white hover:border-white/10"
              }`}
            >
              {tab.label}
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                filter === tab.id ? "bg-neutral-200 text-black" : "bg-white/5 text-neutral-500"
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* --- Timeline Grid Array Container --- */}
        <div className="relative pl-2 sm:pl-12 space-y-10">
          
          {/* Vertical Structural Metal Timeline Line */}
          <div className="absolute left-[33px] sm:left-[53px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-white/[0.15] via-white/[0.05] to-transparent pointer-events-none" />

          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onMouseEnter={() => setHoveredCard(exp)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group"
              >
                {/* Timeline Vector Icon Pin */}
                <div className={`absolute -left-[27px] sm:-left-[43px] top-4 w-9 h-9 rounded-xl border flex items-center justify-center text-xs transition-all duration-500 backdrop-blur-md z-10 ${
                  hoveredCard?.id === exp.id 
                    ? `${exp.bgAccent} ${exp.textAccent} ${exp.borderAccent} scale-110 shadow-xl` 
                    : "bg-neutral-900 border-white/10 text-neutral-500"
                }`}>
                  <i className={exp.icon} />
                </div>

                {/* Main Card Content Chassis */}
                <div className={`rounded-xl border bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 shadow-2xl relative overflow-hidden ${
                  hoveredCard?.id === exp.id 
                    ? "border-white/20 bg-white/[0.03]" 
                    : "border-white/[0.05]"
                }`}>
                  
                  {/* Subtle Adaptive Linear Glow Edge */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(400px_at_var(--x,0px)_var(--y,0px),rgba(255,255,255,0.04),transparent)]" 
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                    }}
                  />

                  {/* Header Row Block */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/[0.06] pb-5 mb-5 relative z-10">
                    
                    {/* Left Hand: Identity Profile */}
                    <div className="flex items-start gap-4">
                      {/* Company Image Logo Chassis */}
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-neutral-950 flex-shrink-0 shadow-inner group-hover:border-white/20 transition-colors duration-300">
                        <img 
                          src={exp.companyLogo} 
                          alt={exp.company} 
                          className="w-full h-full object-cover filter grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100" 
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent mt-0.5 font-mono">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Right Hand: Temporal & Structural Coordinates */}
                    <div className="text-left md:text-right font-mono text-xs space-y-1.5 self-start md:self-auto w-full md:w-auto">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border text-[11px] font-bold tracking-wide uppercase shadow-sm ${exp.bgAccent} ${exp.textAccent} ${exp.borderAccent}`}>
                        {exp.duration}
                      </div>
                      <p className="text-[10px] text-neutral-500 font-light leading-normal max-w-xs md:ml-auto">
                        <i className="fas fa-map-marker-alt text-[9px] mr-1.5 text-neutral-600" />
                        {exp.address}
                      </p>
                    </div>

                  </div>

                  {/* Narrative Body Row */}
                  <div className="mb-6 relative z-10 pl-1">
                    <p className="text-sm leading-relaxed text-neutral-300 font-light">
                      {exp.description}
                    </p>
                  </div>

                  {/* Achievements List Block */}
                  <div className="space-y-3.5 relative z-10 pl-1 mb-6">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
                      Core Codebase Contributions & Architectural Milestones
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400 font-light">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <i className={`fas fa-code-commit mt-1 text-[10px] flex-shrink-0 ${exp.textAccent}`} />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Earned / Used Chips Deck */}
                  <div className="pt-5 border-t border-white/[0.04] relative z-10 pl-1">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-neutral-500 uppercase block mb-2.5">
                      Technologies Leveraged & Competencies Mastered
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skillsLearned.map((skill, sIdx) => (
                        <div 
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md bg-neutral-950 border border-white/[0.05] text-neutral-400 text-[10px] font-mono tracking-wide hover:border-white/20 hover:text-white transition-all duration-200"
                        >
                          <span className="text-neutral-600 mr-1">#</span>{skill}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Fallback Empty Block */}
          {filteredExperiences.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 border border-dashed border-white/10 rounded-xl"
            >
              <p className="text-sm text-neutral-500 font-mono">CRITERIA_MATCH_LOG_EMPTY // 404</p>
            </motion.div>
          )}

        </div>

      </section>
    </PageTransition>
  );
};

export default Experience;