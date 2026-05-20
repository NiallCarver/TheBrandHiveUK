"use client"
import { useEffect, useMemo, useRef } from 'react'

type Pt = { x: number; y: number; t: number }

export default function HexBackground() {
  const baseRef = useRef<HTMLCanvasElement | null>(null)
  const glowRef = useRef<HTMLCanvasElement | null>(null)
  const trail = useRef<Pt[]>([])
  const rafRef = useRef<number | null>(null)
  const pathRef = useRef<Path2D | null>(null)
  const dimsRef = useRef({ w: 0, h: 0, dpr: 1, size: 38 })
  const dimRef = useRef(1)
  const dimTargetRef = useRef(1)

  const settings = useMemo(() => ({
    lineColor: 'rgba(243,243,243,0.06)',
    lineWidth: 1.1,
    glowColor: 'rgba(250, 204, 21, 0.9)', // yellow-400
    glowOuter: 'rgba(250, 204, 21, 0.25)',
    trailLifespan: 900, // ms
    trailPoints: 14,
  }), [])

  useEffect(() => {
    const base = baseRef.current!
    const glow = glowRef.current!
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches

    const resize = () => {
      const rect = { w: window.innerWidth, h: window.innerHeight }
      // store width/height in device pixels for consistent math
      dimsRef.current = { w: rect.w * dpr, h: rect.h * dpr, dpr, size: Math.max(28, Math.min(54, Math.round(rect.w / 36))) }
      ;[base, glow].forEach((c) => {
        c.width = Math.floor(rect.w * dpr)
        c.height = Math.floor(rect.h * dpr)
        c.style.width = rect.w + 'px'
        c.style.height = rect.h + 'px'
      })
      buildHexPath()
      drawGrid()
    }

    const buildHexPath = () => {
      const { w, h, dpr, size } = dimsRef.current
      const s = size * dpr
      // Flat-top hex geometry
      const hexW = 2 * s
      const hexH = Math.sqrt(3) * s
      const horiz = 1.5 * s // column-to-column
      const vert = hexH // row-to-row
      const cols = Math.ceil(w / (horiz)) + 2
      const rows = Math.ceil(h / (vert)) + 2

      const p = new Path2D()
      // Flat-top hex vertices around center (cx, cy)
      const drawHex = (cx: number, cy: number) => {
        const pts = [
          { x: cx + s, y: cy },
          { x: cx + s / 2, y: cy + (Math.sqrt(3) / 2) * s },
          { x: cx - s / 2, y: cy + (Math.sqrt(3) / 2) * s },
          { x: cx - s, y: cy },
          { x: cx - s / 2, y: cy - (Math.sqrt(3) / 2) * s },
          { x: cx + s / 2, y: cy - (Math.sqrt(3) / 2) * s },
        ] as const
        const first = pts[0]
        if (!first) return
        p.moveTo(first.x, first.y)
        for (let i = 1; i < pts.length; i++) {
          const pt = pts[i]
          if (!pt) continue
          p.lineTo(pt.x, pt.y)
        }
        p.closePath()
      }

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const cx = col * horiz + (w % horiz) / 2
          const cy = row * vert + (col % 2 ? vert / 2 : 0) + (h % vert) / 2
          drawHex(cx, cy)
        }
      }
      pathRef.current = p
    }

    let parallax = 0
    const drawGrid = () => {
      const ctx = base.getContext('2d')!
      const { dpr } = dimsRef.current
      ctx.clearRect(0, 0, base.width, base.height)
      if (!pathRef.current) return
      ctx.save()
      // subtle parallax translate based on scroll
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.translate(0, parallax)
      ctx.strokeStyle = settings.lineColor
      ctx.lineWidth = settings.lineWidth * dpr
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.stroke(pathRef.current)
      // subtle vignette
      const grad = ctx.createRadialGradient(base.width / 2, base.height / 2, 0, base.width / 2, base.height / 2, Math.max(base.width, base.height) / 1.2)
      grad.addColorStop(0, 'rgba(0,0,0,0)')
      grad.addColorStop(1, 'rgba(0,0,0,0.35)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, base.width, base.height)
      ctx.restore()
    }

    const contentSelectors = 'main,.card,button,a,input,textarea,select,[role="button"],[role="link"],h1,h2,h3,p,li,details,summary,nav,header,footer'
    const onMove = (e: MouseEvent) => {
      if (!finePointer || prefersReduced) return
      const rect = glow.getBoundingClientRect()
      const x = (e.clientX - rect.left) * dpr
      const y = (e.clientY - rect.top) * dpr
      const now = performance.now()
      trail.current.unshift({ x, y, t: now })
      if (trail.current.length > settings.trailPoints) trail.current.length = settings.trailPoints
      // determine if over content; dim target to 0.5 when over
      const overContent = e.target instanceof Element && !!e.target.closest(contentSelectors)
      dimTargetRef.current = overContent ? 0.5 : 1
    }

    const onScroll = () => {
      // tiny parallax effect; redraw base grid
      parallax = (window.scrollY * 0.03) * dpr
      drawGrid()
    }

    const animate = () => {
      const g = glow.getContext('2d')!
      const { dpr } = dimsRef.current
      g.clearRect(0, 0, glow.width, glow.height)

      // Ease dimming for seamless transitions
      dimRef.current += (dimTargetRef.current - dimRef.current) * 0.08

      // Build luminous field
      g.save()
      g.globalCompositeOperation = 'source-over'
      const now = performance.now()
      const pts = trail.current.filter(p => now - p.t < settings.trailLifespan)
      trail.current = pts
      for (let i = pts.length - 1; i >= 0; i--) {
        const p = pts[i]
        if (!p) continue
        const age = (now - p.t) / settings.trailLifespan
        const r = (120 + i * 6) * dpr
        const grad = g.createRadialGradient(p.x, p.y, 0, p.x, p.y, r)
        grad.addColorStop(0, settings.glowColor)
        grad.addColorStop(0.5, settings.glowOuter)
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        g.globalAlpha = (1 - age) * dimRef.current
        g.fillStyle = grad
        g.beginPath()
        g.arc(p.x, p.y, r, 0, Math.PI * 2)
        g.fill()
      }

      // Mask to hex lines so glow runs along edges
      if (pathRef.current) {
        g.globalCompositeOperation = 'destination-in'
        g.strokeStyle = 'rgba(255,255,255,1)'
        g.lineWidth = Math.max(1.5, settings.lineWidth * 1.6) * dpr
        g.lineCap = 'round'
        g.lineJoin = 'round'
        g.stroke(pathRef.current)
      }

      // Add a soft outer bloom
      if (pts.length) {
        g.globalCompositeOperation = 'lighter'
        g.globalAlpha = 0.25
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i]
          if (!p) continue
          g.shadowBlur = 24 * dpr
          g.shadowColor = 'rgba(250, 204, 21, 0.35)'
          g.beginPath()
          g.moveTo(p.x, p.y)
          g.lineTo(p.x + 0.01, p.y)
          g.stroke()
        }
      }
      g.restore()

      rafRef.current = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    if (!prefersReduced && finePointer) {
      rafRef.current = requestAnimationFrame(animate)
    }

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [settings])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{ contain: 'layout style paint' }}>
      <canvas ref={baseRef} />
      <canvas ref={glowRef} style={{ position: 'absolute', inset: 0 }} />
    </div>
  )
}
