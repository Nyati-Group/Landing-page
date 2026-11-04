import { ArrowUpRight, Clock } from 'lucide-react'
import Thumbnail from './Thumbnail.jsx'

export default function AppCard({ app, department }) {
  const live = Boolean(app.url)

  const open = () => {
    if (live) window.open(app.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      role="link"
      tabIndex={live ? 0 : -1}
      aria-disabled={!live}
      onClick={open}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), open())}
      className={`group overflow-hidden rounded-2xl shadow-md shadow-brand-1/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-2 focus-visible:ring-offset-2 ${
        live ? 'cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-1/20' : 'cursor-not-allowed opacity-60 grayscale-[40%]'
      }`}
    >
      <Thumbnail app={app} department={department}>
        <div className="flex items-end justify-between gap-3">
          <h4 className="text-lg font-semibold leading-snug text-white">{app.name}</h4>
          {live ? (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition group-hover:bg-white group-hover:text-brand-1">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          ) : (
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-xs text-white">
              <Clock className="h-3 w-3" /> Coming soon
            </span>
          )}
        </div>
      </Thumbnail>
    </div>
  )
}
