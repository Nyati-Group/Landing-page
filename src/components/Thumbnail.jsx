import { useId } from 'react'
import Icon from './Icon.jsx'

// Deterministic per-app variation so every thumbnail is unique but on-brand.
function hash(str) {
  let h = 0
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) | 0
  return Math.abs(h)
}

// Horizontal bands that get thicker toward the bottom, echoing the striped
// circle in the Nyati logo.
const STRIPES = Array.from({ length: 12 }, (_, i) => ({ y: i / 12, h: (0.2 + i * 0.04) / 12 }))

// Full-bleed card art; `children` (title row) is laid over the bottom edge.
export default function Thumbnail({ app, department, children }) {
  const id = useId().replace(/:/g, '')
  const seed = hash(department.id + app.name)
  const angle = 115 + (seed % 50)
  const cx = 112 + (seed % 22)
  const cy = 44 + ((seed >> 4) % 18)
  const r = 50 + ((seed >> 7) % 10)

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-brand-1">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`g${id}`} gradientTransform={`rotate(${angle} .5 .5)`}>
            <stop offset="0" style={{ stopColor: 'var(--ink-1)' }} />
            <stop offset=".5" style={{ stopColor: 'var(--ink-2)' }} />
            <stop offset="1" style={{ stopColor: 'var(--ink-3)' }} />
          </linearGradient>
          <radialGradient id={`r${id}`} cx="0" cy="0" r="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".22" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <clipPath id={`c${id}`}>
            <circle cx={cx} cy={cy} r={r} />
          </clipPath>
        </defs>
        <rect width="160" height="100" fill={`url(#g${id})`} />
        <rect width="160" height="100" fill={`url(#r${id})`} />
        <g
          clipPath={`url(#c${id})`}
          className="transition-transform duration-500 group-hover:scale-105"
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        >
          {STRIPES.map((s, i) => (
            <rect key={i} x={cx - r} y={cy - r + s.y * 2 * r} width={2 * r} height={s.h * 2 * r} fill="#fff" fillOpacity=".16" />
          ))}
        </g>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#fff" strokeOpacity=".12" strokeWidth=".6" />
      </svg>

      <div className="absolute top-6 left-6 rounded-2xl bg-white p-3.5 shadow-xl shadow-black/20 transition duration-300 group-hover:-translate-y-0.5">
        <Icon name={app.icon} className="h-8 w-8 text-brand-1" strokeWidth={1.8} />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-6 pt-16">{children}</div>
    </div>
  )
}
