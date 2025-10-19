"use client";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

type MotionCtx = { enabled: boolean; toggle: () => void; set: (v:boolean)=>void };
const Ctx = createContext<MotionCtx | null>(null);

export function MotionProvider({ children }: { children: ReactNode }){
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem("motionEnabled") : null;
    if (stored !== null) setEnabled(stored === "true");
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem("motionEnabled", String(enabled));
    document.documentElement.setAttribute("data-motion", enabled ? "on" : "off");
  }, [enabled]);

  const value = useMemo<MotionCtx>(() => ({ enabled, toggle: () => setEnabled(v => !v), set: setEnabled }), [enabled]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useMotion(){
  const ctx = useContext(Ctx);
  if(!ctx) return { enabled: true, toggle: () => {}, set: (_v:boolean)=>{} } as MotionCtx;
  return ctx;
}

