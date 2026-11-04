import { ArrowRight } from 'lucide-react'
import Icon from './Icon.jsx'

export default function DepartmentCard({ department, onClick }) {
  const live = department.apps.filter((a) => a.url).length

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 to-slate-200 p-px text-left transition hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-brand-gradient opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex h-full flex-col rounded-[15px] bg-surface p-6">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-gradient shadow-lg shadow-brand-1/20">
          <Icon name={department.icon} className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-xl font-bold">{department.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{department.description}</p>
        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-slate-500">
            <span className="font-semibold text-slate-900">{department.apps.length}</span> AI tools
            {live < department.apps.length && <span> · {live} live</span>}
          </span>
          <span className="flex items-center gap-1 font-semibold text-brand-2 transition group-hover:gap-2">
            Open <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </button>
  )
}
