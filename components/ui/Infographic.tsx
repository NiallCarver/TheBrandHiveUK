"use client";
import React from "react";

type Props = {
  kind?: number;
  className?: string;
};

function Bars() {
  const bars = [8, 14, 20, 26, 18, 30, 36];
  const w = 120, h = 40, bw = 10, gap = 7;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      {bars.map((v, i) => (
        <rect key={i} x={i * (bw + gap)} y={h - v} width={bw} height={v} rx={2} fill="currentColor" opacity={0.75 - i * 0.06} />
      ))}
    </svg>
  );
}

function Radar() {
  const w = 120, h = 40, cx = 60, cy = 20, r = 18;
  const pts = 6;
  const toXY = (i: number, rr: number) => [cx + rr * Math.cos((Math.PI * 2 * i) / pts - Math.PI / 2), cy + rr * Math.sin((Math.PI * 2 * i) / pts - Math.PI / 2)];
  const ring = (rr: number) => Array.from({ length: pts }, (_, i) => toXY(i, rr)).map(([x, y]) => `${x},${y}`).join(" ");
  const poly = [0.9, 0.7, 0.6, 0.85, 0.5, 0.95].map((m, i) => toXY(i, r * m)).map(([x, y]) => `${x},${y}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      {[0.4, 0.7, 1].map((m, idx) => (
        <polygon key={idx} points={ring(r * m)} fill="none" stroke="currentColor" opacity={0.15} />
      ))}
      <polygon points={poly} fill="currentColor" opacity={0.18} />
    </svg>
  );
}

function Flow() {
  const w = 120, h = 40;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      <rect x={2} y={6} width={30} height={28} rx={6} fill="currentColor" opacity={0.12} />
      <rect x={45} y={6} width={30} height={28} rx={6} fill="currentColor" opacity={0.18} />
      <rect x={88} y={6} width={30} height={28} rx={6} fill="currentColor" opacity={0.12} />
      <path d="M34 20 H44" stroke="currentColor" opacity={0.6} />
      <path d="M78 20 H88" stroke="currentColor" opacity={0.6} />
      <path d="M42 16 l4 4 -4 4" fill="none" stroke="currentColor" opacity={0.6} />
      <path d="M86 16 l4 4 -4 4" fill="none" stroke="currentColor" opacity={0.6} />
    </svg>
  );
}

function Funnel() {
  const w = 120, h = 40;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      <polygon points="6,6 114,6 96,14 24,14" fill="currentColor" opacity={0.12} />
      <polygon points="24,16 96,16 86,24 34,24" fill="currentColor" opacity={0.18} />
      <polygon points="36,26 84,26 78,34 42,34" fill="currentColor" opacity={0.25} />
    </svg>
  );
}

function Network() {
  const w = 120, h = 40;
  const nodes = [
    [18, 20], [48, 10], [48, 30], [78, 14], [78, 26], [102, 20]
  ];
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      <g stroke="currentColor" opacity={0.35}>
        <path d="M18 20 L48 10 L78 14 L102 20" />
        <path d="M18 20 L48 30 L78 26 L102 20" />
        <path d="M48 10 L48 30" />
        <path d="M78 14 L78 26" />
      </g>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={3} fill="currentColor" opacity={0.7 - i * 0.08} />
      ))}
    </svg>
  );
}

function Timeline() {
  const w = 120, h = 40;
  const xs = [8, 30, 52, 74, 96, 112];
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden>
      <line x1={8} y1={20} x2={112} y2={20} stroke="currentColor" opacity={0.25} />
      {xs.map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={20} r={3} fill="currentColor" opacity={0.5 + i * 0.08} />
          <rect x={x - 4} y={8} width={8} height={6} rx={1} fill="currentColor" opacity={0.12 + i * 0.06} />
        </g>
      ))}
    </svg>
  );
}

export default function Infographic({ kind = 0, className = "" }: Props) {
  const K = kind % 6;
  const Figure = [Bars, Radar, Flow, Funnel, Network, Timeline][K] ?? Bars;
  return (
    <div className={className} aria-hidden>
      <Figure />
    </div>
  );
}

