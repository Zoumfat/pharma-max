import { NavLink } from 'react-router-dom'
import {
  FileText,
  LayoutDashboard,
  MapPin,
  Package,
  Users,
} from 'lucide-react'

const navigation = [
  { name: 'Tableau de bord', to: '/', icon: LayoutDashboard },
  { name: 'Articles', to: '/articles', icon: Package },
  { name: 'Fournisseurs', to: '/fournisseurs', icon: Users },
  { name: 'Emplacements', to: '/emplacements', icon: MapPin },
  { name: 'Rapports', to: '/rapports', icon: FileText },
]

const wrapperClasses = [
  'relative hidden w-72 shrink-0 border-r border-slate-200 bg-white px-6 py-8',
  'transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80',
  'lg:flex lg:flex-col',
].join(' ')

const insightsClasses = [
  'mt-auto rounded-xl bg-slate-100 p-4 text-sm text-slate-600',
  'transition-colors duration-200 dark:bg-slate-900 dark:text-slate-300',
].join(' ')

function LogoMark() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-blue-500 text-sm font-semibold text-white shadow-sm">
      PM
    </span>
  )
}

export default function Sidebar() {
  return (
    <aside className={wrapperClasses}>
      <div className="flex items-center gap-3">
        <LogoMark />
        <div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Pharma Max</p>
          <span className="text-sm text-slate-500 dark:text-slate-400">Gestion d’inventaire</span>
        </div>
      </div>
      <nav className="mt-10 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary dark:hover:bg-primary/20 ${
                  isActive
                    ? 'bg-primary/10 text-primary dark:bg-primary/20'
                    : 'text-slate-500 dark:text-slate-400'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border text-slate-500 transition-colors duration-200 group-hover:border-transparent group-hover:bg-primary group-hover:text-white ${
                      isActive
                        ? 'border-primary/40 bg-primary/10 text-primary'
                        : 'border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  {item.name}
                </>
              )}
            </NavLink>
          )
        })}
      </nav>
      <div className={insightsClasses}>
        <p className="font-medium text-slate-800 dark:text-white">Performance</p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
          Suivez vos stocks en temps réel et anticipez les ruptures.
        </p>
      </div>
    </aside>
  )
}
