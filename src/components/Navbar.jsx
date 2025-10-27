import { Bell, Moon, Search, Sun } from 'lucide-react'

export default function Navbar({ title, subtitle, isDarkMode, onToggleTheme }) {
  return (
    <header className="flex flex-col gap-6 border-b border-slate-200 bg-white/80 px-6 py-6 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 transition-colors dark:text-white lg:text-3xl">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-500 transition-colors dark:text-slate-400">{subtitle}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            aria-label="Basculer le thème"
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:text-primary dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition-colors dark:border-slate-700 dark:bg-slate-800">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="text-sm font-semibold">AM</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Alex Martin</p>
              <span className="text-xs text-slate-500 dark:text-slate-400">Gestionnaire</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-96">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Rechercher un article, un lot, un fournisseur..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-600 outline-none transition-colors placeholder:text-slate-400 focus:border-primary focus:bg-white focus:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:focus:bg-slate-900"
          />
        </div>
        <div className="flex w-full flex-wrap items-center justify-start gap-3 md:w-auto">
          <span className="flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
            Inventaire à jour
          </span>
          <span className="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-100 px-4 py-2 text-xs font-medium text-amber-600 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-300">
            Dernière synchronisation : il y a 5 min
          </span>
        </div>
      </div>
    </header>
  )
}
