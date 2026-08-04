import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

// =========================================================================
// CENTRAL CONFIGURATION MATRIX
// Replace the string below with your explicit Google Drive FILE ID.
// Example link layout: https://drive.google.com/file/d/1A2b3C_d4E5fG.../view
// =========================================================================
const GOOGLE_DRIVE_FILE_ID = "YOUR_GOOGLE_DRIVE_FILE_ID";

const RESUME_VIEW_LINK = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view`;
const RESUME_PREVIEW_EMBED = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;

const Resume = () => {
  const [activePane, setActivePane] = useState("terminal"); // "terminal" | "viewer"

  return (
    <PageTransition>
      <section className="w-full max-w-5xl mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[80vh]">
        
        {/* Cinematic Backdrop Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* --- Top Header Deck --- */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-300 mb-5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Credentials.Verified
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            Professional <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Qualifications Deck.
            </span>
          </h1>
        </div>

        {/* --- Interactive Layer Viewport Selectors --- */}
        <div className="flex items-center gap-2 mb-6 bg-neutral-950 p-1.5 rounded-xl border border-white/[0.05] relative z-10">
          <button
            onClick={() => setActivePane("terminal")}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
              activePane === "terminal"
                ? "bg-white text-black shadow-lg font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <i className="fas fa-terminal mr-1.5 text-[10px]" /> System.Specs
          </button>
          <button
            onClick={() => setActivePane("viewer")}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
              activePane === "viewer"
                ? "bg-white text-black shadow-lg font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <i className="fas fa-eye mr-1.5 text-[10px]" /> Live.Preview
          </button>
        </div>

        {/* --- Main Document Matrix Chassis --- */}
        <div className="w-full max-w-2xl group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-neutral-900/60 to-[#050811]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">
          
          <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md pointer-events-none" />

          <AnimatePresence mode="wait">
            {activePane === "terminal" ? (
              /* PANEL A: TECHNICAL CONSOLE ENVIRONMENT */
              <motion.div
                key="terminal-pane"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-neutral-950 border border-white/10 flex items-center justify-center text-xl text-indigo-400 mb-5">
                  <i className="fas fa-file-pdf" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  Aditya_Resume_2026.pdf
                </h3>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-1">
                  Format: PDF Document &middot; ATS Optimized
                </p>

                <div className="my-6 p-4 rounded-xl border border-white/[0.04] bg-neutral-950/40 text-left font-mono text-xs text-neutral-400 space-y-2">
                  <div className="flex items-center gap-2 border-b border-white/[0.04] pb-2 mb-2 text-neutral-500 uppercase text-[9px] tracking-wider">
                    <i className="fas fa-terminal text-indigo-400" /> Compiled Skill Highlights
                  </div>
                  <div className="flex items-center justify-between">
                    <span>&gt; Core Architecture:</span>
                    <span className="text-white">MERN & MEAN Stacks</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>&gt; Cloud Engineering:</span>
                    <span className="text-amber-400">AWS Lambda, SNS, S3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>&gt; Algorithms Base:</span>
                    <span className="text-emerald-400">Advanced DSA (CGPA 9.2)</span>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* PANEL B: DIRECT IFRAME LIVE DOCUMENT FRAME viewer */
              <motion.div
                key="viewer-pane"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full aspect-[1/1.4] sm:h-[480px] rounded-xl overflow-hidden border border-white/10 bg-neutral-950 shadow-inner relative">
                  <iframe
                    src={RESUME_PREVIEW_EMBED}
                    className="w-full h-full border-none"
                    allow="autoplay"
                    title="Google Drive Document Viewer Pipeline"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- Global Action Links Row --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 relative z-10">
            <a
              href={RESUME_VIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 px-5 py-3 text-xs font-semibold text-white tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.2)] focus:outline-none"
            >
              <i className="fas fa-external-link-alt text-[10px]" /> Open in Drive
            </a>

            <a
              href={RESUME_VIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-3 text-xs font-semibold text-neutral-200 hover:text-white transition-all duration-200 focus:outline-none"
            >
              <i className="fas fa-download text-[10px] text-neutral-400" /> Download PDF
            </a>
          </div>

          {/* Terminal Style Secure Footer Sign */}
          <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between font-mono text-[9px] text-neutral-600">
            <span>MD5_CHECKSUM: VERIFIED</span>
            <span>STORAGE: SECURE GOOGLE CLOUD</span>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;