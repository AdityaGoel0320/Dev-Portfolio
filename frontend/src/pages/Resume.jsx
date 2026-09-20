import React from "react";
import PageTransition from "../components/PageTransition";

// =========================================================================
// GOOGLE DRIVE RESUME CONFIGURATION
// =========================================================================
const GOOGLE_DRIVE_FILE_ID = "1a4KkieTkJpbSqNmam3Pvo_1UaK7OAM5m";

const RESUME_VIEW_LINK = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view`;
const RESUME_PREVIEW_EMBED = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;

const Resume = () => {
  return (
    <PageTransition>
      <section className="w-full max-w-5xl mx-auto px-4 py-8 relative flex flex-col items-center justify-center min-h-[80vh]">

        {/* Cinematic Backdrop Radial Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.03] blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            Professional <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Qualifications Deck.
            </span>
          </h1>
        </div>

        {/* Main Document Container */}
        <div className="w-full max-w-2xl group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-neutral-900/60 to-[#050811]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl overflow-hidden">

          <div className="absolute -inset-px bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md pointer-events-none" />

          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 relative z-10 mb-4 ">

            {/* Open in Drive */}
            <a
              href={RESUME_VIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 px-5 py-3 text-xs font-semibold text-white tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.2)] focus:outline-none"
            >
              <i className="fas fa-external-link-alt text-[10px]" />
              Open in Drive
            </a>

            {/* Download PDF */}
            <a
              href={`https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-5 py-3 text-xs font-semibold text-neutral-200 hover:text-white transition-all duration-200 focus:outline-none  "
            >
              <i className="fas fa-download text-[10px] text-neutral-400" />
              Download PDF
            </a>

          </div>


          {/* Resume Preview */}
          <div className="w-full aspect-[1/1.4] sm:h-[600px] rounded-xl overflow-hidden border border-white/10 bg-neutral-950 shadow-inner relative">
            <iframe
              src={RESUME_PREVIEW_EMBED}
              className="w-full h-full border-none"
              allow="autoplay"
              title="Aditya Resume Preview"
            />
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between font-mono text-[9px] text-neutral-600">
            <span>DOCUMENT: RESUME_2026.PDF</span>
            <span>STORAGE: GOOGLE DRIVE</span>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;
