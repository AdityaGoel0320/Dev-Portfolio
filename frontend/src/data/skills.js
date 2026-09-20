const data = [
  {
    id: "fullstack",
    title: "Full-Stack Web Systems",
    badge: "MERN & MEAN Ecosystems",
    icon: "fas fa-layer-group",
    accent: "from-indigo-500/20 to-purple-500/20",
    glowColor: "rgba(99,102,241,0.15)",
    textAccent: "text-indigo-400",
    summary: "High-throughput enterprise web architectures specializing in reactive view management, state synchronization, and decoupled microservices.",
    deepDive: "Experienced in constructing reactive enterprise lifecycles using Angular, React.js, Vue.js, and Nuxt.js alongside high-concurrency Node.js and Express event loops. Expert at writing optimized non-blocking algorithms, managing authentication pipelines (JWT, SAP CDC), and designing clean architectural contracts between independent runtime services.",
    logos: [
      { class: "fa-brands fa-react text-sky-400", label: "React" },
      { class: "fa-brands fa-angular text-rose-500", label: "Angular" },
      { class: "fa-brands fa-vuejs text-emerald-400", label: "Vue.js" },
      { class: "fa-brands fa-node-js text-emerald-500", label: "Node.js" },
      { class: "fa-brands fa-server text-neutral-400", label: "Express" },
      { class: "fa-brands fa-database text-blue-400", label: "TypeScript" }
    ],
    projects: [
      {
        name: "Shopp.my - E-commerce Platform",
        tech: "MERN Stack, TypeScript, Firebase, Stripe",
        description: "Built a full-featured e-commerce platform featuring dynamic cart management, media storage, and secure payment processing.",
        architecturePoints: [
          "Integrated Stripe payment gateway and optimized static assets via Firebase Storage.",
          "Engineered responsive UI and structured TypeScript backend routes for scalable product management."
        ],
        metric: "Achieved 30% faster load times and boosted user engagement by 25%."
      },
      {
        name: "ChatBuddy - Real-Time Communication Platform",
        tech: "MERN Stack, Socket.io, Redux, Cloudinary",
        description: "Developed a full-stack real-time interaction platform complete with an administrative dashboard and low-latency state synchronization.",
        architecturePoints: [
          "Implemented WebSockets with Socket.io and media delivery pipelines via Cloudinary.",
          "Optimized centralized client state management using Redux Toolkit to streamline authentication flows."
        ],
        metric: "Reduced authentication time by 30% and improved application response speeds by 25%."
      },
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
    badge: "Generative Models & Automation",
    icon: "fas fa-brain-circuit",
    accent: "from-pink-500/20 to-rose-500/20",
    glowColor: "rgba(236,72,153,0.15)",
    textAccent: "text-pink-400",
    summary: "Orchestrating advanced neural architectures, diffusion-based video generation workflows, predictive ML models, and automated AI pipelines.",
    deepDive: "Specializing in prompt engineering, predictive analytics, and automated AI workflows. Experienced in deploying Scikit-learn machine learning pipelines (K-Means, Linear Regression) over large datasets alongside directing neural vision parameters, ControlNet structures, and multi-modal generation passes.",
    logos: [
      { class: "fas fa-robot text-purple-400", label: "Prompt Engineering" },
      { class: "fas fa-brain text-pink-400", label: "Scikit-Learn" },
      { class: "fas fa-microchip text-rose-400", label: "Diffusion Engines" },
      { class: "fas fa-chart-line text-cyan-400", label: "Predictive Models" }
    ],
    projects: [
      {
        name: "Predictive Analytics & Clustering Engine",
        tech: "Python, Scikit-learn, Pandas, NumPy",
        description: "Constructed data preprocessing and machine learning model pipelines to perform predictive analytics over large datasets.",
        architecturePoints: [
          "Trained K-Means Clustering and Linear Regression models on datasets containing 10,000+ records.",
          "Built data cleaning and automated preprocessing pipelines using Pandas and NumPy inside Jupyter Notebook."
        ],
        metric: "Substantially improved analytical workflows and data cleaning efficiency across 10,000+ record datasets."
      },
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
    badge: "AWS Ecosystem & Event Streaming",
    icon: "fab fa-aws",
    accent: "from-amber-500/20 to-orange-500/20",
    glowColor: "rgba(245,158,11,0.15)",
    textAccent: "text-amber-400",
    summary: "Fault-tolerant infrastructure automation, serverless cloud platforms, and event-driven microservices messaging.",
    deepDive: "Focused on building reliable, distributed cloud architectures. Highly proficient in configuring event-driven microservices with Apache Kafka, automated deployment pipelines using AWS (EC2, S3, CodePipeline), and serverless messaging via AWS SAM, SQS, and SNS.",
    logos: [
      { class: "fab fa-aws text-amber-500", label: "AWS (EC2/S3)" },
      { class: "fas fa-stream text-orange-400", label: "Kafka" },
      { class: "fas fa-infinity text-yellow-400", label: "CI/CD CodePipeline" },
      { class: "fas fa-cubes text-red-400", label: "AWS SAM / SQS" }
    ],
    projects: [
      {
        name: "Enterprise Identity & Event Streaming Service",
        tech: "SAP CDC, Apache Kafka, AWS EC2, S3",
        description: "Architected secure identity management and event-driven backend pipelines serving global EdTech platforms.",
        architecturePoints: [
          "Configured SAP Customer Data Cloud (SAP CDC) for secure user lifecycle management and enterprise SSO.",
          "Integrated Apache Kafka for real-time, asynchronous event streaming across microservice nodes."
        ],
        metric: "Sustained high-availability identity routing across global university client workloads."
      },
      {
        name: "AWS Dead-Letter Queue (DLQ) Pipeline",
        tech: "AWS SAM, Lambda, SNS, S3",
        description: "Designed a serverless failure-routing network that safely intercepts, unpacks, and records failed SNS event notifications directly into isolated S3 storage buckets.",
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
    title: "Core Logic, Testing & Tools",
    badge: "Algorithms, QA & Performance Testing",
    icon: "fas fa-brain",
    accent: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(16,185,129,0.15)",
    textAccent: "text-emerald-400",
    summary: "Advanced data parsing structures, unit/integration testing suites, load testing, and static code quality analysis.",
    deepDive: "Deep understanding of core Computer Science principles (DSA, OOP, DBMS, OS, Networks). Skilled in implementing unit/integration test suites (Mocha, Chai, Jest), executing load tests with Artillery, documenting APIs with Swagger, and enforcing code quality via SonarQube.",
    logos: [
      { class: "fas fa-vial text-emerald-400", label: "Mocha / Chai / Jest" },
      { class: "fas fa-tachometer-alt text-teal-400", label: "Artillery" },
      { class: "fas fa-file-code text-cyan-400", label: "Swagger" },
      { class: "fas fa-shield-check text-blue-400", label: "SonarQube" }
    ],
    projects: [
      {
        name: "API Load Testing & Security Audit Module",
        tech: "JWT, Swagger, Artillery, Express.js",
        description: "Engineered secure JWT authentication modules and performed automated backend stress testing under peak loads.",
        architecturePoints: [
          "Documented REST API schemas using Swagger/OpenAPI for unified team integration.",
          "Executed load and stress testing using Artillery to discover and resolve backend concurrency bottlenecks."
        ],
        metric: "Identified and resolved critical system bottlenecks prior to production release."
      },
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

export default data;