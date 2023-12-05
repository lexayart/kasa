import pinkStar from './../../assets/FicheLogement/PinkStar.svg'
import greyStar from './../../assets/FicheLogement/GreyStar.svg'
import styled from 'styled-components'

const StarWrapper = styled.div`
  display: flex;

  span {
    height: 36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    img {
      height: 24px;
      width: auto;
    }
  }
`

function Rating() {
  const rating = 1
  const range = [1, 2, 3, 4, 5]

  return (
    <StarWrapper>
      {range.map((rangeElement) =>
        rating >= rangeElement ? (
          <span>
            <img
              key={rangeElement.toString()}
              src={pinkStar}
              alt="étoile rose"
            />
          </span>
        ) : (
          <span>
            <img
              key={rangeElement.toString()}
              src={greyStar}
              alt="étoile grise"
            />
          </span>
        ),
      )}
    </StarWrapper>
  )
}

export default Rating
