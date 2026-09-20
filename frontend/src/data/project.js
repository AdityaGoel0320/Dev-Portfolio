const data = [
  // --- DOMAIN 1: MEAN STACK ENTERPRISE SYSTEMS ---
  {
    id: "nemo-admin",
    title: "Nemo Micro-Admin Engine",
    category: "MEAN Stack",
    techStack: ["Angular 17", "Node.js", "Express", "MongoDB", "RxJS"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34281-large.mp4",
    liveUrl: "https://nemo.aditya.dev",
    githubUrl: "https://github.com/aditya/nemo-micro-admin",
    summary: "An isolated enterprise micro-administration core designed with lazy-loaded modules and complex asynchronous validation trees.",
    bullets: [
      "Built multi-tenant asynchronous form validators executing background runtime identity verifications.",
      "Optimized data streaming pipes using RxJS stream combinations, eliminating redundant re-renders."
    ],
    metric: "Overhead reduced by 35%"
  },
  {
    id: "mean-telemetry",
    title: "Real-Time Telemetry Dashboard",
    category: "MEAN Stack",
    techStack: ["Angular 17", "Node.js", "Socket.io", "MongoDB", "Chart.js"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-financial-charts-on-a-computer-monitor-43152-large.mp4",
    liveUrl: "https://telemetry.aditya.dev",
    githubUrl: "https://github.com/aditya/mean-telemetry",
    summary: "Distributed live analytics collection pipeline charting telemetry updates via continuous state web sockets.",
    bullets: [
      "Engineered memory-optimized Angular component states feeding persistent data lines smoothly.",
      "Mapped complex aggregation pipelines to fetch, isolate, and format metrics under heavy loads."
    ],
    metric: "Maintained sub-50ms data paint lifecycles"
  },

  // --- DOMAIN 2: MERN STACK APPLICATIONS ---
  {
    id: "mern-saas",
    title: "Multi-Tenant B2B SaaS Platform",
    category: "MERN Stack",
    techStack: ["React.js", "Node.js", "MongoDB", "Redux Toolkit", "Stripe"],
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-luminous-keyboard-in-the-dark-43118-large.mp4",
    liveUrl: "https://saas.aditya.dev",
    githubUrl: "https://github.com/aditya/mern-b2b-saas",
    summary: "A production-grade multi-tenant SaaS hub featuring decoupled dynamic subdomains and subscription routing mappings.",
    bullets: [
      "Secured transactional database layers using robust document indexing and optimistic concurrency checks.",
      "Implemented a custom hook pattern to isolate contextual rendering scopes across client accounts."
    ],
    metric: "Isolated 10k+ concurrent tenant shards"
  },
  {
    id: "collaborative-doc",
    title: "Distributed Markdown Studio",
    category: "MERN Stack",
    techStack: ["React.js", "Node.js", "MongoDB", "Yjs", "WebRTC"],
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-web-developer-working-on-a-laptop-43101-large.mp4",
    liveUrl: "https://studio.aditya.dev",
    githubUrl: "https://github.com/aditya/collaborative-markdown",
    summary: "Real-time collaborative workspace utilizing conflict-free replicated data types (CRDTs) to handle continuous text sync.",
    bullets: [
      "Integrated operational transformation parameters with shared state bindings to guarantee data consensus.",
      "Optimized document snapshots parsing histories asynchronously via background thread operations."
    ],
    metric: "Zero document collision state corruption"
  },

  // --- DOMAIN 3: AWS CLOUD INFRASTRUCTURE ---
  {
    id: "aws-dlq",
    title: "AWS Dead-Letter Queue Pipeline",
    category: "AWS Cloud",
    techStack: ["AWS SAM", "AWS Lambda", "Amazon SNS", "Amazon S3"],
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-server-data-31908-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/aws-sns-dlq-pipeline",
    summary: "A robust serverless event failure tracing system designed to catch, analyze, and store drops across distributed microservices.",
    bullets: [
      "Engineered an Infrastructure-as-Code layout intercepting failed notification payloads from SNS topics.",
      "Wrote granular IAM resource parameters locking down data injection rules into encrypted S3 buckets."
    ],
    metric: "99.99% log retention rate"
  },
  {
    id: "aws-cdn-broker",
    title: "Dynamic Asset Streaming Router",
    category: "AWS Cloud",
    techStack: ["CloudFront", "AWS Lambda@Edge", "DynamoDB", "S3"],
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-networking-servers-in-a-data-center-low-angle-31904-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/aws-edge-streaming",
    summary: "Intelligent geolocation edge broker running authentication and token-verification algorithms straight at CDN endpoints.",
    bullets: [
      "Minified processing runtime weights down to execute sub-millisecond edge calculations.",
      "Constructed multi-region failover rules migrating distributed request configurations gracefully."
    ],
    metric: "Reduced initial response TTFB by 42%"
  },

  // --- DOMAIN 4: ADVANCED SYSTEMS DESIGN ---
  {
    id: "distributed-cache",
    title: "In-Memory LRU Cache Node",
    category: "Systems Design",
    techStack: ["Go", "gRPC", "Protobuf", "Distributed Hashing"],
    thumbnail: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-fast-on-a-computer-keyboard-41731-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/distributed-lru-cache",
    summary: "High-performance distributed storage node tracking keys using consistent hashing algorithms and segment locking locks.",
    bullets: [
      "Prevented memory racing states under heavy read pressures by utilizing atomic primitives.",
      "Designed clean cluster peer discovery contracts utilizing light connection pools over internal gRPC channels."
    ],
    metric: "Handles 250k+ requests/sec per shard"
  },
  {
    id: "event-mesh",
    title: "Custom Event Message Broker",
    category: "Systems Design",
    techStack: ["Rust", "TCP Sockets", "Asynchronous I/O", "Custom Protocol"],
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-server-racks-with-blinking-lights-in-a-datacenter-31901-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/custom-event-mesh",
    summary: "Low-overhead binary pub-sub server handling consumer message offsets via append-only commit logs.",
    bullets: [
      "Zero-copy serialization routines maximizing direct network card interface transmissions.",
      "Engineered partitioned message storage frameworks maintaining thread-safe index pointers."
    ],
    metric: "Sub-microsecond internal dispatch latency"
  },

  // --- DOMAIN 5: SERVERLESS ARCHITECTURES ---
  {
    id: "serverless-transcoder",
    title: "Serverless Video Processing Line",
    category: "Serverless",
    techStack: ["AWS Step Functions", "Lambda", "MediaConvert", "SNS"],
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-lens-of-a-video-camera-turning-close-up-34316-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/serverless-video-transcoder",
    summary: "State-machine driven workflow executing chunked media adaptations, resolutions splitting, and dynamic watermark injection on file drops.",
    bullets: [
      "Orchestrated parallel loop tracks managing asset transformations concurrently without scaling compute blocks.",
      "Mapped webhook signals notifying target frontend client applications upon output state completions."
    ],
    metric: "90% more cost-effective than idle servers"
  },
  {
    id: "auth-service",
    title: "Decoupled Serverless Auth Gateway",
    category: "Serverless",
    techStack: ["AWS Lambda", "API Gateway", "Cognito Triggers", "JWT Keys"],
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-scanning-a-fingerprint-on-a-futuristic-screen-40013-large.mp4",
    liveUrl: "https://auth.aditya.dev",
    githubUrl: "https://github.com/aditya/serverless-auth-gateway",
    summary: "Token authorization proxy validating cryptographic keys via micro lambda runtime contexts.",
    bullets: [
      "Decreased execution spin-up delays by stripping unnecessary dependencies from processing binaries.",
      "Integrated secure caching parameters on API structures shielding backend verification routes."
    ],
    metric: "Authorizer cold starts under 120ms"
  },

  // --- DOMAIN 6: HIGH-PERFORMANCE FRONTEND ---
  {
    id: "excel-parser",
    title: "Client-Side CSV/Excel Parse Core",
    category: "Frontend",
    techStack: ["React.js", "Tailwind CSS", "JS Web Workers", "HTML5"],
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-luminous-keyboard-in-the-dark-43118-large.mp4",
    liveUrl: "https://parser.aditya.dev",
    githubUrl: "https://github.com/aditya/excel-json-tool",
    summary: "A zero-database browser parsing engine optimized to sanitize multi-megabyte data files locally into secure JSON formats.",
    bullets: [
      "Offloaded parsing loops from the main layout thread using HTML5 Web Workers maintaining 60 FPS.",
      "Engineered structured data grid views with native layout utilities allowing fluid real-time mapping."
    ],
    metric: "Parsed 50k+ rows in less than 200ms"
  },
  {
    id: "canvas-cad",
    title: "Vector Graph Canvas Engine",
    category: "Frontend",
    techStack: ["React.js", "HTML5 Canvas", "TypeScript", "Linear Algebra"],
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-digital-design-screens-and-charts-background-31911-large.mp4",
    liveUrl: "https://canvas.aditya.dev",
    githubUrl: "https://github.com/aditya/vector-graph-canvas",
    summary: "High-performance vector layout environment rendering thousands of nodes smoothly using spatial partitioning.",
    bullets: [
      "Implemented raw bounding-box intersections filtering off-screen nodes to skip heavy redraw operations.",
      "Wrote responsive math matrices handling canvas zooming and tracking coordinates accurately."
    ],
    metric: "Maintained stable 60 FPS under 10k nodes"
  },

  // --- DOMAIN 7: CLOUD DEV OPS & NETWORKING ---
  {
    id: "k8s-mesh",
    title: "Automated Service Mesh Proxy",
    category: "DevOps",
    techStack: ["Kubernetes", "Docker", "Envoy Sidecar", "Go"],
    thumbnail: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-blue-matrix-of-screens-and-networks-31910-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/k8s-service-mesh",
    summary: "Traffic routing network injecting dynamic sidecars to handle encrypted node communications and auto-retries.",
    bullets: [
      "Configured container initialization scripts capturing and redirecting core virtual network ports seamlessly.",
      "Wrote structured metrics exporters collecting cluster health codes for dashboard monitoring systems."
    ],
    metric: "Automated traffic failovers within 300ms"
  },
  {
    id: "cicd-runner",
    title: "Isolated Container CI/CD Engine",
    category: "DevOps",
    techStack: ["Go", "Docker API", "gRPC", "Redis Queues"],
    thumbnail: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-data-center-server-racks-with-flashing-indicator-lights-31902-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/cicd-container-runner",
    summary: "Automated compilation system spinning up secure, temporary environments to parse dependencies and run tests safely.",
    bullets: [
      "Engineered clean broker queues distributing build workloads smoothly across active node groups.",
      "Isolated execution environments from host systems by restricting data path bindings and kernel rules."
    ],
    metric: "Spawns sandboxed build nodes under 800ms"
  },

  // --- DOMAIN 8: WEB3 & DISTRIBUTED DATA ---
  {
    id: "eth-dex",
    title: "Decentralized Liquidity Pool",
    category: "Web3",
    techStack: ["Solidity", "Hardhat", "Ethers.js", "React.js"],
    thumbnail: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-glowing-gold-bitcoin-coin-spinning-close-up-42013-large.mp4",
    liveUrl: "https://dex.aditya.dev",
    githubUrl: "https://github.com/aditya/decentralized-amm",
    summary: "Automated market-maker smart contract managing math swaps via an optimal constant-product logic curve.",
    bullets: [
      "Minified transaction execution weights by stripping variables and organizing data block arrays tightly.",
      "Designed defensive routing layers safeguarding token exchanges against validation loop attacks."
    ],
    metric: "Gas utilization reduced by 18%"
  },
  {
    id: "ipfs-drive",
    title: "Encrypted P2P Document Vault",
    category: "Web3",
    techStack: ["IPFS Nodes", "Web Crypto", "Node.js", "React.js"],
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-lines-on-a-black-background-31922-large.mp4",
    liveUrl: "https://vault.aditya.dev",
    githubUrl: "https://github.com/aditya/ipfs-encrypted-vault",
    summary: "Decentralized data locker slicing and encrypting files within local sessions before distributing shards to networks.",
    bullets: [
      "Wrote multi-layered cryptographic key rules handling key derivations smoothly in-app.",
      "Mapped index pointers onto immutable hash models ensuring tamper-proof record histories."
    ],
    metric: "Zero file data visibility on host nodes"
  },

  // --- DOMAIN 9: API SECURITY & GATEWAYS ---
  {
    id: "rate-limiter",
    title: "Distributed Rate-Limiting Filter",
    category: "Security",
    techStack: ["Node.js", "Redis Lua", "Express", "Docker"],
    thumbnail: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-fingerprint-identity-verification-on-a-hud-screen-40015-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/distributed-rate-limiter",
    summary: "Enterprise proxy filtering requests across networks using an asynchronous sliding-window log paradigm.",
    bullets: [
      "Packed complex execution rules into atomic Redis Lua procedures preventing race conditions under heavy load.",
      "Optimized payload parsing steps to maintain fast routing pathways for passing traffic."
    ],
    metric: "Intercepted 50k requests/sec at 2ms latency"
  },
  {
    id: "waf-proxy",
    title: "Behavioral Web Firewall Proxy",
    category: "Security",
    techStack: ["Go", "RegEx Codes", "Reverse Proxy", "Redis"],
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-digital-world-map-network-connection-background-31913-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/behavioral-waf-proxy",
    summary: "Reverse proxy scrubbing payload bodies to block SQL injections and cross-site scripting anomalies natively.",
    bullets: [
      "Wrote high-speed regular expression evaluation tracks tracking payload characteristics in real time.",
      "Engineered automated IP blacklisting routines updating shared caches across nodes instantly."
    ],
    metric: "Filters standard web exploits sub-4ms"
  },

  // --- DOMAIN 10: REAL-TIME DATA & SEARCH ---
  {
    id: "search-indexer",
    title: "Custom Inverted Index Engine",
    category: "Data Processing",
    techStack: ["Java", "Concurrency", "File I/O", "TF-IDF Math"],
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-close-up-34224-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/custom-search-indexer",
    summary: "Multithreaded processing layout indexing unorganized log texts and ranking matches using term frequency logic.",
    bullets: [
      "Utilized optimized segment locking strategies allowing clean simultaneous text ingest operations.",
      "Engineered compressed memory indices squeezing storage requirements down significantly."
    ],
    metric: "Queries 1M+ documents sub-15ms"
  },
  {
    id: "log-aggregator",
    title: "Distributed Log Ingest Core",
    category: "Data Processing",
    techStack: ["Go", "Kafka Broker", "Elasticsearch", "gRPC Channels"],
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-animation-of-screens-and-servers-data-center-31909-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/distributed-log-aggregator",
    summary: "Fault-tolerant messaging pipeline pooling unstructured application traces and pushing parsed metrics directly into storage rows.",
    bullets: [
      "Designed high-efficiency internal buffer batching mechanisms minimizing indexing transaction overhead blocks.",
      "Wrote dynamic parsing templates isolating system alert classifications correctly out of text fields."
    ],
    metric: "Ingests 100k log strings/sec securely"
  },
  // --- DOMAIN 11: AI ORCHESTRATION & SYNTHETICS ---
  {
    id: "pov-diffusion",
    title: "POV Photorealistic Simulation Engine",
    category: "AI & Engineering",
    techStack: ["Stable Diffusion", "ControlNet", "Python", "Web Crypto API"],
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-fast-on-a-computer-keyboard-41731-large.mp4",
    liveUrl: "https://simulation.aditya.dev",
    githubUrl: "https://github.com/aditya/pov-photoreal-engine",
    summary: "A conditional synthesis framework generating first-person POV found-footage video frames utilizing deep latent diffusion maps.",
    bullets: [
      "Orchestrated custom token weights managing harsh flashlight illumination rendering profiles.",
      "Engineered prompt-matrix pipelines ensuring structural frame texture coherence across sequential runs."
    ],
    metric: "Maintained zero-shot visual structural coherence"
  },
  {
    id: "krishna-animator",
    title: "Multi-Modal Stylized Asset Generator",
    category: "AI & Engineering",
    techStack: ["Sora API", "Runway Gen-2", "Node.js", "Express"],
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-digital-design-screens-and-charts-background-31911-large.mp4",
    liveUrl: "https://animator.aditya.dev",
    githubUrl: "https://github.com/aditya/stylized-asset-generator",
    summary: "Generative canvas microservice optimizing cute, highly vibrant, age-targeted cultural multi-character cartoon animations.",
    bullets: [
      "Blueprinted conditional age-group seed checkpoints ensuring output characters mapped to baby demographic constraints.",
      "Constructed a high-speed Express streaming buffer distributing multi-character synthesized frames without lag."
    ],
    metric: "Rendered 4k multi-character segments sub-3s"
  },
  {
    id: "latent-editor",
    title: "ControlNet Vector Keyframe Aligner",
    category: "AI & Engineering",
    techStack: ["PyTorch", "Diffusers", "FastAPI", "React.js"],
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-close-up-34224-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/controlnet-keyframe-aligner",
    summary: "Advanced node workspace built to inject, manipulate, and map edge constraints directly onto open diffusion latents.",
    bullets: [
      "Wrote optimal tensor transformation arrays preventing matrix calculation degradation inside browser UI threads.",
      "Mapped real-time multi-axis canvas vectors onto background deep network conditioning maps."
    ],
    metric: "Keyframe extraction latency sub-40ms"
  },
  {
    id: "prompt-ats-optimizer",
    title: "Semantic LLM Token Evaluator",
    category: "AI & Engineering",
    techStack: ["LangChain", "OpenAI API", "Redis", "TypeScript"],
    thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34281-large.mp4",
    liveUrl: "https://ats.aditya.dev",
    githubUrl: "https://github.com/aditya/llm-token-evaluator",
    summary: "An automated prompt-auditing interface built to strip token redundancy and track parser tracking behavior in LLM workflows.",
    bullets: [
      "Built low-latency contextual embedding caches inside Redis to optimize recurrent semantic query matches.",
      "Designed clean token-stream interfaces rendering text chunks directly via local execution states."
    ],
    metric: "Reduced prompt token overhead parameters by 28%"
  },
  {
    id: "neural-style-bus",
    title: "Real-Time Video Style Pipeline",
    category: "AI & Engineering",
    techStack: ["ONNX Runtime", "WebGPU", "React.js", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-luminous-keyboard-in-the-dark-43118-large.mp4",
    liveUrl: "https://style.aditya.dev",
    githubUrl: "https://github.com/aditya/webgpu-neural-style",
    summary: "Browser-native model inferencing infrastructure executing artistic tensor style transfers over live webcam frames via WebGPU.",
    bullets: [
      "Eliminated back-end processing calls by compiling deep model parameters down to raw client shader structures.",
      "Optimized canvas pixel arrays to pull and render directly out of local texture hardware caches."
    ],
    metric: "Maintained stable 60 FPS up to 1080p stream resolutions"
  },
  {
    id: "dataset-curator",
    title: "Vector Clustering Data Explorer",
    category: "AI & Engineering",
    techStack: ["Python", "FastAPI", "Pinecone", "D3.js"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-financial-charts-on-a-computer-monitor-43152-large.mp4",
    liveUrl: null,
    githubUrl: "https://github.com/aditya/vector-dataset-curator",
    summary: "Visual analytics sandbox clustering multi-dimensional prompt embeddings to scan for anomalies before training cycles.",
    bullets: [
      "Implemented localized cosine-similarity sorting arrays to filter out corrupt data nodes.",
      "Designed a clean, responsive D3 node web graph linking coordinate points to deep text strings."
    ],
    metric: "Clusters 100k vector arrays sub-10ms"
  },
  {
    id: "agentic-mesh",
    title: "Autonomous Agentic Broker Mesh",
    category: "AI & Engineering",
    techStack: ["Node.js", "LangGraph", "RabbitMQ", "MongoDB"],
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-animation-of-screens-and-servers-data-center-31909-large.mp4",
    liveUrl: "https://mesh.aditya.dev",
    githubUrl: "https://github.com/aditya/agentic-broker-mesh",
    summary: "A highly parallelized agent network that intercepts, acts upon, and resolves multi-stage workflow tasks completely decoupled.",
    bullets: [
      "Wrote structured message routers using RabbitMQ to manage loop feedback safety lines between nodes.",
      "Persisted transaction state tracking steps securely inside localized transactional database logs."
    ],
    metric: "Orchestrated 50+ background execution routines simultaneously"
  }
];

export default data;