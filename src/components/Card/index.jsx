import { Link } from 'react-router-dom'

function Card({ title, cover, id }) {
  return (
    <Link className="card" to={`/FicheLogement/${id}`}>
      <img src={cover} alt="logement" />
      <div className="card_title">
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default Card
