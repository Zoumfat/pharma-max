import { AlertTriangle } from 'lucide-react'

export default function StockAlert({ alerts }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 transition-colors duration-300 dark:border-amber-400/30 dark:bg-amber-400/10">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-400/20 dark:text-amber-300">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-amber-700 dark:text-amber-200">Alertes de Stock</h2>
          <p className="text-sm text-amber-600/80 dark:text-amber-200/70">
            Articles nécessitant une attention immédiate
          </p>
        </div>
      </div>
      <ul className="mt-6 space-y-4">
        {alerts.map((item) => (
          <li
            key={item.nom}
            className="flex items-center justify-between rounded-xl border border-amber-100 bg-white/70 px-4 py-3 text-sm text-amber-700 shadow-sm transition-colors duration-300 dark:border-amber-400/20 dark:bg-transparent dark:text-amber-100"
          >
            <div>
              <p className="font-medium">{item.nom}</p>
              <span className="text-xs text-amber-500/80 dark:text-amber-200/70">Stock critique</span>
            </div>
            <span className="text-sm font-semibold">{item.stock} unités</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
