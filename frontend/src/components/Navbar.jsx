import React from 'react';
import { NavLink } from 'react-router-dom';
import { twitter, github, linkedin } from '../constant';

const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center bg-transparent">
      
      {/* Brand Logo / Identity */}
      <a href="/" className="group flex items-center gap-2 font-bold tracking-tight text-white">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 font-mono text-sm shadow-md shadow-indigo-500/20">
          A
        </div>
        <span className="hidden sm:inline-block hover:text-neutral-300 transition-colors">
          aditya.dev
        </span>
      </a>

      {/* Modern SaaS Navigation Links */}
      <nav className="flex items-center gap-1 sm:gap-4">
        
        {/* Twitter/X Link */}
        {/* <a 
          href={twitter}
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
        >
          <i className="fab fa-twitter text-base transition-transform group-hover:scale-110" />
          <span className="hidden md:inline">Twitter</span>
          <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all text-neutral-500" />
        </a> */}

        {/* GitHub Link */}
        <a 
          href={github}
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white transition-colors duration-200"
        >
          <i className="fab fa-github text-base transition-transform group-hover:scale-110" />
          <span className="hidden md:inline">GitHub</span>
          <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all text-neutral-500" />
        </a>

        {/* LinkedIn Link */}
        <a 
          href={linkedin}
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white transition-colors duration-200"
        >
          <i className="fab fa-linkedin-in text-base transition-transform group-hover:scale-110" />
          <span className="hidden md:inline">LinkedIn</span>
          <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all text-neutral-500" />
        </a>

        {/* Subtle Divider Line */}
        <span className="h-4 w-[1px] bg-white/10 mx-2" />

        {/* Action Button CTA */}
        <NavLink
          to="/contact"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-lg group bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
        >
          <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-[#030712] rounded-md group-hover:bg-opacity-0">
            Hire Me
          </span>
        </NavLink>
      </nav>

    </div>
  );
};

export default Navbar;