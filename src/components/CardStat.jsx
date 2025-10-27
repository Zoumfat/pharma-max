export default function CardStat({ icon: Icon, label, value, subtext }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
          <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">{subtext}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <span className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
    </div>
  )
}
