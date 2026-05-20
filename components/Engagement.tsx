"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const metrics = [
  { label: "Impressions", value: 922, unit: "K", trend: [62,88,91,110,160,220,410,690,922] },
  { label: "Saves", value: 18, unit: "K", trend: [1,2,3,4,6,8,12,15,18] },
  { label: "Replies", value: 14, unit: "K", trend: [0.6,1.0,1.4,2.1,4.2,6.5,9.1,12.3,14.0] },
  { label: "Profile Visits", value: 165, unit: "K", trend: [9,12,18,25,40,66,92,130,165] },
  { label: "Yearly ROI", value: 3.92, unit: "×", trend: [1.1,1.2,1.3,1.6,2.0,2.5,3.0,3.5,3.92] },
  { label: "Qualified Booked Calls", value: 42, unit: "", trend: [2,4,6,9,14,20,29,36,42] },
];

function Sparkline({ points }: { points: number[] }){
  const width = 120, height = 40;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const norm = (v: number, i: number) => {
    const x = (i / (points.length - 1)) * width;
    const y = height - ((v - min) / Math.max(1, (max - min))) * height;
    return `${x},${y}`;
  };
  const d = points.map(norm).join(" ");
  return (
    <svg width={width} height={height} className="opacity-90">
      <polyline points={d} fill="none" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" />
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.00" />
        </linearGradient>
      </defs>
      <polygon points={`${d} ${width},${height} 0,${height}`} fill="url(#g)" />
    </svg>
  );
}

export default function Engagement(){
  const controls = useAnimationControls();
  useEffect(() => { controls.start({ opacity: [0,1], y: [12,0] , transition:{ duration: 0.6 } }); }, [controls]);
  return (
    <section aria-label="Engagement & Metrics" className="pt-10 pb-16 -mt-6">
      <div className="container-slim">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Average Client Metrics as of June 1st 2025</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label} animate={controls} transition={{ delay: i*0.04 }} className="card p-5 ui-glow relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(500px 180px at 85% -10%, rgba(245,197,66,.08), transparent 60%)"}}/>
              <div className="text-xs text-muted-foreground">{m.label}</div>
              <div className="mt-1 flex items-baseline gap-1">
                <div className="text-3xl font-semibold tracking-tight">{m.value}</div>
                <div className="text-base text-muted-foreground">{m.unit}</div>
              </div>
              <div className="mt-3 text-[11px] text-muted-foreground">Last 9 intervals</div>
              <div className="mt-2 text-accent">
                <Sparkline points={m.trend} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
