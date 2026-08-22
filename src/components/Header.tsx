import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

const navItems = [
  { id: 'projects', label: '制作物' },
  { id: 'notes', label: '技術記録' },
  { id: 'about', label: 'About' },
]

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const handleNavClick = (id: string) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  return (
    <header className="site-header">
      <Link to="/" className="site-logo mono">
        Build Log
      </Link>

      <div className="site-header-right">
        <nav className="site-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link mono"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="theme-toggle mono"
          onClick={toggleTheme}
          aria-label="テーマを切り替える"
        >
          {theme === 'dark' ? '☀ light' : '🌙 dark'}
        </button>
      </div>
    </header>
  )
}

export default Header