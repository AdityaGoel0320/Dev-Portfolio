import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

// ==========================================
// CENTRAL CONFIGURATION MATRIX (JSON SCHEMA)
// Optimized for modern ATS algorithms and semantic SEO.
// ==========================================
const SKILLS_DATA_MATRIX = [
  {
    id: "fullstack",
    title: "Full-Stack Web Systems",
    badge: "MERN & MEAN Ecosystems",
    icon: "fas fa-layer-group",
    accent: "from-indigo-500/20 to-purple-500/20",
    glowColor: "rgba(99,102,241,0.15)",
    textAccent: "text-indigo-400",
    summary: "High-throughput asynchronous frameworks specializing in reactive view management and decoupled layer operations.",
    deepDive: "Experienced in constructing reactive enterprise lifecycles using Angular dependency injection tokens along with high-concurrency Node.js event loops. Expert at writing optimized non-blocking algorithms, preventing multi-render bottlenecks, and designing clean architectural contracts between independent runtime services.",
    logos: [
      { class: "fab fa-react text-sky-400", label: "React" },
      { class: "fab fa-angular text-rose-500", label: "Angular" },
      { class: "fab fa-node-js text-emerald-500", label: "Node.js" },
      { class: "fas fa-server text-neutral-400", label: "Express" }
    ],
    projects: [
      {
        name: "Nemo Micro-Admin Architecture",
        tech: "Angular 16+ & Node.js ESM",
        description: "Engineered an isolated administrative orchestration engine featuring customized multi-tenant async validation handlers and lazy-loaded module structures.",
        architecturePoints: [
          "Implemented complex async form controls validating user roles against distributed database pools entirely in the background runtime.",
          "Prevented structural DOM memory leaks by strictly wrapping async data feeds with un-subscription observers."
        ],
        metric: "Reduced form processing overhead constraints by 35% via non-blocking asynchronous loops."
      }
    ]
  },
  {
    id: "ai-orchestration",
    title: "AI Synthesis & Media Generation",
    badge: "Generative Models & Latent Mechanics",
    icon: "fas fa-brain-circuit",
    accent: "from-pink-500/20 to-rose-500/20",
    glowColor: "rgba(236,72,153,0.15)",
    textAccent: "text-pink-400",
    summary: "Orchestrating advanced neural architectures, diffusion-based video generation workflows, and multi-modal AI pipelines.",
    deepDive: "Specializing in the deployment and prompt orchestration of neural media systems. Highly technical approach to directing generative vision parameters, manipulating latent weights, configuring ControlNet structures, and guiding seed values to output precise, photorealistic found-footage simulations and highly stylized, age-targeted cultural multi-modal animations.",
    logos: [
      { class: "fas fa-microchip text-pink-400", label: "Diffusion Engines" },
      { class: "fas fa-eye text-rose-400", label: "Computer Vision" },
      { class: "fas fa-sliders text-cyan-400", label: "Latent ControlNet" },
      { class: "fas fa-wand-magic-sparkles text-purple-400", label: "Prompt Engineering" }
    ],
    projects: [
      {
        name: "Synthetic First-Person Photorealistic Simulation Engine",
        tech: "Found-Footage Diffusion & Generative Vision",
        description: "Architected highly detailed conditional prompt arrays to simulate photorealistic, flashlight-lit environmental video frames featuring harsh texture rendering, documentary-style lens physics, and organic camera-shake tracking.",
        architecturePoints: [
          "Structured precise prompt weights and directional keywords to control lighting distributions and texture harshness across multi-frame synthesis passes.",
          "Designed cute, colorful, stylized cultural vector assets featuring custom multi-character interactions targeted toward optimized baby-age group engagement dynamics."
        ],
        metric: "Achieved zero-shot visual coherence across complex synthetic cinematic pipelines using strict structural constraints."
      }
    ]
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure & Ops",
    badge: "AWS Ecosystem & Serverless",
    icon: "fab fa-aws",
    accent: "from-amber-500/20 to-orange-500/20",
    glowColor: "rgba(245,158,11,0.15)",
    textAccent: "text-amber-400",
    summary: "Fault-tolerant infrastructure automation, reliable event routers, and isolated background workers built to scale.",
    deepDive: "Focused on building reliable, distributed cloud workflows. Highly proficient in configuring microservice messaging topologies, designing custom retry engines using dead-letter queues, and writing IaC (Infrastructure as Code) blueprints via the AWS Serverless Application Model (SAM).",
    logos: [
      { class: "fab fa-aws text-amber-500", label: "AWS" },
      { class: "fas fa-cubes text-orange-400", label: "SAM Templates" },
      { class: "fas fa-bolt text-yellow-400", label: "Lambda" },
      { class: "fas fa-envelope text-red-400", label: "SNS/SQS" }
    ],
    projects: [
      {
        name: "AWS Dead-Letter Queue (DLQ) Pipeline",
        tech: "AWS SAM, Lambda, SNS, S3",
        description: "Designed a serverless failure-routing network that safely intercept, unpacks, and records failed SNS event notifications directly into isolated S3 storage buckets.",
        architecturePoints: [
          "Wrote specialized infrastructure policies granting fine-grained security permissions between processing nodes and data buckets.",
          "Constructed customized logging matrices to trace system states across complex serverless boundary drops."
        ],
        metric: "Maintained 99.99% data retention across heavy microservice network drops."
      }
    ]
  },
  {
    id: "core-logic",
    title: "Core Logic & Tools",
    badge: "Algorithms & Client Parsing",
    icon: "fas fa-brain",
    accent: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(16,185,129,0.15)",
    textAccent: "text-emerald-400",
    summary: "Advanced data parsing structures, browser memory management, and clean object-oriented processing codebases.",
    deepDive: "Deep understanding of fundamental engineering principles. Proficient in optimizing data transformations to achieve low time and space Big-O complexities, alongside implementing fast client-side algorithms that run smoothly without impacting the browser's UI thread.",
    logos: [
      { class: "fas fa-code-branch text-emerald-400", label: "Data Structures" },
      { class: "fab fa-git-alt text-orange-500", label: "Git Logic" },
      { class: "fab fa-github text-white", label: "GitHub" },
      { class: "fas fa-wind text-teal-400", label: "Tailwind UI" }
    ],
    projects: [
      {
        name: "Client-Side CSV/Excel Parse Engine",
        tech: "React, Tailwind CSS, JS Web Workers",
        description: "Created a lightning-fast browser utility designed to transform heavy data sheets into clean relational JSON objects instantly without shifting data to external server nodes.",
        architecturePoints: [
          "Engineered a zero-database front-end solution that handles massive user uploads entirely within client-side memory spaces.",
          "Rendered reactive file tables smoothly by combining tailwind utilities with structured UI state grids."
        ],
        metric: "Processed 50,000+ data rows under 200ms with zero back-end computation costs."
      }
    ]
  }
];

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
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 tracking-widest uppercase">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Inspector Layer: // {activeCategory.id}
                    </div>
                    <span className="font-mono text-[10px] text-neutral-600">SYS_REV_2026</span>
                  </div>

                  {/* Technology Logo Grid Row */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block mb-3">
                      Core Technology Stack Modules
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {activeCategory.logos.map((logo, lIdx) => (
                        <div key={lIdx} className="flex items-center gap-2.5 p-2.5 rounded-lg border border-white/[0.04] bg-white/[0.01] hover:border-white/10 transition-all duration-200">
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

                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between font-mono text-[10px] text-neutral-600">
                  <span>Connection: Secure (TLS_1.3)</span>
                  <span>STATUS: 200_OK</span>
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