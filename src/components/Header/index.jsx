import { Link, useLocation } from 'react-router-dom'
import logo from './../../assets/LOGO.svg'

function Header() {
  const urlLocation = useLocation()

  return (
    <div className="header">
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <Link
          to="/"
          className={`header_link ${urlLocation.pathname === '/' && 'active'}`}
        >
          Accueil
        </Link>
        <Link
          to="/APropos"
          className={`header_link ${
            urlLocation.pathname === '/APropos' && 'active'
          }`}
        >
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
