export default function Articles() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Articles</h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Liste complète des médicaments et consommables de votre officine.
        </p>
      </header>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
        <p>
          Cette section présentera prochainement la recherche avancée, les filtres par catégorie et la gestion des lots avec alertes personnalisables.
        </p>
      </div>
    </div>
  )
}
