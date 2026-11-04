import { ExternalLink, Clock } from 'lucide-react'
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
      className={`group rounded-2xl border border-white/5 bg-surface p-3 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-2 ${
        live ? 'cursor-pointer hover:-translate-y-1 hover:border-brand-2/40 hover:shadow-xl hover:shadow-brand-2/10' : 'cursor-not-allowed opacity-60 grayscale-[40%]'
      }`}
    >
      <Thumbnail app={app} department={department} />
      <div className="flex items-center justify-between gap-3 px-2 pt-4 pb-2">
        <h4 className="font-semibold leading-snug">{app.name}</h4>
        {live ? (
          <ExternalLink className="h-4 w-4 shrink-0 text-neutral-500 transition group-hover:text-brand-2" />
        ) : (
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-xs text-neutral-400">
            <Clock className="h-3 w-3" /> Coming soon
          </span>
        )}
      </div>
    </div>
  )
}
