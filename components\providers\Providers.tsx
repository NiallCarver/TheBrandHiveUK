"use client";
import { ReactNode } from "react";
import { MotionProvider } from "./MotionProvider";

export default function Providers({ children }: { children: ReactNode }){
  return (
    <MotionProvider>
      {children}
    </MotionProvider>
  );
}

