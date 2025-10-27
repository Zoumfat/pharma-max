import { useEffect, useMemo, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Articles from './pages/Articles'
import Fournisseurs from './pages/Fournisseurs'
import Emplacements from './pages/Emplacements'
import Rapports from './pages/Rapports'

const titles = {
  '/': 'Tableau de bord',
  '/articles': 'Articles',
  '/fournisseurs': 'Fournisseurs',
  '/emplacements': 'Emplacements',
  '/rapports': 'Rapports',
}

const subtitles = {
  '/': "Vue d’ensemble de votre inventaire pharmaceutique",
  '/articles': 'Gérez et consultez les articles disponibles',
  '/fournisseurs': 'Suivez vos partenaires et leurs livraisons',
  '/emplacements': 'Visualisez les zones de stockage et leurs statuts',
  '/rapports': 'Analysez les performances et les mouvements',
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false
  const stored = window.localStorage.getItem('pharma-max-theme')
  if (stored) {
    return stored === 'dark'
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)
  const location = useLocation()

  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return
    document.documentElement.classList.toggle('dark', isDarkMode)
    window.localStorage.setItem('pharma-max-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const { title, subtitle } = useMemo(() => {
    const pathname = location.pathname === '' ? '/' : location.pathname
    return {
      title: titles[pathname] ?? 'Pharma Max',
      subtitle: subtitles[pathname] ?? '',
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Navbar
            title={title}
            subtitle={subtitle}
            isDarkMode={isDarkMode}
            onToggleTheme={() => setIsDarkMode((prev) => !prev)}
          />
          <main className="flex-1 overflow-y-auto bg-slate-50 px-6 py-8 transition-colors duration-300 dark:bg-slate-900">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/fournisseurs" element={<Fournisseurs />} />
              <Route path="/emplacements" element={<Emplacements />} />
              <Route path="/rapports" element={<Rapports />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  )
}
