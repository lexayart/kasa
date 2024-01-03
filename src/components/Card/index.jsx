function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt="logement" />
      <div className="card_title">
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Card
