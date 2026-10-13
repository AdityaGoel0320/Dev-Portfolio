import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#030712] text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-light">
        
        <div className="flex items-center gap-2">
          <span className="text-white font-mono font-semibold tracking-tight">
            aditya<span className="text-indigo-400">.dev</span>
          </span>
          <span className="text-neutral-600">|</span>
          <p>© {currentYear} All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;