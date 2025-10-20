"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title?: string; children: React.ReactNode }){
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-50" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} aria-modal role="dialog">
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <div className="absolute inset-0 grid place-items-center p-4">
            <motion.div initial={{opacity:0, y:20, scale:0.98}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:10, scale:0.98}} transition={{type:'spring', stiffness:200, damping:20}} className="w-full max-w-xl rounded-2xl border border-white/10 bg-card p-6 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-medium">{title}</h3>
                <button className="text-sm text-muted hover:text-foreground" onClick={onClose} aria-label="Close">Close</button>
              </div>
              <div className="mt-4 text-sm">
                {children}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

