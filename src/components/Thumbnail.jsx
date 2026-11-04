import { useId } from 'react'
import Icon from './Icon.jsx'

// Deterministic per-app variation so every thumbnail is unique but on-brand.
function hash(str) {
  let h = 0
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) | 0
  return Math.abs(h)
}

export default function Thumbnail({ app, department }) {
  const id = useId().replace(/:/g, '')
  const seed = hash(department.id + app.name)
  const angle = seed % 360
  const cx = 20 + (seed % 60)
  const cy = 15 + ((seed >> 3) % 50)

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-surface">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`g${id}`} gradientTransform={`rotate(${angle} .5 .5)`}>
            <stop offset="0" style={{ stopColor: 'var(--ink-1)' }} />
            <stop offset=".55" style={{ stopColor: 'var(--ink-2)' }} />
            <stop offset="1" style={{ stopColor: 'var(--ink-3)' }} />
          </linearGradient>
          <radialGradient id={`r${id}`}>
            <stop offset="0" stopColor="#fff" stopOpacity=".35" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <pattern id={`p${id}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M10 0H0V10" fill="none" stroke="#fff" strokeOpacity=".08" strokeWidth=".5" />
          </pattern>
        </defs>
        <rect width="160" height="100" fill={`url(#g${id})`} />
        <rect width="160" height="100" fill={`url(#p${id})`} />
        <circle cx={cx} cy={cy} r="45" fill={`url(#r${id})`} />
        <circle cx={160 - cx / 2} cy={100 - cy / 3} r={22 + (seed % 14)} fill="none" stroke="#fff" strokeOpacity=".18" />
        <circle cx={160 - cx / 2} cy={100 - cy / 3} r={36 + (seed % 14)} fill="none" stroke="#fff" strokeOpacity=".1" />
        <path d={`M0 ${70 + (seed % 15)} Q 50 ${50 + (seed % 30)} 160 ${60 + (seed % 25)} V100 H0Z`} fill="#000" fillOpacity=".18" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-2xl border border-white/30 bg-white/15 p-4 shadow-lg backdrop-blur-sm">
          <Icon name={app.icon} className="h-10 w-10 text-white" strokeWidth={1.6} />
        </div>
      </div>

      <span className="absolute top-3 left-3 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur">
        {department.name}
      </span>
    </div>
  )
}
