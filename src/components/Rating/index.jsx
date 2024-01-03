import pinkStar from './../../assets/FicheLogement/PinkStar.svg'
import greyStar from './../../assets/FicheLogement/GreyStar.svg'

function Rating({ ratingNote }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div className="star">
      {range.map((rangeElement) =>
        ratingNote >= rangeElement ? (
          <span key={rangeElement.toString()}>
            <img src={pinkStar} alt="étoile rose" />
          </span>
        ) : (
          <span key={rangeElement.toString()}>
            <img src={greyStar} alt="étoile grise" />
          </span>
        ),
      )}
    </div>
  )
}

export default Rating
