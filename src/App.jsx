import { useEffect, useState } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import DepartmentCard from './components/DepartmentCard.jsx'
import AppCard from './components/AppCard.jsx'
import Icon from './components/Icon.jsx'
import { departments } from './data/departments.js'

// Department selection lives in the URL hash (#/compliance) so links are shareable
// and the browser back button works.
function useHashDepartment() {
  const read = () => window.location.hash.replace(/^#\/?/, '')
  const [id, setId] = useState(read)
  useEffect(() => {
    const onHash = () => setId(read())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const go = (next) => {
    window.location.hash = next ? `/${next}` : ''
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return [departments.find((d) => d.id === id), go]
}

export default function App() {
  const [active, go] = useHashDepartment()
  const totalApps = departments.reduce((n, d) => n + d.apps.length, 0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onHome={() => go(null)} />

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-15 blur-3xl" />
      </div>

      {active ? (
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <button onClick={() => go(null)} className="mb-8 flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" /> All departments
          </button>
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient shadow-lg shadow-brand-1/10">
              <Icon name={active.icon} className="h-8 w-8 text-bg" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold sm:text-4xl">{active.name}</h1>
              <p className="mt-1 text-neutral-400">{active.description}</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {active.apps.map((app) => (
              <AppCard key={app.name} app={app} department={active} />
            ))}
          </div>
        </main>
      ) : (
        <main>
          <section className="mx-auto max-w-5xl px-4 pt-20 pb-16 text-center sm:px-6 sm:pt-28">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300">
              <Sparkles className="h-4 w-4 text-brand-2" /> AI-powered workplace
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Every AI tool at <span className="text-brand-gradient">Nyati Group</span>, in one place
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
              Pick your department to open the dashboards, assistants and automation tools built for your team.
            </p>
            <div className="mt-10 flex justify-center gap-10 text-left">
              <div>
                <div className="text-3xl font-bold text-brand-gradient">{departments.length}</div>
                <div className="text-sm text-neutral-400">Departments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-gradient">{totalApps}</div>
                <div className="text-sm text-neutral-400">AI tools</div>
              </div>
            </div>
          </section>

          <section id="departments" className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-24 sm:px-6">
            <h2 className="mb-8 text-2xl font-bold">Departments</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {departments.map((d) => (
                <DepartmentCard key={d.id} department={d} onClick={() => go(d.id)} />
              ))}
            </div>
          </section>
        </main>
      )}

      <footer className="border-t border-white/5 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Nyati Group · AI Hub
      </footer>
    </div>
  )
}
