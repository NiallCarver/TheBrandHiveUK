"use client"
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-foreground text-background hover:bg-foreground/90 px-4 py-2 shadow-[0_0_24px_rgba(250,204,21,0.06)] hover:shadow-[0_0_40px_rgba(250,204,21,0.10)]',
    ghost: 'bg-transparent border border-white/10 hover:border-white/25 text-foreground px-4 py-2'
  }
  return <button className={cn(base, variants[variant], className)} {...props} />
}
