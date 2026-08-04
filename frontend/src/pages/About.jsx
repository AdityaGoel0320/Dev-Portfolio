import React from "react";
import PageTransition from "../components/PageTransition";

const About = () => {
  const education = [
    {
      institution: "Maharaja Agrasen Institute of Technology",
      degree: "B.Tech Computer Science",
      year: "2021 - 2025",
      score: "CGPA 9.2",
      image: "/images/mait.jpg",
      degreeLink: "#",
      marksheetLink: "#",
      description:
        "Focused on Software Engineering, Full Stack Development, Cloud Computing, and Data Structures.",
    },
    {
      institution: "Maharaja Agrasen Adarsh Public School",
      degree: "Senior Secondary Education",
      year: "2016 - 2020",
      score: "92%",
      image: "/images/school.jpg",
      degreeLink: "#",
      marksheetLink: "#",
      description:
        "Built strong foundations in Mathematics, Science, and Computer Applications.",
    },
  ];

  return (
    <PageTransition>
      <section className="w-full max-w-6xl mx-auto px-4 py-6 relative">
        
        {/* Decorative Background Lighting Matrix */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[40%] right-0 w-[350px] h-[350px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* --- Main Hero Header Section --- */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-300 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            About Me
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            Building Digital <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Products & Experiences
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-neutral-400 font-light">
            I'm a passionate software developer focused on building scalable web applications, SaaS platforms, and modern user experiences. I enjoy transforming complex problems into simple, elegant solutions while continuously learning new technologies and architectural best practices.
          </p>
        </div>

        {/* --- Education Timeline Section --- */}
        <section className="py-4">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-purple-300 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              Education Journey
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Learning & Growth
            </h2>

            <p className="mt-3 max-w-xl text-sm md:text-base text-neutral-400 font-light">
              My academic journey that shaped my technical skills and problem-solving mindset.
            </p>
          </div>

          {/* Timeline Node Infrastructure */}
          <div className="relative">
            {/* Timeline Center Hairline Rail */}
            <div className="absolute left-6 top-0 h-full w-[1px] bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent pointer-events-none" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-14 sm:pl-20">
                  
                  {/* Timeline Index Orb indicator */}
                  <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-neutral-900/80 text-sm font-mono font-bold text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.1)] backdrop-blur-md">
                    0{index + 1}
                  </div>

                  {/* Glassmorphic Project Card Module */}
                  <div className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] shadow-2xl shadow-black/20">
                    
                    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
                      
                      {/* Image Thumbnail Aspect Frame */}
                      <div className="relative h-48 md:h-full min-h-[180px] overflow-hidden border-b md:border-b-0 md:border-r border-white/[0.06]">
                        <img
                          src={edu.image}
                          alt={edu.institution}
                          className="h-full w-full object-cover opacity-60 filter grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#030712]/40" />
                      </div>

                      {/* Content Block */}
                      <div className="p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-indigo-300">
                              {edu.year}
                            </span>
                            <span className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-neutral-300">
                              {edu.score}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                            {edu.institution}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-purple-400 uppercase tracking-wider">
                            {edu.degree}
                          </p>

                          <p className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-400 font-light">
                            {edu.description}
                          </p>
                        </div>

                        {/* Interactive Credentials Interface Row */}
                        <div className="mt-6 pt-6 border-t border-white/[0.04] flex flex-wrap gap-3">
                          <a
                            href={edu.degreeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200"
                          >
                            <i className="fas fa-certificate text-indigo-400" /> View Degree
                          </a>

                          <a
                            href={edu.marksheetLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/5 hover:border-white/10 bg-transparent hover:bg-white/[0.02] px-4 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white transition-all duration-200"
                          >
                            <i className="fas fa-file-invoice text-neutral-500 group-hover:text-neutral-300" /> View Marksheet
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </PageTransition>
  );
};

export default About;