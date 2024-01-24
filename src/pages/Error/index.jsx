import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error_link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
