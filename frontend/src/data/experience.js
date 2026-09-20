const data = [
  {
    id: "fulltime",
    type: "job",
    role: "Software Developer",
    company: "Compro Technologies Pvt. Ltd.",
    companyLogo: "/images/compro.png",
    duration: "July 2026 - Present",
    address: "4 Lsc, Khel Gaon Marg, Uday Park, New Delhi, Delhi 110049",
    icon: "fas fa-briefcase",
    themeColor: "indigo",
    textAccent: "text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    borderAccent: "border-indigo-500/20",
    glowColor: "rgba(99,102,241,0.15)",
    description: "Engineering scalable learning platforms for global enterprise clients like Cambridge University Press & Assessment and VHL across microservices architectures.",
    bullets: [
      "Engineered scalable LMS and eBook Reader platforms using React.js, Vue.js, Nuxt.js, TypeScript, Node.js, and RESTful microservices.",
      "Built AI-powered automation solutions and orchestrated AWS cloud deployments across EC2, S3, and CodePipeline.",
      "Enforced production code quality standards with SonarQube, conducting active peer reviews and guiding cloud-native architectures."
    ],
    skillsLearned: ["React.js", "Vue.js", "Nuxt.js", "Node.js", "AWS", "Microservices"]
  },
  {
    id: "assoc-dev",
    type: "job",
    role: "Associate Software Developer",
    company: "Compro Technologies Pvt. Ltd.",
    companyLogo: "/images/compro.png",
    duration: "July 2025 - June 2026",
    address: "4 Lsc, Khel Gaon Marg, Uday Park, New Delhi, Delhi 110049",
    icon: "fas fa-user-shield",
    themeColor: "purple",
    textAccent: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    borderAccent: "border-purple-500/20",
    glowColor: "rgba(168,85,247,0.15)",
    description: "Owned global authentication ecosystems, customer identity workflows, and high-throughput event-driven microservices for enterprise EdTech platforms.",
    bullets: [
      "Architected customer identity and secure user lifecycle management with SAP Customer Data Cloud (SAP CDC) for university clients.",
      "Integrated high-throughput Kafka event streams and optimized core backend REST services for fault tolerance and scalability.",
      "Collaborated across engineering verticals to resolve critical production bottlenecks, elevating application uptime and stability."
    ],
    skillsLearned: ["SAP CDC", "Apache Kafka", "Identity Management", "REST APIs", "System Design"]
  },
  {
    id: "intern-compro",
    type: "internship",
    role: "Software Development & Testing Intern",
    company: "Compro Technologies Pvt. Ltd.",
    companyLogo: "/images/compro.png",
    duration: "Jan 2025 - June 2025",
    address: "4 Lsc, Khel Gaon Marg, Uday Park, New Delhi, Delhi 110049",
    icon: "fas fa-vial",
    themeColor: "amber",
    textAccent: "text-amber-400",
    bgAccent: "bg-amber-500/10",
    borderAccent: "border-amber-500/20",
    glowColor: "rgba(245,158,11,0.15)",
    description: "Focused on MEAN stack full-stack feature delivery, rigorous automated testing pipelines, and software quality engineering.",
    bullets: [
      "Built production-grade web components and UI modules utilizing the MEAN stack, Vue.js, and Nuxt.js frameworks.",
      "Authored automated unit and integration test suites using Mocha and Chai, boosting software reliability across core workflows.",
      "Executed manual edge-case testing and regression passes to eliminate defect leakage prior to production release cycles."
    ],
    skillsLearned: ["MEAN Stack", "Vue.js", "Nuxt.js", "Mocha & Chai", "Quality Assurance"]
  },
  {
    id: "intern-digitalshift",
    type: "internship",
    role: "Full Stack Web Developer",
    company: "Digital Shift Pvt. Ltd.",
    companyLogo: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=80&auto=format&fit=crop&q=60",
    duration: "Jun 2024 - Sep 2024",
    address: "Delhi NCR, India",
    icon: "fas fa-laptop-code",
    themeColor: "rose",
    textAccent: "text-rose-400",
    bgAccent: "bg-rose-500/10",
    borderAccent: "border-rose-500/20",
    glowColor: "rgba(244,63,94,0.15)",
    description: "Developed end-to-end full-stack web applications utilizing MERN Stack architecture and modular UI components.",
    bullets: [
      "Built responsive web user interfaces backed by MERN Stack (MongoDB, Express.js, React.js, Node.js) architecture.",
      "Designed clean RESTful API contracts, optimized database query execution, and improved page load performance.",
      "Implemented reusable frontend state hooks and UI component libraries ensuring seamless cross-device layouts."
    ],
    skillsLearned: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs"]
  },
  {
    id: "intern-acmegrade",
    type: "internship",
    role: "Data Science Intern",
    company: "Acmegrade",
    companyLogo: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=80&auto=format&fit=crop&q=60",
    duration: "May 2024 - Jun 2024",
    address: "India",
    icon: "fas fa-brain",
    themeColor: "indigo",
    textAccent: "text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    borderAccent: "border-indigo-500/20",
    glowColor: "rgba(99,102,241,0.15)",
    description: "Engineered predictive analytics models and data processing pipelines over massive datasets using Python.",
    bullets: [
      "Trained machine learning models including K-Means Clustering and Linear Regression via Scikit-learn on 10,000+ data records.",
      "Constructed automated data cleaning pipelines using Pandas, NumPy, and Jupyter Notebook to accelerate analytical workflows.",
      "Extracted key statistical trends to power predictive data analytics and feature distribution insights."
    ],
    skillsLearned: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"]
  },
  {
    id: "intern-jci",
    type: "internship",
    role: "Software & R&D Intern",
    company: "GEMS OF JCI",
    companyLogo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=80&auto=format&fit=crop&q=60",
    duration: "Sep 2023 - Dec 2023",
    address: "India",
    icon: "fas fa-shield-alt",
    themeColor: "purple",
    textAccent: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    borderAccent: "border-purple-500/20",
    glowColor: "rgba(168,85,247,0.15)",
    description: "Built identity security modules, API documentation standardizations, and high-load stress testing routines.",
    bullets: [
      "Engineered secure authentication systems with JWT-based access controls utilizing the MERN stack.",
      "Documented RESTful API endpoints systematically via Swagger/OpenAPI specifications.",
      "Executed backend performance and load testing using Artillery to discover and resolve high-concurrency bottlenecks."
    ],
    skillsLearned: ["JWT", "MERN Stack", "Swagger", "Artillery", "Performance Testing"]
  }
];

export { data };