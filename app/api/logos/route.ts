import { NextResponse } from 'next/server'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'logos')
    const entries = await readdir(dir, { withFileTypes: true })
    const exts = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.avif'])
    const exclude = new Set(['brand-logo.png', 'the_brand_hive_uk_transparent.png'])
    const files = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => !name.startsWith('.'))
      .filter((name) => exts.has(path.extname(name).toLowerCase()))
      .filter((name) => !exclude.has(name.toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
    const urls = files.map((f) => ({ src: `/logos/${f}`, alt: f.replace(/\.[^.]+$/, '').replace(/[-_+]+/g, ' ').trim() }))
    return NextResponse.json({ logos: urls })
  } catch (err) {
    return NextResponse.json({ logos: [] })
  }
}
