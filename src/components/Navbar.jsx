export default function Navbar({ onHome }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-bg/80 backdrop-blur-lg">
      <div className="h-0.5 bg-brand-gradient" />
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <button onClick={onHome} className="flex items-center gap-3" aria-label="Nyati Group AI Hub home">
          <img src="/logo.png" alt="Nyati Group" className="h-10 w-auto" />
          <span className="text-lg font-bold tracking-tight">
            Nyati Group <span className="text-brand-gradient">AI Hub</span>
          </span>
        </button>
      </nav>
    </header>
  )
}
