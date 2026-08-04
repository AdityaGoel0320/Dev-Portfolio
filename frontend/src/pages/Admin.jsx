import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";

// =========================================================================
// IMMUTABLE SYSTEMS PROTOCOL SCHEMA
// Keep-alive targets synchronized via looping background threads.
// =========================================================================
const BACKEND_SERVICES_MATRIX = [
  {
    id: "nemo-core",
    appName: "Nemo Core API Engine",
    endpoint: "https://nemo-admin-backend.render.com/api/v1/health",
    repoLink: "https://github.com/yourusername/nemo-micro-admin",
    renderLink: "https://render.com/dashboard/srv-nemo-core-id"
  },
  {
    id: "auth-gateway",
    appName: "Serverless Identity Authorizer",
    endpoint: "https://auth-gateway-service.render.com/auth/ping",
    repoLink: "https://github.com/yourusername/serverless-auth-gateway",
    renderLink: "https://render.com/dashboard/srv-auth-gateway-id"
  },
  {
    id: "excel-parser-api",
    appName: "Excel Analytics Processing Cluster",
    endpoint: "https://excel-json-tool-backend.render.com/api/v1/status",
    repoLink: "https://github.com/yourusername/excel-json-tool",
    renderLink: "https://render.com/dashboard/srv-excel-parser-id"
  },
  {
    id: "rate-limiter-service",
    appName: "Distributed Rate-Limit Sync Bus",
    endpoint: "https://limiter-proxy.render.com/healthcheck",
    repoLink: "https://github.com/yourusername/distributed-rate-limiter",
    renderLink: "https://render.com/dashboard/srv-rate-limiter-id"
  }
];

const Admin = () => {
  const [services, setServices] = useState(
    BACKEND_SERVICES_MATRIX.map((s) => ({
      ...s,
      status: "idle", // idle | warming | active | failed
      responseTime: null,
    }))
  );
  
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [globalProgress, setGlobalProgress] = useState(0);
  const [loopCount, setLoopCount] = useState(1);
  
  const timerRef = useRef(null);
  const hasAutoRun = useRef(false);

  // --- INDIVIDUAL ENDPOINT BACKGROUND PROBE LAYER ---
  const warmSingleService = async (index, service) => {
    setServices((prev) => {
      const next = [...prev];
      next[index].status = "warming";
      return next;
    });

    const startTime = performance.now();
    try {
      const response = await fetch(service.endpoint, {
        method: "GET",
        headers: { "Cache-Control": "no-cache" },
      });
      
      const endTime = performance.now();
      const elapsedMs = Math.round(endTime - startTime);

      setServices((prev) => {
        const next = [...prev];
        next[index].status = response.ok ? "active" : "failed";
        next[index].responseTime = `${elapsedMs}ms`;
        return next;
      });
    } catch (error) {
      console.error(`Warming fault intercepted on target [${service.id}]:`, error);
      setServices((prev) => {
        const next = [...prev];
        next[index].status = "failed";
        next[index].responseTime = "Timeout";
        return next;
      });
    }
  };

  // --- MAIN ORCHESTRATION PIPELINE CASCADE ---
  const triggerGlobalWarmupSequence = () => {
    setTimeElapsed(0);
    setGlobalProgress(0);
    
    BACKEND_SERVICES_MATRIX.forEach((service, index) => {
      warmSingleService(index, service);
    });
  };

  // --- INFINITE INFINITE RETRY CRON TASK LOOPER ---
  useEffect(() => {
    if (!hasAutoRun.current) {
      hasAutoRun.current = true;
      triggerGlobalWarmupSequence();
    }

    timerRef.current = setInterval(() => {
      setTimeElapsed((prevTime) => {
        const nextTime = prevTime + 1;
        
        // Update metric math linearly across the bar width
        setGlobalProgress((nextTime / 40) * 100);

        // EVAL CONDITION: Trigger clean loop recurrence when countdown completes
        if (nextTime >= 40) {
          setLoopCount((prevCount) => prevCount + 1);
          triggerGlobalWarmupSequence();
          return 0;
        }

        return nextTime;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <PageTransition>
      <section className="w-full max-w-5xl mx-auto px-4 py-6 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.02] blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* --- Header Automation Frame --- */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border rounded-full bg-white/5 border-white/10 backdrop-blur-md text-indigo-400 mb-5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
            CRON://DAEMON_LOOP_ACTIVE
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
            Infrastructure Grid & <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Persistent Looping Matrix.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-neutral-400 font-light">
            An isolated automated keep-alive engine. The control layer loops every 40 seconds to continuously ping hosting targets, neutralizing background server-sleep protocols entirely without requiring interface interactions.
          </p>
        </div>

        {/* --- Automated Telemetry HUD Overlay --- */}
        <div className="rounded-xl border border-white/[0.05] bg-gradient-to-b from-white/[0.01] to-transparent p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="space-y-2 w-full md:w-auto">
            <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase block">
              Continuous Loop Instrumentation telemetry
            </span>
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-mono font-bold text-white">{timeElapsed}s</span>
                <span className="text-xs text-neutral-500 font-mono">/ 40s Refresh</span>
              </div>
              <span className="text-neutral-700">|</span>
              <p className="text-xs text-neutral-400 max-w-md font-light">
                Cluster cycle actively refreshing in background loops. Free runtimes forced to persist online.
              </p>
            </div>
          </div>

          {/* Locked Terminal State Indicator Capsule */}
          <div className="w-full md:w-auto px-5 py-3 rounded-xl text-xs font-mono font-semibold tracking-wider text-neutral-400 border border-white/[0.04] bg-neutral-950 flex items-center justify-center gap-2.5 shadow-inner">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            CYCLE_ID: // {String(loopCount).padStart(3, "0")}
          </div>
        </div>

        {/* --- Automated Pipeline Meter Track --- */}
        <div className="w-full h-1 bg-neutral-950 border border-white/5 rounded-full overflow-hidden mb-8">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${globalProgress}%` }}
          />
        </div>

        {/* --- Dynamic Diagnostic Monitoring Matrix --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((srv, idx) => (
            <div 
              key={srv.id}
              className="rounded-xl border border-white/[0.04] bg-neutral-900/20 p-5 flex flex-col justify-between gap-5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 truncate">
                  <h3 className="text-sm font-bold text-white tracking-tight truncate">
                    {srv.appName}
                  </h3>
                  <p className="text-[10px] font-mono text-neutral-500 truncate max-w-[280px]">
                    {srv.endpoint}
                  </p>
                </div>

                {/* --- Interactive Indicator System --- */}
                <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
                  <span className="text-[9px] font-mono tracking-wider font-semibold uppercase">
                    {srv.status === "idle" && <span className="text-neutral-500">Idle</span>}
                    {srv.status === "warming" && <span className="text-orange-400 animate-pulse">Polling</span>}
                    {srv.status === "active" && <span className="text-emerald-400">Online</span>}
                    {srv.status === "failed" && <span className="text-rose-500">Offline</span>}
                  </span>

                  <div className="relative flex h-2 w-2">
                    {srv.status === "warming" && (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                      </>
                    )}
                    {srv.status === "active" && (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </>
                    )}
                    {srv.status === "failed" && (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                      </>
                    )}
                    {srv.status === "idle" && (
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-700" />
                    )}
                  </div>
                </div>
              </div>

              {/* --- Redirection Anchor Pipelines --- */}
              <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/[0.04]">
                {srv.responseTime ? (
                  <span className="text-[9px] font-mono text-neutral-400 bg-neutral-950 border border-white/5 px-2 py-0.5 rounded">
                    LATENCY: {srv.responseTime}
                  </span>
                ) : (
                  <span className="text-[9px] font-mono text-neutral-600">LATENCY: --</span>
                )}
                
                <div className="flex items-center gap-2">
                  <a 
                    href={srv.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-neutral-400 hover:text-white transition-colors px-2 py-1 rounded border border-white/5 bg-white/[0.02]"
                  >
                    <i className="fab fa-github text-xs" /> Source
                  </a>
                  <a 
                    href={srv.renderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold text-indigo-400 hover:text-indigo-300 transition-colors px-2 py-1 rounded border border-indigo-500/10 bg-indigo-500/[0.02]"
                  >
                    <i className="fas fa-server text-[9px]" /> Render Cloud
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>
    </PageTransition>
  );
};

export default Admin;