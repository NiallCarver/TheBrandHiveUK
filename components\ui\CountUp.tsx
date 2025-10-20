"use client";
import { useEffect, useRef, useState } from "react";

function parseValue(input: string){
  const match = input.match(/([+\-−-]?\d+(?:[\.,]\d+)?)(.*)/);
  if(!match) return { num: 0, suffix: input };
  const raw = (match?.[1] ?? '').replace(',', '.');
  const num = Number(raw);
  const suffix = match[2] ?? '';
  return { num, suffix };
}

export default function CountUp({ value, duration=1200 }: { value: string; duration?: number }){
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const start = (ts: number) => {
      if(startRef.current === null) startRef.current = ts;
      const elapsed = ts - (startRef.current ?? ts);
      const p = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(num * eased);
      if(p < 1) raf = requestAnimationFrame(start);
    };
    raf = requestAnimationFrame(start);
    return () => cancelAnimationFrame(raf);
  }, [num, duration]);

  const formatted = Number.isInteger(num) ? Math.round(display).toString() : (display).toFixed(1);
  return <span>{formatted}{suffix}</span>;
}


