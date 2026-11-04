export default function Navbar({ onHome }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-lg">
      <div className="h-0.5 bg-brand-gradient" />
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <button onClick={onHome} className="flex items-center gap-3" aria-label="Nyati Group home">
          <img src="/logo.png" alt="Nyati Group" className="h-10 w-auto" />
          <span className="text-lg font-bold tracking-tight text-brand-1">Nyati Group</span>
        </button>
      </nav>
    </header>
  )
}
