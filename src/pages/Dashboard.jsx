import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'
import { MapPin, Package, TrendingUp, Users } from 'lucide-react'
import CardStat from '../components/CardStat'
import StockAlert from '../components/StockAlert'

const statCards = [
  {
    label: 'Total Articles',
    value: '2',
    subtext: 'Articles en stock',
    icon: Package,
  },
  {
    label: 'Fournisseurs',
    value: '2',
    subtext: 'Fournisseurs actifs',
    icon: Users,
  },
  {
    label: 'Emplacements',
    value: '2',
    subtext: 'Zones de stockage',
    icon: MapPin,
  },
  {
    label: 'Valeur Totale',
    value: '757 €',
    subtext: "Valeur de l’inventaire",
    icon: TrendingUp,
  },
]

const chartData = [
  { mois: 'Jan', stock: 420, commandes: 12 },
  { mois: 'Fév', stock: 460, commandes: 14 },
  { mois: 'Mar', stock: 510, commandes: 10 },
  { mois: 'Avr', stock: 495, commandes: 9 },
  { mois: 'Mai', stock: 530, commandes: 15 },
  { mois: 'Juin', stock: 560, commandes: 11 },
]

const alerts = [{ nom: 'Ibuprofène 200mg', stock: 12 }]

const quickStats = [
  { label: 'Articles en stock', value: '1', progress: 65, tone: 'bg-primary' },
  { label: 'Stock bas', value: '1', progress: 45, tone: 'bg-amber-500' },
  { label: 'Ruptures', value: '0', progress: 10, tone: 'bg-rose-500' },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => (
          <CardStat key={card.label} {...card} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Tendance des stocks</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Survol de la disponibilité et des commandes sur 6 mois
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              30 derniers jours
            </span>
          </div>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorCommandes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 8" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="mois" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                <Tooltip
                  cursor={{ stroke: '#94A3B8', strokeDasharray: '4 4' }}
                  contentStyle={{
                    backgroundColor: 'rgb(15 23 42 / 0.9)',
                    borderRadius: '12px',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    color: 'white',
                  }}
                />
                <Area type="monotone" dataKey="stock" stroke="#2563EB" strokeWidth={3} fill="url(#colorStock)" />
                <Area type="monotone" dataKey="commandes" stroke="#F97316" strokeWidth={3} fill="url(#colorCommandes)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section>
          <StockAlert alerts={alerts} />
        </section>
      </div>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Activité récente</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Suivi des mouvements d’articles et de leurs emplacements.
          </p>
          <div className="mt-6 space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600 transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item === 1 ? 'RX' : item === 2 ? 'OTC' : 'LAB'}
                  </span>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">
                      {item === 1
                        ? 'Réception de lot - Paracétamol'
                        : item === 2
                        ? 'Transfert - Ibuprofène'
                        : 'Contrôle qualité - Laboratoire'}
                    </p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {item === 1 ? 'Fournisseur SantéPlus' : item === 2 ? 'Déplacement vers Rayon A2' : 'Résultat conforme'}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 dark:text-slate-500">{item === 1 ? 'Il y a 2 h' : item === 2 ? 'Il y a 5 h' : 'Hier'}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Statistiques</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Indicateurs clés de l’inventaire.
          </p>
          <ul className="mt-6 space-y-5">
            {quickStats.map((stat) => (
              <li key={stat.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-200">{stat.label}</span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">{stat.value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className={`h-full rounded-full ${stat.tone}`}
                    style={{ width: `${stat.progress}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
