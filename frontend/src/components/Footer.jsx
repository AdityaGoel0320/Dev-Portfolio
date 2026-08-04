import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#030712] text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-light">
        
        {/* Left Side: Copyright & Branding */}
        <div className="flex items-center gap-2">
          <span className="text-white font-mono font-semibold tracking-tight">
            aditya<span className="text-indigo-400">.dev</span>
          </span>
          <span className="text-neutral-600">|</span>
          <p>© {currentYear} All rights reserved.</p>
        </div>

        {/* Center/Right Side: Built With Stacks Indicator */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-500">
          <span>Built with</span>
          <div className="flex items-center gap-1.5 text-neutral-400 normal-case font-mono">
            <i className="fab fa-react text-indigo-400 animate-[spin_8s_linear_infinite]" /> React
            <span className="text-neutral-700">&middot;</span>
            <i className="fas fa-wind text-teal-400" /> Tailwind
            <span className="text-neutral-700">&middot;</span>
            <i className="fas fa-bolt text-purple-400" /> Framer
          </div>
        </div>

        {/* Right Side: Micro Social Handlers */}
        <div className="flex items-center gap-4 text-base">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;